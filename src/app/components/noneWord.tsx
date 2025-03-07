import styles from "@/app/styles/components/noneWord.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

const NoneWord = () => {
  return (
    <div className={cx("container")}>
      <div>죄송합니다... 검색하신 단어는 사전에 없는 단어 입니다.</div>
      <div>
        <button>처음 화면으로 이동하기</button>
      </div>
    </div>
  );
};

export default NoneWord;
