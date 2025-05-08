import React, { useState, useMemo } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Chip, 
  Button, 
  TextField,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Tab,
  Tabs,
  Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';
import HelpIcon from '@mui/icons-material/Help';
import FilterListIcon from '@mui/icons-material/FilterList';
import { interviewQuestionsData } from '../data/interviewQuestionsData';
import CodeEditor from '../components/CodeEditor';
import { motion } from 'framer-motion';

type Difficulty = 'All' | 'Basic' | 'Intermediate' | 'Advanced';
type Category = 'All' | 'Concepts' | 'Hooks' | 'Performance' | 'State Management' | 'Tools';

const InterviewPrep = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('All');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState<'questions' | 'study'>('questions');
  
  const handleExpandQuestion = (id: string) => {
    const newExpandedId = expandedId === id ? null : id;
    setExpandedId(newExpandedId);
    
    // Auto-run code example when the question is expanded
    if (newExpandedId) {
      // Find the question
      const question = interviewQuestionsData.find(q => q.id === newExpandedId);
      
      // If it has a code example, we'll simulate a run after a short delay
      if (question?.codeExample) {
        setTimeout(() => {
          // Find all Run buttons in code editors within the expanded accordion
          const runButtons = document.querySelectorAll(`.question-${newExpandedId} .code-editor-run-button`);
          runButtons.forEach(button => {
            if (button instanceof HTMLButtonElement) {
              button.click();
            }
          });
        }, 500);
      }
    }
  };
  
  const filteredQuestions = useMemo(() => {
    return interviewQuestionsData.filter(q => {
      // Filter by search term
      const searchMatch = 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (q.hindiQuestion && q.hindiQuestion.toLowerCase().includes(searchTerm.toLowerCase())) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter by difficulty
      const difficultyMatch = selectedDifficulty === 'All' || q.difficulty === selectedDifficulty;
      
      // Filter by category
      const categoryMatch = selectedCategory === 'All' || q.category === selectedCategory;
      
      return searchMatch && difficultyMatch && categoryMatch;
    });
  }, [searchTerm, selectedDifficulty, selectedCategory]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };
  
  const difficultyColors = {
    Basic: 'success',
    Intermediate: 'warning',
    Advanced: 'error'
  };
  
  const categoryColors = {
    Concepts: 'primary',
    Hooks: 'secondary',
    Performance: 'info',
    'State Management': 'success',
    Tools: 'warning'
  };
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            React Interview Preparation
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" paragraph>
            Top React interview questions with detailed answers and code examples - perfect for your next job interview
          </Typography>
          
          <Box sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={currentTab}
              onChange={(_, newValue) => setCurrentTab(newValue)}
              aria-label="interview prep tabs"
            >
              <Tab 
                label="Interview Questions" 
                value="questions" 
                icon={<HelpIcon />} 
                iconPosition="start"
              />
              <Tab 
                label="Study Guide" 
                value="study" 
                icon={<CodeIcon />} 
                iconPosition="start"
              />
            </Tabs>
          </Box>
        </motion.div>
        
        {currentTab === 'questions' && (
          <>
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                  }}
                  size="small"
                  sx={{ flexGrow: 1 }}
                />
                
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Box>
                    <Typography variant="caption" display="block" gutterBottom>
                      Difficulty
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {(['All', 'Basic', 'Intermediate', 'Advanced'] as const).map((difficulty) => (
                        <Chip
                          key={difficulty}
                          label={difficulty}
                          size="small"
                          onClick={() => setSelectedDifficulty(difficulty)}
                          color={selectedDifficulty === difficulty ? 
                            (difficulty === 'All' ? 'primary' : difficultyColors[difficulty as keyof typeof difficultyColors] as any) 
                            : 'default'}
                          variant={selectedDifficulty === difficulty ? 'filled' : 'outlined'}
                        />
                      ))}
                    </Box>
                  </Box>
                  
                  <Box>
                    <Typography variant="caption" display="block" gutterBottom>
                      Category
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {(['All', 'Concepts', 'Hooks', 'Performance', 'State Management', 'Tools'] as const).map((category) => (
                        <Chip
                          key={category}
                          label={category}
                          size="small"
                          onClick={() => setSelectedCategory(category)}
                          color={selectedCategory === category ? 
                            (category === 'All' ? 'primary' : categoryColors[category as keyof typeof categoryColors] as any) 
                            : 'default'}
                          variant={selectedCategory === category ? 'filled' : 'outlined'}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1">
                  {filteredQuestions.length} questions found
                </Typography>
                <Button 
                  startIcon={<FilterListIcon />} 
                  size="small"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedDifficulty('All');
                    setSearchTerm('');
                  }}
                >
                  Reset Filters
                </Button>
              </Box>
            </motion.div>
            
            {filteredQuestions.map((question) => (
              <motion.div key={question.id} variants={itemVariants}>
                <Accordion 
                  className={`question-${question.id}`}
                  expanded={expandedId === question.id}
                  onChange={() => handleExpandQuestion(question.id)}
                  sx={{ 
                    mb: 2, 
                    borderLeft: '3px solid',
                    borderColor: question.difficulty === 'Basic' ? 'success.main' : 
                                question.difficulty === 'Intermediate' ? 'warning.main' : 'error.main',
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {question.question}
                      </Typography>
                      {question.hindiQuestion && (
                        <Typography variant="body2" color="textSecondary">
                          {question.hindiQuestion}
                        </Typography>
                      )}
                      <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                        <Chip 
                          size="small" 
                          label={question.difficulty} 
                          color={difficultyColors[question.difficulty] as any}
                        />
                        <Chip 
                          size="small" 
                          label={question.category} 
                          color={categoryColors[question.category] as any}
                        />
                        {question.codeExample && (
                          <Chip 
                            size="small" 
                            icon={<CodeIcon />} 
                            label="Code Example" 
                            variant="outlined"
                          />
                        )}
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography paragraph>
                      {question.answer}
                    </Typography>
                    
                    {question.codeExample && (
                      <Box sx={{ mt: 2, mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Code Example:
                        </Typography>
                        <Box sx={{ borderRadius: 1, overflow: 'hidden' }}>
                          <CodeEditor 
                            defaultCode={question.codeExample} 
                            readOnly={true}
                            height={220}
                          />
                        </Box>
                      </Box>
                    )}
                    
                    {question.followUpQuestions && question.followUpQuestions.length > 0 && (
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Follow-up Questions:
                        </Typography>
                        <ul>
                          {question.followUpQuestions.map((fq, index) => (
                            <li key={index}>
                              <Typography variant="body2">{fq}</Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>
                    )}
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </>
        )}
        
        {currentTab === 'study' && (
          <motion.div variants={itemVariants}>
            {/* Core React Concepts */}
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                  Core React Concepts
                </Typography>
                <Typography paragraph>
                  React ki fundamental concepts ko samajhna interview ke liye bahut important hai. Yahan main topics hain:
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                  {/* React Fundamentals */}
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      1. React Fundamentals
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      <li>
                        <Typography><strong>Virtual DOM:</strong> React virtual DOM use karta hai real DOM se faster updates ke liye</Typography>
                      </li>
                      <li>
                        <Typography><strong>JSX:</strong> JavaScript extension jo HTML-like syntax provide karta hai</Typography>
                      </li>
                      <li>
                        <Typography><strong>Components:</strong> React UI building blocks - Functional ya Class based</Typography>
                      </li>
                      <li>
                        <Typography><strong>Props:</strong> Components ke beech data pass karne ka way</Typography>
                      </li>
                      <li>
                        <Typography><strong>State:</strong> Component ka internal data store jo UI ko control karta hai</Typography>
                      </li>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <CodeEditor
                        defaultCode={`import React, { useState } from 'react';

// Basic React Component Example
function Counter() {
  // State declaration
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
                        readOnly={true}
                        height={200}
                      />
                    </Box>
                  </Paper>
                  
                  {/* React Hooks */}
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      2. React Hooks
                    </Typography>
                    <Typography paragraph>
                      Hooks functional components mein state aur lifecycle features add karne ki allow karte hain:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      <li>
                        <Typography><strong>useState:</strong> Component mein state add karta hai</Typography>
                      </li>
                      <li>
                        <Typography><strong>useEffect:</strong> Side effects handle karta hai (data fetching, subscriptions)</Typography>
                      </li>
                      <li>
                        <Typography><strong>useContext:</strong> Context API se values consume karne ke liye</Typography>
                      </li>
                      <li>
                        <Typography><strong>useReducer:</strong> Complex state logic ke liye useState ka alternative</Typography>
                      </li>
                      <li>
                        <Typography><strong>useCallback, useMemo:</strong> Performance optimization ke liye</Typography>
                      </li>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <CodeEditor
                        defaultCode={`import React, { useState, useEffect } from 'react';

function DataFetchingExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Side effect: data fetching
    async function fetchData() {
      try {
        setLoading(true);
        // Simulate API call
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
    
    // Cleanup function
    return () => {
      // Cancel any pending requests
    };
  }, []); // Empty dependency array - runs once on mount
  
  if (loading) return <p>Loading...</p>;
  
  return (
    <div>
      <h1>Data Fetching Example</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}`}
                        readOnly={true}
                        height={380}
                      />
                    </Box>
                  </Paper>
                  
                  {/* Component Lifecycle */}
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      3. Component Lifecycle
                    </Typography>
                    <Typography paragraph>
                      React components ke 3 main lifecycle phases hain:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      <li>
                        <Typography><strong>Mounting:</strong> Component DOM mein insert hota hai</Typography>
                      </li>
                      <li>
                        <Typography><strong>Updating:</strong> Component re-render hota hai jab props ya state change hoti hai</Typography>
                      </li>
                      <li>
                        <Typography><strong>Unmounting:</strong> Component DOM se remove hota hai</Typography>
                      </li>
                    </Box>
                    <Typography paragraph sx={{ mt: 2 }}>
                      Class components mein explicit lifecycle methods hoti hain, functional components mein useEffect hook ke through handle kiya jata hai.
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <CodeEditor
                        defaultCode={`import React, { useEffect } from 'react';

function LifecycleExample() {
  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log('Component mounted or updated');
    
    // Similar to componentWillUnmount
    return () => {
      console.log('Component will unmount');
    };
  });
  
  // Only on mount (componentDidMount)
  useEffect(() => {
    console.log('Component mounted');
    
    return () => {
      console.log('Cleanup on unmount');
    };
  }, []);
  
  // Only when dependency changes
  useEffect(() => {
    console.log('Count changed');
  }, [count]); // This would need count to be defined

  return <div>Lifecycle Example</div>;
}`}
                        readOnly={true}
                        height={310}
                      />
                    </Box>
                  </Paper>
                </Box>
              </CardContent>
            </Card>
            
            {/* Advanced Topics */}
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                  Advanced Topics
                </Typography>
                <Typography paragraph>
                  Senior level positions ke interviews mein in advanced topics par questions puche jate hain:
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                  {/* State Management */}
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      1. State Management
                    </Typography>
                    <Typography paragraph>
                      Complex applications mein state management ke liye different approaches:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      <li>
                        <Typography><strong>Context API:</strong> Prop drilling avoid karne ke liye built-in solution</Typography>
                      </li>
                      <li>
                        <Typography><strong>Redux:</strong> Predictable state container with centralized store</Typography>
                      </li>
                      <li>
                        <Typography><strong>Zustand/Recoil/Jotai:</strong> Modern lightweight alternatives</Typography>
                      </li>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <CodeEditor
                        defaultCode={`// Context API Example
import React, { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer component
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
      }}
    >
      Toggle Theme
    </button>
  );
}

// Usage
function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Context API Example</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}`}
                        readOnly={true}
                        height={360}
                      />
                    </Box>
                  </Paper>
                  
                  {/* Performance Optimization */}
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      2. Performance Optimization
                    </Typography>
                    <Typography paragraph>
                      React applications ko optimize karne ke techniques:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      <li>
                        <Typography><strong>React.memo:</strong> Component memoization</Typography>
                      </li>
                      <li>
                        <Typography><strong>useMemo:</strong> Expensive calculations memoize karne ke liye</Typography>
                      </li>
                      <li>
                        <Typography><strong>useCallback:</strong> Functions ko memoize karna</Typography>
                      </li>
                      <li>
                        <Typography><strong>Code Splitting:</strong> React.lazy() and Suspense</Typography>
                      </li>
                      <li>
                        <Typography><strong>Virtualization:</strong> Large lists render karne ke liye</Typography>
                      </li>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <CodeEditor
                        defaultCode={`import React, { useState, useMemo, useCallback } from 'react';

function ExpensiveCalculationExample({ items }) {
  const [count, setCount] = useState(0);
  
  // Without memoization - will recalculate on every render
  // const expensiveResult = calculateExpensiveValue(items);
  
  // With useMemo - only recalculates when items change
  const expensiveResult = useMemo(() => {
    console.log('Calculating expensive result...');
    return items.reduce((total, item) => total + item.value, 0);
  }, [items]);
  
  // Without useCallback - creates new function reference on every render
  // const handleClick = () => setCount(count + 1);
  
  // With useCallback - maintains same function reference
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);
  
  return (
    <div>
      <h2>Expensive Calculation: {expensiveResult}</h2>
      <h3>Counter: {count}</h3>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

// Using React.memo to prevent unnecessary renders
const MemoizedChild = React.memo(function Child({ name }) {
  console.log('Child rendered');
  return <div>Hello, {name}!</div>;
});`}
                        readOnly={true}
                        height={350}
                      />
                    </Box>
                  </Paper>
                  
                  {/* Modern React Patterns */}
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      3. Modern React Patterns
                    </Typography>
                    <Typography paragraph>
                      Modern React development mein common patterns:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      <li>
                        <Typography><strong>Custom Hooks:</strong> Reusable logic extract karna</Typography>
                      </li>
                      <li>
                        <Typography><strong>Compound Components:</strong> Related components ka group banane ke liye</Typography>
                      </li>
                      <li>
                        <Typography><strong>Render Props:</strong> Component composition ke liye reusable logic</Typography>
                      </li>
                      <li>
                        <Typography><strong>Higher-Order Components (HOCs):</strong> Component logic reuse karne ke liye</Typography>
                      </li>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <CodeEditor
                        defaultCode={`// Custom Hook Example
import { useState, useEffect } from 'react';

// Custom hook for window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowSize;
}

// Usage
function ResponsiveComponent() {
  const { width, height } = useWindowSize();
  
  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
      {width < 768 ? (
        <p>Mobile view</p>
      ) : (
        <p>Desktop view</p>
      )}
    </div>
  );
}`}
                        readOnly={true}
                        height={350}
                      />
                    </Box>
                  </Paper>
                </Box>
              </CardContent>
            </Card>
            
            {/* Interview Preparation Tips */}
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                  Interview Preparation Tips
                </Typography>
                
                <Typography paragraph>
                  React interviews mein success ke liye practical tips:
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      1. Technical Practice
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      <li>
                        <Typography><strong>Mini-projects banaiye:</strong> Todo app, weather app, small CRUD applications</Typography>
                      </li>
                      <li>
                        <Typography><strong>Coding challenges practice kijiye:</strong> LeetCode, HackerRank, CodeSignal</Typography>
                      </li>
                      <li>
                        <Typography><strong>Open source contributions:</strong> Real-world experience ke liye</Typography>
                      </li>
                    </Box>
                  </Paper>
                  
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      2. System Design Practice
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      <li>
                        <Typography><strong>Component architecture:</strong> Large applications ko components mein divide karna</Typography>
                      </li>
                      <li>
                        <Typography><strong>State management strategy:</strong> Different options ka comparison (Context vs Redux vs others)</Typography>
                      </li>
                      <li>
                        <Typography><strong>Performance optimization:</strong> Real-world scenarios mein optimization techniques</Typography>
                      </li>
                    </Box>
                  </Paper>
                  
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      3. Mock Interviews
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      <li>
                        <Typography><strong>Peer code reviews:</strong> Dusre developers ke saath practice</Typography>
                      </li>
                      <li>
                        <Typography><strong>Mock technical interviews:</strong> Platforms like Pramp, interviewing.io</Typography>
                      </li>
                      <li>
                        <Typography><strong>Code walkthroughs:</strong> Apne projects ka walkthrough practice kijiye</Typography>
                      </li>
                    </Box>
                  </Paper>
                  
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      4. Common Interview Questions
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      <li>
                        <Typography>"Virtual DOM kya hai aur ye kaise kaam karta hai?"</Typography>
                      </li>
                      <li>
                        <Typography>"React mein keys ka kya importance hai?"</Typography>
                      </li>
                      <li>
                        <Typography>"useEffect aur useLayoutEffect mein kya difference hai?"</Typography>
                      </li>
                      <li>
                        <Typography>"React mein performance kaise optimize karein?"</Typography>
                      </li>
                      <li>
                        <Typography>"Class components vs Functional components?"</Typography>
                      </li>
                    </Box>
                  </Paper>
                </Box>
                
                <Box sx={{ mt: 4, p: 3, bgcolor: 'rgba(97, 218, 251, 0.1)', borderRadius: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Interview Day Tips:
                  </Typography>
                  <Typography variant="body2" paragraph>
                    1. Apne code ko explain karte waqt clear communication rakhein
                  </Typography>
                  <Typography variant="body2" paragraph>
                    2. Problem solving ke approach ko step-by-step explain karein
                  </Typography>
                  <Typography variant="body2" paragraph>
                    3. Edge cases ke baare mein sochein aur unhe address karein
                  </Typography>
                  <Typography variant="body2" paragraph>
                    4. Agar koi concept clear nahi hai to honestly admit karein aur learning approach discuss karein
                  </Typography>
                  <Typography variant="body2">
                    5. Company ke tech stack ke baare mein research zaroor karein
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Button 
                variant="contained" 
                onClick={() => setCurrentTab('questions')}
                sx={{ 
                  bgcolor: 'rgba(97, 218, 251, 1)', 
                  color: 'black',
                  px: 4,
                  '&:hover': {
                    bgcolor: 'rgba(97, 218, 251, 0.9)',
                  }
                }}
              >
                Interview Questions Practice Karein
              </Button>
            </Box>
          </motion.div>
        )}
      </motion.div>
    </Container>
  );
};

export default InterviewPrep;