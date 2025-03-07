"use client";

import DetailMain from "@/app/components/detail/detailMain";
import DetailNavBar from "@/app/components/detail/detailNavBar";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loading from "@/app/components/loading/loading";
import NoneWord from "@/app/components/noneWord";

const DetailView = () => {
  const params = useParams<{ word: string }>();
  console.log(params);
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchResultData = async () => {
      setLoading(true);
      setError(false);
      const res = await fetch(`/api/korean-dict?q=${params?.word}`);
      if (!res.ok) {
        console.log("API 호출 실패");
        setError(true);
        return;
      }
      const result = await res.json();
      const itemArray = result.channel.item;
      setData(itemArray);
      setLoading(false);
    };
    fetchResultData();
  }, [params]);

  if (error) return <NoneWord />;
  if (loading) return <Loading />;

  return (
    <div>
      {data ? (
        <>
          <DetailNavBar />
          <DetailMain itemArray={data} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DetailView;
