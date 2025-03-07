import styles from "@/app/styles/detail/detailNavBar.module.scss";
import cn from "classnames/bind";
import HomeSearch from "../homeSearch";
import Link from "next/link";

const cx = cn.bind(styles);

/* eslint-disable @next/next/no-img-element */
const DetailNavBar = () => {
  return (
    <div className={cx("navbar-wrap")}>
      <div className={cx("img-wrap")}>
        <Link href={"/"}>
          <img src="/detailLogo.png" alt="" />
        </Link>
      </div>
      <HomeSearch />
    </div>
  );
};

export default DetailNavBar;
