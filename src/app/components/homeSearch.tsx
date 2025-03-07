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
  const moveDetailPage = () => {
    router.push(`/detail/${searchValue}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent) => {
    e.stopPropagation();
    moveDetailPage();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchValue.trim()) {
        moveDetailPage();
      }
    }
  };

  return (
    <div className={cx("search-container")}>
      <form className={cx("form-wrapper")}>
        <div className={cx("inputs")}>
          <Input
            onkeydown={handleKeyDown}
            onChange={handleChange}
            className={"medium"}
          />
        </div>
        <div className={cx("buttons-wrap")}>
          <div className={cx("buttons")}>
            <Button
              type="button"
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
