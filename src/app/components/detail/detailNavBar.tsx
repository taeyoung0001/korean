import styles from "@/app/styles/detail/detailNavBar.module.scss";
import cn from "classnames/bind";
import HomeSearch from "../homeSearch";

const cx = cn.bind(styles);

/* eslint-disable @next/next/no-img-element */
const DetailNavBar = () => {
  return (
    <div className={cx("navbar-wrap")}>
      <div className={cx("img-wrap")}>
        <img src="/detailLogo.png" alt="" />
      </div>
      <HomeSearch />
    </div>
  );
};

export default DetailNavBar;
