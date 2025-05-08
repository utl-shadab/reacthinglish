import { useState, useEffect, useCallback } from 'react';

interface UseLiveCodeProps {
  defaultCode: string;
  autoExecute?: boolean;
  onError?: (error: Error) => void;
}

export function useLiveCode({ defaultCode, autoExecute = false, onError }: UseLiveCodeProps) {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState<React.ReactNode | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);

  const executeCode = useCallback(() => {
    setIsExecuting(true);
    setError(null);
    
    try {
      // Basic implementation that extracts JSX from the return statement
      const returnMatch = code.match(/return\s*\(\s*([\s\S]*?)\s*\);/);
      
      if (returnMatch && returnMatch[1]) {
        const jsxContent = returnMatch[1];
        
        // You would typically use a proper parser and runner here
        // This is a very simplified example
        
        // Extract variable definitions
        const nameMatch = code.match(/const\s+name\s*=\s*['"]([^'"]*)['"]/);
        const name = nameMatch ? nameMatch[1] : 'Learner';
        
        // Create a simple representation of the component
        const output = (
          <div className="welcome-container">
            <h1 className="text-xl font-bold mb-2">Welcome to React, {name}!</h1>
            <p>Aapka pehla React component ready hai.</p>
            {/* If there's a third paragraph in the user's code, we'll show it */}
            {jsxContent.includes('<p>') && jsxContent.match(/<p>(.*?)<\/p>/g)?.length > 2 && (
              <p>{jsxContent.match(/<p>(.*?)<\/p>/g)[2].replace(/<\/?p>/g, '')}</p>
            )}
          </div>
        );
        
        setOutput(output);
      } else {
        throw new Error('Could not find a return statement with JSX');
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      onError?.(error);
    } finally {
      setIsExecuting(false);
    }
  }, [code, onError]);

  useEffect(() => {
    if (autoExecute) {
      executeCode();
    }
  }, [autoExecute, executeCode]);

  return {
    code,
    setCode,
    output,
    error,
    isExecuting,
    executeCode,
  };
}
