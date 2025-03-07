import styles from "@/app/styles/detail/detailMain.module.scss";
import cn from "classnames/bind";
import TextCard from "../cards/textCard";

const cx = cn.bind(styles);

type DetailMainProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemArray: any;
};

const DetailMain = (props: DetailMainProps) => {
  const { itemArray } = props;
  console.log(itemArray);

  return (
    <div className={cx("detail-wrap")}>
      <div className={cx("tap-bar")}>
        나무 찾기 검색 결과 <span>(총 {itemArray.length}개)</span>
      </div>

      <div className={cx("content")}>
        {itemArray.map(
          (list: {
            sup_no: string;
            word: string;
            sense: { definition: string | undefined };
          }) => (
            <div key={list.sup_no}>
              <TextCard
                number={list.sup_no}
                word={list.word}
                content={list.sense.definition}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DetailMain;
