import styles from "@/app/styles/components/textCard.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type TextCardProps = {
  word?: string;
  content?: string;
};
const TextCard = (props: TextCardProps) => {
  const { word, content } = props;

  return (
    <div className={cx("text-card-container")}>
      <div className={cx("container")}>
        <p className={cx("word")}>
          {word}
          <span>1</span>
        </p>
        <p className={cx("content")}>{content}</p>
      </div>
    </div>
  );
};

export default TextCard;
