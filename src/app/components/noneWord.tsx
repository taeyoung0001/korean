/* eslint-disable react/no-unescaped-entities */
import styles from "@/app/styles/components/noneWord.module.scss";
import cn from "classnames/bind";
import Link from "next/link";
import { usePathname } from "next/navigation";

const cx = cn.bind(styles);

const NoneWord = () => {
  const pathname = usePathname();
  const slug = pathname?.split("/detail/")[1];
  const decodedSlug = slug ? decodeURIComponent(slug) : "값 없음";

  if (!slug) {
    return <p>loading</p>;
  }
  return (
    <div className={cx("wrap")}>
      <div className={cx("word-wrap")}>
        <p>
          죄송합니다...검색하신 단어 "{decodedSlug}"는 사전에 없는 단어 입니다.
        </p>
        <div className={cx("button-container")}>
          <Link href={"/"}>
            <button>처음 화면으로 이동하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoneWord;
