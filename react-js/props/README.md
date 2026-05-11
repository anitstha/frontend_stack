## **📂 Props Practice Folder Structure (Clean & Minimal)**

```text
props/
│
├─ src/
│   ├─ components/
│   │   ├─ BasicProps/
│   │   │   └─ UserCard.jsx       # Simple props: name, age, role
│   │   │
│   │   ├─ MultipleProps/
│   │   │   └─ ProductCard.jsx    # Multiple props: name, price, description
│   │   │
│   │   ├─ NestedProps/
│   │   │   └─ Profile.jsx        # Nested props: object or array
│   │   │
│   │   ├─ FunctionProps/
│   │   │   └─ Button.jsx         # Props as functions (callbacks)
│   │   │
│   │   └─ DefaultProps/
│   │       └─ Greeting.jsx       # Default values for props
│   │
│   ├─ pages/
│   │   ├─ BasicPropsPage.jsx     # Parent wrapper for BasicProps practice
│   │   ├─ MultiplePropsPage.jsx
│   │   ├─ NestedPropsPage.jsx
│   │   ├─ FunctionPropsPage.jsx
│   │   └─ DefaultPropsPage.jsx
│   │
│   ├─ App.jsx                    # Only renders the page you want to practice
│   └─ index.js
│
└─ package.json
```

---

### **✅ How it works**

1. **`components/`**
   - Each folder = one type of props practice
   - Each file = one child component
   - Data can be **defined inside component** for practice or passed from a page

2. **`pages/`**
   - Acts as a **parent for a specific practice topic**
   - Renders one or more component examples
   - Keeps `App.jsx` clean

3. **`App.jsx`**
   - Minimal code, just renders the page you want to practice:

```jsx id="p2y4gx"
import React from "react";
import BasicPropsPage from "./pages/BasicPropsPage";

const App = () => {
  return <BasicPropsPage />;
};

export default App;
```

4. **Switch topics easily**:

```jsx id="vwe7x9"
import FunctionPropsPage from "./pages/FunctionPropsPage";

const App = () => <FunctionPropsPage />;
```

- No need to pass **all props from App.jsx**
- Each page **owns its data** → cleaner, more modular

---

### **💡 Advantages of this structure**

| Feature                | Benefit                                               |
| ---------------------- | ----------------------------------------------------- |
| Separate `components/` | Each topic has its own reusable components            |
| Separate `pages/`      | Keeps App.jsx clean, easy to focus on one topic       |
| Self-contained data    | Avoids prop congestion in App.jsx                     |
| Easy scaling           | Add new topics/components without cluttering main app |
| Explicit imports       | No `index.js` needed, paths are clear                 |

📚 Topics to Cover for Props Practice
1️⃣ Basic Props

Passing simple data from parent to child

Example: Name, Age, Role

Component: UserCard.jsx

Goal: Display data using {props.name}, {props.age}

2️⃣ Multiple Props

Passing multiple props at once

Example: Product details → name, price, description

Component: ProductCard.jsx

Goal: Show all props together and style them with JSX

3️⃣ Nested Props / Objects as Props

Passing objects or arrays as props

Example: Profile object → {name, age, skills: []}

Component: Profile.jsx

Goal: Learn .map() to render array inside child

4️⃣ Function Props (Callback Props)

Passing functions from parent → child

Example: Button click handler

Component: Button.jsx

Goal: Child calls parent function with arguments → shows interactivity

5️⃣ Default Props

Using default props if parent doesn’t pass data

Component: Greeting.jsx

Goal: Avoid undefined errors, provide fallback values

6️⃣ PropTypes (Optional but Recommended)

Validate prop types for safer code

Use the prop-types package

Example: Ensure age is a number, name is a string

7️⃣ Bonus Topics (Advanced Practice)

Conditional rendering based on props

Styling components differently based on props

Passing JSX as props (children, render props)

Spread operator for passing all props at once
