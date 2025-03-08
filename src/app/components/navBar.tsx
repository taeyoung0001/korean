"use client";

import styles from "@/app/styles/components/navBar.module.scss";
import cn from "classnames/bind";
import RecentWord from "./recentWord";
import { useState } from "react";

const cx = cn.bind(styles);

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handlerOpen = () => {
    setOpen((prev) => !prev);
  };

  console.log("네브바", open);
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
          <span onClick={handlerOpen}>최근 검색한 단어</span>
        </li>
      </ul>
      {open ? (
        <div>
          <RecentWord />
          <span onClick={handlerOpen}>닫기</span>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;

//
