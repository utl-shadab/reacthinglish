import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of our progress data
interface ProgressData {
  completedTopics: string[];
  savedCode: Record<string, string>;
}

// Define the context type that will be provided
interface ProgressContextType {
  completedTopics: string[];
  savedCode: Record<string, string>;
  markTopicAsCompleted: (topicId: string) => void;
  saveCode: (topicId: string, code: string) => void;
  getCode: (topicId: string) => string | undefined;
}

// Create default values for the context
const defaultProgressData: ProgressData = {
  completedTopics: [],
  savedCode: {}
};

// Create the context with a default value
const ProgressContext = createContext<ProgressContextType>({
  completedTopics: defaultProgressData.completedTopics,
  savedCode: defaultProgressData.savedCode,
  markTopicAsCompleted: () => {},
  saveCode: () => {},
  getCode: () => undefined
});

interface ProgressProviderProps {
  children: ReactNode;
}

/**
 * Progress Provider component that manages user progress
 */
export function ProgressProvider({ children }: ProgressProviderProps) {
  const [progressData, setProgressData] = useState<ProgressData>(() => {
    try {
      const savedData = localStorage.getItem('reactmaster-progress');
      return savedData ? JSON.parse(savedData) : defaultProgressData;
    } catch (error) {
      console.error('Failed to parse progress data from localStorage:', error);
      return defaultProgressData;
    }
  });

  // Save progress data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('reactmaster-progress', JSON.stringify(progressData));
  }, [progressData]);

  // Mark a topic as completed
  const markTopicAsCompleted = (topicId: string) => {
    if (!progressData.completedTopics.includes(topicId)) {
      setProgressData(prev => ({
        ...prev,
        completedTopics: [...prev.completedTopics, topicId]
      }));
    }
  };

  // Save code for a specific topic
  const saveCode = (topicId: string, code: string) => {
    setProgressData(prev => ({
      ...prev,
      savedCode: {
        ...prev.savedCode,
        [topicId]: code
      }
    }));
  };

  // Get code for a specific topic
  const getCode = (topicId: string) => {
    return progressData.savedCode[topicId];
  };

  // Create the context value object
  const contextValue: ProgressContextType = {
    completedTopics: progressData.completedTopics,
    savedCode: progressData.savedCode,
    markTopicAsCompleted,
    saveCode,
    getCode
  };

  // Provide the context to children
  return (
    <ProgressContext.Provider value={contextValue}>
      {children}
    </ProgressContext.Provider>
  );
}

/**
 * Custom hook to use the progress context
 */
export function useProgress(): ProgressContextType {
  return useContext(ProgressContext);
}
