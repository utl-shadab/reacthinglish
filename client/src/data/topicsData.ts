import { Category, Topic } from "../types";

// Sample topic data for React concepts in Hinglish
export const topicsData: Category[] = [
  {
    id: "beginner",
    name: "Beginner Concepts",
    description: "React ke basic concepts jo har developer ko janna chahiye.",
    topics: [
      {
        id: "what-is-react",
        title: "What is React?",
        hindiTitle: "React kya hai?",
        level: "Beginner",
        readingTime: 5,
        category: "beginner",
        shortDescription: "React ki basic jankari aur kyu ye itna popular hai.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400",
        description: `React ek JavaScript library hai jo user interfaces (UI) banane ke liye use hoti hai. Ise Facebook ne 2013 mein develop kiya tha, aur aaj kal front-end development mein sabse popular technologies mein se ek hai.

React aapko components banane deti hai - ye reusable code pieces hote hain jo aapke UI ke alag alag parts ko represent karte hain. Ye components apne khud ke state manage kar sakte hain, aur jab ye state change hoti hai, to React efficiently UI ko update kar deta hai.`,
        keyPoints: [
          {
            title: "Declarative",
            description: "Aap bata sakte hain ki UI kaise dikhna chahiye, React automatically update kar dega jab data change hoga."
          },
          {
            title: "Component-Based",
            description: "Aap chote, reusable pieces (components) bana sakte hain aur unhe combine karke complex UIs bana sakte hain."
          },
          {
            title: "Learn Once, Write Anywhere",
            description: "Aap React ko kisi bhi platform par use kar sakte hain - web, mobile (React Native), desktop, etc."
          },
          {
            title: "Virtual DOM",
            description: "React ek virtual representation of real DOM maintain karta hai, jo performance improve karta hai."
          }
        ],
        realLifeExample: "React ko aise samjhiye jaise ek carpenter hai. Jaise carpenter furniture ke pieces (components) alag-alag banata hai aur phir unhe jodkar pura furniture set banata hai, waise hi React mein hum UI components alag-alag banate hain aur phir unhe combine karke pura application banate hain.",
        codeExample: `import React from 'react';

// Ye ek simple React component hai
function WelcomeMessage() {
  const name = 'Learner';
  
  return (
    <div className="welcome-container">
      <h1>Welcome to React, {name}!</h1>
      <p>Aapka pehla React component ready hai.</p>
    </div>
  );
}

export default WelcomeMessage;`,
        codeExplanation: [
          {
            line: "Line 1",
            explanation: "Sabse pehle humne React ko import kiya hai, jo ki har React component ke liye zaroori hai."
          },
          {
            line: "Line 4-14",
            explanation: "Humne WelcomeMessage naam ka ek function component banaya hai. Ye ek simple component hai jo ek welcome message display karta hai."
          },
          {
            line: "Line 5",
            explanation: "Ek variable define kiya hai jiska name 'Learner' hai."
          },
          {
            line: "Line 7-12",
            explanation: "Component ka return statement hai jo JSX mein likha gaya hai. JSX HTML jaisa dikhta hai lekin actually JavaScript hai."
          },
          {
            line: "Line 9",
            explanation: "Curly braces {} ke andar JavaScript expressions likh sakte hain, jaise humne name variable ka use kiya hai."
          },
          {
            line: "Line 15",
            explanation: "Component ko export kiya hai taki ise dusre files mein import kiya ja sake."
          }
        ],
        exercise: {
          description: "WelcomeMessage component ko modify karke apna naam add kijiye, aur ek naya paragraph bhi add kijiye.",
          defaultCode: `import React from 'react';

function WelcomeMessage() {
  // TODO: Yahan apna naam add kijiye
  const name = 'Learner';
  
  return (
    <div className="welcome-container">
      <h1>Welcome to React, {name}!</h1>
      <p>Aapka pehla React component ready hai.</p>
      {/* TODO: Yahan ek naya paragraph add kijiye */}
    </div>
  );
}

export default WelcomeMessage;`
        },
        challenge: {
          description: "Ek naya React component \"ProfileCard\" banaiye jo ek user ka profile card display kare. Is card mein user ka name, age, aur ek short bio hona chahiye. Aap kisi bhi styling ka use kar sakte hain."
        },
        tags: ["react-basics", "components", "introduction"]
      },
      {
        id: "jsx",
        title: "JSX",
        hindiTitle: "JSX kya hai?",
        level: "Beginner",
        readingTime: 6,
        category: "beginner",
        shortDescription: "JSX ke baare mein jaaniye - HTML jaisa dikhta hai, lekin JavaScript hai.",
        description: `JSX (JavaScript XML) ek syntax extension hai JavaScript ke liye, jo React ke saath use hota hai. Ye aapko JavaScript ke andar HTML-like markup likhne ki permission deta hai.

JSX ke bina React use karna possible hai, lekin JSX code ko readable aur likhmein asaan banata hai. JSX compile hone ke baad ye regular JavaScript function calls ban jata hai.`,
        keyPoints: [
          {
            title: "HTML jaisa syntax",
            description: "JSX HTML jaisa dikhta hai, lekin iske kuch differences hain - jaise className (class ke jagah) use karna."
          },
          {
            title: "JavaScript expressions",
            description: "Aap curly braces {} ke andar JavaScript expressions likh sakte hain."
          },
          {
            title: "Compiled to JS",
            description: "JSX directly browser mein run nahi hota hai. Babel jaise compiler ise regular JavaScript mein convert karte hain."
          },
          {
            title: "React.createElement calls",
            description: "JSX behind the scenes React.createElement function calls mein convert hota hai."
          }
        ],
        realLifeExample: "JSX ko aise samjhiye jaise Microsoft Word mein type karna, jahan aap text likhte hain aur formatting apply karte hain. JSX mein hum UI elements (HTML jaisa) likhte hain aur unke saath JavaScript logic bhi add kar sakte hain, bilkul jaise Word mein aap text likhte hain aur usse format bhi karte hain - dono ek hi jagah.",
        codeExample: `import React from 'react';

function Greeting() {
  const user = {
    name: 'Rahul',
    age: 25
  };

  return (
    <div>
      <h1 className="heading">Hello, {user.name}!</h1>
      <p>Aapki umar {user.age} saal hai.</p>
      {user.age >= 18 && <p>Aap voting kar sakte hain.</p>}
      <button onClick={() => alert('Button clicked!')}>
        Click Me!
      </button>
    </div>
  );
}

export default Greeting;`,
        codeExplanation: [
          {
            line: "Line 3-14",
            explanation: "Greeting naam ka ek function component hai jo JSX return karta hai."
          },
          {
            line: "Line 4-7",
            explanation: "Ek user object define kiya hai jismein name aur age properties hain."
          },
          {
            line: "Line 9-18",
            explanation: "Component JSX return kar raha hai jo div element ke andar h1, paragraphs, aur button hai."
          },
          {
            line: "Line 10",
            explanation: "JSX mein CSS classes ke liye 'class' ke bajay 'className' use karte hain. Curly braces {} ke andar user.name JavaScript variable ka use kiya hai."
          },
          {
            line: "Line 12",
            explanation: "Logical AND operator (&&) ka use condition render karne ke liye kiya hai. Agar user.age >= 18 hai, to paragraph show hoga."
          },
          {
            line: "Line 13-15",
            explanation: "JSX mein event handlers add karna - button par onClick event."
          }
        ],
        exercise: {
          description: "Greeting component ko modify karke ek aur user property 'city' add kijiye aur use display karein. Ek conditional rendering bhi add karein jo sirf tab dikhaye jab city 'Delhi' ho.",
          defaultCode: `import React from 'react';

function Greeting() {
  const user = {
    name: 'Rahul',
    age: 25
    // TODO: city property add kijiye
  };

  return (
    <div>
      <h1 className="heading">Hello, {user.name}!</h1>
      <p>Aapki umar {user.age} saal hai.</p>
      {user.age >= 18 && <p>Aap voting kar sakte hain.</p>}
      
      {/* TODO: city display kijiye with condition */}
      
      <button onClick={() => alert('Button clicked!')}>
        Click Me!
      </button>
    </div>
  );
}

export default Greeting;`
        },
        challenge: {
          description: "Ek ProductCard component banaiye jo JSX ka use karke ek product ki details show kare (name, price, description, inStock). Agar product stock mein hai to 'Buy Now' button dikhaye, nahi to 'Out of Stock' message display kare."
        },
        tags: ["jsx", "react-basics", "conditional-rendering"]
      },
      {
        id: "components-props",
        title: "Components & Props",
        hindiTitle: "Components aur Props",
        level: "Beginner",
        readingTime: 8,
        category: "beginner",
        shortDescription: "Components aur props ke baare mein jaaniye - React ki building blocks.",
        description: `React applications components se bani hoti hain. Ek component ek independent, reusable code piece hai jo UI ka ek part render karta hai.

React components do types ke hote hain - Function Components aur Class Components. Aaj kal functional components with hooks zyada popular hain.

Props (properties) ke through hum components ko data pass kar sakte hain, jisse components reusable ban jaate hain.`,
        keyPoints: [
          {
            title: "Reusable",
            description: "Components code reusability ko enable karte hain aur UI ko modular pieces mein divide karte hain."
          },
          {
            title: "Function Components",
            description: "Ye simple JavaScript functions hain jo props accept karte hain aur React elements return karte hain."
          },
          {
            title: "Props",
            description: "Props parent se child component mein data pass karne ka tarika hai. Props read-only hote hain."
          },
          {
            title: "Composition",
            description: "Complex UIs banane ke liye multiple components ko combine kiya ja sakta hai."
          }
        ],
        realLifeExample: "Components aur props ko aise samjhiye jaise LEGO blocks. Har LEGO piece (component) alag function karta hai aur aap unhe jod kar complex structures bana sakte hain. Props un instructions ki tarah hain jo batate hain ki har piece ko kaise use karna hai - kaunsa color, size, ya design chahiye.",
        codeExample: `import React from 'react';

// Child component
function UserInfo(props) {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

// Parent component
function App() {
  return (
    <div className="app">
      <h1>User Profiles</h1>
      
      <UserInfo name="Priya" age={24} city="Mumbai" />
      <UserInfo name="Rahul" age={28} city="Delhi" />
      <UserInfo name="Amit" age={22} city="Bangalore" />
    </div>
  );
}

export default App;`,
        codeExplanation: [
          {
            line: "Line 4-11",
            explanation: "UserInfo naam ka ek child component hai jo props accept karta hai. Ye props.name, props.age, aur props.city ko display karta hai."
          },
          {
            line: "Line 14-23",
            explanation: "App naam ka parent component hai jo multiple UserInfo components ko render karta hai."
          },
          {
            line: "Line 18-20",
            explanation: "UserInfo component ko different props ke saath use kiya gaya hai. Har component ko alag data pass kiya gaya hai."
          },
          {
            line: "Line 18",
            explanation: "Props camelCase mein hote hain aur unhe HTML attributes ki tarah component tag mein likhte hain. String values quotes mein aur non-string values (jaise numbers, variables) curly braces {} mein pass karte hain."
          }
        ],
        exercise: {
          description: "UserInfo component ko modify karke ek aur prop 'profession' add kijiye aur App component se use pass kijiye. Bonus: UserInfo component mein ek conditional render add kijiye jo profession ke basis par ek special message show kare.",
          defaultCode: `import React from 'react';

// Child component
function UserInfo(props) {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
      {/* TODO: Profession display kijiye */}
      
      {/* TODO: Conditional message add kijiye */}
    </div>
  );
}

// Parent component
function App() {
  return (
    <div className="app">
      <h1>User Profiles</h1>
      
      <UserInfo name="Priya" age={24} city="Mumbai" />
      <UserInfo name="Rahul" age={28} city="Delhi" />
      <UserInfo name="Amit" age={22} city="Bangalore" />
      
      {/* TODO: Profession prop add kijiye */}
    </div>
  );
}

export default App;`
        },
        challenge: {
          description: "Ek ProductList aur ProductItem components banaiye. ProductList component multiple ProductItem components ko render kare. ProductItem props ke through product details (name, price, image, rating) display kare. Rating ke basis par stars (1-5) bhi display karein."
        },
        tags: ["components", "props", "react-basics"]
      },
      {
        id: "useState",
        title: "useState Hook",
        hindiTitle: "useState Hook kya hai?",
        level: "Beginner",
        readingTime: 7,
        category: "beginner",
        shortDescription: "State management ke liye useState hook ka upyog karna seekhein.",
        description: `useState React ka ek hook hai jo functional components mein state management ke liye use hota hai. Ye component ko state (data) store karne aur update karne ki ability deta hai.

Jab state change hoti hai, component re-render hota hai aur updated UI dikhata hai. useState hook do values return karta hai: current state value aur ek function jo state ko update karne ke liye use hota hai.`,
        keyPoints: [
          {
            title: "State Management",
            description: "useState functional components mein state manage karne ka primary way hai."
          },
          {
            title: "Array Destructuring",
            description: "Hum array destructuring ka use useState ke return values ko access karne ke liye karte hain."
          },
          {
            title: "Multiple States",
            description: "Ek component mein multiple useState hooks use kar sakte hain."
          },
          {
            title: "Initializing State",
            description: "useState ko initial value pass karte hain jo kisi bhi valid JavaScript value ho sakta hai (object, array, number, string, etc.)."
          }
        ],
        realLifeExample: "useState hook ko aise samjhiye jaise aapke smart phone ka home screen. Aap jab bhi naya app install karte hain (state update), phone automatically screen refresh karta hai aur new app dikhata hai. Usi tarah, jab bhi aap useState ke through state update karte hain, React component re-render hota hai aur updated data dikhata hai.",
        codeExample: `import React, { useState } from 'react';

function Counter() {
  // useState hook initialize with 0
  const [count, setCount] = useState(0);
  
  // Event handlers
  const increment = () => {
    setCount(count + 1);
  };
  
  const decrement = () => {
    setCount(count - 1);
  };
  
  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;`,
        codeExplanation: [
          {
            line: "Line 1",
            explanation: "React aur useState hook ko import kiya hai."
          },
          {
            line: "Line 5",
            explanation: "useState hook ko initial value 0 ke saath initialize kiya hai. Ye hook ek array return karta hai jisko hum destructure kar rahe hain: count (current state) aur setCount (state update function)."
          },
          {
            line: "Line 8-10",
            explanation: "increment function jo setCount ke through count ko 1 se badhata hai."
          },
          {
            line: "Line 12-14",
            explanation: "decrement function jo setCount ke through count ko 1 se ghatata hai."
          },
          {
            line: "Line 18",
            explanation: "Current state value (count) ko UI mein display kiya gaya hai."
          },
          {
            line: "Line 19-20",
            explanation: "Buttons ke onClick events mein increment aur decrement functions assign kiye gaye hain."
          }
        ],
        exercise: {
          description: "Counter component ko modify karke ek reset button add kijiye jo count ko 0 pe reset kare. Ek aur feature add kijiye jismein count negative nahi ja sake - decrement sirf tab kaam kare jab count 0 se bada ho.",
          defaultCode: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  };
  
  const decrement = () => {
    setCount(count - 1);
  };
  
  // TODO: Reset function banaiye
  
  // TODO: Decrement function update kijiye taaki count negative na ho sake
  
  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {/* TODO: Reset button add kijiye */}
    </div>
  );
}

export default Counter;`
        },
        challenge: {
          description: "Ek Form component banaiye jismein name, email aur password fields hon. useState ka use karke form data manage karein. Submit button click karne par console mein form data log karein. Password ka length check karein - agar 6 characters se kam hai to error message display karein."
        },
        tags: ["useState", "hooks", "state-management"]
      },
      {
        id: "useEffect",
        title: "useEffect Hook",
        hindiTitle: "useEffect Hook kya hai?",
        level: "Beginner",
        readingTime: 9,
        category: "beginner",
        shortDescription: "Side effects handle karne ke liye useEffect hook ka upyog.",
        description: `useEffect React ka ek hook hai jo side effects handle karne ke liye use hota hai. Side effects examples hain: data fetching, DOM manipulation, subscriptions, ya timers.

useEffect hook do arguments leta hai: ek function jo side effect execute karta hai, aur ek optional dependency array jo control karta hai ki effect kab re-run hoga.`,
        keyPoints: [
          {
            title: "Component Lifecycle",
            description: "useEffect component mount, update, aur unmount events handle karta hai."
          },
          {
            title: "Dependency Array",
            description: "Dependency array control karta hai ki effect kab run hoga - har render pe, specific values change hone par, ya sirf once."
          },
          {
            title: "Cleanup Function",
            description: "Effect se return ki gayi function cleanup ke liye use hoti hai (jaise subscriptions ko remove karna)."
          },
          {
            title: "Multiple Effects",
            description: "Aap ek component mein multiple useEffect hooks use kar sakte hain, jisse code more organized rahta hai."
          }
        ],
        realLifeExample: "useEffect ko aise samjhiye jaise room ka AC. Jab aap room mein enter karte hain (component mount), AC on hota hai. Jab aap temperature setting change karte hain (state update), AC apna behavior adjust karta hai. Aur jab aap room se bahar jate hain (component unmount), AC automatically off ho jata hai. useEffect bhi isi tarah component ke lifecycle events par react karta hai.",
        codeExample: `import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let interval = null;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    
    // Cleanup function
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]); // Dependency array
  
  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };
  
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };
  
  return (
    <div className="timer">
      <h2>Timer: {seconds} seconds</h2>
      <button onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;`,
        codeExplanation: [
          {
            line: "Line 1",
            explanation: "React, useState aur useEffect hooks ko import kiya hai."
          },
          {
            line: "Line 4-5",
            explanation: "Do state variables initialize ki gayi hain: seconds (timer count) aur isRunning (timer state)."
          },
          {
            line: "Line 7-20",
            explanation: "useEffect hook jo timer functionality implement karta hai. Ye sirf tab effect run karta hai jab isRunning change hota hai (dependency array mein specified)."
          },
          {
            line: "Line 9-13",
            explanation: "Agar isRunning true hai, to setInterval use karke har second seconds state ko increment karta hai."
          },
          {
            line: "Line 16-20",
            explanation: "Cleanup function jo interval clear karta hai. Ye function component unmount hone par ya dependency array ki values change hone se pehle run hota hai."
          },
          {
            line: "Line 22-24",
            explanation: "handleStartStop function jo isRunning state ko toggle karta hai."
          },
          {
            line: "Line 26-29",
            explanation: "handleReset function jo timer ko reset karta hai."
          }
        ],
        exercise: {
          description: "Timer component mein ek feature add kijiye jismein user time limit set kar sake (seconds state ki jagah countdown ho). Jab timer 0 tak pahunch jaye, to countdown automatically stop ho jaye aur ek message display ho.",
          defaultCode: `import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  // TODO: timeLimit state add kijiye
  
  useEffect(() => {
    let interval = null;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    
    // Cleanup function
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]); // Dependency array
  
  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };
  
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };
  
  // TODO: handleSetTimeLimit function add kijiye
  
  // TODO: useEffect ko modify kijiye taaki countdown feature implement ho
  
  return (
    <div className="timer">
      <h2>Timer: {seconds} seconds</h2>
      <button onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
      
      {/* TODO: Time limit set karne ka UI add kijiye */}
    </div>
  );
}

export default Timer;`
        },
        challenge: {
          description: "Ek DataFetcher component banaiye jo useEffect hook use karke API se data fetch kare. Loading state aur error handling implement kijiye. User ko ek 'refresh' button bhi provide kijiye jisse data manually refresh kiya ja sake."
        },
        tags: ["useEffect", "hooks", "lifecycle", "side-effects"]
      }
    ]
  },
  {
    id: "intermediate",
    name: "Intermediate",
    description: "React ke intermediary concepts jisse aap complex applications bana sakein.",
    topics: [
      {
        id: "lists-and-keys",
        title: "Lists and Keys",
        hindiTitle: "Lists aur Keys",
        level: "Intermediate",
        readingTime: 6,
        category: "intermediate",
        shortDescription: "React mein lists render karna aur keys ka importance.",
        description: `React mein data collections (arrays) ko components mein transform karna common hai. Keys list items ko uniquely identify karne ke liye use hoti hain.

Keys React ko help karti hain identify karne mein ki kaunse items change hue, add hue, ya remove hue hain. Lists ko efficiently update karne ke liye array elements ko stable identity deni chahiye.`,
        keyPoints: [
          {
            title: "Array.map() Method",
            description: "Array data ko components mein transform karne ke liye map() method ka use karein."
          },
          {
            title: "Unique Keys",
            description: "Har list item ko unique key assign karein best performance ke liye."
          },
          {
            title: "Index as Keys",
            description: "Array index ko key ke taur par use karne se avoid karein jab items ka order change ho sakta hai."
          }
        ],
        codeExample: `import React, { useState } from 'react';

function ListsAndKeysExample() {
  // Sample data
  const initialTasks = [
    { id: 1, text: 'React basics seekhna', completed: true },
    { id: 2, text: 'Component structure samajhna', completed: true },
    { id: 3, text: 'Lists and keys ka use karna', completed: false },
    { id: 4, text: 'State management implement karna', completed: false },
    { id: 5, text: 'Project complete karna', completed: false }
  ];
  
  const initialStudents = [
    { id: 's1', name: 'Rahul', grade: 'A', course: 'React' },
    { id: 's2', name: 'Priya', grade: 'A+', course: 'Angular' },
    { id: 's3', name: 'Amit', grade: 'B', course: 'React' },
    { id: 's4', name: 'Neha', grade: 'A', course: 'Vue' }
  ];
  
  // State
  const [tasks, setTasks] = useState(initialTasks);
  const [students, setStudents] = useState(initialStudents);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  
  // Calculate stats
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  
  // Event handlers
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    const newTaskObj = {
      id: Date.now(), // Using timestamp as a unique ID
      text: newTask,
      completed: false
    };
    
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };
  
  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  const handleSortStudents = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    
    setStudents([...students].sort((a, b) => {
      if (newOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    }));
  };
  
  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });
  
  // Styles
  const styles = {
    container: {
      maxWidth: '700px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '20px',
      marginBottom: '20px'
    },
    form: {
      display: 'flex',
      marginBottom: '20px'
    },
    input: {
      flex: 1,
      padding: '8px 12px',
      borderRadius: '4px 0 0 4px',
      border: '1px solid #ddd',
      fontSize: '16px'
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '0 4px 4px 0',
      cursor: 'pointer',
      fontSize: '16px'
    },
    taskItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px',
      marginBottom: '8px',
      borderRadius: '4px',
      backgroundColor: '#f9f9f9'
    },
    completed: {
      textDecoration: 'line-through',
      color: '#777'
    },
    filterButtons: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px'
    },
    filterButton: {
      margin: '0 5px',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    activeFilter: {
      backgroundColor: '#4CAF50',
      color: 'white'
    },
    inactiveFilter: {
      backgroundColor: '#f1f1f1',
      color: '#333'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '15px'
    },
    th: {
      backgroundColor: '#f1f1f1',
      padding: '10px',
      textAlign: 'left',
      cursor: 'pointer'
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #eee'
    },
    alertMessage: {
      marginTop: '20px',
      padding: '10px',
      backgroundColor: '#f8d7da',
      color: '#721c24',
      borderRadius: '4px',
      display: 'none'
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Lists and Keys in React</h2>
        <p>Tasks completed: {completedTasks}/{totalTasks}</p>
      </div>
      
      {/* Example 1: Basic Task List with keys */}
      <div style={styles.card}>
        <h3>Example 1: Task List with Array.map() and Keys</h3>
        
        <form onSubmit={handleAddTask} style={styles.form}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Add</button>
        </form>
        
        <div style={styles.filterButtons}>
          <button 
            onClick={() => setFilter('all')}
            style={{
              ...styles.filterButton,
              ...(filter === 'all' ? styles.activeFilter : styles.inactiveFilter)
            }}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('active')}
            style={{
              ...styles.filterButton,
              ...(filter === 'active' ? styles.activeFilter : styles.inactiveFilter)
            }}
          >
            Active
          </button>
          <button 
            onClick={() => setFilter('completed')}
            style={{
              ...styles.filterButton,
              ...(filter === 'completed' ? styles.activeFilter : styles.inactiveFilter)
            }}
          >
            Completed
          </button>
        </div>
        
        <div>
          {filteredTasks.length > 0 ? (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {filteredTasks.map(task => (
                <li key={task.id} style={styles.taskItem}>
                  <div>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleComplete(task.id)}
                      style={{ marginRight: '10px' }}
                    />
                    <span style={task.completed ? styles.completed : null}>
                      {task.text}
                    </span>
                  </div>
                  <button 
                    onClick={() => handleDeleteTask(task.id)}
                    style={{
                      padding: '5px 8px',
                      backgroundColor: '#f44336',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ textAlign: 'center', color: '#777' }}>
              No tasks found.
            </p>
          )}
        </div>
        
        <div style={{ marginTop: '15px' }}>
          <h4>Key Points:</h4>
          <ul>
            <li>Har task ko unique id (key) assign ki gayi hai</li>
            <li>Map function se array ko JSX elements mein convert kiya gaya hai</li>
            <li>Without keys, React ko pata nahi chalega ki konsa item update, delete ya add hua hai</li>
          </ul>
        </div>
      </div>
      
      {/* Example 2: Sortable Student List */}
      <div style={styles.card}>
        <h3>Example 2: Sortable Student List</h3>
        <p>Click on "Name" header to sort list:</p>
        
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th} onClick={handleSortStudents}>
                Name {sortOrder === 'asc' ? '↑' : '↓'}
              </th>
              <th style={styles.th}>Course</th>
              <th style={styles.th}>Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td style={styles.td}>{student.name}</td>
                <td style={styles.td}>{student.course}</td>
                <td style={styles.td}>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div style={{ marginTop: '15px' }}>
          <h4>Key Points:</h4>
          <ul>
            <li>Sorting ke bawajood React correctly identified each student kyunki unique keys hai</li>
            <li>Keys array indexes par depend nahi karti, isliye list reorder karne par bhi problem nahi hoti</li>
          </ul>
        </div>
      </div>
      
      {/* Anti-pattern example with index as keys */}
      <div style={styles.card}>
        <h3>Warning: Anti-pattern Example</h3>
        <p>Array index ko key ke roop mein use karna usually bad practice hai:</p>
        
        <pre style={{ 
          backgroundColor: '#ffebee', 
          padding: '10px', 
          borderRadius: '4px',
          overflowX: 'auto'
        }}>
{"// AVOID THIS\\n{items.map((item, index) => (\\n  <li key={index}>\\n    {item.text}\\n  </li>\\n))}\\n\\n// BETTER APPROACH\\n{items.map((item) => (\\n  <li key={item.id}>\\n    {item.text}\\n  </li>\\n))}"}
        </pre>
        
        <p>Index as keys tab hi use karein jab:</p>
        <ul>
          <li>Items ke paas stable IDs na ho</li>
          <li>List static ho aur kabhi reorder na ho</li>
          <li>List mein add/remove operations na ho</li>
        </ul>
      </div>
      
      <div style={styles.card}>
        <h3>Lists and Keys: Best Practices</h3>
        <ul>
          <li>
            <strong>Item IDs ka use karein:</strong> Database-generated IDs ko keys ke liye use karein
          </li>
          <li>
            <strong>Unique hona zaroori hai:</strong> Keys sirf siblings ke beech unique hone chahiye (global uniqueness not required)
          </li>
          <li>
            <strong>Stable identifiers:</strong> Re-renders ke beech keys consistent hone chahiye
          </li>
          <li>
            <strong>Element ke andar index mat rakho:</strong> <code>key={i}</code> prop hi use karein,
elements ke andar index store na karein
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ListsAndKeysExample;`,
        codeExampleTitle: "Lists and Keys - Interactive Example",
        codeExampleDescription: "Is example mein, hum do practical applications dekhenge: ek task list aur ek sortable student table, dono proper keys use karke implement ki gayi hain.",
        filename: "ListsAndKeysExample.jsx",
        codeExplanation: [
          {
            line: "Line 4-16",
            explanation: "Sample data initialize kiya gaya hai - tasks aur students arrays with unique IDs."
          },
          {
            line: "Line 19-23",
            explanation: "State variables define ki gayi hain - tasks, students, aur UI controls ke liye."
          },
          {
            line: "Line 29-39",
            explanation: "handleAddTask function jo naye task ko unique ID generate karke list mein add karta hai."
          },
          {
            line: "Line 41-45",
            explanation: "handleToggleComplete function jo task status toggle karta hai using map() to create a new array."
          },
          {
            line: "Line 47-49",
            explanation: "handleDeleteTask function jo task remove karta hai filter() method se."
          },
          {
            line: "Line 134-179",
            explanation: "Task list rendering using map() with keys. Har list item unique key={task.id} use kar raha hai."
          },
          {
            line: "Line 198-211",
            explanation: "Sortable student table with key={student.id} for each row, ensuring React can properly track items during sorting."
          }
        ],
        exercise: {
          description: "ListsAndKeysExample mein ek aur feature implement kijiye - 'Filter by Course' option jisse students list course naam se filter kar sake. Ensure kijiye ki aapke saare rendered list items proper keys use kar rahe hain.",
          defaultCode: `import React, { useState } from 'react';

function ListsAndKeysExample() {
  // Sample data
  const initialTasks = [
    { id: 1, text: 'React basics seekhna', completed: true },
    { id: 2, text: 'Component structure samajhna', completed: true },
    { id: 3, text: 'Lists and keys ka use karna', completed: false },
    { id: 4, text: 'State management implement karna', completed: false },
    { id: 5, text: 'Project complete karna', completed: false }
  ];
  
  const initialStudents = [
    { id: 's1', name: 'Rahul', grade: 'A', course: 'React' },
    { id: 's2', name: 'Priya', grade: 'A+', course: 'Angular' },
    { id: 's3', name: 'Amit', grade: 'B', course: 'React' },
    { id: 's4', name: 'Neha', grade: 'A', course: 'Vue' }
  ];
  
  // State
  const [tasks, setTasks] = useState(initialTasks);
  const [students, setStudents] = useState(initialStudents);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  // TODO: Add state for course filter
  // const [courseFilter, setCourseFilter] = useState('all');
  
  // Calculate stats
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  
  // TODO: Extract unique courses from student data
  // const uniqueCourses = [...new Set(students.map(student => student.course))];
  
  // Event handlers
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    const newTaskObj = {
      id: Date.now(), // Using timestamp as a unique ID
      text: newTask,
      completed: false
    };
    
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };
  
  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  const handleSortStudents = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    
    setStudents([...students].sort((a, b) => {
      if (newOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    }));
  };
  
  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });
  
  // TODO: Filter students by course
  // const filteredStudents = students.filter(student => {
  //   if (courseFilter === 'all') return true;
  //   return student.course === courseFilter;
  // });
  
  // Styles
  const styles = {
    container: {
      maxWidth: '700px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '20px',
      marginBottom: '20px'
    },
    form: {
      display: 'flex',
      marginBottom: '20px'
    },
    input: {
      flex: 1,
      padding: '8px 12px',
      borderRadius: '4px 0 0 4px',
      border: '1px solid #ddd',
      fontSize: '16px'
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '0 4px 4px 0',
      cursor: 'pointer',
      fontSize: '16px'
    },
    taskItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px',
      marginBottom: '8px',
      borderRadius: '4px',
      backgroundColor: '#f9f9f9'
    },
    completed: {
      textDecoration: 'line-through',
      color: '#777'
    },
    filterButtons: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px'
    },
    filterButton: {
      margin: '0 5px',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    activeFilter: {
      backgroundColor: '#4CAF50',
      color: 'white'
    },
    inactiveFilter: {
      backgroundColor: '#f1f1f1',
      color: '#333'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '15px'
    },
    th: {
      backgroundColor: '#f1f1f1',
      padding: '10px',
      textAlign: 'left',
      cursor: 'pointer'
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #eee'
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Lists and Keys in React</h2>
        <p>Tasks completed: {completedTasks}/{totalTasks}</p>
      </div>
      
      {/* Example 1: Basic Task List with keys */}
      <div style={styles.card}>
        <h3>Example 1: Task List with Array.map() and Keys</h3>
        
        <form onSubmit={handleAddTask} style={styles.form}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Add</button>
        </form>
        
        <div style={styles.filterButtons}>
          <button 
            onClick={() => setFilter('all')}
            style={{
              ...styles.filterButton,
              ...(filter === 'all' ? styles.activeFilter : styles.inactiveFilter)
            }}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('active')}
            style={{
              ...styles.filterButton,
              ...(filter === 'active' ? styles.activeFilter : styles.inactiveFilter)
            }}
          >
            Active
          </button>
          <button 
            onClick={() => setFilter('completed')}
            style={{
              ...styles.filterButton,
              ...(filter === 'completed' ? styles.activeFilter : styles.inactiveFilter)
            }}
          >
            Completed
          </button>
        </div>
        
        <div>
          {filteredTasks.length > 0 ? (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {filteredTasks.map(task => (
                <li key={task.id} style={styles.taskItem}>
                  <div>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleComplete(task.id)}
                      style={{ marginRight: '10px' }}
                    />
                    <span style={task.completed ? styles.completed : null}>
                      {task.text}
                    </span>
                  </div>
                  <button 
                    onClick={() => handleDeleteTask(task.id)}
                    style={{
                      padding: '5px 8px',
                      backgroundColor: '#f44336',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ textAlign: 'center', color: '#777' }}>
              No tasks found.
            </p>
          )}
        </div>
      </div>
      
      {/* Example 2: Sortable Student List */}
      <div style={styles.card}>
        <h3>Example 2: Sortable Student List</h3>
        <p>Click on "Name" header to sort list:</p>
        
        {/* TODO: Add course filter buttons here */}
        {/* <div style={styles.filterButtons}>
          <button 
            onClick={() => setCourseFilter('all')}
            style={{
              ...styles.filterButton,
              ...(courseFilter === 'all' ? styles.activeFilter : styles.inactiveFilter)
            }}
          >
            All Courses
          </button>
          
          {uniqueCourses.map(course => (
            <button 
              key={course}
              onClick={() => setCourseFilter(course)}
              style={{
                ...styles.filterButton,
                ...(courseFilter === course ? styles.activeFilter : styles.inactiveFilter)
              }}
            >
              {course}
            </button>
          ))}
        </div> */}
        
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th} onClick={handleSortStudents}>
                Name {sortOrder === 'asc' ? '↑' : '↓'}
              </th>
              <th style={styles.th}>Course</th>
              <th style={styles.th}>Grade</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Use filteredStudents instead of students */}
            {students.map(student => (
              <tr key={student.id}>
                <td style={styles.td}>{student.name}</td>
                <td style={styles.td}>{student.course}</td>
                <td style={styles.td}>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListsAndKeysExample;`
        },
        tags: ["lists", "keys", "array-rendering", "map-function"]
      },
      {
        id: "useRef",
        title: "useRef Hook",
        hindiTitle: "useRef Hook kya hai?",
        level: "Intermediate",
        readingTime: 7,
        category: "intermediate",
        shortDescription: "DOM elements access karne aur mutable variables store karne ke liye useRef.",
        description: `useRef React ka hook hai jo do primary uses ke liye hota hai:
1. DOM elements ko directly access karna (jaise input field ko focus karna)
2. Mutable variables store karna jo re-renders trigger nahi karte

useRef ek object return karta hai jiska ek .current property hota hai. Is property ki value ko change karna component ko re-render nahi karata, jo ise useState se different banata hai.`,
        keyPoints: [
          {
            title: "DOM Access",
            description: "Direct DOM elements ko access aur manipulate karein."
          },
          {
            title: "Persistent Values",
            description: "Values ko store karein jo re-renders ke beech persist rahein, lekin updates trigger na karein."
          },
          {
            title: ".current Property",
            description: "useRef .current property return karta hai jise modify karne se re-renders trigger nahi hote."
          }
        ],
        codeExample: `import React, { useRef, useState, useEffect } from 'react';

function UseRefExample() {
  // DOM element ko reference karne ke liye useRef
  const inputRef = useRef(null);
  
  // Previous value ko track karne ke liye useRef
  const prevCountRef = useRef(null);
  
  // Simple counter
  const [count, setCount] = useState(0);
  
  // Focus button click handler
  const handleFocusClick = () => {
    // inputRef.current se directly DOM element ko access kiya
    inputRef.current.focus();
    // Optional: input ki value bhi set kar sakte hain
    inputRef.current.value = "useRef is powerful!";
  };
  
  // useEffect se previous count ko track karein
  useEffect(() => {
    // ref update karna re-render trigger nahi karta
    prevCountRef.current = count;
  }, [count]);
  
  return (
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      border: '1px solid #eaeaea',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>useRef Hook Examples</h2>
      
      {/* Example 1: DOM Reference */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Example 1: DOM Reference</h3>
        <p>Input field ko focus karne ke liye ref ka use:</p>
        
        <div style={{ margin: '15px 0' }}>
          <input 
            ref={inputRef} 
            type="text" 
            placeholder="Type something..."
            style={{
              padding: '8px',
              marginRight: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
          <button 
            onClick={handleFocusClick}
            style={{
              padding: '8px 16px',
              backgroundColor: '#4285f4',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Focus Input
          </button>
        </div>
        <p style={{ fontSize: '0.9em', color: '#666' }}>
          useRef se hum DOM elements ko directly access kar sakte hain aur unke methods jaise focus(), select(), etc. call kar sakte hain.
        </p>
      </div>
      
      {/* Example 2: Persistent Value */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Example 2: Previous Value Tracking</h3>
        <p>Current Value: <strong>{count}</strong></p>
        <p>Previous Value: <strong>{prevCountRef.current !== null ? prevCountRef.current : 'None'}</strong></p>
        
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#0f9d58',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Increment
        </button>
        
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#db4437',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Decrement
        </button>
        
        <p style={{ fontSize: '0.9em', color: '#666', marginTop: '10px' }}>
          useRef ka use values ko renders ke beech persist rakhne ke liye kiya ja sakta hai. 
          Yahan hum previous counter value ko track kar rahe hain, jo state update hone par update hoti hai.
        </p>
      </div>
      
      <div style={{ fontSize: '0.9em', padding: '15px', backgroundColor: '#e8f5e9', borderRadius: '4px' }}>
        <p><strong>Note:</strong> useRef ke do main uses hain:</p>
        <ol>
          <li>DOM elements ko access karna (Example 1)</li>
          <li>Mutable values store karna jo re-render trigger na karein (Example 2)</li>
        </ol>
        <p>
          useRef ka .current property update karne se component re-render nahi hota, 
          jisse ye useState se different hai.
        </p>
      </div>
    </div>
  );
}

export default UseRefExample;`,
        codeExampleTitle: "useRef Hook Demo",
        codeExampleDescription: "Is example mein, hum useRef ke dono main uses dekhenge: DOM elements ko access karna aur values ko persist karna re-renders ke beech.",
        filename: "UseRefExample.jsx",
        codeExplanation: [
          {
            line: "Line 1",
            explanation: "React, useRef, useState, aur useEffect hooks import kiye gaye hain."
          },
          {
            line: "Line 5",
            explanation: "inputRef create kiya gaya hai DOM element ko reference karne ke liye."
          },
          {
            line: "Line 8",
            explanation: "prevCountRef create kiya gaya hai jo previous counter value track karne ke liye use hoga."
          },
          {
            line: "Line 14-18",
            explanation: "handleFocusClick function inputRef.current se direct DOM element ko access karta hai aur focus() method call karta hai."
          },
          {
            line: "Line 21-24",
            explanation: "useEffect hook jo count change hone par prevCountRef.current update karta hai."
          },
          {
            line: "Line 36-51",
            explanation: "First example: DOM reference ke use case, jahan input element ko useRef se reference kiya gaya hai."
          },
          {
            line: "Line 56-82",
            explanation: "Second example: Mutable value ko persist karne ka use case, jahan previous counter value ko track kiya ja raha hai."
          }
        ],
        exercise: {
          description: "UseRefExample component ko extend karke ek timer feature add kijiye. useRef ka use karke interval ID store kijiye aur ek button add kijiye jo timer start/stop kare. Component unmount hone par interval clear bhi kijiye.",
          defaultCode: `import React, { useRef, useState, useEffect } from 'react';

function UseRefExample() {
  // DOM element ko reference karne ke liye useRef
  const inputRef = useRef(null);
  
  // Previous value ko track karne ke liye useRef
  const prevCountRef = useRef(null);
  
  // TODO: Timer ke liye states aur ref add kijiye
  // const [seconds, setSeconds] = useState(0);
  // const [isRunning, setIsRunning] = useState(false);
  // const intervalRef = useRef(null);
  
  // Simple counter
  const [count, setCount] = useState(0);
  
  // Focus button click handler
  const handleFocusClick = () => {
    inputRef.current.focus();
    inputRef.current.value = "useRef is powerful!";
  };
  
  // useEffect se previous count ko track karein
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  
  // TODO: Timer functionality ke liye useEffect add kijiye
  // useEffect(() => {
  //   if (isRunning) {
  //     intervalRef.current = setInterval(() => {
  //       setSeconds(seconds => seconds + 1);
  //     }, 1000);
  //   }
  //
  //   return () => {
  //     clearInterval(intervalRef.current);
  //   };
  // }, [isRunning]);
  
  // TODO: Timer start/stop toggle function add kijiye
  
  return (
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      border: '1px solid #eaeaea',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>useRef Hook Examples</h2>
      
      {/* Example 1: DOM Reference */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Example 1: DOM Reference</h3>
        <p>Input field ko focus karne ke liye ref ka use:</p>
        
        <div style={{ margin: '15px 0' }}>
          <input 
            ref={inputRef} 
            type="text" 
            placeholder="Type something..."
            style={{
              padding: '8px',
              marginRight: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
          <button 
            onClick={handleFocusClick}
            style={{
              padding: '8px 16px',
              backgroundColor: '#4285f4',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Focus Input
          </button>
        </div>
      </div>
      
      {/* Example 2: Previous Value Tracking */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Example 2: Previous Value Tracking</h3>
        <p>Current Value: <strong>{count}</strong></p>
        <p>Previous Value: <strong>{prevCountRef.current !== null ? prevCountRef.current : 'None'}</strong></p>
        
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#0f9d58',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Increment
        </button>
        
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#db4437',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Decrement
        </button>
      </div>
      
      {/* TODO: Example 3: Timer with useRef 
      <div style={{ marginBottom: '30px' }}>
        <h3>Example 3: Timer with useRef</h3>
        <p>Seconds: <strong>{seconds}</strong></p>
        
        <button 
          onClick={YOUR_TOGGLE_FUNCTION}
          style={{
            padding: '8px 16px',
            backgroundColor: isRunning ? '#db4437' : '#0f9d58',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {isRunning ? 'Stop Timer' : 'Start Timer'}
        </button>
        
        <p style={{ fontSize: '0.9em', color: '#666', marginTop: '10px' }}>
          intervalRef.current mein interval ID store karke, hum use component unmount 
          hone par clear kar sakte hain, jisse memory leaks avoid hote hain.
        </p>
      </div>
      */}
    </div>
  );
}

export default UseRefExample;`
        },
        tags: ["useRef", "hooks", "DOM", "refs"]
      },
      {
        id: "forms",
        title: "Form Handling",
        hindiTitle: "Forms ko handle karna",
        level: "Intermediate",
        readingTime: 8,
        category: "intermediate",
        shortDescription: "React mein forms handle karne ke tarike aur unki validation.",
        description: `React mein forms ka use user input collect karne ke liye kiya jata hai. Forms handle karne ke liye do approaches hain:
1. Controlled Components: Jahan React state form ka single source of truth hota hai
2. Uncontrolled Components: Jahan DOM itself form data maintain karta hai

Controlled components mein har form element ka value React state se connect hota hai aur event handlers se update hota hai.`,
        keyPoints: [
          {
            title: "Controlled Components",
            description: "Form elements ko React state se control karna, making React the single source of truth."
          },
          {
            title: "Form Validation",
            description: "User input validate karna submission se pehle aur meaningful error messages dikhana."
          },
          {
            title: "Form Submission",
            description: "Form submission ko handle karna aur user ko feedback provide karna."
          }
        ],
        codeExample: `import React, { useState } from 'react';

function FormHandlingExample() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: 'prefer-not-to-say',
    interests: []
  });
  
  // Error state
  const [errors, setErrors] = useState({});
  
  // Success state
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Input change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // For checkbox inputs
    if (type === 'checkbox') {
      let updatedInterests = [...formData.interests];
      if (checked) {
        updatedInterests.push(value);
      } else {
        updatedInterests = updatedInterests.filter(interest => interest !== value);
      }
      
      setFormData(prevState => ({
        ...prevState,
        interests: updatedInterests
      }));
    } 
    // For all other inputs
    else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing again
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email";
      isValid = false;
    }
    
    // Password validation
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }
    
    // Age validation
    if (formData.age && (isNaN(formData.age) || parseInt(formData.age) < 0)) {
      tempErrors.age = "Please enter a valid age";
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form before submission
    const isValid = validateForm();
    
    if (isValid) {
      // In a real app, you would send the data to an API
      console.log("Form data:", formData);
      setIsSubmitted(true);
    }
  };
  
  // Reset form
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      age: '',
      gender: 'prefer-not-to-say',
      interests: []
    });
    setErrors({});
    setIsSubmitted(false);
  };
  
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>React Form Handling Example</h2>
      
      {isSubmitted ? (
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#d4edda', 
          color: '#155724',
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          <h3>Success! Form submitted.</h3>
          <p>We received your information:</p>
          <ul>
            <li><strong>Name:</strong> {formData.name}</li>
            <li><strong>Email:</strong> {formData.email}</li>
            <li><strong>Age:</strong> {formData.age || 'Not specified'}</li>
            <li><strong>Gender:</strong> {formData.gender}</li>
            <li><strong>Interests:</strong> {formData.interests.length ? formData.interests.join(', ') : 'None selected'}</li>
          </ul>
          <button 
            onClick={handleReset}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Submit another form
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {/* Name field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: errors.name ? '1px solid #dc3545' : '1px solid #ced4da'
              }}
            />
            {errors.name && (
              <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '5px' }}>
                {errors.name}
              </p>
            )}
          </div>
          
          {/* Email field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: errors.email ? '1px solid #dc3545' : '1px solid #ced4da'
              }}
            />
            {errors.email && (
              <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '5px' }}>
                {errors.email}
              </p>
            )}
          </div>
          
          {/* Password field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: errors.password ? '1px solid #dc3545' : '1px solid #ced4da'
              }}
            />
            {errors.password && (
              <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '5px' }}>
                {errors.password}
              </p>
            )}
          </div>
          
          {/* Age field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="age" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Age (optional)
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: errors.age ? '1px solid #dc3545' : '1px solid #ced4da'
              }}
            />
            {errors.age && (
              <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '5px' }}>
                {errors.age}
              </p>
            )}
          </div>
          
          {/* Gender selection */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Gender
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Male
              </label>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Female
              </label>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="radio"
                  name="gender"
                  value="prefer-not-to-say"
                  checked={formData.gender === 'prefer-not-to-say'}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Prefer not to say
              </label>
            </div>
          </div>
          
          {/* Interests checkboxes */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Interests (Select all that apply)
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  name="interests"
                  value="sports"
                  checked={formData.interests.includes('sports')}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Sports
              </label>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  name="interests"
                  value="music"
                  checked={formData.interests.includes('music')}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Music
              </label>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  name="interests"
                  value="reading"
                  checked={formData.interests.includes('reading')}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Reading
              </label>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  name="interests"
                  value="technology"
                  checked={formData.interests.includes('technology')}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Technology
              </label>
            </div>
          </div>
          
          {/* Submit button */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button 
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Submit
            </button>
            <button 
              type="button"
              onClick={handleReset}
              style={{
                padding: '10px 20px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default FormHandlingExample;`,
        codeExampleTitle: "Controlled Form Example",
        codeExampleDescription: "Iss example mein, hum React mein controlled forms ka use karke ek registration form banayenge, jisme validation aur error handling bhi shamil hai.",
        filename: "FormHandlingExample.jsx",
        codeExplanation: [
          {
            line: "Line 4-12",
            explanation: "Form state initialization with useState. Har form field ke liye ek corresponding state property hai."
          },
          {
            line: "Line 15-16",
            explanation: "Error state for form validation. Errors object mein har field ke liye error messages store honge."
          },
          {
            line: "Line 19",
            explanation: "isSubmitted state track karta hai ki form successfully submit hua hai ya nahi."
          },
          {
            line: "Line 22-51",
            explanation: "handleChange function har input change par state update karta hai. Checkboxes ke liye special handling hai kyunki ye multiple values store kar sakte hain."
          },
          {
            line: "Line 54-86",
            explanation: "validateForm function form submission se pehle input data validate karta hai aur appropriate error messages set karta hai."
          },
          {
            line: "Line 89-100",
            explanation: "handleSubmit function form submission handle karta hai, validation run karta hai, aur valid hone par form data process karta hai."
          },
          {
            line: "Line 103-113",
            explanation: "handleReset function form ko initial state mein reset karta hai."
          },
          {
            line: "Line 116-328",
            explanation: "Form UI rendering, including conditional rendering based on submission state, form fields with error messages, and buttons."
          }
        ],
        exercise: {
          description: "FormHandlingExample ko enhance karke form mein ek dropdown (select) field add kijiye jisme user apna country select kar sake. Ensure kijiye ki ye controlled component ho, validation ho, aur submission par capture ho.",
          defaultCode: `import React, { useState } from 'react';

function FormHandlingExample() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: 'prefer-not-to-say',
    interests: []
    // TODO: country field add kijiye
  });
  
  // Error state
  const [errors, setErrors] = useState({});
  
  // Success state
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Input change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // For checkbox inputs
    if (type === 'checkbox') {
      let updatedInterests = [...formData.interests];
      if (checked) {
        updatedInterests.push(value);
      } else {
        updatedInterests = updatedInterests.filter(interest => interest !== value);
      }
      
      setFormData(prevState => ({
        ...prevState,
        interests: updatedInterests
      }));
    } 
    // For all other inputs
    else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing again
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email";
      isValid = false;
    }
    
    // Password validation
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }
    
    // Age validation
    if (formData.age && (isNaN(formData.age) || parseInt(formData.age) < 0)) {
      tempErrors.age = "Please enter a valid age";
      isValid = false;
    }
    
    // TODO: Country validation add kijiye
    
    setErrors(tempErrors);
    return isValid;
  };
  
  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form before submission
    const isValid = validateForm();
    
    if (isValid) {
      // In a real app, you would send the data to an API
      console.log("Form data:", formData);
      setIsSubmitted(true);
    }
  };
  
  // Reset form
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      age: '',
      gender: 'prefer-not-to-say',
      interests: []
      // TODO: country ko bhi reset kijiye
    });
    setErrors({});
    setIsSubmitted(false);
  };
  
  // TODO: Countries ki list define kijiye
  // const countries = [
  //   { value: '', label: 'Select country' },
  //   { value: 'in', label: 'India' },
  //   { value: 'us', label: 'United States' },
  //   { value: 'uk', label: 'United Kingdom' },
  //   { value: 'ca', label: 'Canada' },
  //   { value: 'au', label: 'Australia' }
  // ];
  
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>React Form Handling Example</h2>
      
      {isSubmitted ? (
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#d4edda', 
          color: '#155724',
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          <h3>Success! Form submitted.</h3>
          <p>We received your information:</p>
          <ul>
            <li><strong>Name:</strong> {formData.name}</li>
            <li><strong>Email:</strong> {formData.email}</li>
            <li><strong>Age:</strong> {formData.age || 'Not specified'}</li>
            <li><strong>Gender:</strong> {formData.gender}</li>
            <li><strong>Interests:</strong> {formData.interests.length ? formData.interests.join(', ') : 'None selected'}</li>
            {/* TODO: Country display bhi add kijiye */}
          </ul>
          <button 
            onClick={handleReset}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Submit another form
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {/* Name field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: errors.name ? '1px solid #dc3545' : '1px solid #ced4da'
              }}
            />
            {errors.name && (
              <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '5px' }}>
                {errors.name}
              </p>
            )}
          </div>
          
          {/* Email field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: errors.email ? '1px solid #dc3545' : '1px solid #ced4da'
              }}
            />
            {errors.email && (
              <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '5px' }}>
                {errors.email}
              </p>
            )}
          </div>
          
          {/* Password field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: errors.password ? '1px solid #dc3545' : '1px solid #ced4da'
              }}
            />
            {errors.password && (
              <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '5px' }}>
                {errors.password}
              </p>
            )}
          </div>
          
          {/* Age field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="age" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Age (optional)
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: errors.age ? '1px solid #dc3545' : '1px solid #ced4da'
              }}
            />
            {errors.age && (
              <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '5px' }}>
                {errors.age}
              </p>
            )}
          </div>
          
          {/* TODO: Country dropdown field add kijiye */}
          
          {/* Gender selection */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Gender
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Male
              </label>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Female
              </label>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="radio"
                  name="gender"
                  value="prefer-not-to-say"
                  checked={formData.gender === 'prefer-not-to-say'}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Prefer not to say
              </label>
            </div>
          </div>
          
          {/* Interests checkboxes */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Interests (Select all that apply)
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  name="interests"
                  value="sports"
                  checked={formData.interests.includes('sports')}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Sports
              </label>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  name="interests"
                  value="music"
                  checked={formData.interests.includes('music')}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Music
              </label>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  name="interests"
                  value="reading"
                  checked={formData.interests.includes('reading')}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Reading
              </label>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  name="interests"
                  value="technology"
                  checked={formData.interests.includes('technology')}
                  onChange={handleChange}
                  style={{ marginRight: '8px' }}
                />
                Technology
              </label>
            </div>
          </div>
          
          {/* Submit button */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button 
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Submit
            </button>
            <button 
              type="button"
              onClick={handleReset}
              style={{
                padding: '10px 20px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default FormHandlingExample;`
        },
        tags: ["forms", "controlled-components", "validation"]
      },
      {
        id: "api-integration",
        title: "API Integration",
        hindiTitle: "API Integration kaise karein",
        level: "Intermediate",
        readingTime: 6,
        category: "intermediate",
        shortDescription: "React applications mein APIs integrate karna seekhein.",
        description: `Modern web applications APIs ke through external data sources se connect hote hain. React mein API calls mainly useEffect hook ke andar kiye jate hain.

API calls karne ke liye common methods hain:
1. Fetch API (built-in)
2. Axios (popular third-party library)

API calls asynchronous hote hain, isliye promises ya async/await syntax ka use kiya jata hai.`,
        keyPoints: [
          {
            title: "Fetch API",
            description: "Browser built-in API jo promise-based approach use karta hai HTTP requests ke liye."
          },
          {
            title: "Async/Await",
            description: "Modern JavaScript syntax jo asynchronous code ko synchronous jaisa likhne mein help karta hai."
          },
          {
            title: "Error Handling",
            description: "API calls mein errors ko properly handle karna critical hai better user experience ke liye."
          },
          {
            title: "Loading States",
            description: "User ko feedback dena API call progress ke baare mein loading indicators ke saath."
          }
        ],
        codeExample: `import React, { useState, useEffect } from 'react';

function ApiIntegrationExample() {
  // State for different API examples
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState({
    title: '',
    body: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  // Fetch users data on component mount
  useEffect(() => {
    fetchUsers();
  }, []);
  
  // Fetch user list with Fetch API
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      // Check if response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(\`API error: \${response.status}\`);
      }
      
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch users');
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };
  
  // Fetch single user details
  const fetchUserDetails = async (userId) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
      
      if (!response.ok) {
        throw new Error(\`API error: \${response.status}\`);
      }
      
      const userData = await response.json();
      setSelectedUser(userData);
    } catch (err) {
      setError(err.message || 'Failed to fetch user details');
      setSelectedUser(null);
    } finally {
      setLoading(false);
    }
  };
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Submit new post
  const submitPost = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!postData.title.trim() || !postData.body.trim()) {
      setSubmitError('Please fill in all fields');
      return;
    }
    
    try {
      setSubmitting(true);
      setSubmitError(null);
      setSubmitSuccess(false);
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...postData,
          userId: selectedUser?.id || 1
        })
      });
      
      if (!response.ok) {
        throw new Error(\`API error: \${response.status}\`);
      }
      
      await response.json();
      setSubmitSuccess(true);
      setPostData({ title: '', body: '' });
    } catch (err) {
      setSubmitError(err.message || 'Failed to submit post');
    } finally {
      setSubmitting(false);
    }
  };
  
  // Retry fetching
  const retryFetch = () => {
    fetchUsers();
  };
  
  // Cancel user selection
  const clearUserSelection = () => {
    setSelectedUser(null);
  };
  
  // Styles
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      marginBottom: '30px',
      textAlign: 'center'
    },
    card: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    },
    loadingContainer: {
      textAlign: 'center',
      padding: '20px'
    },
    errorContainer: {
      backgroundColor: '#ffebee',
      padding: '15px',
      borderRadius: '4px',
      marginBottom: '20px',
      color: '#c62828'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '15px'
    },
    userCard: {
      padding: '15px',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    userCardHover: {
      backgroundColor: '#f5f5f5',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    userDetailCard: {
      backgroundColor: '#f5f9ff',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px'
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#2196f3',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '10px'
    },
    disabledButton: {
      opacity: 0.7,
      cursor: 'not-allowed'
    },
    successMessage: {
      backgroundColor: '#e8f5e9',
      color: '#2e7d32',
      padding: '15px',
      borderRadius: '4px',
      marginBottom: '20px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    input: {
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '16px'
    },
    textarea: {
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '16px',
      minHeight: '100px',
      resize: 'vertical'
    },
    codeBlock: {
      backgroundColor: '#f5f5f5',
      padding: '15px',
      borderRadius: '4px',
      overflowX: 'auto',
      fontFamily: 'monospace',
      fontSize: '14px',
      lineHeight: '1.5'
    }
  };
  
  // Render helper for loading state
  const renderLoading = () => (
    <div style={styles.loadingContainer}>
      <div>Loading...</div>
    </div>
  );
  
  // Render helper for error state
  const renderError = (errorMessage) => (
    <div style={styles.errorContainer}>
      <h3>Error</h3>
      <p>{errorMessage}</p>
      <button onClick={retryFetch} style={styles.button}>
        Retry
      </button>
    </div>
  );
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>API Integration in React</h1>
        <p>Interacting with REST APIs using Fetch API and async/await</p>
      </div>
      
      {/* Display any fetch errors */}
      {error && renderError(error)}
      
      {/* GET Request Example */}
      <div style={styles.card}>
        <h2>Example 1: GET Request (Fetch Users)</h2>
        
        {loading && !selectedUser ? (
          renderLoading()
        ) : (
          <>
            <h3>User List</h3>
            
            {users.length > 0 ? (
              <div style={styles.grid}>
                {users.slice(0, 6).map(user => (
                  <div
                    key={user.id}
                    style={{
                      ...styles.userCard,
                      ...(user.id === selectedUser?.id ? styles.userCardHover : {})
                    }}
                    onClick={() => fetchUserDetails(user.id)}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#f5f5f5';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                    }}
                    onMouseOut={(e) => {
                      if (user.id !== selectedUser?.id) {
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.transform = '';
                        e.currentTarget.style.boxShadow = '';
                      }
                    }}
                  >
                    <h4>{user.name}</h4>
                    <p style={{ margin: '5px 0', fontSize: '14px' }}>{user.email}</p>
                    <p style={{ margin: '5px 0', fontSize: '12px', color: '#757575' }}>{user.company.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No users found.</p>
            )}
            
            <div style={{ marginTop: '20px' }}>
              <p><strong>Implementation Notes:</strong></p>
              <ul>
                <li>useEffect hook ke andar API call kiya gaya hai component mount hone par</li>
                <li>fetch API promise-based approach use karta hai</li>
                <li>async/await syntax code readability improve karta hai</li>
                <li>Error handling ke liye try/catch block use kiya gaya hai</li>
              </ul>
            </div>
          </>
        )}
      </div>
      
      {/* Display selected user details */}
      {selectedUser && (
        <div style={styles.card}>
          <h2>Example 2: GET Request with Path Parameters</h2>
          
          {loading ? (
            renderLoading()
          ) : (
            <div style={styles.userDetailCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3>{selectedUser.name}</h3>
                <button 
                  onClick={clearUserSelection}
                  style={{ 
                    padding: '5px 10px',
                    backgroundColor: '#eeeeee',
                    color: '#333',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
              </div>
              
              <div style={{ marginTop: '15px' }}>
                <p><strong>Username:</strong> {selectedUser.username}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Phone:</strong> {selectedUser.phone}</p>
                <p><strong>Website:</strong> {selectedUser.website}</p>
              </div>
              
              <div style={{ marginTop: '15px' }}>
                <h4>Address</h4>
                <p>
                  {selectedUser.address.street}, {selectedUser.address.suite}<br />
                  {selectedUser.address.city}, {selectedUser.address.zipcode}
                </p>
              </div>
              
              <div style={{ marginTop: '15px' }}>
                <h4>Company</h4>
                <p><strong>{selectedUser.company.name}</strong></p>
                <p>{selectedUser.company.catchPhrase}</p>
                <p><em>{selectedUser.company.bs}</em></p>
              </div>
            </div>
          )}
          
          <div>
            <p><strong>Implementation Notes:</strong></p>
            <ul>
              <li>Path parameters ka use karke specific user ki details fetch ki gayi hai</li>
              <li>URL mein dynamic values interpolate kiye gaye hain</li>
              <li>Selected user details ko separate state variable mein store kiya gaya hai</li>
            </ul>
          </div>
        </div>
      )}
      
      {/* POST Request Example */}
      <div style={styles.card}>
        <h2>Example 3: POST Request</h2>
        
        {submitSuccess && (
          <div style={styles.successMessage}>
            <p>Post successfully submitted!</p>
          </div>
        )}
        
        {submitError && (
          <div style={styles.errorContainer}>
            <p>{submitError}</p>
          </div>
        )}
        
        <form onSubmit={submitPost} style={styles.form}>
          <div>
            <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={postData.title}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter post title"
            />
          </div>
          
          <div>
            <label htmlFor="body" style={{ display: 'block', marginBottom: '5px' }}>Content:</label>
            <textarea
              id="body"
              name="body"
              value={postData.body}
              onChange={handleInputChange}
              style={styles.textarea}
              placeholder="Enter post content"
            />
          </div>
          
          <button
            type="submit"
            style={{
              ...styles.button,
              backgroundColor: '#4caf50',
              ...(submitting ? styles.disabledButton : {})
            }}
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit Post'}
          </button>
        </form>
        
        <div style={{ marginTop: '20px' }}>
          <p><strong>Implementation Notes:</strong></p>
          <ul>
            <li>Form submission par POST request bheja gaya hai</li>
            <li>Request headers (Content-Type) set kiye gaye hain</li>
            <li>JSON.stringify() ka use request body ko format karne ke liye kiya gaya hai</li>
            <li>Loading, success, aur error states track kiye gaye hain</li>
          </ul>
        </div>
      </div>
      
      {/* Fetch API vs Axios */}
      <div style={styles.card}>
        <h2>Fetch API vs Axios</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h3>Fetch API</h3>
            <ul>
              <li>Browser built-in API</li>
              <li>No external dependency</li>
              <li>Doesn't automatically parse JSON</li>
              <li>Error handling requires manual check</li>
              <li>No request/response interception</li>
            </ul>
          </div>
          
          <div>
            <h3>Axios</h3>
            <ul>
              <li>Third-party library</li>
              <li>Automatic JSON parsing</li>
              <li>Better error handling</li>
              <li>Request/response interceptors</li>
              <li>Request cancellation support</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Best Practices */}
      <div style={styles.card}>
        <h2>API Integration Best Practices</h2>
        
        <ul>
          <li><strong>Custom Hooks Create Karein:</strong> API logic ko reusable custom hooks mein extract karein</li>
          <li><strong>Loading States Track Karein:</strong> Users ko always feedback provide karein jab data load ho raha ho</li>
          <li><strong>Error States Handle Karein:</strong> Meaningful error messages display karein aur recovery options den</li>
          <li><strong>Request Cancellation Implement Karein:</strong> Component unmount hone par pending requests cancel karein</li>
          <li><strong>Pagination aur Infinite Scrolling:</strong> Large data sets ke saath efficient pagination implement karein</li>
          <li><strong>Optimistic Updates:</strong> Better UX ke liye, server response ka wait kiye bina UI update karein</li>
          <li><strong>Caching Implement Karein:</strong> Performance improve karne ke liye API responses cache karein</li>
        </ul>
      </div>
    </div>
  );
}

export default ApiIntegrationExample;`,
        codeExampleTitle: "API Integration Example",
        codeExampleDescription: "Is example mein, hum React mein REST APIs ke saath interact karne ke tarike dekhenge, including GET aur POST requests with error handling aur loading states.",
        filename: "ApiIntegrationExample.jsx",
        codeExplanation: [
          {
            line: "Line 4-14",
            explanation: "Multiple state variables define kiye gaye hain jo data, loading states, aur errors track karte hain."
          },
          {
            line: "Line 17-19",
            explanation: "useEffect hook ka use component mount hone par initial data fetch karne ke liye kiya gaya hai."
          },
          {
            line: "Line 22-41",
            explanation: "fetchUsers function Fetch API ka use karke users list retrieve karta hai, with proper error handling."
          },
          {
            line: "Line 44-63",
            explanation: "fetchUserDetails function path parameter ka use karke specific user ki details fetch karta hai."
          },
          {
            line: "Line 73-102",
            explanation: "submitPost function form data ko POST request ke through server ko bhejta hai."
          },
          {
            line: "Line 209-266",
            explanation: "User list ka display with interactive UI elements jahan user click karke details fetch kar sakta hai."
          },
          {
            line: "Line 307-354",
            explanation: "POST request example with form submission aur proper feedback states."
          }
        ],
        exercise: {
          description: "ApiIntegrationExample mein ek aur feature add kijiye - DELETE functionality. User details view mein ek 'Delete User' button add karein jo DELETE request bheje. Loading states aur error handling implement karein, aur success par user ko list se remove karein.",
          defaultCode: `import React, { useState, useEffect } from 'react';

function ApiIntegrationExample() {
  // State for different API examples
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState({
    title: '',
    body: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  // TODO: Add delete operation states
  // const [deleting, setDeleting] = useState(false);
  // const [deleteError, setDeleteError] = useState(null);
  // const [deleteSuccess, setDeleteSuccess] = useState(false);
  
  // Fetch users data on component mount
  useEffect(() => {
    fetchUsers();
  }, []);
  
  // Fetch user list with Fetch API
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      // Check if response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(\`API error: \${response.status}\`);
      }
      
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch users');
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };
  
  // Fetch single user details
  const fetchUserDetails = async (userId) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
      
      if (!response.ok) {
        throw new Error(\`API error: \${response.status}\`);
      }
      
      const userData = await response.json();
      setSelectedUser(userData);
    } catch (err) {
      setError(err.message || 'Failed to fetch user details');
      setSelectedUser(null);
    } finally {
      setLoading(false);
    }
  };
  
  // TODO: Add delete user function
  // const deleteUser = async (userId) => {
  //   try {
  //     setDeleting(true);
  //     setDeleteError(null);
  //     setDeleteSuccess(false);
  //     
  //     const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`, {
  //       method: 'DELETE'
  //     });
  //     
  //     if (!response.ok) {
  //       throw new Error(\`API error: \${response.status}\`);
  //     }
  //     
  //     // Remove user from the list
  //     setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  //     setDeleteSuccess(true);
  //     // Close the user details view
  //     setSelectedUser(null);
  //   } catch (err) {
  //     setDeleteError(err.message || 'Failed to delete user');
  //   } finally {
  //     setDeleting(false);
  //   }
  // };
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Submit new post
  const submitPost = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!postData.title.trim() || !postData.body.trim()) {
      setSubmitError('Please fill in all fields');
      return;
    }
    
    try {
      setSubmitting(true);
      setSubmitError(null);
      setSubmitSuccess(false);
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...postData,
          userId: selectedUser?.id || 1
        })
      });
      
      if (!response.ok) {
        throw new Error(\`API error: \${response.status}\`);
      }
      
      await response.json();
      setSubmitSuccess(true);
      setPostData({ title: '', body: '' });
    } catch (err) {
      setSubmitError(err.message || 'Failed to submit post');
    } finally {
      setSubmitting(false);
    }
  };
  
  // Retry fetching
  const retryFetch = () => {
    fetchUsers();
  };
  
  // Cancel user selection
  const clearUserSelection = () => {
    setSelectedUser(null);
  };
  
  // Styles
  const styles = {
    // Your styles here...
    button: {
      padding: '8px 16px',
      backgroundColor: '#2196f3',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '10px'
    },
    deleteButton: {
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '8px 16px',
      cursor: 'pointer',
      marginTop: '15px'
    }
  };
  
  // Render helper for loading state
  const renderLoading = () => (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div>Loading...</div>
    </div>
  );
  
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>API Integration in React</h1>
      
      {/* Display any fetch errors */}
      {error && (
        <div style={{
          backgroundColor: '#ffebee',
          padding: '15px',
          borderRadius: '4px',
          marginBottom: '20px',
          color: '#c62828'
        }}>
          <h3>Error</h3>
          <p>{error}</p>
          <button onClick={retryFetch} style={styles.button}>
            Retry
          </button>
        </div>
      )}
      
      {/* GET Request Example */}
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <h2>Example 1: GET Request (Fetch Users)</h2>
        
        {loading && !selectedUser ? (
          renderLoading()
        ) : (
          <>
            <h3>User List</h3>
            
            {users.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '15px'
              }}>
                {users.slice(0, 6).map(user => (
                  <div
                    key={user.id}
                    onClick={() => fetchUserDetails(user.id)}
                    style={{
                      padding: '15px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No users found.</p>
            )}
          </>
        )}
      </div>
      
      {/* Selected user details */}
      {selectedUser && (
        <div style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <h2>User Details</h2>
          <div style={{
            backgroundColor: '#f5f9ff',
            padding: '20px',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>{selectedUser.name}</h3>
              <button onClick={clearUserSelection} style={styles.button}>
                Close
              </button>
            </div>
            
            <div>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
              <p><strong>Website:</strong> {selectedUser.website}</p>
              <p><strong>Company:</strong> {selectedUser.company.name}</p>
            </div>
            
            {/* TODO: Add Delete Button and status messages */}
            {/* <div style={{ marginTop: '20px' }}>
              <button
                onClick={() => deleteUser(selectedUser.id)}
                disabled={deleting}
                style={{
                  ...styles.deleteButton,
                  opacity: deleting ? 0.7 : 1,
                  cursor: deleting ? 'not-allowed' : 'pointer'
                }}
              >
                {deleting ? 'Deleting...' : 'Delete User'}
              </button>
            </div>
            
            {deleteError && (
              <div style={{
                backgroundColor: '#ffebee',
                padding: '10px',
                borderRadius: '4px',
                marginTop: '10px',
                color: '#c62828'
              }}>
                <p>{deleteError}</p>
              </div>
            )} */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ApiIntegrationExample;`
        },
        tags: ["api", "fetch", "axios", "data-fetching"]
      },
      {
        id: "lists-keys",
        title: "Lists & Keys",
        hindiTitle: "Lists aur Keys",
        level: "Intermediate",
        readingTime: 5,
        category: "intermediate",
        shortDescription: "React mein lists render karna aur keys ka importance.",
        description: `React mein arrays of data ko render karne ke liye lists use kiye jate hain. List items ko render karte samay har item ko ek unique "key" prop provide karna important hai.

Keys React ko ye identify karne mein help karte hain ki list mein konse items change hue, add hue ya remove hue. Proper keys provide karna performance improve karta hai aur weird behavior se bachata hai.`,
        tags: ["lists", "keys", "rendering", "arrays"]
      },
      {
        id: "conditional-rendering",
        title: "Conditional Rendering",
        hindiTitle: "Conditional Rendering",
        level: "Intermediate",
        readingTime: 6,
        category: "intermediate",
        shortDescription: "Different UI states conditionally render karna.",
        description: `Conditional rendering React mein ek pattern hai jisse aap component ke different states ke basis par different UI elements display kar sakte hain.

React mein conditional rendering ke liye common techniques hain:
1. If statements
2. Ternary operators (condition ? true : false)
3. Logical && operator
4. Switch statements
5. Conditional rendering functions

Ye techniques aapko dynamic UI create karne mein help karte hain jo user inputs, application state, or external data ke basis par change hota hai.`,
        keyPoints: [
          {
            title: "Logical && Operator",
            description: "Short-circuit evaluation ke liye jab condition true hai to content render karein."
          },
          {
            title: "Ternary Operator",
            description: "Compact syntax provide karta hai jo condition ? true : false pattern follow karta hai."
          },
          {
            title: "If-Else in JSX",
            description: "JSX ke andar direct if-else nahi likh sakte, par variables mein conditional output store karke use kar sakte hain."
          }
        ],
        codeExample: `import React, { useState } from 'react';

function ConditionalRenderingExample() {
  // States for different examples
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState('regular');
  const [showMore, setShowMore] = useState(false);
  
  // Simulating login/logout
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  // Incrementing counter
  const incrementCount = () => {
    setCount(count + 1);
  };
  
  // Simulating data loading
  const fetchData = () => {
    setLoading(true);
    
    // Fake API call
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  
  // Toggle user type
  const toggleUserType = () => {
    setUserType(userType === 'regular' ? 'admin' : 'regular');
  };
  
  // Toggle content visibility
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Conditional Rendering in React</h1>
      
      {/* Example 1: If-else with variables */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #e1e1e1', borderRadius: '5px' }}>
        <h2>Example 1: If-else with variables</h2>
        <p>Current status: <strong>{isLoggedIn ? 'Logged In' : 'Logged Out'}</strong></p>
        
        {/* Using variable to store conditional JSX */}
        {(() => {
          if (isLoggedIn) {
            return (
              <div style={{ backgroundColor: '#e8f5e9', padding: '10px', borderRadius: '5px' }}>
                <p>Welcome back, User! You have access to your dashboard.</p>
                <button 
                  onClick={toggleLogin}
                  style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer' }}
                >
                  Logout
                </button>
              </div>
            );
          } else {
            return (
              <div style={{ backgroundColor: '#fff3e0', padding: '10px', borderRadius: '5px' }}>
                <p>Please log in to access your dashboard.</p>
                <button 
                  onClick={toggleLogin}
                  style={{ backgroundColor: '#4caf50', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer' }}
                >
                  Login
                </button>
              </div>
            );
          }
        })()}
        
        <div style={{ marginTop: '15px' }}>
          <p><strong>Pattern:</strong> IIFE (Immediately Invoked Function Expression) ka use karke if-else logic implement kiya gaya hai</p>
        </div>
      </section>
      
      {/* Example 2: Logical && operator */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #e1e1e1', borderRadius: '5px' }}>
        <h2>Example 2: Logical && operator</h2>
        <p>Counter value: <strong>{count}</strong></p>
        <button 
          onClick={incrementCount}
          style={{ backgroundColor: '#2196f3', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer', marginRight: '10px' }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{ backgroundColor: '#9e9e9e', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer' }}
        >
          Reset
        </button>
        
        {/* Using logical && for conditional rendering */}
        {count > 0 && (
          <div style={{ backgroundColor: '#e3f2fd', padding: '10px', marginTop: '10px', borderRadius: '5px' }}>
            <p>The counter is positive!</p>
          </div>
        )}
        
        {count > 5 && (
          <div style={{ backgroundColor: '#bbdefb', padding: '10px', marginTop: '10px', borderRadius: '5px' }}>
            <p>The counter is greater than 5!</p>
          </div>
        )}
        
        {count > 10 && (
          <div style={{ backgroundColor: '#90caf9', padding: '10px', marginTop: '10px', borderRadius: '5px' }}>
            <p>The counter is greater than 10!</p>
          </div>
        )}
        
        <div style={{ marginTop: '15px' }}>
          <p><strong>Pattern:</strong> Logical && operator ensures ki content sirf tabhi render ho jab condition true ho</p>
        </div>
      </section>
      
      {/* Example 3: Ternary operator */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #e1e1e1', borderRadius: '5px' }}>
        <h2>Example 3: Ternary operator</h2>
        <div>
          <button 
            onClick={fetchData}
            style={{ backgroundColor: '#673ab7', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer' }}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Fetch Data'}
          </button>
          
          {/* Using ternary operator for conditional rendering */}
          <div style={{ marginTop: '15px' }}>
            {loading ? (
              <div style={{ backgroundColor: '#ede7f6', padding: '10px', borderRadius: '5px' }}>
                <p>Loading data, please wait...</p>
                <div style={{ width: '100%', backgroundColor: '#e1e1e1', height: '4px', borderRadius: '2px' }}>
                  <div 
                    style={{ 
                      width: '30%', 
                      backgroundColor: '#673ab7', 
                      height: '100%', 
                      borderRadius: '2px',
                      animation: 'loading 1.5s infinite' 
                    }} 
                  />
                </div>
              </div>
            ) : (
              <div style={{ backgroundColor: '#d1c4e9', padding: '10px', borderRadius: '5px' }}>
                <p>Click the button to load data.</p>
              </div>
            )}
          </div>
        </div>
        
        <div style={{ marginTop: '15px' }}>
          <p><strong>Pattern:</strong> Ternary operator condition ? true_case : false_case pattern follow karta hai</p>
        </div>
      </section>
      
      {/* Example 4: Switch case pattern */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #e1e1e1', borderRadius: '5px' }}>
        <h2>Example 4: Switch case pattern</h2>
        <p>Current user type: <strong>{userType}</strong></p>
        <button 
          onClick={toggleUserType}
          style={{ backgroundColor: '#ff9800', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer' }}
        >
          Toggle User Type
        </button>
        
        {/* Using switch case (as a function) for conditional rendering */}
        <div style={{ marginTop: '15px' }}>
          {(() => {
            switch(userType) {
              case 'admin':
                return (
                  <div style={{ backgroundColor: '#fff3e0', padding: '10px', borderRadius: '5px' }}>
                    <p>Admin Dashboard</p>
                    <ul>
                      <li>User Management</li>
                      <li>System Settings</li>
                      <li>Analytics Dashboard</li>
                      <li>Content Management</li>
                    </ul>
                  </div>
                );
              case 'regular':
                return (
                  <div style={{ backgroundColor: '#e8f5e9', padding: '10px', borderRadius: '5px' }}>
                    <p>User Dashboard</p>
                    <ul>
                      <li>Profile Settings</li>
                      <li>Your Activity</li>
                      <li>Saved Items</li>
                    </ul>
                  </div>
                );
              default:
                return (
                  <div style={{ backgroundColor: '#ffebee', padding: '10px', borderRadius: '5px' }}>
                    <p>Unknown user type</p>
                  </div>
                );
            }
          })()}
        </div>
        
        <div style={{ marginTop: '15px' }}>
          <p><strong>Pattern:</strong> IIFE ke andar switch statement use karke multiple conditions handle kiye gaye hain</p>
        </div>
      </section>
      
      {/* Example 5: Toggle button pattern */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #e1e1e1', borderRadius: '5px' }}>
        <h2>Example 5: Toggle button pattern</h2>
        <button 
          onClick={toggleShowMore}
          style={{ backgroundColor: '#009688', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer' }}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
        
        {/* Conditional rendering with toggle */}
        <div style={{ marginTop: '15px' }}>
          <p>React is a JavaScript library for building user interfaces.</p>
          
          {showMore && (
            <div style={{ backgroundColor: '#e0f2f1', padding: '10px', borderRadius: '5px' }}>
              <p>React is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
              <p>However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.</p>
            </div>
          )}
        </div>
        
        <div style={{ marginTop: '15px' }}>
          <p><strong>Pattern:</strong> Toggle button se content ko show/hide kar sakte hain</p>
        </div>
      </section>
      
      <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px', marginTop: '20px' }}>
        <h3>Key Takeaways:</h3>
        <ul>
          <li>Conditional rendering ke multiple approaches hain, scenario ke hisab se choose karein</li>
          <li>Logical && operator simple conditions ke liye best hai</li>
          <li>Ternary operator between two options choose karne ke liye ideal hai</li>
          <li>Complex conditions ke liye, JSX se bahar logic extract karein ya IIFE use karein</li>
          <li>Performance optimize karne ke liye, avoid large conditional chains in JSX</li>
        </ul>
      </div>
    </div>
  );
}

export default ConditionalRenderingExample;`,
        codeExampleTitle: "Conditional Rendering Example",
        codeExampleDescription: "Iss example mein, hum React mein 5 different tarike se conditional rendering implement karenge: if-else with variables, logical && operator, ternary operator, switch case, aur toggle button pattern.",
        filename: "ConditionalRenderingExample.jsx",
        codeExplanation: [
          {
            line: "Line 4-9",
            explanation: "Different example scenarios ke liye states define ki gayi hain."
          },
          {
            line: "Line 12-42",
            explanation: "Event handlers jo state update karte hain aur conditional rendering ke liye conditions create karte hain."
          },
          {
            line: "Line 52-82",
            explanation: "If-else with variables pattern - IIFE (Immediately Invoked Function Expression) ka use karke complex conditional JSX ko render kiya gaya hai."
          },
          {
            line: "Line 93-120",
            explanation: "Logical && operator pattern - condition true hone par hi content show karta hai."
          },
          {
            line: "Line 131-158",
            explanation: "Ternary operator pattern - loading ? loading_ui : ready_ui format mein conditional rendering."
          },
          {
            line: "Line 169-205",
            explanation: "Switch case pattern - different user types ke based par different UIs render karna."
          },
          {
            line: "Line 216-236",
            explanation: "Toggle button pattern - simple show/hide functionality implement karna."
          }
        ],
        exercise: {
          description: "ConditionalRenderingExample mein ek aur example add kijiye jismein form validation error conditional rendering ho. Ek 'email' state create kijiye, ek input field banayein, aur validation logic add karein jo sirf galat email format hone par error message show kare.",
          defaultCode: `import React, { useState } from 'react';

function ConditionalRenderingExample() {
  // Existing states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState('regular');
  const [showMore, setShowMore] = useState(false);
  
  // TODO: Add email state and validation
  // const [email, setEmail] = useState('');
  // const [isValidated, setIsValidated] = useState(false);
  
  // Existing functions
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  const incrementCount = () => {
    setCount(count + 1);
  };
  
  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  
  const toggleUserType = () => {
    setUserType(userType === 'regular' ? 'admin' : 'regular');
  };
  
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  
  // TODO: Add email validation function
  // const handleEmailChange = (e) => {
  //   const newEmail = e.target.value;
  //   setEmail(newEmail);
  //   setIsValidated(true);
  // };
  
  // TODO: Email validation helper function
  // const isValidEmail = (email) => {
  //   const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  //   return emailRegex.test(email);
  // };
  
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Conditional Rendering in React</h1>
      
      {/* Example 1: If-else with variables */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #e1e1e1', borderRadius: '5px' }}>
        <h2>Example 1: If-else with variables</h2>
        <p>Current status: <strong>{isLoggedIn ? 'Logged In' : 'Logged Out'}</strong></p>
        
        {(() => {
          if (isLoggedIn) {
            return (
              <div style={{ backgroundColor: '#e8f5e9', padding: '10px', borderRadius: '5px' }}>
                <p>Welcome back, User! You have access to your dashboard.</p>
                <button 
                  onClick={toggleLogin}
                  style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer' }}
                >
                  Logout
                </button>
              </div>
            );
          } else {
            return (
              <div style={{ backgroundColor: '#fff3e0', padding: '10px', borderRadius: '5px' }}>
                <p>Please log in to access your dashboard.</p>
                <button 
                  onClick={toggleLogin}
                  style={{ backgroundColor: '#4caf50', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer' }}
                >
                  Login
                </button>
              </div>
            );
          }
        })()}
      </section>
      
      {/* TODO: Add Form Validation Example */}
      {/* <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #e1e1e1', borderRadius: '5px' }}>
        <h2>Example 6: Form Validation</h2>
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            style={{ 
              width: '100%', 
              padding: '8px', 
              marginBottom: '10px',
              borderRadius: '4px',
              border: isValidated && email && !isValidEmail(email) 
                ? '1px solid #f44336' 
                : '1px solid #ddd' 
            }}
          />
          
          {/* Conditional error message */}
          {/* {isValidated && email && !isValidEmail(email) && (
            <div style={{ color: '#f44336', marginBottom: '10px' }}>
              Please enter a valid email address
            </div>
          )}
          
          {isValidated && email && isValidEmail(email) && (
            <div style={{ color: '#4caf50', marginBottom: '10px' }}>
              Email is valid!
            </div>
          )}
        </div>
        
        <div style={{ marginTop: '15px' }}>
          <p><strong>Pattern:</strong> Form validation mein conditional rendering - input validation ke basis par different messages show karna</p>
        </div>
      </section> */}
      
      {/* Other existing examples... */}
      
    </div>
  );
}

export default ConditionalRenderingExample;`
        },
        tags: ["conditional-rendering", "dynamic-ui"]
      }
    ]
  },
  {
    id: "advanced",
    name: "Advanced",
    description: "React ke advanced concepts aap professional level applications ke liye.",
    topics: [
      {
        id: "useContext",
        title: "useContext Hook",
        hindiTitle: "useContext Hook",
        level: "Advanced",
        readingTime: 10,
        category: "advanced",
        shortDescription: "Global state management ke liye Context API aur useContext.",
        description: `React Context API component tree ke through data pass karne ka way provide karta hai, bina props ko manually har level par pass kiye. useContext hook is context ka value access karne ka easiest tarika hai.

Context component nesting ke kisi bhi level par data available karata hai, jisse "prop drilling" avoid hota hai. Ye global state management ke liye ideal hai jaise theme, user authentication, language preferences, etc.`,
        keyPoints: [
          {
            title: "Global State Management",
            description: "Component tree ke kisi bhi level par data access karne ke liye Context API use karein."
          },
          {
            title: "Prop Drilling Solution",
            description: "Deep nested components ko data pass karne ke unnecessary props avoid karein."
          },
          {
            title: "Best Use Cases",
            description: "Theme, authentication, language preferences, aur user settings jaise global states manage karein."
          }
        ],
        codeExample: `import React, { createContext, useContext, useState } from 'react';

// 1. Context create karna
const ThemeContext = createContext(null);

// 2. Provider component banana
function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };
  
  // Value jo provide karna hai
  const value = {
    darkMode,
    toggleTheme
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Context ka use karna
function ThemedButton() {
  // useContext hook se context value access karna
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  
  const buttonStyle = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#333',
    padding: '10px 15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer'
  };
  
  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

// Main App
function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <h2>useContext Example</h2>
        <p>Current theme ko change karne ke liye button par click karein:</p>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}

export default App;`,
        codeExampleTitle: "useContext Hook Demo",
        codeExampleDescription: "Is example mein hum ek simple theme switcher banayenge jo dark aur light mode ke beech toggle karta hai. Context API ka use karke hum theme state ko manage karenge aur useContext hook se use access karenge.",
        filename: "ThemeContext.jsx",
        codeExplanation: [
          {
            line: "Line 1",
            explanation: "Required React imports, including createContext aur useContext hooks."
          },
          {
            line: "Line 4",
            explanation: "ThemeContext create kiya gaya hai createContext() ke saath. Default value null hai."
          },
          {
            line: "Line 7-25",
            explanation: "ThemeProvider component jo ThemeContext.Provider ke around wrap karta hai aur darkMode state manage karta hai."
          },
          {
            line: "Line 28-45",
            explanation: "ThemedButton component jo useContext hook ke through ThemeContext ka value access karta hai, jisse global theme access ho sake."
          },
          {
            line: "Line 48-58",
            explanation: "Main App component jo ThemeProvider ko use karta hai wrapper ke tarah, jisse child components context access kar sake."
          }
        ],
        exercise: {
          description: "ThemeContext example ko extend karke ek aur setting (font size) add kijiye. Provider mein font size state add karein aur button component mein ise use karke text size change karne ka feature implement kijiye.",
          defaultCode: `import React, { createContext, useContext, useState } from 'react';

// 1. Context create karna
const ThemeContext = createContext(null);

// 2. Provider component banana
function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  // TODO: Font size state add kijiye
  
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };
  
  // TODO: Font size change karne ka function add kijiye
  
  // Value jo provide karna hai
  const value = {
    darkMode,
    toggleTheme,
    // TODO: Font size values yahan add kijiye
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Context ka use karna
function ThemedButton() {
  // useContext hook se context value access karna
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  // TODO: Font size values access kijiye
  
  const buttonStyle = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#333',
    padding: '10px 15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer'
    // TODO: Font size property add kijiye
  };
  
  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
    // TODO: Font size change karne ka button add kijiye
  );
}

// Main App
function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <h2>useContext Example</h2>
        <p>Current theme ko change karne ke liye button par click karein:</p>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}

export default App;`
        },
        tags: ["useContext", "context-api", "global-state"]
      },
      {
        id: "useMemo",
        title: "useMemo Hook",
        hindiTitle: "useMemo Hook",
        level: "Advanced",
        readingTime: 8,
        category: "advanced",
        shortDescription: "Performance optimization ke liye useMemo hook ka use.",
        description: `useMemo ek performance optimization hook hai jo expensive calculations ko memoize karta hai. Ye calculated value ko cache karta hai aur sirf tab recalculate karta hai jab dependencies change hoti hain.

useMemo ka use mainly expensive operations (jaise complex data transformations) ko optimize karne ke liye kiya jata hai, taki unnecessary recalculations avoid ho sake.`,
        keyPoints: [
          {
            title: "Memoization",
            description: "Expensive calculations ko cache karein aur unnecessary re-calculations avoid karein."
          },
          {
            title: "Performance",
            description: "Component renders ke beech calculated values ko preserve karein jab tak dependencies change na ho."
          },
          {
            title: "Dependency Array",
            description: "useMemo sirf tab recalculate karta hai jab koi dependency array mein specified value change hoti hai."
          }
        ],
        codeExample: `import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ count }) {
  // Expensive calculation simulation
  const calculateFactorial = (num) => {
    console.log('Factorial calculation running...');
    if (num < 0) return -1;
    if (num === 0) return 1;
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  // Without useMemo, ye calculation har render par repeat hoga
  // const factorial = calculateFactorial(count);
  
  // With useMemo, calculation sirf tab hoga jab count change hoga
  const factorial = useMemo(() => {
    return calculateFactorial(count);
  }, [count]); // Dependency array - sirf count change hone par recalculate hoga

  return (
    <div>
      <p>
        Factorial of {count} is: <strong>{factorial}</strong>
      </p>
      <p><small>Check console to see when calculation runs</small></p>
    </div>
  );
}

function UseMemoExample() {
  const [count, setCount] = useState(5);
  const [darkMode, setDarkMode] = useState(false);
  
  const containerStyle = {
    padding: '20px',
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#333',
    borderRadius: '8px',
    maxWidth: '500px',
    margin: '0 auto'
  };
  
  return (
    <div style={containerStyle}>
      <h2>useMemo Hook Example</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label>Number: </label>
        <input 
          type="number" 
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value) || 0)}
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </div>
      
      <ExpensiveCalculation count={count} />
      
      <button 
        onClick={() => setDarkMode(prev => !prev)}
        style={{
          padding: '8px 16px',
          marginTop: '20px',
          backgroundColor: darkMode ? '#fff' : '#333',
          color: darkMode ? '#333' : '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Toggle Theme
      </button>
      <p>
        <small>
          Theme toggle karne par parent component re-render hota hai, 
          lekin useMemo ki wajah se factorial calculation repeat nahi hota
        </small>
      </p>
    </div>
  );
}

export default UseMemoExample;`,
        codeExampleTitle: "useMemo Hook Demo - Factorial Calculator",
        codeExampleDescription: "Is example mein, hum ek factorial calculator banayenge jo useMemo hook ka use karke performance optimize karta hai. Jab aap theme toggle karenge, factorial calculation repeat nahi hoga kyunki useMemo ne value ko memoize kar diya hai.",
        filename: "UseMemoExample.jsx",
        codeExplanation: [
          {
            line: "Line 1",
            explanation: "React, useState, aur useMemo hooks import kiye gaye hain."
          },
          {
            line: "Line 3-25",
            explanation: "ExpensiveCalculation component jo ek number ka factorial calculate karta hai - ye ek expensive operation simulate karta hai."
          },
          {
            line: "Line 17-19",
            explanation: "useMemo hook ka use karke factorial calculation ko memoize kiya gaya hai, jisse unnecessary calculations avoid ho sake."
          },
          {
            line: "Line 19",
            explanation: "Dependency array [count] - calculation sirf tab repeat hoga jab count change hoga."
          },
          {
            line: "Line 28-65",
            explanation: "Main UseMemoExample component jo count aur theme state manage karta hai."
          },
          {
            line: "Line 51",
            explanation: "ExpensiveCalculation component ko count prop pass kiya gaya hai."
          },
          {
            line: "Line 53-65",
            explanation: "Theme toggle button - jab ye click hota hai, parent component re-render hota hai lekin factorial calculation repeat nahi hota."
          }
        ],
        exercise: {
          description: "UseMemoExample ko modify karke ek naya expensive calculation add kijiye jo numbers ki list ka sum calculate kare. useMemo ka use karke ensure kijiye ki calculation sirf tab repeat ho jab list change ho.",
          defaultCode: `import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ count }) {
  // Factorial calculation
  const calculateFactorial = (num) => {
    console.log('Factorial calculation running...');
    if (num < 0) return -1;
    if (num === 0) return 1;
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };
  
  // With useMemo
  const factorial = useMemo(() => {
    return calculateFactorial(count);
  }, [count]);

  return (
    <div>
      <p>
        Factorial of {count} is: <strong>{factorial}</strong>
      </p>
      <p><small>Check console to see when calculation runs</small></p>
    </div>
  );
}

// TODO: Ek naya component create kijiye jo numbers array ka sum calculate kare
// Numbers array par useMemo apply kijiye taki re-renders par unnecessary 
// calculations avoid ho sake

function UseMemoExample() {
  const [count, setCount] = useState(5);
  const [darkMode, setDarkMode] = useState(false);
  
  // TODO: Ek numbers array state create kijiye (e.g., [1, 2, 3, 4, 5])
  // TODO: Numbers array mein add karne ke liye ek button create kijiye
  
  const containerStyle = {
    padding: '20px',
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#333',
    borderRadius: '8px',
    maxWidth: '500px',
    margin: '0 auto'
  };
  
  return (
    <div style={containerStyle}>
      <h2>useMemo Hook Example</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label>Number: </label>
        <input 
          type="number" 
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value) || 0)}
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </div>
      
      <ExpensiveCalculation count={count} />
      
      {/* TODO: Numbers sum component ko yahan add kijiye */}
      
      <button 
        onClick={() => setDarkMode(prev => !prev)}
        style={{
          padding: '8px 16px',
          marginTop: '20px',
          backgroundColor: darkMode ? '#fff' : '#333',
          color: darkMode ? '#333' : '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default UseMemoExample;`
        },
        tags: ["useMemo", "performance", "optimization", "memoization"]
      },
      {
        id: "useCallback",
        title: "useCallback Hook",
        hindiTitle: "useCallback Hook",
        level: "Advanced",
        readingTime: 8,
        category: "advanced",
        shortDescription: "Functions memoize karne ke liye useCallback hook.",
        description: `useCallback hook functions ko memoize karta hai. Ye function reference ko cache karta hai aur sirf tab new function create karta hai jab dependencies change hoti hain.

useCallback primarily child components ko pass kiye gaye functions ko optimize karne ke liye use hota hai, especially jab child component React.memo() se wrapped ho ya function prop ke basis par effects trigger karte hon.`,
        keyPoints: [
          {
            title: "Function Memoization",
            description: "Function references ko preserve karein subsequent renders mein."
          },
          {
            title: "Child Component Optimization",
            description: "React.memo wrapped components ke liye perfect for preventing unnecessary re-renders."
          },
          {
            title: "Event Handlers",
            description: "Callback functions jo child components ko pass kiye jate hain unhe memoize karein."
          }
        ],
        codeExample: `import React, { useState, useCallback, memo } from 'react';

// Memo wrapped Button component
const Button = memo(({ onClick, children }) => {
  console.log(\`Button rendered: \${children}\`);
  return (
    <button 
      onClick={onClick}
      style={{
        padding: '10px 20px',
        margin: '5px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
});

function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  
  // Without useCallback - ye function har render par new reference create karega
  // const incrementCount = () => {
  //   setCount(c => c + 1);
  // };
  
  // With useCallback - function reference preserve hoga re-renders ke beech
  const incrementCount = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty dependency array - function kabhi recreate nahi hoga
  
  // Text update karne ke liye callback - ye har render par same rahega
  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
  
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>useCallback Hook Example</h2>
      <p>Check console to observe render behavior</p>
      
      <div style={{ marginBottom: '20px' }}>
        <p>Count: {count}</p>
        <Button onClick={incrementCount}>Increment Count</Button>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          style={{ padding: '8px', marginRight: '10px', width: '200px' }}
          placeholder="Type something..."
        />
        <p>Text input: {text}</p>
      </div>
      
      <div>
        <p style={{ fontSize: '0.9em', color: '#666' }}>
          <strong>Note:</strong> "Increment Count" button ko click karne par count state
          update hota hai, lekin button component re-render nahi hota kyunki:
          <br />
          1. Button component memo() se wrapped hai
          <br />
          2. incrementCount function useCallback() se memoize kiya gaya hai
          <br />
          <br />
          Agar useCallback na use kiya hota, to har parent render par button bhi re-render hota
        </p>
      </div>
    </div>
  );
}

export default UseCallbackExample;`,
        codeExampleTitle: "useCallback Hook Demo",
        codeExampleDescription: "Is example mein, hum ek simple counter application banayenge jo useCallback hook ka use karke event handler functions ko memoize karta hai. Button component ko memo() se wrap kiya gaya hai taki sirf zaruri re-renders ho.",
        filename: "UseCallbackExample.jsx",
        codeExplanation: [
          {
            line: "Line 1",
            explanation: "React, useState, useCallback aur memo imports."
          },
          {
            line: "Line 4-19",
            explanation: "Button component memo() se wrapped hai, jisse ye sirf tab re-render hoga jab uske props change honge."
          },
          {
            line: "Line 30-32",
            explanation: "incrementCount function useCallback se memoize kiya gaya hai. Empty dependency array ka matlab hai ki ye function reference har render par same rahega."
          },
          {
            line: "Line 35-37",
            explanation: "handleTextChange function bhi useCallback se memoize kiya gaya hai."
          },
          {
            line: "Line 45",
            explanation: "Button component ko memoized incrementCount function pass kiya gaya hai. Jab parent component re-render hota hai (jaise text input change hone par), button component re-render nahi hoga kyunki onClick prop (function reference) change nahi hui."
          },
          {
            line: "Line 51-57",
            explanation: "Text input field jo handleTextChange callback use karta hai."
          }
        ],
        exercise: {
          description: "UseCallbackExample ko extend karke ek aur feature add kijiye - ek decrement button banayein jo count ko decrease kare. useCallback ka use karke ensure kijiye ki unnecessary re-renders na ho. Console log dekhkar verify kijiye ki optimization kaam kar rahi hai.",
          defaultCode: `import React, { useState, useCallback, memo } from 'react';

// Memo wrapped Button component
const Button = memo(({ onClick, children }) => {
  console.log(\`Button rendered: \${children}\`);
  return (
    <button 
      onClick={onClick}
      style={{
        padding: '10px 20px',
        margin: '5px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
});

function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  
  // With useCallback - function reference preserve hoga re-renders ke beech
  const incrementCount = useCallback(() => {
    setCount(c => c + 1);
  }, []); 
  
  // TODO: decrementCount function add kijiye useCallback ka use karke
  
  // Text update karne ke liye callback
  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
  
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>useCallback Hook Example</h2>
      <p>Check console to observe render behavior</p>
      
      <div style={{ marginBottom: '20px' }}>
        <p>Count: {count}</p>
        <Button onClick={incrementCount}>Increment Count</Button>
        {/* TODO: Decrement Button add kijiye */}
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          style={{ padding: '8px', marginRight: '10px', width: '200px' }}
          placeholder="Type something..."
        />
        <p>Text input: {text}</p>
      </div>
      
      <div>
        <p style={{ fontSize: '0.9em', color: '#666' }}>
          <strong>Note:</strong> Button components memo() se wrapped hain aur 
          callback functions useCallback() se memoized hain, isliye text input 
          change karne par buttons re-render nahi hote.
        </p>
      </div>
    </div>
  );
}

export default UseCallbackExample;`
        },
        tags: ["useCallback", "performance", "optimization", "memoization"]
      },
      {
        id: "useReducer",
        title: "useReducer Hook",
        hindiTitle: "useReducer Hook",
        level: "Advanced",
        readingTime: 9,
        category: "advanced",
        shortDescription: "Complex state logic manage karne ke liye useReducer.",
        description: `useReducer ek alternative hai useState hook ka, jo complex state logic handle karne ke liye use hota hai. Ye Redux pattern ko follow karta hai.

useReducer do arguments leta hai: reducer function aur initial state. Ye current state aur dispatch function return karta hai. Dispatch function actions dispatch karne ke liye use hota hai jo state ko update karte hain.`,
        keyPoints: [
          {
            title: "Complex State Logic",
            description: "Multiple related state variables ko ek reducer function ke through manage karein."
          },
          {
            title: "Redux Pattern",
            description: "State ko predictable tarike se update karne ke liye action-based approach use karein."
          },
          {
            title: "Dispatch Function",
            description: "Action objects ko dispatch karke state updates trigger karein."
          }
        ],
        codeExample: `import React, { useReducer } from 'react';

// Initial state
const initialState = {
  count: 0,
  error: null,
  loading: false,
  history: []
};

// Action types
const ACTION_TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  SET_VALUE: 'SET_VALUE',
  UNDO: 'UNDO',
  START_OPERATION: 'START_OPERATION',
  COMPLETE_OPERATION: 'COMPLETE_OPERATION',
  ERROR: 'ERROR'
};

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return {
        ...state,
        count: state.count + (action.payload || 1),
        history: [...state.history, state.count],
        error: null
      };
      
    case ACTION_TYPES.DECREMENT:
      return {
        ...state,
        count: state.count - (action.payload || 1),
        history: [...state.history, state.count],
        error: null
      };
      
    case ACTION_TYPES.RESET:
      return {
        ...state,
        count: 0,
        history: [],
        error: null
      };
      
    case ACTION_TYPES.SET_VALUE:
      return {
        ...state,
        count: action.payload,
        history: [...state.history, state.count],
        error: null
      };
      
    case ACTION_TYPES.UNDO:
      if (state.history.length === 0) {
        return {
          ...state,
          error: 'No actions to undo!'
        };
      }
      const newHistory = [...state.history];
      const previousValue = newHistory.pop();
      
      return {
        ...state,
        count: previousValue,
        history: newHistory,
        error: null
      };
      
    case ACTION_TYPES.START_OPERATION:
      return {
        ...state,
        loading: true,
        error: null
      };
      
    case ACTION_TYPES.COMPLETE_OPERATION:
      return {
        ...state,
        loading: false,
        error: null
      };
      
    case ACTION_TYPES.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      
    default:
      throw new Error(\`Unsupported action type: \${action.type}\`);
  }
}

function UseReducerExample() {
  // useReducer hook use karke state aur dispatch function access kiye
  const [state, dispatch] = useReducer(counterReducer, initialState);
  
  // Action dispatch karne ke functions
  const increment = (value = 1) => {
    // Simulating loading state
    dispatch({ type: ACTION_TYPES.START_OPERATION });
    
    // Simulating async operation
    setTimeout(() => {
      dispatch({ type: ACTION_TYPES.INCREMENT, payload: value });
      dispatch({ type: ACTION_TYPES.COMPLETE_OPERATION });
    }, 500);
  };
  
  const decrement = (value = 1) => {
    dispatch({ type: ACTION_TYPES.START_OPERATION });
    
    setTimeout(() => {
      dispatch({ type: ACTION_TYPES.DECREMENT, payload: value });
      dispatch({ type: ACTION_TYPES.COMPLETE_OPERATION });
    }, 500);
  };
  
  const reset = () => {
    dispatch({ type: ACTION_TYPES.RESET });
  };
  
  const setValue = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value)) {
      dispatch({ type: ACTION_TYPES.ERROR, payload: 'Please enter a valid number' });
    } else {
      dispatch({ type: ACTION_TYPES.SET_VALUE, payload: value });
    }
  };
  
  const undo = () => {
    dispatch({ type: ACTION_TYPES.UNDO });
  };
  
  // Page styling
  const containerStyle = {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };
  
  const buttonStyle = {
    padding: '8px 16px',
    margin: '0 5px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    fontWeight: 'bold'
  };
  
  return (
    <div style={containerStyle}>
      <h2>useReducer Hook Example - Advanced Counter</h2>
      
      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <h3>Current Count: <span style={{ color: '#4361ee' }}>{state.count}</span></h3>
        
        {state.loading && (
          <p style={{ color: '#adb5bd' }}>Processing...</p>
        )}
        
        {state.error && (
          <p style={{ color: '#e63946' }}>{state.error}</p>
        )}
        
        <div style={{ margin: '20px 0' }}>
          <button 
            onClick={() => increment()}
            disabled={state.loading}
            style={{ 
              ...buttonStyle, 
              backgroundColor: '#4cc9f0',
              color: 'white',
              opacity: state.loading ? 0.7 : 1
            }}
          >
            Increment
          </button>
          
          <button 
            onClick={() => decrement()}
            disabled={state.loading}
            style={{ 
              ...buttonStyle, 
              backgroundColor: '#f72585',
              color: 'white',
              opacity: state.loading ? 0.7 : 1
            }}
          >
            Decrement
          </button>
          
          <button 
            onClick={reset}
            disabled={state.loading}
            style={{ 
              ...buttonStyle, 
              backgroundColor: '#7209b7',
              color: 'white',
              opacity: state.loading ? 0.7 : 1
            }}
          >
            Reset
          </button>
          
          <button 
            onClick={undo}
            disabled={state.loading || state.history.length === 0}
            style={{ 
              ...buttonStyle, 
              backgroundColor: '#3a0ca3',
              color: 'white',
              opacity: (state.loading || state.history.length === 0) ? 0.7 : 1
            }}
          >
            Undo
          </button>
        </div>
        
        <div style={{ margin: '20px 0' }}>
          <label htmlFor="setValue" style={{ marginRight: '10px' }}>
            Set specific value:
          </label>
          <input 
            id="setValue"
            type="number" 
            onChange={setValue}
            disabled={state.loading}
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ced4da'
            }}
          />
        </div>
      </div>
      
      <div style={{ backgroundColor: '#e9ecef', padding: '15px', borderRadius: '4px' }}>
        <h4>State History:</h4>
        {state.history.length > 0 ? (
          <ul style={{ maxHeight: '150px', overflowY: 'auto' }}>
            {state.history.map((value, index) => (
              <li key={index}>
                Step {index + 1}: {value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No history yet</p>
        )}
      </div>
      
      <div style={{ marginTop: '30px', fontSize: '0.9em', color: '#6c757d' }}>
        <h4>useReducer ke benefits:</h4>
        <ul>
          <li>Complex state management (multiple related state values)</li>
          <li>Predictable state updates (action-based)</li>
          <li>Easier testing (pure reducer functions)</li>
          <li>Middleware support (for async operations, logging, etc.)</li>
          <li>History tracking (previous state values)</li>
        </ul>
      </div>
    </div>
  );
}

export default UseReducerExample;`,
        codeExampleTitle: "useReducer Hook - Advanced Counter Example",
        codeExampleDescription: "Is example mein, hum useReducer hook ka use karke ek complex counter application banayenge, jismein history tracking, async operations, aur error handling shamil hai.",
        filename: "UseReducerExample.jsx",
        codeExplanation: [
          {
            line: "Line 4-9",
            explanation: "initialState object define kiya gaya hai jismein count, error, loading, aur history shamil hai."
          },
          {
            line: "Line 12-21",
            explanation: "ACTION_TYPES object define kiya gaya hai jo reducer function mein action types ke liye constants provide karta hai."
          },
          {
            line: "Line 24-83",
            explanation: "counterReducer function jo current state aur action ke basis par new state calculate karta hai."
          },
          {
            line: "Line 87",
            explanation: "useReducer hook ka use karke state aur dispatch function access kiye gaye hain."
          },
          {
            line: "Line 90-130",
            explanation: "Action creators jo dispatch function ka use karke different actions dispatch karte hain."
          },
          {
            line: "Line 180-212",
            explanation: "UI elements jo current state display karte hain aur user ko actions dispatch karne ka way provide karte hain."
          }
        ],
        exercise: {
          description: "UseReducerExample ko extend karke ek naya feature add kijiye - ek delayed action jo 3 seconds ke baad count ko double kar de. Ek new action type ADD_DELAYED define kijiye, reducer mein handle kijiye, aur UI mein ek button add kijiye jo dispatch function ko useEffect mein setTimeout ke saath use kare.",
          defaultCode: `import React, { useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  count: 0,
  error: null,
  loading: false,
  history: []
};

// Action types
const ACTION_TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  SET_VALUE: 'SET_VALUE',
  UNDO: 'UNDO',
  START_OPERATION: 'START_OPERATION',
  COMPLETE_OPERATION: 'COMPLETE_OPERATION',
  ERROR: 'ERROR',
  // TODO: Add a new action type for delayed double action
};

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return {
        ...state,
        count: state.count + (action.payload || 1),
        history: [...state.history, state.count],
        error: null
      };
      
    case ACTION_TYPES.DECREMENT:
      return {
        ...state,
        count: state.count - (action.payload || 1),
        history: [...state.history, state.count],
        error: null
      };
      
    case ACTION_TYPES.RESET:
      return {
        ...state,
        count: 0,
        history: [],
        error: null
      };
      
    case ACTION_TYPES.SET_VALUE:
      return {
        ...state,
        count: action.payload,
        history: [...state.history, state.count],
        error: null
      };
      
    case ACTION_TYPES.UNDO:
      if (state.history.length === 0) {
        return {
          ...state,
          error: 'No actions to undo!'
        };
      }
      const newHistory = [...state.history];
      const previousValue = newHistory.pop();
      
      return {
        ...state,
        count: previousValue,
        history: newHistory,
        error: null
      };
      
    case ACTION_TYPES.START_OPERATION:
      return {
        ...state,
        loading: true,
        error: null
      };
      
    case ACTION_TYPES.COMPLETE_OPERATION:
      return {
        ...state,
        loading: false,
        error: null
      };
      
    case ACTION_TYPES.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    
    // TODO: Add a case for the new action type that doubles the count
      
    default:
      throw new Error(\`Unsupported action type: \${action.type}\`);
  }
}

function UseReducerExample() {
  // useReducer hook use karke state aur dispatch function access kiye
  const [state, dispatch] = useReducer(counterReducer, initialState);
  
  // TODO: Add the delayed double functionality:
  // 1. Create a state to track if delayed operation is pending
  // 2. Create a function to start the delayed operation
  // 3. Use useEffect to handle the timer
  
  // Action dispatch karne ke functions
  const increment = (value = 1) => {
    // Simulating loading state
    dispatch({ type: ACTION_TYPES.START_OPERATION });
    
    // Simulating async operation
    setTimeout(() => {
      dispatch({ type: ACTION_TYPES.INCREMENT, payload: value });
      dispatch({ type: ACTION_TYPES.COMPLETE_OPERATION });
    }, 500);
  };
  
  const decrement = (value = 1) => {
    dispatch({ type: ACTION_TYPES.START_OPERATION });
    
    setTimeout(() => {
      dispatch({ type: ACTION_TYPES.DECREMENT, payload: value });
      dispatch({ type: ACTION_TYPES.COMPLETE_OPERATION });
    }, 500);
  };
  
  const reset = () => {
    dispatch({ type: ACTION_TYPES.RESET });
  };
  
  const setValue = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value)) {
      dispatch({ type: ACTION_TYPES.ERROR, payload: 'Please enter a valid number' });
    } else {
      dispatch({ type: ACTION_TYPES.SET_VALUE, payload: value });
    }
  };
  
  const undo = () => {
    dispatch({ type: ACTION_TYPES.UNDO });
  };
  
  // Page styling
  const containerStyle = {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };
  
  const buttonStyle = {
    padding: '8px 16px',
    margin: '0 5px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    fontWeight: 'bold'
  };
  
  return (
    <div style={containerStyle}>
      <h2>useReducer Hook Example - Advanced Counter</h2>
      
      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <h3>Current Count: <span style={{ color: '#4361ee' }}>{state.count}</span></h3>
        
        {state.loading && (
          <p style={{ color: '#adb5bd' }}>Processing...</p>
        )}
        
        {state.error && (
          <p style={{ color: '#e63946' }}>{state.error}</p>
        )}
        
        <div style={{ margin: '20px 0' }}>
          <button 
            onClick={() => increment()}
            disabled={state.loading}
            style={{ 
              ...buttonStyle, 
              backgroundColor: '#4cc9f0',
              color: 'white',
              opacity: state.loading ? 0.7 : 1
            }}
          >
            Increment
          </button>
          
          <button 
            onClick={() => decrement()}
            disabled={state.loading}
            style={{ 
              ...buttonStyle, 
              backgroundColor: '#f72585',
              color: 'white',
              opacity: state.loading ? 0.7 : 1
            }}
          >
            Decrement
          </button>
          
          <button 
            onClick={reset}
            disabled={state.loading}
            style={{ 
              ...buttonStyle, 
              backgroundColor: '#7209b7',
              color: 'white',
              opacity: state.loading ? 0.7 : 1
            }}
          >
            Reset
          </button>
          
          <button 
            onClick={undo}
            disabled={state.loading || state.history.length === 0}
            style={{ 
              ...buttonStyle, 
              backgroundColor: '#3a0ca3',
              color: 'white',
              opacity: (state.loading || state.history.length === 0) ? 0.7 : 1
            }}
          >
            Undo
          </button>
          
          {/* TODO: Add a button for the delayed double operation */}
        </div>
        
        <div style={{ margin: '20px 0' }}>
          <label htmlFor="setValue" style={{ marginRight: '10px' }}>
            Set specific value:
          </label>
          <input 
            id="setValue"
            type="number" 
            onChange={setValue}
            disabled={state.loading}
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ced4da'
            }}
          />
        </div>
      </div>
      
      <div style={{ backgroundColor: '#e9ecef', padding: '15px', borderRadius: '4px' }}>
        <h4>State History:</h4>
        {state.history.length > 0 ? (
          <ul style={{ maxHeight: '150px', overflowY: 'auto' }}>
            {state.history.map((value, index) => (
              <li key={index}>
                Step {index + 1}: {value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No history yet</p>
        )}
      </div>
    </div>
  );
}

export default UseReducerExample;`
        },
        tags: ["useReducer", "complex-state", "redux-pattern"]
      },
      {
        id: "custom-hooks",
        title: "Custom Hooks",
        hindiTitle: "Custom Hooks banane ka tarika",
        level: "Advanced",
        readingTime: 8,
        category: "advanced",
        shortDescription: "Reusable logic ke liye apne custom hooks create karna.",
        description: `Custom hooks React logic ko reusable functions mein extract karne ka tarika hai. Ye regular JavaScript functions hain jo React hooks use kar sakte hain aur component logic ko share karne ke liye use hote hain.

Custom hooks "use" prefix se start hote hain (convention), aur ye component code ko cleaner aur more modular banate hain. Examples hain useLocalStorage, useFetch, useFormValidation, etc.`,
        keyPoints: [
          {
            title: "Code Reusability",
            description: "Logic ko extract karke multiple components mein reuse karein."
          },
          {
            title: "Separation of Concerns",
            description: "State aur side-effects ko UI se separate rakhein for clean components."
          },
          {
            title: "Hook Composition",
            description: "Multiple hooks ko combine karke complex functionality create karein."
          }
        ],
        codeExample: `import React, { useState, useEffect } from 'react';

// Custom Hook 1: useLocalStorage
// localStorage ke saath state ko sync rakhne ke liye
function useLocalStorage(key, initialValue) {
  // State to store our value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  
  // State value ko update karne ke liye function
  const setValue = (value) => {
    try {
      // Value function bhi ho sakti hai
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // State update
      setStoredValue(valueToStore);
      // localStorage update
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  
  return [storedValue, setValue];
}

// Custom Hook 2: useFetch
// API calls ko manage karne ke liye
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(\`Network response was not ok: \${response.status}\`);
        }
        
        const json = await response.json();
        
        if (isMounted) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    
    fetchData();
    
    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [url]);
  
  return { data, loading, error };
}

// Custom Hook 3: useMediaQuery
// Screen size check karne ke liye
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = (event) => {
      setMatches(event.matches);
    };
    
    // Initial check
    setMatches(mediaQuery.matches);
    
    // Event listener add
    mediaQuery.addEventListener('change', handleChange);
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);
  
  return matches;
}

// CustomHooks ka demo component
function CustomHooksExample() {
  // useLocalStorage hook ka use
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  // useFetch hook ka use
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');
  
  // useMediaQuery hook ka use
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Theme toggle function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  // Component styling
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#333' : '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    },
    section: {
      marginBottom: '30px',
      padding: '20px',
      borderRadius: '6px',
      backgroundColor: theme === 'light' ? '#f5f5f5' : '#444'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px'
    },
    button: {
      padding: '10px 15px',
      backgroundColor: theme === 'light' ? '#4b6bfb' : '#7b93fd',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    card: {
      padding: '15px',
      borderRadius: '6px',
      backgroundColor: theme === 'light' ? '#fff' : '#555',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
      marginBottom: '15px'
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Custom Hooks Example</h2>
        <button style={styles.button} onClick={toggleTheme}>
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </div>
      
      <div style={styles.section}>
        <h3>1. useLocalStorage Hook</h3>
        <p>Current theme: <strong>{theme}</strong></p>
        <p>This value persists in localStorage. Try refreshing the page!</p>
      </div>
      
      <div style={styles.section}>
        <h3>2. useFetch Hook</h3>
        {loading ? (
          <p>Loading data...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>Error: {error}</p>
        ) : data ? (
          <div style={styles.card}>
            <h4>{data.name}</h4>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Website: {data.website}</p>
          </div>
        ) : null}
        <p><small>Data from: https://jsonplaceholder.typicode.com/users/1</small></p>
      </div>
      
      <div style={styles.section}>
        <h3>3. useMediaQuery Hook</h3>
        <p>
          Current device: <strong>{isMobile ? 'Mobile' : 'Desktop'}</strong>
        </p>
        <p>Try resizing your browser window!</p>
      </div>
      
      <div style={{ fontSize: '0.9em', marginTop: '20px' }}>
        <h3>Benefits of Custom Hooks:</h3>
        <ul>
          <li>Reusable logic across components</li>
          <li>Clean separation of concerns</li>
          <li>Simpler testing</li>
          <li>Prevents code duplication</li>
          <li>Makes components easier to understand</li>
        </ul>
      </div>
    </div>
  );
}

export default CustomHooksExample;`,
        codeExampleTitle: "Custom Hooks Example",
        codeExampleDescription: "Iss example mein, hum 3 practical custom hooks dekhenge: useLocalStorage (data persistence), useFetch (API calls), aur useMediaQuery (responsive design). In hooks ko combine karke ek simple application banayi gayi hai.",
        filename: "CustomHooksExample.jsx",
        codeExplanation: [
          {
            line: "Line 4-28",
            explanation: "useLocalStorage custom hook – localStorage mein state persist karne ke liye. useState ke similar API provide karta hai."
          },
          {
            line: "Line 32-68",
            explanation: "useFetch custom hook – API calls ko manage karne ke liye, loading aur error states ke saath."
          },
          {
            line: "Line 72-90",
            explanation: "useMediaQuery custom hook – Responsive design ke liye, media queries ka use karke screen size check karta hai."
          },
          {
            line: "Line 94-96",
            explanation: "Main component mein teeno custom hooks ka use ek saath karke complex functionality implement ki gayi hai."
          },
          {
            line: "Line 99-127",
            explanation: "Component styling objects define kiye gaye hain, theme ke based par dynamic styling provide karte hain."
          },
          {
            line: "Line 132-176",
            explanation: "UI elements jo teeno hooks ke data ko display karte hain aur user ko interact karne ka way provide karte hain."
          }
        ],
        exercise: {
          description: "Ek aur custom hook create kijiye useForm naam se jo form validation aur submission handle kare. Usme form values, errors, aur handleChange, handleSubmit functions shamil karein. Phir isse use karke ek simple contact form banayein.",
          defaultCode: `import React, { useState, useEffect } from 'react';

// useLocalStorage hook - as defined earlier
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  
  return [storedValue, setValue];
}

// TODO: Create a useForm custom hook
// function useForm({ initialValues, validate }) {
//   const [values, setValues] = useState(initialValues);
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//
//   // TODO: Add handleChange function
//
//   // TODO: Add handleSubmit function
//
//   // TODO: Add validation logic
//
//   return {
//     values,
//     errors,
//     isSubmitting,
//     isSubmitted,
//     handleChange,
//     handleSubmit,
//     setValues
//   };
// }

function CustomHooksExample() {
  // Using useLocalStorage hook
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  // TODO: Use your new useForm hook for a contact form
  // const { values, errors, isSubmitting, isSubmitted, handleChange, handleSubmit } = useForm({
  //   initialValues: {
  //     name: '',
  //     email: '',
  //     message: ''
  //   },
  //   validate: (values) => {
  //     const errors = {};
  //     if (!values.name) errors.name = 'Name is required';
  //     if (!values.email) errors.email = 'Email is required';
  //     else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(values.email)) {
  //       errors.email = 'Invalid email format';
  //     }
  //     if (!values.message) errors.message = 'Message is required';
  //     return errors;
  //   }
  // });
  
  // Component styling
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#333' : '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    },
    section: {
      marginBottom: '30px',
      padding: '20px',
      borderRadius: '6px',
      backgroundColor: theme === 'light' ? '#f5f5f5' : '#444'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px'
    },
    button: {
      padding: '10px 15px',
      backgroundColor: theme === 'light' ? '#4b6bfb' : '#7b93fd',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Enhanced Custom Hooks Example</h2>
        <button style={styles.button} onClick={toggleTheme}>
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </div>
      
      <div style={styles.section}>
        <h3>useLocalStorage Hook</h3>
        <p>Current theme: <strong>{theme}</strong></p>
        <p>This value persists in localStorage. Try refreshing the page!</p>
      </div>
      
      {/* TODO: Add a contact form section using your useForm hook */}
      {/* <div style={styles.section}>
        <h3>useForm Hook - Contact Form</h3>
        {isSubmitted ? (
          <div style={{ padding: '15px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px' }}>
            <p>Thank you for your message!</p>
            <p>We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  borderRadius: '4px',
                  border: errors.name ? '1px solid #dc3545' : '1px solid #ced4da',
                  backgroundColor: theme === 'light' ? '#fff' : '#555',
                  color: theme === 'light' ? '#333' : '#fff'
                }}
              />
              {errors.name && <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '5px' }}>{errors.name}</p>}
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  borderRadius: '4px',
                  border: errors.email ? '1px solid #dc3545' : '1px solid #ced4da',
                  backgroundColor: theme === 'light' ? '#fff' : '#555',
                  color: theme === 'light' ? '#333' : '#fff'
                }}
              />
              {errors.email && <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '5px' }}>{errors.email}</p>}
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                rows={5}
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  borderRadius: '4px',
                  border: errors.message ? '1px solid #dc3545' : '1px solid #ced4da',
                  backgroundColor: theme === 'light' ? '#fff' : '#555',
                  color: theme === 'light' ? '#333' : '#fff'
                }}
              />
              {errors.message && <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '5px' }}>{errors.message}</p>}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '10px 15px',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div> */}
      
      <div style={{ fontSize: '0.9em', marginTop: '20px' }}>
        <h3>Benefits of Custom Hooks:</h3>
        <ul>
          <li>Reusable logic across components</li>
          <li>Clean separation of concerns</li>
          <li>Simpler testing</li>
          <li>Prevents code duplication</li>
          <li>Makes components easier to understand</li>
        </ul>
      </div>
    </div>
  );
}

export default CustomHooksExample;`
        },
        tags: ["custom-hooks", "code-reuse", "abstraction"]
      },
      {
        id: "performance",
        title: "Performance Optimization",
        hindiTitle: "Performance Optimization",
        level: "Advanced",
        readingTime: 10,
        category: "advanced",
        shortDescription: "React apps ki performance optimize karne ke techniques.",
        description: `React applications ki performance optimize karne ke liye various techniques hain:

1. Memoization (React.memo, useMemo, useCallback)
2. Code splitting (React.lazy and Suspense)
3. Virtualization for long lists
4. Preventing unnecessary re-renders
5. Proper key usage in lists
6. Debouncing and throttling

These techniques React applications ko faster aur more efficient banate hain, especially as they grow in complexity.`,
        tags: ["performance", "optimization", "memoization", "code-splitting"]
      },
      {
        id: "deployment",
        title: "Deployment",
        hindiTitle: "Deployment karna",
        level: "Advanced",
        readingTime: 7,
        category: "advanced",
        shortDescription: "React applications ko deploy karna seekhein.",
        description: `React applications ko production mein deploy karna ek important step hai development process mein. Deployment ke steps hote hain building, optimizing, aur hosting platform par deploy karna.

Common hosting platforms for React hain:
1. Vercel (create-react-app ke liye best)
2. Netlify
3. GitHub Pages
4. AWS Amplify
5. Firebase Hosting

Deployment se pehle environment variables, build optimization, aur SEO considerations ko dhyan mein rakhna important hai.`,
        tags: ["deployment", "hosting", "production", "build"]
      }
    ]
  }
];
