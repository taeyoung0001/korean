"use client";
import styles from "@/app/styles/home/homeSearch.module.scss";
import cn from "classnames/bind";

import Input from "@/app/components/input/input";
import Button from "./buttons/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const cx = cn.bind(styles);

const HomeSearch = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>("");
  const [data, setData] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("클릭됨", searchValue);

    // GET 요청에서 searchValue를 쿼리 파라미터로 포함시키기
    const fetchResultData = async () => {
      const res = await fetch(`/api/korean-dict?q=${searchValue}`);
      if (!res.ok) {
        console.log("API 호출 실패");
        return;
      }
      const result = await res.json();
      const item = result.channel.item;
      console.log(item);
      setData(result.channel);
      router.push(`/detail/${item[0].word}`);
    };

    fetchResultData();
  };

  return (
    <div className={cx("search-container")}>
      <Button
        type="button"
        onClick={handleSearch}
        bgcolor="#77655a"
        title={"찾기"}
      />
      <form className={cx("form-wrapper")}>
        <div className={cx("inputs")}>
          <Input onChange={handleChange} className={"medium"} />
        </div>
        <div className={cx("buttons-wrap")}>
          <div className={cx("buttons")}>
            <Button
              type="submit"
              onClick={handleSearch}
              bgcolor="#77655a"
              title={"찾기"}
            />
          </div>
          <div className={cx("buttons-detail")}>
            <Button bgcolor="#77655a" title={"자세히찾기"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default HomeSearch;
