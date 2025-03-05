import styles from "@/app/styles/home/homeSearch.module.scss";
import cn from "classnames/bind";

import Input from "@/app/components/input/input";
import Button from "./buttons/button";

const cx = cn.bind(styles);

const HomeSearch = () => {
  return (
    <div className={cx("search-container")}>
      <form className={cx("form-wrapper")}>
        <div className={cx("inputs")}>
          <Input className={"medium"} />
        </div>
        <div className={cx("buttons-wrap")}>
          <div className={cx("buttons")}>
            <Button bgcolor="#77655a" title={"찾기"} />
          </div>
          <div className={cx("buttons-detail")}>
            <Button bgcolor="#77655a" title={"자세히찾기"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default HomeSearch;
