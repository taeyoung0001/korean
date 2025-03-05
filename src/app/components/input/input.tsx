import React from "react";
import styles from "./input.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type InputProps = {
  onChange?: () => void;
  placeHolder?: string;
  className: "large" | "medium" | "small";
};
const Input = (props: InputProps) => {
  const { onChange, placeHolder, className = "medium" } = props;
  return (
    <div className={cx("input-container")}>
      <input
        className={cx("input", className)}
        onChange={onChange}
        placeholder={placeHolder}
        type="text"
      />
    </div>
  );
};

export default Input;
