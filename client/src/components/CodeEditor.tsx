import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CodeOutput from './CodeOutput';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-jsx';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/themes/prism-tomorrow.css';
import { Link } from 'react-router-dom';

interface CodeEditorProps {
  defaultCode: string;
  filename?: string;
  readOnly?: boolean;
  onCodeChange?: (code: string) => void;
  height?: string | number;
}

// Add support for JSX highlighting
languages.jsx = languages.jsx || languages.js;
languages.tsx = languages.tsx || languages.typescript;

// Define styles for the code editor
const editorStyles = {
  editor: {
    fontFamily: '"Fira Code", "Cascadia Code", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: 14,
    lineHeight: 1.5,
    backgroundColor: '#1e1e1e', // VS Code-like dark background
    borderRadius: 4,
    counterReset: 'line',
  },
  lineNumber: {
    textAlign: 'right' as const,
    color: '#6272a4',
    paddingRight: 8,
    fontFamily: '"Fira Code", monospace',
    fontSize: 12,
  }
};

// Custom highlighting function to include line numbers
const highlightWithLineNumbers = (code: string, language: string) => {
  const grammar = languages[language] || languages.javascript;
  const highlighted = highlight(code, grammar, language);
  
  return highlighted
    .split('\n')
    .map((line, i) => {
      const lineNumber = i + 1;
      return `<div class="editor-line">
        <span class="line-number">${lineNumber}</span>
        <span class="line-content">${line || ' '}</span>
      </div>`;
    })
    .join('');
};

const CodeEditor: React.FC<CodeEditorProps> = ({
  defaultCode,
  filename = 'App.js',
  readOnly = false,
  onCodeChange,
  height = 400,
}) => {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState<React.ReactNode | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Determine language for syntax highlighting based on filename
  const getLanguage = () => {
    if (filename.endsWith('.tsx')) return 'tsx';
    if (filename.endsWith('.ts')) return 'typescript';
    if (filename.endsWith('.jsx')) return 'jsx';
    return 'javascript';
  };
  
  const handleRun = () => {
    setIsRunning(true);
    setError(null);
    
    try {
      // For JSX/TSX files, try to render the component output
      if (filename.endsWith('.jsx') || filename.endsWith('.tsx') || filename.endsWith('.js') || filename.endsWith('.ts')) {
        // Try to find and render React components or elements
        const jsxOutputRender = () => {
          try {
            // Extract function components
            const functionComponentMatch = code.match(/function\s+(\w+)\s*\([^)]*\)\s*{[\s\S]*?return\s*\(\s*([\s\S]*?)\s*\);/);
            const arrowComponentMatch = code.match(/const\s+(\w+)\s*=\s*(?:\([^)]*\)|[^=]*)\s*=>\s*{[\s\S]*?return\s*\(\s*([\s\S]*?)\s*\);/);
            const simpleArrowMatch = code.match(/const\s+(\w+)\s*=\s*(?:\([^)]*\)|[^=]*)\s*=>\s*\(\s*([\s\S]*?)\s*\);/);
            const returnMatch = code.match(/return\s*\(\s*([\s\S]*?)\s*\);/);
            
            let componentName = "";
            let jsxContent = "";
            
            if (functionComponentMatch) {
              componentName = functionComponentMatch[1];
              jsxContent = functionComponentMatch[2];
            } else if (arrowComponentMatch) {
              componentName = arrowComponentMatch[1];
              jsxContent = arrowComponentMatch[2];
            } else if (simpleArrowMatch) {
              componentName = simpleArrowMatch[1];
              jsxContent = simpleArrowMatch[2];
            } else if (returnMatch) {
              jsxContent = returnMatch[1];
            }
            
            if (jsxContent) {
              // Extract variables used in JSX
              const variables: { [key: string]: string | number } = {};
              const varRegex = /const\s+(\w+)\s*=\s*(['"`])(.*?)\2|const\s+(\w+)\s*=\s*(\d+)|let\s+(\w+)\s*=\s*(['"`])(.*?)\7|let\s+(\w+)\s*=\s*(\d+)/g;
              let varMatch;
              
              while ((varMatch = varRegex.exec(code)) !== null) {
                const name = varMatch[1] || varMatch[4] || varMatch[6] || varMatch[9];
                const value = varMatch[3] || varMatch[5] || varMatch[8] || varMatch[10];
                if (name && value) {
                  variables[name] = value;
                }
              }
              
              // Process JSX to replace variables with their values
              let processedJsx = jsxContent;
              Object.entries(variables).forEach(([name, value]) => {
                const regex = new RegExp(`{${name}}`, 'g');
                processedJsx = processedJsx.replace(regex, String(value));
              });
              
              // Create DOM output
              const domPreview = document.createElement('div');
              domPreview.innerHTML = processedJsx
                .replace(/<([a-z][a-z0-9]*)(.*?)\/>/gi, '<$1$2></$1>') // Convert self-closing tags
                .replace(/className=/g, 'class='); // Replace React's className with class
              
              return (
                <div className="jsx-output">
                  {componentName && (
                    <div className="component-info" style={{ marginBottom: '10px' }}>
                      <h3 style={{ margin: '0 0 8px 0' }}>Component: {componentName}</h3>
                    </div>
                  )}
                  <div className="jsx-preview" style={{ 
                    padding: '16px', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px',
                    backgroundColor: 'white',
                    color: 'black'
                  }}>
                    <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>DOM Preview:</h4>
                    <div style={{ padding: '10px', border: '1px dashed #ccc', borderRadius: '4px' }}>
                      <div dangerouslySetInnerHTML={{ __html: processedJsx }} />
                    </div>
                    
                    <h4 style={{ margin: '16px 0 10px 0', color: '#333' }}>JSX Source:</h4>
                    <pre style={{ 
                      backgroundColor: '#f5f5f5', 
                      padding: '10px', 
                      borderRadius: '4px',
                      overflow: 'auto',
                      fontSize: '13px',
                      margin: 0
                    }}>
                      {jsxContent}
                    </pre>
                  </div>
                  
                  {Object.keys(variables).length > 0 && (
                    <div className="variable-list" style={{ marginTop: '16px' }}>
                      <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>Variables:</h4>
                      <ul style={{ 
                        backgroundColor: '#f5f5f5', 
                        padding: '10px 10px 10px 30px', 
                        borderRadius: '4px',
                        margin: 0
                      }}>
                        {Object.entries(variables).map(([name, value], i) => (
                          <li key={i} style={{ marginBottom: '4px', color: '#555' }}>
                            <strong>{name}:</strong> {String(value)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            }
          } catch (err) {
            return null;
          }
          return null;
        };
        
        // Try to render JSX first
        const jsxOutput = jsxOutputRender();
        if (jsxOutput) {
          setOutput(jsxOutput);
        } else {
          // Handle console.log statements
          const consoleLogMatch = code.match(/console\.log\((.*?)\)/g);
          
          if (consoleLogMatch) {
            const logStatements = consoleLogMatch.map(match => {
              const contentMatch = match.match(/console\.log\((.*?)\)/);
              return contentMatch ? contentMatch[1].replace(/['"`]/g, '') : '';
            });
            
            setOutput(
              <div className="console-output" style={{ fontFamily: 'monospace', backgroundColor: '#282c34', color: '#abb2bf', padding: '12px', borderRadius: '4px' }}>
                <div style={{ borderBottom: '1px solid #555', paddingBottom: '8px', marginBottom: '12px', color: '#e6e6e6' }}>
                  Console Output
                </div>
                {logStatements.map((statement, index) => (
                  <div key={index} style={{ marginBottom: '8px' }}>
                    <span style={{ color: '#6c757d' }}>{'> '}</span>
                    <span style={{ color: '#98c379' }}>{statement}</span>
                  </div>
                ))}
              </div>
            );
          } else {
            // Generic success message for other code
            setOutput(
              <div className="general-output" style={{ padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                <p>Code executed successfully. No JSX output or console.log statements found.</p>
                <p>This is a simulated environment for demonstrating JSX/TSX rendering.</p>
              </div>
            );
          }
        }
      }
    } catch (err) {
      setError(`Error executing code: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsRunning(false);
    }
  };

  useEffect(() => {
    setCode(defaultCode);
    // Auto-run code after a short delay
    const timer = setTimeout(() => {
      handleRun();
    }, 500);
    
    return () => clearTimeout(timer);
  }, [defaultCode]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    onCodeChange?.(newCode);
  };

  const resetCode = () => {
    setCode(defaultCode);
    onCodeChange?.(defaultCode);
    setTimeout(() => {
      handleRun();
    }, 100);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper 
        variant="outlined" 
        elevation={0}
        sx={{ 
          overflow: 'hidden',
          borderColor: 'var(--border-color)',
          borderRadius: '0.75rem',
          mb: 2,
          '&:hover': {
            boxShadow: '0 0 0 2px rgba(97, 218, 251, 0.2)'
          }
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            px: 2,
            py: 1,
            borderBottom: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-secondary)'
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 500, display: 'flex', alignItems: 'center' }}>
            <span style={{ 
              width: 12, 
              height: 12, 
              borderRadius: '50%', 
              display: 'inline-block',
              backgroundColor: filename.endsWith('.jsx') || filename.endsWith('.js') ? '#61dafb' : 
                              filename.endsWith('.tsx') || filename.endsWith('.ts') ? '#007acc' : '#f1e05a',
              marginRight: 8 
            }}></span>
            {filename}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button 
              size="small" 
              onClick={resetCode}
              startIcon={<RefreshIcon />}
              sx={{ 
                bgcolor: 'rgba(97, 218, 251, 1)', 
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(97, 218, 251, 0.8)',
                },
                minWidth: 0,
                px: 1
              }}
            >
              Reset
            </Button>
            <Button 
              className="code-editor-run-button"
              size="small" 
              onClick={handleRun}
              startIcon={<PlayArrowIcon />}
              disabled={isRunning}
              sx={{ 
                bgcolor: 'rgba(76, 175, 80, 1)', 
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(76, 175, 80, 0.8)',
                },
                minWidth: 0,
                px: 1
              }}
            >
              Run
            </Button>
          </Box>
        </Box>
        
        <Box 
          sx={{ 
            height,
            overflow: 'auto',
            backgroundColor: '#1e1e1e',
            '&::-webkit-scrollbar': {
              width: '8px',
              height: '8px'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '4px'
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'rgba(0, 0, 0, 0.1)'
            },
            // Add custom styling for line numbers
            '& .editor-line': {
              display: 'flex',
              width: '100%',
              lineHeight: '1.5',
            },
            '& .line-number': {
              color: '#6272a4',
              userSelect: 'none',
              paddingRight: '8px',
              textAlign: 'right',
              minWidth: '40px',
              display: 'inline-block',
              opacity: 0.7,
            },
            '& .line-content': {
              flex: 1,
            }
          }}
        >
          <Editor
            value={code}
            onValueChange={handleCodeChange}
            highlight={code => highlightWithLineNumbers(code, getLanguage())}
            insertSpaces={true}
            tabSize={2}
            padding={15}
            readOnly={readOnly}
            style={editorStyles.editor}
            className="code-editor"
            textareaId="codeArea"
            textareaClassName="code-editor-textarea"
          />
        </Box>
      </Paper>
      
      <Paper 
        variant="outlined"
        elevation={0}
        sx={{ 
          overflow: 'hidden',
          borderColor: 'var(--border-color)',
          borderRadius: '0.75rem',
        }}
      >
        <Box 
          sx={{ 
            px: 2,
            py: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-secondary)'
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 500, display: 'flex', alignItems: 'center' }}>
            <span style={{ 
              width: 12, 
              height: 12, 
              borderRadius: '50%', 
              display: 'inline-block',
              backgroundColor: '#4caf50',
              marginRight: 8 
            }}></span>
            Output
          </Typography>
          <p  style={{fontSize: "12px" , fontWeight: 500 }}>
            this is a not simulated environment for demonstrating JSX/TSX rendering. please use the <Link style={{color:"#4caf50"}} to="https://vscode.dev/" > 👉 code editor 👈 </Link> for real time code execution.
          </p>
          {/* <Link style={{color:"#4caf50"}} to="https://vscode.dev/" >code editor </Link>
          </Typography> */}
        </Box>
        
        <Box 
          sx={{ 
            p: 4, 
            minHeight: '100px',
            backgroundColor: 'var(--bg-primary)',
            borderTop: '4px solid #1e1e1e'
          }}
        >
          {error ? (
            <Box sx={{ 
              whiteSpace: 'pre-wrap', 
              fontFamily: 'monospace',
              color: '#e57373',
              padding: '12px',
              backgroundColor: 'rgba(229, 115, 115, 0.1)',
              borderRadius: '4px',
              border: '1px solid rgba(229, 115, 115, 0.3)'
            }}>
              {error}
            </Box>
          ) : (
            <CodeOutput>
              {output}
            </CodeOutput>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default CodeEditor;