import styles from "./page.module.css";
import HomeView from "./view/homeview/HomeView";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeView />
    </div>
  );
}
