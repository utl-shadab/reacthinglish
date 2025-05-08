interface InterviewQuestion {
  id: string;
  question: string;
  hindiQuestion?: string;
  answer: string;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  category: 'Concepts' | 'Hooks' | 'Performance' | 'State Management' | 'Tools';
  codeExample?: string;
  followUpQuestions?: string[];
}

export const interviewQuestionsData: InterviewQuestion[] = [
  // Basic Concepts
  {
    id: 'why-react',
    question: 'Why choose React over other frameworks?',
    hindiQuestion: 'Dusre frameworks ke muqable React kyun chunein?',
    answer: 'React offers several advantages over other frameworks: 1) Component-based architecture that promotes reusability and maintainability, 2) Virtual DOM for optimized rendering performance, 3) One-way data flow that makes applications more predictable, 4) Strong ecosystem and community support, 5) Backed by Facebook, ensuring ongoing development, 6) Wide industry adoption meaning better job opportunities, 7) Flexible integration with existing projects, 8) React Native for cross-platform mobile development, and 9) Relatively small learning curve compared to comprehensive frameworks.',
    difficulty: 'Basic',
    category: 'Concepts',
    codeExample: `// React's component-based approach
import React from 'react';

// Reusable component
function Button({ text, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="custom-button"
    >
      {text}
    </button>
  );
}

// Parent component using Button multiple times
function App() {
  return (
    <div>
      <h1>React Components Demo</h1>
      <Button 
        text="Submit" 
        onClick={() => console.log('Submitted!')} 
      />
      <Button 
        text="Cancel" 
        onClick={() => console.log('Cancelled!')} 
      />
    </div>
  );
}`
  },
  {
    id: 'what-is-react',
    question: 'What is React?',
    hindiQuestion: 'React kya hai?',
    answer: 'React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and efficiently update the DOM using its Virtual DOM implementation. React follows a component-based architecture that helps in managing application state effectively.',
    difficulty: 'Basic',
    category: 'Concepts',
    codeExample: `import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`
  },
  {
    id: 'virtual-dom',
    question: 'What is Virtual DOM and how does it work?',
    hindiQuestion: 'Virtual DOM kya hai aur yeh kaise kaam karta hai?',
    answer: 'The Virtual DOM is a lightweight JavaScript representation of the actual DOM. React uses it to improve performance. When state changes, React first updates the Virtual DOM, then compares it with the previous version using a "diffing" algorithm to identify minimal changes needed. Finally, it applies only necessary updates to the real DOM in a process called "reconciliation". This approach is more efficient than directly manipulating the DOM for each state change.',
    difficulty: 'Basic',
    category: 'Concepts',
    codeExample: `// React creates a Virtual DOM representation
// When state changes:
setState({ count: this.state.count + 1 });

// 1. React creates a new Virtual DOM tree
// 2. Compares it with previous Virtual DOM 
// 3. Calculates minimal changes needed
// 4. Updates only those parts in the real DOM`
  },
  {
    id: 'jsx',
    question: 'What is JSX?',
    hindiQuestion: 'JSX kya hai?',
    answer: 'JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML or XML. It allows you to write HTML-like code within JavaScript, making the structure of UI components more readable and intuitive. JSX gets transformed into regular JavaScript function calls during the build process using tools like Babel. Under the hood, JSX elements are converted to React.createElement() calls.',
    difficulty: 'Basic',
    category: 'Concepts',
    codeExample: `// JSX syntax
const element = <h1 className="greeting">Hello, world!</h1>;

// Compiles to this JavaScript
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);`
  },
  {
    id: 'components-types',
    question: 'What are the different types of components in React?',
    hindiQuestion: 'React mein alag-alag prakar ke components kaunse hain?',
    answer: 'React has two main types of components: Class Components and Function Components. Class Components are ES6 classes that extend React.Component and have a render method. Function Components are simpler JavaScript functions that accept props and return JSX. With the introduction of Hooks in React 16.8, Function Components can now use state and lifecycle methods, making them functionally equivalent to Class Components.',
    difficulty: 'Basic',
    category: 'Concepts',
    codeExample: `// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Function Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Function Component with Hooks
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
  },
  {
    id: 'props-vs-state',
    question: 'What is the difference between props and state?',
    hindiQuestion: 'Props aur state mein kya antar hai?',
    answer: 'Props and state are both JavaScript objects containing data that influence rendering, but they serve different purposes. Props (short for properties) are passed from parent to child components and are immutable within the receiving component. State is managed within a component and can be changed using setState() or useState(). Changes to either props or state trigger a re-render of the component.',
    difficulty: 'Basic',
    category: 'Concepts',
    codeExample: `// Props example
function Welcome(props) {
  // Cannot modify props here
  return <h1>Hello, {props.name}</h1>;
}

// Usage: <Welcome name="Sara" />

// State example
function Counter() {
  // State can be modified with setCount
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
  },
  {
    id: 'useeffect-lifecycle',
    question: 'How does useEffect hook relate to lifecycle methods?',
    hindiQuestion: 'useEffect hook ka lifecycle methods se kya sambandh hai?',
    answer: 'The useEffect hook combines multiple class component lifecycle methods into a single API. It can replace componentDidMount, componentDidUpdate, and componentWillUnmount. useEffect runs after render, and its cleanup function (optional return function) runs before the component unmounts or before the effect runs again. By providing a dependency array, you can control when the effect reruns - an empty array makes it run only once (like componentDidMount).',
    difficulty: 'Intermediate',
    category: 'Hooks',
    codeExample: `// Similar to componentDidMount (runs once after first render)
useEffect(() => {
  console.log('Component mounted');
  
  // Similar to componentWillUnmount (cleanup function)
  return () => {
    console.log('Component will unmount');
  };
}, []); // Empty dependency array = run once

// Similar to componentDidUpdate for specific props/state
useEffect(() => {
  console.log('count changed to:', count);
}, [count]); // Only re-run if count changes

// Runs after every render (no dependency array)
useEffect(() => {
  console.log('Component rendered');
});`
  },
  {
    id: 'usememo-usecallback',
    question: 'What is the difference between useMemo and useCallback?',
    hindiQuestion: 'useMemo aur useCallback mein kya antar hai?',
    answer: 'Both useMemo and useCallback are used for optimization and memoization to prevent unnecessary re-renders. useMemo memoizes the calculated value of a function, recalculating only when dependencies change. It\'s ideal for expensive calculations. useCallback memoizes the function itself, not its result. It\'s useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.',
    difficulty: 'Intermediate',
    category: 'Hooks',
    codeExample: `// useMemo example - memoizes the calculated value
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]); // Only recalculate if a or b changes

// useCallback example - memoizes the function itself
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]); // Only recreate function if a or b changes

// Practical example:
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  // Without useCallback, this function would be recreated every render
  const handleClick = useCallback(() => {
    console.log('Clicked', count);
  }, [count]);
  
  return <ChildComponent onClick={handleClick} />;
}

// React.memo prevents re-rendering if props haven't changed
const ChildComponent = React.memo(function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
});`
  },
  {
    id: 'redux-vs-context',
    question: 'What are the differences between Redux and Context API?',
    hindiQuestion: 'Redux aur Context API mein kya antar hai?',
    answer: 'Redux and Context API both solve state management problems, but with different approaches. Context API is built into React and is simpler for sharing state between components without prop drilling. It\'s good for low-frequency updates but can cause performance issues with frequent updates. Redux provides a centralized store with a predictable state container, middleware support, developer tools, and better performance for complex state updates. Redux is better for large applications with complex state logic, while Context is simpler for smaller applications.',
    difficulty: 'Intermediate',
    category: 'State Management',
    codeExample: `// Context API example
const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={theme}>
      <ThemedButton onClick={() => setTheme('dark')} />
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Themed Button</button>;
}

// Redux example
// Action
const changeTheme = theme => ({
  type: 'CHANGE_THEME',
  payload: theme
});

// Reducer
function themeReducer(state = 'light', action) {
  switch (action.type) {
    case 'CHANGE_THEME':
      return action.payload;
    default:
      return state;
  }
}

// Store
const store = createStore(themeReducer);

// Component
function ThemedButton({ dispatch }) {
  return (
    <button onClick={() => dispatch(changeTheme('dark'))}>
      Change Theme
    </button>
  );
}

// Connect component to Redux
export default connect(
  state => ({ theme: state }),
  { changeTheme }
)(ThemedButton);`
  },
  {
    id: 'code-splitting',
    question: 'What is code splitting and how can you implement it in React?',
    hindiQuestion: 'Code splitting kya hai aur aap ise React mein kaise implement kar sakte hain?',
    answer: 'Code splitting is a technique to split your bundle into smaller chunks which can be loaded on demand or in parallel, improving application load time. In React, you can implement code splitting using dynamic import() and React.lazy() along with Suspense. This allows you to load components only when they\'re needed, rather than loading the entire app at once. This is particularly useful for large applications where certain routes or components aren\'t immediately needed by users.',
    difficulty: 'Advanced',
    category: 'Performance',
    codeExample: `// Without code splitting
import OtherComponent from './OtherComponent';

// With code splitting using React.lazy
const OtherComponent = React.lazy(() => import('./OtherComponent'));

// Using with Suspense
function MyComponent() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </React.Suspense>
  );
}

// Code splitting with routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}`
  },
  {
    id: 'react-performance',
    question: 'How can you optimize performance in a React application?',
    hindiQuestion: 'Aap React application mein performance ko kaise optimize kar sakte hain?',
    answer: 'To optimize React performance: 1) Use React.memo for functional components and PureComponent for class components to prevent unnecessary re-renders. 2) Implement code splitting with React.lazy() and Suspense. 3) Use useMemo and useCallback to memoize expensive calculations and functions. 4) Virtualize long lists with react-window or react-virtualized. 5) Use production builds with proper bundling and minification. 6) Avoid inline function definitions in render methods. 7) Implement proper key props in lists. 8) Use the Chrome DevTools Profiler and React DevTools to identify performance bottlenecks.',
    difficulty: 'Advanced',
    category: 'Performance',
    codeExample: `// Use React.memo to prevent unnecessary renders
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});

// Use useCallback for event handlers
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  // Memoized callback
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty deps means this function never changes
  
  return <ChildComponent onClick={handleClick} />;
}

// Use useMemo for expensive calculations
function SearchResults({ items, query }) {
  // Only recalculate when items or query changes
  const filteredItems = useMemo(() => {
    return items.filter(item => item.text.includes(query));
  }, [items, query]);
  
  return (
    <ul>
      {filteredItems.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  );
}

// Virtualize long lists
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].text}
    </div>
  );
  
  return (
    <FixedSizeList
      height={500}
      width={300}
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  );
}`
  },
  {
    id: 'react-suspense',
    question: 'What is React Suspense and what problems does it solve?',
    hindiQuestion: 'React Suspense kya hai aur yeh kin samasyaon ko hal karta hai?',
    answer: 'React Suspense is a feature that lets components "wait" for something before they render, showing a fallback UI during the wait. It primarily solves three problems: 1) Code splitting - loading JavaScript components on demand, 2) Data fetching - waiting for API responses, 3) Loading images or other resources. Suspense improves user experience by handling loading states declaratively rather than conditionally in each component, and allows coordinating loading states across multiple components. It\'s part of React\'s concurrent mode features.',
    difficulty: 'Advanced',
    category: 'Concepts',
    codeExample: `// Basic Suspense with code splitting
import React, { Suspense, lazy } from 'react';

const OtherComponent = lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
}

// Multiple components in one Suspense boundary
function MyPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <ProfileDetails />
      <Suspense fallback={<PostsSkeleton />}>
        <Posts />
      </Suspense>
    </Suspense>
  );
}

// SuspenseList to coordinate loading sequences
import { SuspenseList } from 'react';

function App() {
  return (
    <SuspenseList revealOrder="forwards">
      <Suspense fallback={<Spinner />}>
        <ProfileDetails />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Posts />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Comments />
      </Suspense>
    </SuspenseList>
  );
}`
  },
  
  // More questions to complete the 30+ set
  {
    id: 'useref-hook',
    question: 'What is the useRef hook and when would you use it?',
    hindiQuestion: 'useRef hook kya hai aur aap ise kab use karenge?',
    answer: 'The useRef hook in React is used to create a mutable reference that persists across renders without causing re-renders when changed. It has three main use cases: 1) Accessing DOM elements directly (like focusing an input), 2) Storing previous values because they persist between renders, and 3) Keeping mutable variables that don\'t require re-rendering when changed. Unlike state variables, changing a ref value doesn\'t trigger a component re-render, making it useful for values that need to change without affecting the UI.',
    difficulty: 'Intermediate',
    category: 'Hooks',
    codeExample: `import React, { useRef, useEffect } from 'react';

function AutoFocusInput() {
  // Create a ref to store the input DOM element
  const inputRef = useRef(null);
  
  // After component mounts, focus the input
  useEffect(() => {
    // Access the DOM element directly
    inputRef.current.focus();
  }, []);
  
  return <input ref={inputRef} type="text" />;
}

function Timer() {
  const [count, setCount] = useState(0);
  // Store mutable value without re-render
  const timerIdRef = useRef(null);
  
  const startTimer = () => {
    timerIdRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  };
  
  const stopTimer = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  };
  
  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (timerIdRef.current) {
        clearInterval(timerIdRef.current);
      }
    };
  }, []);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}`
  },
  {
    id: 'react-keys',
    question: 'Why are keys important in React lists?',
    hindiQuestion: 'React lists mein keys kyun important hain?',
    answer: 'Keys in React lists help identify which items have changed, been added, or been removed. They provide a stable identity to elements across renders, enabling React to efficiently update the DOM. When elements move positions (like in sorting), keys allow React to track elements instead of rebuilding them. Never use array indices as keys for dynamic lists because this can lead to performance issues or bugs if items can be reordered, as indices don\'t uniquely identify elements across renders. Always use stable, unique values that don\'t change on re-renders (like IDs from your data).',
    difficulty: 'Basic',
    category: 'Concepts',
    codeExample: `// ❌ Bad practice - using array index as key
function ListWithIndexKeys() {
  const items = ['Apple', 'Banana', 'Orange'];
  
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li> // Don't use index as key for dynamic lists
      ))}
    </ul>
  );
}

// ✅ Good practice - using unique IDs
function ListWithGoodKeys() {
  const items = [
    { id: 'a1', name: 'Apple' },
    { id: 'b2', name: 'Banana' },
    { id: 'c3', name: 'Orange' }
  ];
  
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li> // Using stable, unique ID
      ))}
    </ul>
  );
}

// Demo showing the problem with index keys (if items are sorted/reordered)
function DynamicList() {
  const [items, setItems] = useState([
    { id: 'a', text: 'Item A' },
    { id: 'b', text: 'Item B' },
    { id: 'c', text: 'Item C' }
  ]);
  
  const reverseOrder = () => {
    setItems([...items].reverse());
  };
  
  return (
    <div>
      <button onClick={reverseOrder}>Reverse Order</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}`
  },
  {
    id: 'error-boundaries',
    question: 'What are Error Boundaries in React?',
    hindiQuestion: 'React mein Error Boundaries kya hain?',
    answer: 'Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. They work like a JavaScript catch {} block, but for components. They catch errors during rendering, in lifecycle methods, and in constructors. Error boundaries don\'t catch errors in event handlers, asynchronous code, or errors thrown in the error boundary itself. They must be implemented using class components with either getDerivedStateFromError() or componentDidCatch() lifecycle methods.',
    difficulty: 'Intermediate',
    category: 'Concepts',
    codeExample: `import React, { Component } from 'react';

// Error Boundary implementation
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Used to render fallback UI after error
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Used for side effects like logging errors
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error);
    console.log('Component stack:', errorInfo.componentStack);
    // You could also send to an error reporting service
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return <h2>Something went wrong. Please try again later.</h2>;
    }
    return this.props.children;
  }
}

// Using the Error Boundary
function App() {
  return (
    <div>
      <h1>Error Boundary Example</h1>
      
      <ErrorBoundary>
        <ComponentThatMightError />
      </ErrorBoundary>
      
      {/* Other components remain unaffected by errors */}
      <div>This will still show if the component above errors</div>
    </div>
  );
}

// Component that might throw an error
function ComponentThatMightError() {
  const [shouldError, setShouldError] = useState(false);
  
  if (shouldError) {
    throw new Error('Simulated error!');
  }
  
  return (
    <div>
      <p>Click the button to simulate an error</p>
      <button onClick={() => setShouldError(true)}>
        Break this component
      </button>
    </div>
  );
}`
  },
  {
    id: 'react-fragments',
    question: 'What are React Fragments and why would you use them?',
    hindiQuestion: 'React Fragments kya hain aur aap unhe kyun use karenge?',
    answer: 'React Fragments allow you to group multiple elements without adding an extra node to the DOM. They solve the problem of returning adjacent JSX elements without wrapping them in an unnecessary parent div or span. Fragments help keep the DOM cleaner, especially in components like tables where nesting divs would create invalid HTML. They also avoid issues with CSS flexbox and grid layouts where extra divs can disrupt the intended styling. Fragments can be written as either <React.Fragment> or the shorter <> syntax, with the former allowing you to specify a key when mapping items.',
    difficulty: 'Basic',
    category: 'Concepts',
    codeExample: `import React from 'react';

// Without fragments - adds extra div to DOM
function ListWithoutFragment() {
  return (
    <div>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </div>
  );
}

// With Fragment - cleaner DOM output
function ListWithFragment() {
  return (
    <React.Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </React.Fragment>
  );
}

// With short syntax
function ListWithShortSyntax() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </>
  );
}

// With keys (requires full syntax)
function Glossary({ items }) {
  return (
    <dl>
      {items.map(item => (
        // Fragment with key prop requires full syntax
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}`
  },
  {
    id: 'react-portals',
    question: 'What are React Portals and when would you use them?',
    hindiQuestion: 'React Portals kya hain aur aap inhe kab use karenge?',
    answer: 'React Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. This is useful for components like modals, tooltips, and popovers that need to visually "break out" of their container, particularly when a parent component has overflow: hidden or z-index styles that would clip the child. Despite rendering outside their parent\'s DOM node, portals still behave like normal React children in every other way, including event bubbling through the React component hierarchy regardless of their DOM position.',
    difficulty: 'Intermediate',
    category: 'Concepts',
    codeExample: `import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  
  // Create portal to a DOM node outside the parent hierarchy
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root') // DOM node outside component tree
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="app">
      <h1>React Portals Example</h1>
      <button onClick={() => setShowModal(true)}>
        Show Modal
      </button>
      
      {/* This renders outside the app div, at modal-root */}
      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
      >
        <h2>Modal Content</h2>
        <p>This is rendered using a portal!</p>
      </Modal>
    </div>
  );
}

/* 
In your HTML file, you would need:
<div id="root"></div>
<div id="modal-root"></div>
*/`
  },
  {
    id: 'prop-drilling',
    question: 'What is prop drilling and how can you avoid it?',
    hindiQuestion: 'Prop drilling kya hai aur aap isse kaise bach sakte hain?',
    answer: 'Prop drilling (also called "threading") is passing props through multiple nested components to reach components that need the data, even when intermediate components don\'t use those props. This leads to tightly coupled components, harder maintenance, and reduced readability. To avoid prop drilling, you can use: 1) React Context API for global state that many components need, 2) State management libraries like Redux or Zustand, 3) Component composition techniques like render props or children props to avoid nesting, 4) Custom hooks to encapsulate and share functionality, or 5) For simpler cases, component restructuring to minimize nesting depth.',
    difficulty: 'Intermediate', 
    category: 'State Management',
    codeExample: `// Prop drilling problem
function App() {
  const [user, setUser] = useState({ name: 'John' });
  
  return (
    <div>
      <Header user={user} />
    </div>
  );
}

function Header({ user }) {
  return (
    <div>
      <Navigation user={user} /> {/* Passing down just to send to Profile */}
    </div>
  );
}

function Navigation({ user }) {
  return (
    <div>
      <Profile user={user} /> {/* Passing down again */}
    </div>
  );
}

function Profile({ user }) {
  return <div>Hello, {user.name}</div>;
}

// Solution using Context API
const UserContext = React.createContext();

function AppWithContext() {
  const [user, setUser] = useState({ name: 'John' });
  
  return (
    <UserContext.Provider value={user}>
      <div>
        <Header />
      </div>
    </UserContext.Provider>
  );
}

function Header() {
  return (
    <div>
      <Navigation />
    </div>
  );
}

function Navigation() {
  return (
    <div>
      <Profile />
    </div>
  );
}

function Profile() {
  // Direct access to user without prop drilling
  const user = useContext(UserContext);
  return <div>Hello, {user.name}</div>;
}`
  },
  {
    id: 'controlled-vs-uncontrolled',
    question: 'What is the difference between controlled and uncontrolled components?',
    hindiQuestion: 'Controlled aur uncontrolled components mein kya antar hai?',
    answer: 'In React, controlled components have their state fully managed by React through props and event handlers - the component doesn\'t maintain its internal state. Form inputs receive values from state and update it through handlers like onChange. Uncontrolled components maintain their own internal state, using refs to access DOM values directly instead of through React state. Controlled components offer better control and validation but require more code. Uncontrolled components are simpler for basic use cases but offer less control. Most React applications prefer controlled components for consistent and predictable form handling.',
    difficulty: 'Basic',
    category: 'Concepts',
    codeExample: `import React, { useState, useRef } from 'react';

// Controlled Component
function ControlledForm() {
  const [value, setValue] = useState('');
  
  const handleChange = (e) => {
    // Validate and transform input if needed
    setValue(e.target.value.toUpperCase());
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Controlled input value:', value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Input</h2>
      <input
        type="text"
        value={value} // Value comes from React state
        onChange={handleChange} // Changes go through React state
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Uncontrolled Component
function UncontrolledForm() {
  // Use ref to access DOM input value directly
  const inputRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access DOM node directly to get value
    console.log('Uncontrolled input value:', inputRef.current.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Input</h2>
      <input
        type="text"
        ref={inputRef} // Reference to DOM node
        defaultValue="Default text" // Initial value (optional)
      />
      <button type="submit">Submit</button>
    </form>
  );
}`
  },
  {
    id: 'refs-in-react',
    question: 'What are refs in React and when should you use them?',
    hindiQuestion: 'React mein refs kya hain aur kab use karni chahiye?',
    answer: 'Refs in React provide a way to access DOM nodes or React elements created in the render method. Use refs for cases where declarative React patterns don\'t work well: 1) Managing focus, text selection, or media playback, 2) Triggering imperative animations, 3) Integrating with third-party DOM libraries, 4) Direct access to DOM elements for measurements. Avoid using refs for anything that can be done declaratively with props and state. In class components, use React.createRef(), and in function components, use the useRef hook. Refs should be used sparingly as they go against React\'s declarative paradigm.',
    difficulty: 'Intermediate',
    category: 'Concepts',
    codeExample: `import React, { useRef, useEffect, useState } from 'react';

// Class component with ref
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // Create a ref in class component
    this.textInputRef = React.createRef();
  }
  
  focusTextInput = () => {
    // Access DOM node with current
    this.textInputRef.current.focus();
  };
  
  render() {
    return (
      <div>
        <input type="text" ref={this.textInputRef} />
        <button onClick={this.focusTextInput}>
          Focus the text input
        </button>
      </div>
    );
  }
}

// Function component with useRef hook
function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    // Access video element to call play/pause
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);
  
  return (
    <div>
      <video 
        ref={videoRef}
        src="https://example.com/video.mp4"
        width="250"
      />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

// Measuring DOM element dimensions
function MeasureExample() {
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const measureElement = () => {
      if (divRef.current) {
        const { width, height } = divRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    measureElement();
    window.addEventListener('resize', measureElement);
    
    return () => {
      window.removeEventListener('resize', measureElement);
    };
  }, []);
  
  return (
    <div>
      <div 
        ref={divRef}
        style={{ width: '100%', height: '100px', background: 'lightblue' }}
      >
        Measure me
      </div>
      <p>Width: {dimensions.width}px, Height: {dimensions.height}px</p>
    </div>
  );
}`
  },
  {
    id: 'higher-order-components',
    question: 'What are Higher-Order Components (HOCs) in React?',
    hindiQuestion: 'React mein Higher-Order Components (HOCs) kya hain?',
    answer: 'Higher-Order Components (HOCs) are a pattern in React where a function takes a component and returns a new enhanced component with additional props or behavior. HOCs are used for cross-cutting concerns and code reuse across multiple components. They\'re a way to implement the composition pattern by wrapping components to add additional functionality like data fetching, access control, logging, or performance tracking. Unlike mixins or inheritance, HOCs don\'t modify the original component but compose new functionality by wrapping it. HOCs follow a convention of naming "with___" (e.g., withAuth). While still useful, many HOC use cases can now be handled with Hooks in functional components.',
    difficulty: 'Advanced',
    category: 'Concepts',
    codeExample: `import React, { useState, useEffect } from 'react';

// Higher-Order Component that adds data fetching
function withDataFetching(WrappedComponent, dataSource) {
  // Return a new component
  return function WithDataFetching(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(dataSource);
          const result = await response.json();
          setData(result);
          setError(null);
        } catch (err) {
          setError('Failed to fetch data');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      
      fetchData();
    }, []);
    
    // Pass all props plus new props to wrapped component
    return (
      <WrappedComponent
        data={data}
        loading={loading}
        error={error}
        {...props}
      />
    );
  };
}

// Component that needs data
function UserList({ data, loading, error }) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {data && data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// HOC usage
const UserListWithData = withDataFetching(
  UserList,
  'https://jsonplaceholder.typicode.com/users'
);

// Another HOC example - authentication
function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    // Check auth logic
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);
    
    if (!isAuthenticated) {
      return (
        <div>
          <p>Please log in to view this content</p>
          <button onClick={login}>Log In</button>
        </div>
      );
    }
    
    return (
      <div>
        <WrappedComponent {...props} />
        <button onClick={logout}>Log Out</button>
      </div>
    );
  };
}

// Using multiple HOCs
const AuthenticatedUserList = withAuth(UserListWithData);`
  },
  {
    id: 'react-fiber',
    question: 'What is React Fiber?',
    hindiQuestion: 'React Fiber kya hai?',
    answer: 'React Fiber is the core reconciliation algorithm rewrite introduced in React 16. It enables incremental rendering by breaking rendering work into chunks that can be paused, aborted, or reused. The main goal is to enable React to take advantage of scheduling capabilities and prioritize different types of updates. Unlike the old stack reconciler that processed updates synchronously, Fiber allows React to: 1) Pause work and come back to it later, 2) Assign priority to different types of updates, 3) Reuse previously completed work, 4) Abort work when it\'s no longer needed. This improves the perceived performance and responsiveness of complex React applications.',
    difficulty: 'Advanced',
    category: 'Concepts',
    codeExample: `// React Fiber is internal to React, but here are examples
// of features it enables:

// Example of using React.startTransition API (enabled by Fiber)
// to mark non-urgent updates
import { startTransition, useState } from 'react';

function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const handleChange = (e) => {
    // Set the query immediately (high priority)
    setQuery(e.target.value);
    
    // Mark results update as a transition (lower priority)
    startTransition(() => {
      // This expensive calculation is deprioritized
      const searchResults = searchDatabase(e.target.value);
      setResults(searchResults);
    });
  };
  
  return (
    <div>
      <input value={query} onChange={handleChange} />
      <div>
        {results.map(result => (
          <div key={result.id}>{result.text}</div>
        ))}
      </div>
    </div>
  );
}

// Example of Suspense, another feature enabled by Fiber
import { Suspense, lazy } from 'react';

const ExpensiveComponent = lazy(() => import('./ExpensiveComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ExpensiveComponent />
      </Suspense>
    </div>
  );
}`
  },
  {
    id: 'usecontext-performance',
    question: 'What are the performance considerations when using Context API?',
    hindiQuestion: 'Context API ka upyog karte samay performance ke liye kya vichar karna chahiye?',
    answer: 'The Context API can cause performance issues if not implemented carefully: 1) When a context value changes, all components that use that context will re-render, even if they only use part of the data. 2) Context providers should be placed as low in the tree as possible to limit the number of components that re-render. 3) For frequent updates, consider splitting contexts into smaller, more focused ones. 4) Memoize context values with useMemo to prevent unnecessary re-renders from new object references. 5) Use state management libraries for complex state that changes frequently. 6) When possible, use the useContext hook with React.memo to prevent re-renders when the component doesn\'t use the changed values.',
    difficulty: 'Advanced',
    category: 'Performance',
    codeExample: `import React, { createContext, useContext, useState, useMemo } from 'react';

// ❌ Poor performance - one large context
const BigContext = createContext();

function BadProvider({ children }) {
  const [user, setUser] = useState({ name: 'John' });
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState([]);
  
  // New object created on every render - causes all consumers to re-render
  const value = { user, setUser, theme, setTheme, notifications, setNotifications };
  
  return (
    <BigContext.Provider value={value}>
      {children}
    </BigContext.Provider>
  );
}

// ✅ Better performance - split contexts
const UserContext = createContext();
const ThemeContext = createContext();
const NotificationsContext = createContext();

function OptimizedProvider({ children }) {
  const [user, setUser] = useState({ name: 'John' });
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState([]);
  
  // Memoize values to prevent unnecessary re-renders
  const userValue = useMemo(() => ({ user, setUser }), [user]);
  const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);
  const notificationsValue = useMemo(
    () => ({ notifications, setNotifications }), 
    [notifications]
  );
  
  return (
    <UserContext.Provider value={userValue}>
      <ThemeContext.Provider value={themeValue}>
        <NotificationsContext.Provider value={notificationsValue}>
          {children}
        </NotificationsContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

// Optimized consumer with React.memo
const ProfileComponent = React.memo(function Profile() {
  // Only re-renders when user context changes
  const { user } = useContext(UserContext);
  return <div>Hello, {user.name}</div>;
});

const ThemeComponent = React.memo(function ThemeToggle() {
  // Only re-renders when theme context changes
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
});`
  },
  {
    id: 'react-security',
    question: 'What are common security concerns in React applications and how to address them?',
    hindiQuestion: 'React applications mein common security concerns kya hain aur inhe kaise address kiya jaye?',
    answer: 'Common security concerns in React applications include: 1) XSS (Cross-Site Scripting) attacks - React has some built-in protection but avoid using dangerouslySetInnerHTML without sanitizing input. 2) CSRF (Cross-Site Request Forgery) - implement proper CSRF tokens on your backend. 3) Server-side rendering vulnerabilities - sanitize inputs before rendering. 4) Dependency vulnerabilities - regularly update packages and use tools like npm audit. 5) Secure data storage - never store sensitive data in localStorage or client-side state. 6) API security - use HTTPS, implement proper authentication, and validate all inputs. 7) Environment variables - ensure sensitive values aren\'t exposed in client bundles. 8) Content Security Policy - implement to restrict resource loading.',
    difficulty: 'Advanced',
    category: 'Concepts',
    codeExample: `// ❌ Vulnerable to XSS
function UnsafeComponent({ userProvidedContent }) {
  return <div dangerouslySetInnerHTML={{ __html: userProvidedContent }} />;
}

// ✅ Safer approach - sanitize content first
import DOMPurify from 'dompurify';

function SafeComponent({ userProvidedContent }) {
  const sanitizedContent = DOMPurify.sanitize(userProvidedContent);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
}

// ❌ Exposing API keys in client-side code
function BadApiComponent() {
  // Never do this! API keys will be visible in bundled JS
  const API_KEY = 'actualSecretApiKey123';
  
  useEffect(() => {
    fetch(\`https://api.example.com/data?key=\${API_KEY}\`);
  }, []);
}

// ✅ Better approach
// 1. Use environment variables with REACT_APP_ prefix (for create-react-app)
// 2. Keep secrets on server-side only
// 3. Use a proxy server to make authenticated requests

// .env.local (not committed to repository)
// REACT_APP_API_ENDPOINT=https://api.example.com/data

function GoodApiComponent() {
  useEffect(() => {
    // Only endpoint URL exposed, not credentials
    fetch('/api/proxy-request')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);
}

// Server-side proxy endpoint handles actual API key
// server.js
app.get('/api/proxy-request', (req, res) => {
  // API key stored securely on server
  const API_KEY = process.env.API_KEY;
  
  fetch(\`https://api.example.com/data?key=\${API_KEY}\`)
    .then(apiRes => apiRes.json())
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }));
});`
  },
  {
    id: 'testing-react',
    question: 'How do you test React components?',
    hindiQuestion: 'Aap React components ko kaise test karte hain?',
    answer: 'Testing React components involves multiple approaches: 1) Unit testing with Jest and React Testing Library to test individual components in isolation, focusing on behavior rather than implementation details. 2) Snapshot testing to detect unexpected UI changes. 3) Integration testing to check how components work together. 4) End-to-end testing with tools like Cypress or Playwright to test complete user flows. Good practices include testing user interactions (clicks, inputs), asynchronous operations (API calls), error states, and accessibility. Mock dependencies like API calls and context providers to isolate component behavior. Focus on testing from a user\'s perspective rather than implementation details like state or props to create more resilient tests.',
    difficulty: 'Intermediate',
    category: 'Tools',
    codeExample: `// Component to test
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p data-testid="count">Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// Unit test with React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('counter increments and decrements when buttons are clicked', () => {
  render(<Counter />);
  
  // Initial state
  expect(screen.getByTestId('count')).toHaveTextContent('Count: 0');
  
  // Click increment button
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByTestId('count')).toHaveTextContent('Count: 1');
  
  // Click decrement button
  fireEvent.click(screen.getByText('Decrement'));
  expect(screen.getByTestId('count')).toHaveTextContent('Count: 0');
});

// Testing async component
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError('Failed to fetch user');
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, [userId]);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return null;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

// Testing async behavior with mocks
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';

// Mock fetch API
global.fetch = jest.fn();

test('loads and displays user data', async () => {
  // Mock successful response
  fetch.mockResolvedValueOnce({
    json: async () => ({ id: 1, name: 'John Doe', email: 'john@example.com' })
  });
  
  render(<UserProfile userId={1} />);
  
  // Initially shows loading
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  // After loading, shows user data
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Email: john@example.com')).toBeInTheDocument();
  });
  
  // Check that fetch was called correctly
  expect(fetch).toHaveBeenCalledWith('/api/users/1');
});`
  },
  {
    id: 'ssr-vs-csr',
    question: 'What are the differences between Server-Side Rendering (SSR) and Client-Side Rendering (CSR) in React?',
    hindiQuestion: 'React mein Server-Side Rendering (SSR) aur Client-Side Rendering (CSR) mein kya antar hai?',
    answer: 'Server-Side Rendering (SSR) renders React components on the server and sends HTML to the client, while Client-Side Rendering (CSR) renders in the browser. SSR offers better SEO, faster initial load, better performance on low-power devices, and improved accessibility. CSR provides better interactivity after initial load, reduced server load, and easier development and debugging. SSR is ideal for content-focused sites, public-facing pages that need SEO, and low-powered client devices. CSR works well for highly interactive applications, admin panels, and private dashboards. Modern frameworks like Next.js and Remix offer hybrid approaches combining the benefits of both methods.',
    difficulty: 'Advanced',
    category: 'Concepts',
    codeExample: `// Client-Side Rendering (CSR) example with React
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Initial HTML has empty <div id="root"></div>
// JavaScript loads and renders the entire app in browser
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Server-Side Rendering (SSR) example with React + Express
// server.js
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

const app = express();

app.get('/', (req, res) => {
  // Render React component to string on server
  const appHtml = ReactDOMServer.renderToString(<App />);
  
  // Send complete HTML to client
  res.send(\`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR React App</title>
      </head>
      <body>
        <div id="root">\${appHtml}</div>
        
        <!-- Load React for hydration -->
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  \`);
});

// Client hydration (for SSR)
// client.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Hydrate instead of render
// Attaches event handlers to server-rendered HTML
ReactDOM.hydrateRoot(
  document.getElementById('root'), 
  <App />
);

// Next.js example (Hybrid approach)
// pages/index.js
export default function HomePage({ products }) {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

// This runs on the server at build time or request time
export async function getServerSideProps() {
  // Fetch data on the server
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();
  
  // Pass data to the page via props
  return { props: { products } };
}`
  }
];