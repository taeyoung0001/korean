import styles from "./button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type SizeType = "large" | "medium" | "small";

type ButtonProps<T extends SizeType = "medium"> = {
  className?: T;
  title: string;
  onClick?: () => void;
  bgcolor?: string;
};

const Button = <T extends SizeType = "medium">({
  className,
  title,
  onClick,
  bgcolor,
}: ButtonProps<T>) => {
  return (
    <div className={cx("button-container")}>
      <button
        style={{ backgroundColor: bgcolor }}
        onClick={onClick}
        className={cx("button", className)}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
