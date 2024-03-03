import styles from "./menu.module.css";
export default function Menu() {
  return (
    <div className={styles.menuContainer}>
      <p className={styles.welcomLine}>Welcome to ease menu!</p>
      <p className={styles.welcomeSub}>
        Lets add some categories and food items quickly{" "}
      </p>
    </div>
  );
}
