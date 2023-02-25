import React, { VFC } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Content } from "./Content";

export const TextContents = () => {
  
  return(
    <>

    <ChakraProvider>
    <Content title="Career">
       法学部に在学中、就職に失敗し、ヨーロッパをバックパック。
        その後フリーターをしていました。
        海外でも通用する仕事をしたいと思っていたところでWEBの世界に興味を持ちました。
        約1年間、デザインやWEB制作の勉強したのち小さなデザイン会社に就職。<br />
        その後は勉強＆フリーランスをの期間経て、2022年から正社員として旅行会社のWEB部署でデザイン業務、
        副業でアプリの制作会社に業務委託として在籍しています。<br />
       </Content>

       <Content title="Work">
        会社では主にアプリ・WEBデザインをしていて、副業はアプリデザインがメインです。<br />
        個人としてはデザインのお仕事はもちろん、Wordpressdの構築、小規模なWEBサイトのデザイン〜コーディングまでやらせていただいています！
        どっちつかずは良くないなと思いながらも両方楽しくて常に情報をキャッチアップしています！<br />
        このブログもデザインから自分で構築しました!（Next.js×contentful）<br />
       </Content>

       <Content title="Goal">
       これからの目標は、趣味としてプログラミンやコーディングを勉強しつつ、デザインはプロとしてのクオリティを追求することです。<br />
       UI/UXを極めるために心理学や行動経済学も勉強したいなと思っています!<br />
       また、ブログやSNSでの発信も頑張っていきたいのでフォローしていただけると嬉しいです😊
       </Content>
    </ChakraProvider>
    </>
  )
};
