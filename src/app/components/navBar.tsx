import styles from "@/app/styles/components/navBar.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

const NavBar = () => {
  return (
    <nav className={cx("nav-wrap")}>
      <ul className={cx("navlist")}>
        <li>
          <span>들어가기</span>
        </li>
        <li>
          <span>회원가입</span>
        </li>
        <li>
          <span>일러두기</span>
        </li>
        <li>
          <span>최근 검색한 단어</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
