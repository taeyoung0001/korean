import styles from "@/app/styles/components/recentWord.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);
const RecentWord = () => {
  const STORAGE_KEY = "dict";

  const itemList: string[] = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
  );
  console.log(itemList[0]);

  return (
    <div className={cx("modal")}>
      {itemList == null
        ? "검색어 없음"
        : itemList.map((a: string, i: number) => (
            <>
              <p key={i}>{a}</p>
            </>
          ))}
    </div>
  );
};

export default RecentWord;
