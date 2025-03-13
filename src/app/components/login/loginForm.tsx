"use client";

import styles from "@/app/styles/login/loginForm.module.scss";

import cn from "classnames/bind";
import { signIn } from "next-auth/react";
import Link from "next/link";

const cx = cn.bind(styles);

const LoginForm = () => {
  return (
    <div className={cx("login-container")}>
      <h2>들어가기</h2>

      <button
        className={cx("btn-social", "git")}
        onClick={() => {
          signIn("github", { callbackUrl: "/" });
        }}
      >
        깃허브로 로그인하기
      </button>
      <button
        className={cx("btn-social", "kakao")}
        onClick={() => {
          signIn("kakao", { callbackUrl: "/" });
        }}
      >
        카카오로 로그인하기
      </button>
      <Link href={"/"}>
        <span>홈으로 돌아가기</span>
      </Link>
    </div>
  );
};

export default LoginForm;
