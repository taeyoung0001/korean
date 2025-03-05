/* eslint-disable @next/next/no-img-element */
import Input from "@/app/components/input/input";
import styles from "@/app/styles/HomeView.module.scss";
import cn from "classnames/bind";
import Button from "@/app/components/buttons/button";
import NavBar from "@/app/components/navBar";

const cx = cn.bind(styles);

const HomeView = () => {
  return (
    <div className={cx("home-wrap")}>
      {/* 맨위에 정보창 */}
      <div className={cx("alert-title")}>
        <p>본 페이지는 국립국어원 표전국어대사전 openAPI로 제작되었습니다.</p>
      </div>

      {/* 로그인페이지 */}
      <NavBar />

      <div className={cx("logo")}>
        <img src="korea.png" alt="국립국어원 표준국어대사전 로고 이미지" />
      </div>
      {/* 검색창 */}
      <div>
        <form>
          <Input className={"small"} />
          <Button title={"찾기"} />
        </form>
        <Button title={"자세히찾기"} />
      </div>

      {/* 공지사항 */}
      <div>
        <div>
          <span>알립니다</span>
          <Button title={"더보기"} className="small" />
        </div>

        <ul>
          <li>
            <span>공지사항들~~</span>
            <span>날짜들</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeView;
