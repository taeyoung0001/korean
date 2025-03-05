import Button from "./components/buttons/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button className="large" title={"large"} />
      <Button bgcolor="#77655a" title={"찾아보기"} />
      <Button className="small" title="자세히찾기" />
    </div>
  );
}
