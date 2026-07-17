learning-javascript/
├── README.md                              # Master progress tracking log & MDN reading checklists
├── package.json                           # Root dependency manager (for testing, linting, Vite)
│
├── 📂 phase1-foundations/                  # Matches MDN: "First steps" & "Building blocks"
│   ├── 📂 01-setup/
│   │   ├── index.html                     # Visualizing async vs defer script loading
│   │   ├── main.js                        # Standard script entry
│   │   ├── async-script.js                # MDN: Testing async behavior
│   │   └── defer-script.js                # MDN: Testing defer execution order
│   ├── 📂 02-variables-datatypes/
│   │   ├── 01-declarations.js             # var vs let vs const, mutability, TDZ (Temporal Dead Zone)
│   │   ├── 02-primitives.js               # String, Number, Boolean, Null, Undefined
│   │   ├── 03-symbols-bigint.js           # MDN Guide: Advanced primitives & unique object keys
│   │   └── 04-operators-coercion.js       # Arithmetic, assignment, loose (==) vs strict (===) equality
│   ├── 📂 03-control-flow/
│   │   ├── 01-conditionals.js             # if...else, switch, ternary operators
│   │   ├── 02-truthy-falsy.js             # Logical operators, short-circuiting (&&, ||, ??)
│   │   └── 03-loops.js                    # standard for, while, do...while, break, continue
│   ├── 📂 04-functions/
│   │   ├── 01-declarations-expressions.js # Named vs anonymous functions, function expressions
│   │   ├── 02-parameters-returns.js       # Default arguments, rest parameters, return handling
│   │   └── 03-arrow-functions.js          # MDN: Concise syntax, implicit returns & lexical 'this' intro
│   └── 📂 milestone-01-calculator/
│       └── console-calculator.js          # Interactive terminal/console business logic
│
├── 📂 phase2-dom-manipulation/            # Matches MDN: "Client-side web APIs" -> "Manipulating documents"
│   ├── 📂 01-selectors-traversal/
│   │   ├── index.html                     # Target sandbox HTML DOM
│   │   └── app.js                         # querySelector, querySelectorAll, parentNode, children, closest()
│   ├── 📂 02-dom-modification/
│   │   ├── index.html
│   │   └── app.js                         # createElement, textContent, innerHTML, classList, append/prepend
│   ├── 📂 03-event-handling/
│   │   ├── index.html
│   │   └── app.js                         # addEventListener, event object (e), preventDefault(), stopPropagation()
│   ├── 📂 04-propagation-delegation/
│   │   ├── index.html                     # Nested click target zones
│   │   └── app.js                         # MDN: Event bubbling vs capturing, dynamic event delegation patterns
│   └── 📂 milestone-02-task-tracker/
│       ├── index.html                     # Clean task board layout
│       ├── styles.css                     # Minimal dashboard aesthetics
│       └── app.js                         # DOM Core Engine + localStorage persistence layer
│
├── 📂 phase3-modern-es6-js/               # Matches MDN: "JavaScript Guide" -> "Key Collections" & Intermediate text
│   ├── 📂 01-destructuring-spread/
│   │   ├── 01-array-destructuring.js      # Positional unpacking, skipping values, default values
│   │   ├── 02-object-destructuring.js     # Key renaming, nested extraction, computed property destructuring
│   │   └── 03-rest-spread.js              # Shallow copying objects/arrays, rest parameter gathering
│   ├── 📂 02-advanced-collections/
│   │   ├── 01-maps.js                     # MDN: Map structures vs standard Objects, iteration patterns
│   │   └── 02-sets.js                     # MDN: Deduplicating arrays, Set methods (add, has, delete)
│   ├── 📂 03-array-iterators/
│   │   ├── 01-mapping-filtering.js        # Immutability pipelines: .forEach(), .map(), .filter()
│   │   ├── 02-reducing.js                 # MDN: Complex accumulator patterns using .reduce()
│   │   └── 03-searching-sorting.js        # .find(), .findIndex(), .some(), .every(), array mutations (.sort)
│   └── 📂 04-memory-scope/
│       ├── 01-hoisting.js                 # MDN: Execution context, variable & function hoisting rules
│       ├── 02-scope-chain.js              # Global vs Block vs Function lexicals, nested scope lookups
│       └── 03-value-vs-reference.js       # Memory allocation: primitive stack values vs object heap references
│
├── 📂 phase4-advanced-async/              # Matches MDN: "Introducing asynchronous JavaScript" & "JS Objects"
│   ├── 📂 01-advanced-core/
│   │   ├── 01-closures.js                 # MDN: Lexical scoping, factory functions, private variable simulation
│   │   ├── 02-this-context.js             # Context binding: call(), apply(), bind() explicit execution mechanics
│   │   └── 03-prototypes.js               # MDN: Prototypes, prototype inheritance chains, Object.create()
│   ├── 📂 02-oop-classes/
│   │   ├── 01-class-syntax.js             # Class declarations, constructors, instances, instance methods
│   │   └── 02-encapsulation.js            # Inheritance (extends, super), private class fields (#property)
│   ├── 📂 03-asynchronous-js/
│   │   ├── 01-event-loop.js               # Visualizing Call Stack, Web APIs, Macrotask vs Microtask Queues
│   │   ├── 02-promises.js                 # MDN: Creating Promises (resolve/reject), chaining .then().catch().finally()
│   │   ├── 03-async-await.js              # Syntactic sugar over promises, sequential vs parallel await, try...catch
│   │   └── 04-promise-combinators.js      # MDN: Concurrency via Promise.all, Promise.allSettled, race, any
│   └── 📂 milestone-04-dashboard/
│       ├── index.html                     # Live data tracking visualization UI
│       ├── styles.css                     # Modern glassmorphism layout dashboard
│       ├── api.js                         # Fetch API abstractions, Request/Response handling, custom error definitions
│       └── app.js                         # State machine management, dynamic UI rendering, error boundary handling
│
└── 📂 phase5-professional-toolkit/        # Matches MDN: "Client-side JavaScript frameworks" fundamentals
    ├── .eslintrc.json                     # Static code analysis configuration
    ├── .prettierrc                        # Automated code formatting configuration rules
    ├── vite.config.js                     # Ultra-fast ESM bundler configuration
    ├── index.html                         # Entry markup targeted by Vite
    └── 📂 src/
        ├── main.js                        # System initialization point (imports app modules)
        ├── 📂 modules/
        │   ├── calculations.js            # Math utilities using ES Modules (export/import)
        │   └── security.js                # Client-side text sanitization utilities to prevent XSS
        ├── 📂 utils/
        │   ├── debounce.js                # Optimization utility for input-throttling/search queries
        │   └── throttle.js                # Optimization utility for heavy mouse/scroll operations
        └── 📂 __tests__/                  # Unit testing structure
            ├── calculations.test.js       # Algorithmic output checks
            └── validation.test.js         # Edge-case verification testing suite