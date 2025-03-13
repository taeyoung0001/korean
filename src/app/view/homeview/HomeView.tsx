/* eslint-disable @next/next/no-img-element */

import styles from "@/app/styles/home/HomeView.module.scss";
import cn from "classnames/bind";
import HomeSearch from "@/app/components/homeSearch";
import HomeNotice from "@/app/components/homeNotice";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const cx = cn.bind(styles);

const HomeView = async () => {
  const session = await getServerSession(authOptions); //서버 컴포넌트, 서버 기능에서 사용하는 함수
  console.log(session);
  return (
    <div className={cx("home-wrap")}>
      {/* 로고이미지 */}
      <div className={cx("logo")}>
        <Link href={"/"}>
          {" "}
          <img src="korea.png" alt="국립국어원 표준국어대사전 로고 이미지" />
        </Link>
      </div>
      {/* 검색창 */}
      <HomeSearch />
      {/* 공지사항 */}
      <HomeNotice />
    </div>
  );
};

export default HomeView;
