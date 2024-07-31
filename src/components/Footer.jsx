import styles from "./footer.module.css";

export default function Footer({ todos }) {
  const completedTodos = todos.filter((item) => item.done).length;
  const uncompletedTodos = todos.filter((item) => !item.done).length;
  const totalTodos = todos.length;

  return (
    <div className={styles.footer}>
      <span className={styles.span}>Completed todos:{completedTodos}</span>
      <hr></hr>
      <span className={styles.span}>Uncompleted todos: {uncompletedTodos}</span>
      <hr />
      <span className={styles.span}>Total todos:{totalTodos}</span>
      <hr className={styles.hr} />
    </div>
  );
}
