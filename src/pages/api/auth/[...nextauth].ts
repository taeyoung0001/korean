import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions = {
  providers: [
    //구현하고 싶은 방식 배열로 정리함
    //깃허브
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    //카카오 프로바이더 생성 법 찾아보기기
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
  ],

  secret: process.env.JWT_PW,
};
export default NextAuth(authOptions);
