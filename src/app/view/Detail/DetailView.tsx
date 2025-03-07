"use client";

import DetailMain from "@/app/components/detail/detailMain";
import DetailNavBar from "@/app/components/detail/detailNavBar";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const DetailView = () => {
  const params = useParams<{ word: string }>();
  console.log(params);
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchResultData = async () => {
      const res = await fetch(`/api/korean-dict?q=${params?.word}`);
      if (!res.ok) {
        console.log("API 호출 실패");
        return;
      }
      const result = await res.json();
      const itemArray = result.channel.item;
      setData(itemArray);
    };
    fetchResultData();
  }, [params]);

  return (
    <div>
      {data ? (
        <>
          <DetailNavBar />
          <DetailMain itemArray={data} />
        </>
      ) : (
        <p>로딩 중</p>
      )}
    </div>
  );
};

export default DetailView;
