import React, { ReactNode } from 'react';
import { ProgressProvider } from './ProgressContext';
import { ThemeProvider } from '../components/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

interface MockProvidersProps {
  children: ReactNode;
}

/**
 * Mock provider wrapper for testing and debugging
 * This component wraps children with all the necessary context providers
 */
export const MockProviders: React.FC<MockProvidersProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </ProgressProvider>
    </BrowserRouter>
  );
};