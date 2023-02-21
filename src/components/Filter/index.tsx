import styles from "./categories.module.scss";

const Filter: React.FC = () => {
  return (
    <div className={styles.categories}>
      <ul>
        <li className={styles.active}>Все</li>
        <li>Курица</li>
        <li>Говядина</li>
        <li>Баранина</li>
        <li>Фалафель</li>
      </ul>
    </div>
  );
};

export default Filter;
