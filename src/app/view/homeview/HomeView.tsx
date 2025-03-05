/* eslint-disable @next/next/no-img-element */

import styles from "@/app/styles/home/HomeView.module.scss";
import cn from "classnames/bind";
import NavBar from "@/app/components/navBar";
import HomeSearch from "@/app/components/homeSearch";
import HomeNotice from "@/app/components/homeNotice";

const cx = cn.bind(styles);

const HomeView = () => {
  return (
    <div className={cx("home-wrap")}>
      {/* 맨위에 정보창 */}
      <div className={cx("alert-title")}>
        <p>본 페이지는 국립국어원 표전국어대사전 openAPI로 제작되었습니다.</p>
      </div>
      {/* 네브바 */}
      <NavBar />
      {/* 로고이미지 */}
      <div className={cx("logo")}>
        <img src="korea.png" alt="국립국어원 표준국어대사전 로고 이미지" />
      </div>
      {/* 검색창 */}
      <HomeSearch />
      {/* 공지사항 */}
      <HomeNotice />
    </div>
  );
};

export default HomeView;
