// pages/api/korean-dict.ts

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q } = req.query;
  const query = q || "나무"; // 기본값 "나무"

  const url = `https://stdict.korean.go.kr/api/search.do?key=E8A86C3A73989EE90B7A2102867A5DFC&method=word_info&req_type=json&q=${query}&advanced=n`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      res.status(500).json({ error: "데이터 로딩 실패" });
      return;
    }
    const data = await response.json();
    res.status(200).json(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    res.status(500).json({ error: "연결 실패" });
  }
}
