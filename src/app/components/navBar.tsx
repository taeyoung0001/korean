"use client";

import styles from "@/app/styles/components/navBar.module.scss";
import cn from "classnames/bind";

import { useState } from "react";
import Link from "next/link";
import RecentWord from "./recentWord";
import { signOut } from "next-auth/react";

const cx = cn.bind(styles);
type user = {
  user: { name: string; email?: string; image?: string };
};
type NavBarType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session: user | null | any;
};

const NavBar = (props: NavBarType) => {
  const { session } = props;

  console.log("session", session);
  const [open, setOpen] = useState<boolean>(false);
  const handlerOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className={cx("nav-wrap")}>
      <ul className={cx("navlist")}>
        <li>
          {session ? (
            <span>안녕하세요{session.user.name}님</span>
          ) : (
            <Link href={"/Login"}>
              <span>들어가기</span>
            </Link>
          )}
        </li>
        <li>
          <span>일러두기</span>
        </li>
        <li>
          <span onClick={handlerOpen}>최근 검색한 단어</span>
        </li>

        <li>
          {" "}
          {session ? (
            <span
              onClick={() => {
                signOut();
              }}
            >
              나가기
            </span>
          ) : null}
        </li>
      </ul>
      {open ? (
        <div className={cx("modal")}>
          <RecentWord />
          <span onClick={handlerOpen}>닫기</span>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;

//
