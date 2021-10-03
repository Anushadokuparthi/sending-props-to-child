import "./styles.css";
import { useState } from "react";
import Todo from "./Todo";
export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "This is first list"
    },
    {
      id: 2,
      title: "This is second list"
    },
    {
      id: 3,
      title: "This is third list"
    }
  ]);

  return (
    <div className="App">
      <h1></h1>
      <Todo todos={todos} /> //This is how i'm passing props in parent component
    </div>
  );
}
