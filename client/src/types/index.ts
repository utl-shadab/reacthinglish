// Topic Categories
export interface Category {
  id: string;
  name: string;
  description: string;
  topics: Topic[];
}

// Topic Structure
export interface Topic {
  id: string;
  title: string;
  hindiTitle?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  readingTime?: number;
  category: string;
  shortDescription: string;
  image?: string;
  description: string;
  subtitle?: string;
  keyPoints?: {
    title: string;
    description: string;
  }[];
  keyPointsTitle?: string;
  realLifeExample?: string;
  codeExample?: string;
  codeExampleTitle?: string;
  codeExampleDescription?: string;
  filename?: string;
  codeExplanation?: {
    line: string;
    explanation: string;
  }[];
  exercise?: {
    description: string;
    defaultCode: string;
  };
  challenge?: {
    description: string;
    solution?: string;
    hint?: string;
  };
  tags?: string[];
}

// Progress data structure
export interface ProgressData {
  completedTopics: string[];
  savedCode: Record<string, string>;
  lastVisited?: string;
}
