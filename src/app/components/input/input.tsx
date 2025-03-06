import React from "react";
import styles from "@/app/styles/components/input.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);
//제네릭타입으로 리팩토링 필요

type InputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  value?: string;
  className: "large" | "medium" | "small";
};

const Input = (props: InputProps) => {
  const { value, onChange, placeHolder, className = "medium" } = props;
  return (
    <div className={cx("input-container")}>
      <input
        className={cx("input", className)}
        onChange={onChange}
        placeholder={placeHolder}
        type="text"
        value={value}
      />
    </div>
  );
};

export default Input;
