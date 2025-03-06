import styles from "@/app/styles/components/button.module.scss";
import classNames from "classnames/bind";
import React from "react";

const cx = classNames.bind(styles);

type SizeType = "large" | "medium" | "small";

type ButtonProps<T extends SizeType = "medium"> = {
  className?: T;
  title: string;
  onClick?: (e: React.MouseEvent) => void;
  bgcolor?: string;
  type?: "button" | "submit";
};

const Button = <T extends SizeType = "medium">({
  className,
  title,
  onClick,
  bgcolor,
  type = "button",
}: ButtonProps<T>) => {
  return (
    <div className={cx("button-container")}>
      <button
        style={{ backgroundColor: bgcolor }}
        onClick={onClick}
        className={cx("button", className)}
        type={type}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
