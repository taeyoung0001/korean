import styles from "@/app/styles/components/card.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);
type CardProps = {
  content?: string;
  date?: string;
};

const Card = (props: CardProps) => {
  const { content, date } = props;
  return (
    <div className={cx("card-wrap")}>
      <span className={cx("content")}>{content}</span>
      <span className={cx("date")}>{date}</span>
    </div>
  );
};

export default Card;
