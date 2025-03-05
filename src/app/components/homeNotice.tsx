import styles from "@/app/styles/home/homeNotice.module.scss";
import cn from "classnames/bind";
import Button from "./buttons/button";
const cx = cn.bind(styles);

const HomeNotice = () => {
  return (
    <div className={cx("notice-container")}>
      <div className={cx("title")}>
        <span>알립니다</span>
        <div className="buttons">
          <Button title={"더보기"} className="small" />
        </div>
      </div>

      <ul className={cx("list-wrap")}>
        <li>
          <span>공지사항들~~</span>
          <span>날짜들</span>
        </li>
      </ul>
    </div>
  );
};

export default HomeNotice;
