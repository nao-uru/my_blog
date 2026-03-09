import dynamic from 'next/dynamic';
import { HeadSetting } from "../components/Templete/Head";
import { Pagetitle } from "../components/Parts/Pagetitle";
import { Layout } from "../components/Templete/Layout";
import { Box, Button, Flex, Input, Spinner, Text } from '@chakra-ui/react';

import { NotionRenderer } from 'react-notion-x';
import type { NotionComponents } from 'react-notion-x';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism.css';
import 'katex/dist/katex.min.css';
import { useState, useEffect, Component, type ReactNode } from "react";
import { LinkButton } from '../components/Parts/LinkButton';
import { AiOutlineMail, AiOutlineExport } from "react-icons/ai";

// Notion サードパーティコンポーネント（遅延読み込み）
const Code = dynamic(() => import('react-notion-x/build/third-party/code').then(m => m.Code));
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then(m => m.Collection));
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then(m => m.Equation));
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then(m => m.Pdf), { ssr: false });

// NotionRenderer のレンダーエラーをキャッチして白画面を防ぐ
class NotionErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

// パスワードロック
const STORAGE_KEY = "pg:portfolio";
const DURATION_MS = 1000 * 60 * 60 * 1;

export default function Portfolio() {
  const [input, setInput] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [recordMap, setRecordMap] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  // ローカルストレージから認証状態を復元
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

  // 認証後にNotionコンテンツを取得
  useEffect(() => {
    if (!isAuth) return;
    setLoading(true);
    setFetchError(false);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25_000);
    fetch('/api/notion-portfolio', { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('fetch failed');
        return res.json();
      })
      .then(data => {
        setRecordMap(data);
        setLoading(false);
      })
      .catch(() => {
        setFetchError(true);
        setLoading(false);
      })
      .finally(() => clearTimeout(timeoutId));
  }, [isAuth]);

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

  // ログイン画面
  if (!isAuth) {
    return (
      <Layout>
        <Pagetitle>Authentication</Pagetitle>
        <Box my={16} w={{ base: "320px", md: '400px' }}>
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
              <Button
                py={6}
                width="fit-content"
                type="submit"
                background="linear-gradient(87.37deg, #1b756c, #279c90 66.83%, #68a8a2)"
                color="#fff"
                fontWeight="normal"
                borderRadius="full"
                _hover={{ bgColor: "#23ba78b6" }}
              >
                認証する
              </Button>
            </Flex>
          </form>
        </Box>
        <Box>
          <Text my={4}>パスワードを知りたい方はメールやSNSのDMでお問い合わせください！</Text>
          <LinkButton
            href="mailto:nao.uru0419@gmail.com?subject=ポートフォリオパスワード問い合わせ"
            icon={<AiOutlineMail size={20} />}
            border="#151515"
            target="blank"
          >
            お問い合わせ
          </LinkButton>
        </Box>
      </Layout>
    );
  }

  // 読み込み中
  if (loading) {
    return (
      <Layout>
        <Pagetitle>Portfolio</Pagetitle>
        <Flex my={16} gap={4} alignItems="center">
          <Spinner color="teal.400" />
          <Text>ポートフォリオを読み込み中...</Text>
        </Flex>
      </Layout>
    );
  }

  // 取得失敗
  if (fetchError || !recordMap) {
    return (
      <Layout>
        <Pagetitle>Portfolio</Pagetitle>
        <Box my={16}>
          <Text mb={4}>コンテンツの読み込みに失敗しました。直接Notionページをご覧ください。</Text>
          <LinkButton
            href="https://naos-journal.notion.site/2026-_NAO-OSAWA-13a2316f396e806fb9cede2fb2bb2a9e"
            icon={<AiOutlineExport size={24} />}
          >
            Notionページをご覧ください！
          </LinkButton>
        </Box>
      </Layout>
    );
  }

  // すべてのリンクを別タブで開く
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

  // Notionページ表示
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
        <Box my={8}>
          <NotionErrorBoundary
            fallback={
              <Box>
                <Text mb={4}>一部コンテンツの表示に失敗しました。直接Notionページをご覧ください。</Text>
                <LinkButton
                  href="https://naos-journal.notion.site/2026-_NAO-OSAWA-13a2316f396e806fb9cede2fb2bb2a9e"
                  icon={<AiOutlineExport size={24} />}
                >
                  Notionページをご覧ください！
                </LinkButton>
              </Box>
            }
          >
            <NotionRenderer
              recordMap={recordMap}
              components={{ Code, Collection, Equation, Pdf, Link: NotionLink, PageLink }}
              mapPageUrl={(id) => `https://www.notion.so/${id.replace(/-/g, '')}?pvs=4`}
              fullPage={false}
              darkMode={false}
            />
          </NotionErrorBoundary>
        </Box>
      </Layout>
    </>
  );
}
