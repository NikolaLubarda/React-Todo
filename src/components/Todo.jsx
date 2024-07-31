import { useState } from "react";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo({}) {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <FormTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer todos={todos} />
    </div>
  );
}
