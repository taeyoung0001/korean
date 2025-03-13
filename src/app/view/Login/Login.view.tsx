import LoginForm from "@/app/components/login/loginForm";
import NavBar from "@/app/components/navBar";
import styles from "@/app/styles/login/login.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

const LoginView = () => {
  return (
    <div className={cx("login-form-container")}>
      <NavBar />
      <div className={cx("login-form-wrap")}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginView;
