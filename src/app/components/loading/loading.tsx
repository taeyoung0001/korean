import styles from "@/app/styles/components/loading.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);
const Loading = () => {
  return (
    <>
      <div className={cx("loading-wrap")}>
        <span className={cx("spinner")}></span>
      </div>
    </>
  );
};
export default Loading;
