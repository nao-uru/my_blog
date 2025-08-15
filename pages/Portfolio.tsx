import dynamic from 'next/dynamic';
import { HeadSetting } from "../components/Templete/Head";
import { Pagetitle } from "../components/Parts/Pagetitle";
import { Layout } from "../components/Templete/Layout";
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';

import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
import type { NotionComponents } from 'react-notion-x';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism.css';
import 'katex/dist/katex.min.css';
import { useState, useEffect } from "react";
import { LinkButton } from '../components/Parts/LinkButton';
import {  AiOutlineMail} from "react-icons/ai";


// Notion取得
const Code = dynamic(() => import('react-notion-x/build/third-party/code').then(m => m.Code));
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then(m => m.Collection));
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then(m => m.Equation));
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then(m => m.Pdf), { ssr: false });
const NOTION_PAGE_ID = '13a2316f396e806fb9cede2fb2bb2a9e';


export async function getServerSideProps() {
   const api = new NotionAPI();
   let recordMap: any = null;
   try {
     const timeoutMs = 12_000;
     recordMap = await Promise.race([
       api.getPage(NOTION_PAGE_ID),
       new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeoutMs)),
     ]);
   } catch (e) {
     console.error('Notion fetch failed:', e);
   }
   return { props: { recordMap } };}


// パスワードロック
const STORAGE_KEY = "pg:portfolio";
const DURATION_MS = 1000 * 60 * 60 * 1;

export default function Portfolio({ recordMap }: any) {
  const [input, setInput] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const { expiresAt } = JSON.parse(raw);
      if (typeof expiresAt === "number" && Date.now() < expiresAt) {
        setIsAuth(true);
        const t = setTimeout(() => {
          localStorage.removeItem(STORAGE_KEY);
          setIsAuth(false);
        }, expiresAt - Date.now());
        return () => clearTimeout(t);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {}
  }, []);

  const password = "Nao_NONT";
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === password) {
      setIsAuth(true);
      const expiresAt = Date.now() + DURATION_MS;
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ expiresAt }));
      setTimeout(() => {
        localStorage.removeItem(STORAGE_KEY);
        setIsAuth(false);
      }, DURATION_MS);
    } else {
      alert("パスワードが違います");
    }
  };

  if (!isAuth) {
    // ログイン画面
    return (
      <Layout>
        <Pagetitle>Authentication</Pagetitle>
        <Box my={16} w={{ base: "320px", md: '400px'}}>
          <Text mb={8}>この先のページを閲覧するにはパスワードが必要です。</Text>
          <form onSubmit={handleSubmit}>
            <Flex flexDirection="column" gap={6}>
              <Input
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="パスワードを入力してください"
                size="lg"
                h="50px"
                borderRadius="md"
                bg="white"
                borderColor="gray.300"
                _focus={{ borderColor: "teal.400", boxShadow: "0 0 0 1px teal.400" }}
              />
              <Button py={6} width="fit-content" type="submit" bgColor="#23BA78" color="#fff" fontWeight={"normal"} borderRadius="full" _hover={{ bgColor: "#23ba78b6" }}>
                認証する
              </Button>
            </Flex>
          </form>
        </Box>
        <Box>
          <Text my={4}>パスワードを知りたい方はメールやSNSのDMでお問い合わせください！</Text>
          <LinkButton href="mailto:nao.uru0419@gmail.com?subject=ポートフォリオパスワード問い合わせ" icon={<AiOutlineMail size={20} />} border="#151515" target="blank" >お問い合わせ</LinkButton>
        </Box>
      </Layout>
    );
  }
  if (!recordMap) {
  return (
    <Layout>
      <Pagetitle>Portfolio</Pagetitle>
      <Box my={16}>
        <Text>読み込みに失敗しました。時間をおいて再度お試しください。</Text>
      </Box>
    </Layout>
  );
}

  // すべてのリンクを別タブで開く aタグを差し替え
  const NotionLink: NotionComponents['Link'] = ({ href, children, ...props }) => (
     <a href={href as string} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
  );

  const PageLink: any = ({ href, children, className, ...props }) => (
  <a
    href={href as string}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    {...props}
  >
    {children}
  </a>
);

  // Notionのページ表示
  return (
    <>
      <HeadSetting
      title="NAO's Portfolio"
      description="制作実績"
      path="/Portfolio"
      ogImage="https://www.naosjournal.com/img/Top/Portfolio.png"
      />

      <Layout>
        <Pagetitle>Portfolio</Pagetitle>
        <Box my={16}>
          <NotionRenderer
          recordMap={recordMap}
          components={{ Code, Collection, Equation, Pdf, Link: NotionLink, PageLink }}
          mapPageUrl={(id) => `https://www.notion.so/${id.replace(/-/g, '')}?pvs=4`}
        />
        </Box>
      </Layout>
    </>
  );
}
