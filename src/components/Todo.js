import { useState } from "react";

export default function Todo(props) {
  // const [name, setName] = useState("Anusha Dokuparthi");
  const renderNewList = () => {
    console.log("hi");
  };
  return (
    <div>
      {props.todos.map((todo) => {
        // using props in child component and looping
        return <h1 key={todo.id}>{todo.title}</h1>;
      })}
    </div>
  );
}
