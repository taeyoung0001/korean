import styles from "@/app/styles/home/homeNotice.module.scss";
import cn from "classnames/bind";
import Button from "./buttons/button";
import Card from "./cards/card";
import { noticeData } from "../utils/noticeData";
const cx = cn.bind(styles);

const HomeNotice = () => {
  return (
    <div className={cx("notice-container")}>
      <div className={cx("title")}>
        <span>알립니다</span>
        <div className="buttons">
          <Button bgcolor="#77655a" title={"더보기"} className="small" />
        </div>
      </div>

      <ul className={cx("list-wrap")}>
        {noticeData.map((notice) => (
          <li key={notice.id}>
            <Card content={notice.content} date={notice.date} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeNotice;
