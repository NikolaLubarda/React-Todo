import { useState } from "react";
import styles from "./form.module.css";
export default function FormTodo({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  function handleChange(e) {
    setTodo({ name: e.target.value, done: false });
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={handleChange}
          value={todo.name}
          type="text"
          placeholder="Enter todo item..."
        />
        <button className={styles.modernButton} type="submit">
          ADD
        </button>
      </div>
    </form>
  );
}
