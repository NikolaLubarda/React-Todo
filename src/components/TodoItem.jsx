import styles from "./todoItem.module.css";

export default function TodoItem({ todo, todos, setTodos }) {
  function handleDelete() {
    console.log("clicked", todo);
    setTodos(todos.filter((item) => item !== todo));
  }
  function handleClick() {
    const newArray = todos.map((item) =>
      item.name === todo.name ? { ...item, done: !item.done } : item
    );
    setTodos(newArray);
    console.log(todos);
  }
  const className = todo.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <li className={styles.name}>
        {" "}
        <span onClick={handleClick} className={className}>
          {todo.name}{" "}
        </span>
      </li>
      <hr className={styles.line} />

      <span>
        <button className={styles.button} onClick={handleDelete}>
          x
        </button>
      </span>
    </div>
  );
}
