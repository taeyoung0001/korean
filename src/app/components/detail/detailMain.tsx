import styles from "@/app/styles/detail/detailMain.module.scss";
import cn from "classnames/bind";
import TextCard from "../cards/textCard";

const cx = cn.bind(styles);

const DetailMain = () => {
  return (
    <div className={cx("detail-wrap")}>
      <div className={cx("tap-bar")}>
        나무 찾기 검색 결과 <span>(총 5개)</span>
      </div>

      <div className={cx("content")}>
        <TextCard
          word="나무"
          content="12123222222222222222222222222222222222svasvasvasfvafvafvadasdㅇㄴㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㅇㄻㄴㅇㄹㄴㅇㄹㄴㅁㅇ3"
        />
        <TextCard
          word="나무"
          content="12123222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222svasvasvasfvafvafvadasdㅇㄴㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㅇㄻㄴㅇㄹㄴㅇㄹㄴㅁㅇ3"
        />
      </div>
    </div>
  );
};

export default DetailMain;
