import React from "react";
import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={styles.list}>
      <ul>
        {sortedTodos.map((todo) => (
          <TodoItem
            key={todo.name}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}
