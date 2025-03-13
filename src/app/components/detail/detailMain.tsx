/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import styles from "@/app/styles/detail/detailMain.module.scss";
import cn from "classnames/bind";
import TextCard from "../cards/textCard";
import { useEffect, useState } from "react";

const cx = cn.bind(styles);

type DetailMainProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemArray: any;
};

const DetailMain = (props: DetailMainProps) => {
  const { itemArray } = props;
  console.log(itemArray);
  const theWord = itemArray[0]?.word;
  const [localArray, setLocalArray] = useState<string[]>();

  useEffect(() => {
    if (!theWord) return;

    const STORAGE_KEY = "dict";

    // 1. 기존 로컬스토리지 값 가져오기 (잘못된 값이면 빈 배열 반환)
    let storedWords;
    try {
      storedWords = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (!Array.isArray(storedWords)) {
        storedWords = [];
      }
    } catch (error) {
      storedWords = [];
    }

    // 2️. 중복 제거 후 theWord를 맨 앞에 추가
    const updatedWords = storedWords.filter((word: string) => word !== theWord);
    updatedWords.unshift(theWord);

    // 3️. 최대 5개까지만 유지
    if (updatedWords.length > 5) {
      updatedWords.pop();
    }

    // 4️. 상태 업데이트 및 로컬스토리지 저장
    setLocalArray(updatedWords);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedWords));
  }, [theWord]);

  return (
    <div className={cx("detail-wrap")}>
      <div className={cx("tap-bar")}>
        {itemArray[0].word} 찾기 검색 결과
        <span>(총 {itemArray.length}개)</span>
      </div>

      <div className={cx("content")}>
        {itemArray.length === 1
          ? itemArray.map(
              (list: {
                sup_no: string;
                word: string;
                sense: { definition: string | undefined };
              }) => (
                <div key={list.sup_no}>
                  <TextCard
                    number={(parseInt(list.sup_no) + 1).toString()}
                    word={list.word}
                    content={list.sense.definition}
                  />
                </div>
              )
            )
          : itemArray.map(
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
