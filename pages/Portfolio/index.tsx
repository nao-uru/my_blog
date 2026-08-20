import { HeadSetting } from '../../components/Templete/Head';
import { Pagetitle } from '../../components/Parts/Pagetitle';
import { Layout } from '../../components/Templete/Layout';
import { Subtitle } from '../../components/Parts/Subtitle';
import { Box, Button, Divider, Flex, Image, Input, SimpleGrid, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { NotionAPI } from 'notion-client';
import { useState, useEffect } from 'react';
import { LinkButton } from '../../components/Parts/LinkButton';
import { AiOutlineMail } from 'react-icons/ai';

const NOTION_PAGE_ID = '13a2316f396e806fb9cede2fb2bb2a9e';
const COLLECTION_ID  = '13a2316f-396e-8150-9424-000bd8ffe1cd';
const PROP_TYPE      = 'AWIX';
const PROP_ROLE      = 'UzNm';
const PROP_LINK      = '^wBx';
const PROP_THUMB     = 'gKCA';
const PROP_YEAR      = 'oU^F';
const PROP_BEFORE    = 'AUv?';

// Notionの表示順序に合わせたセクション定義
const TYPE_ORDER = [
  '💻 Web App',
  '📱 Mobile App',
  '📃 WEBサイト・LP',
  '🖼️ Graphic',
  '🙋🏻‍♀️ 個人制作',
];

export interface PortfolioItem {
  id: string;
  title: string;
  type: string;
  roles: string[];
  link: string;
  year: string;
  thumbnailUrl: string | null;
  isBefore: boolean;
}

interface RawItem extends Omit<PortfolioItem, 'thumbnailUrl'> {
  thumbKey: string;
}

function extractRawItems(recordMap: any): RawItem[] {
  const blocks = recordMap.block || {};
  const views  = (recordMap.collection_query || {})[COLLECTION_ID] || {};

  // 全ビューのblockIDを重複なく収集
  const seen     = new Set<string>();
  const blockIds: string[] = [];
  for (const view of Object.values(views) as any[]) {
    for (const id of (view?.collection_group_results?.blockIds || [])) {
      if (!seen.has(id)) { seen.add(id); blockIds.push(id); }
    }
  }
  const items: RawItem[] = [];

  for (const blockId of blockIds) {
    const bd    = blocks[blockId] as any;
    const inner = bd?.value?.value ?? bd?.value;
    if (!inner || inner.type !== 'page' || !inner.alive) continue;
    if (inner.parent_id !== COLLECTION_ID) continue;

    const props = inner.properties || {};
    const type  = props[PROP_TYPE]?.[0]?.[0] || '';
    if (!type) continue;

    const title    = props.title?.[0]?.[0] || 'Untitled';
    const rolesRaw = props[PROP_ROLE]?.[0]?.[0] || '';
    const roles    = rolesRaw.split(',').map((r: string) => r.trim()).filter(Boolean);
    const link     = props[PROP_LINK]?.[0]?.[0] || '';

    const yearDatum = props[PROP_YEAR]?.[0]?.[1]?.[0]?.[1];
    let year = '';
    if (yearDatum) {
      const s = yearDatum.start_date?.substring(0, 4) || '';
      const e = yearDatum.end_date?.substring(0, 4) || '';
      year = e && e !== s ? `${s} - ${e}` : s;
    }

    const thumbKey = props[PROP_THUMB]?.[0]?.[1]?.[0]?.[1] || '';
    const isBefore = props[PROP_BEFORE]?.[0]?.[0] === 'Yes';

    items.push({ id: blockId, title, type, roles, link, year, thumbKey, isBefore });
  }

  return items;
}

export async function getServerSideProps() {
  const api = new NotionAPI();
  let items: PortfolioItem[] = [];

  try {
    const recordMap: any = await Promise.race([
      api.getPage(NOTION_PAGE_ID),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 12_000)),
    ]);

    if (recordMap) {
      const rawItems = extractRawItems(recordMap);

      // すべてのサムネイルURLを署名リクエストに含める（attachment: も https:// も対象）
      const requests = rawItems
        .filter((item) => !!item.thumbKey)
        .map((item) => ({
          permissionRecord: { table: 'block', id: item.id },
          url: item.thumbKey,
        }));

      const signedByBlockId: Record<string, string> = {};
      if (requests.length > 0) {
        try {
          const result = await Promise.race([
            api.getSignedFileUrls(requests),
            new Promise<any>((_, reject) =>
              setTimeout(() => reject(new Error('sign timeout')), 8_000)
            ),
          ]);
          requests.forEach((req, i) => {
            if (result.signedUrls[i]) {
              signedByBlockId[req.permissionRecord.id] = result.signedUrls[i];
            }
          });
        } catch (e) {
          console.error('getSignedFileUrls failed:', e);
        }
      }

      items = rawItems.map((item) => ({
        id:           item.id,
        title:        item.title,
        type:         item.type,
        roles:        item.roles,
        link:         item.link,
        year:         item.year,
        isBefore:     item.isBefore,
        thumbnailUrl: signedByBlockId[item.id] || (item.thumbKey.startsWith('https://') ? item.thumbKey : null),
      }));
    }
  } catch (e) {
    console.error('Notion fetch failed:', e);
  }

  return { props: { items } };
}

// パスワードロック
const STORAGE_KEY = 'pg:portfolio';
const DURATION_MS = 1000 * 60 * 60 * 1;

function PortfolioCard({ item, small = false }: { item: PortfolioItem; small?: boolean }) {
  const pad = small ? 3 : 4;
  const fs  = small ? '13px' : '16px';

  return (
    <Box rounded={8} backgroundColor="#ffffff" css={sCard} h="full" w="100%" overflow="hidden">
      <Link href={`/Portfolio/${item.id}`} passHref>
        <Box>
          <Box w="full" sx={{ aspectRatio: '16/9' }} overflow="hidden">
            {item.thumbnailUrl ? (
              <Image src={item.thumbnailUrl} w="full" h="full" alt={item.title} objectFit="cover" />
            ) : (
              <Box w="full" h="full" bg="gray.100" />
            )}
          </Box>
          <Box p={pad}>
            <Text fontWeight="normal" fontSize={fs}>{item.title}</Text>
            {item.year && (
              <Text fontWeight="normal" fontSize="sm" mt={1} textColor="#5B5B5B">{item.year}</Text>
            )}
          </Box>
        </Box>
      </Link>
    </Box>
  );
}

const sCard = css`
  :hover {
    transition: 0.5s;
    opacity: 0.7;
  }
`;

export default function Portfolio({ items }: { items: PortfolioItem[] }) {
  const [input, setInput]   = useState('');
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const { expiresAt } = JSON.parse(raw);
      if (typeof expiresAt === 'number' && Date.now() < expiresAt) {
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

  const password = 'Nao_NONT';
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
      alert('パスワードが違います');
    }
  };

  if (!isAuth) {
    return (
      <Layout>
        <Pagetitle>Authentication</Pagetitle>
        <Box my={16} w={{ base: '320px', md: '400px' }}>
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
                _focus={{ borderColor: 'teal.400', boxShadow: '0 0 0 1px teal.400' }}
              />
              <Button
                py={6}
                width="fit-content"
                type="submit"
                background="linear-gradient(87.37deg, #1b756c, #279c90 66.83%, #68a8a2)"
                color="#fff"
                fontWeight="normal"
                borderRadius="full"
                _hover={{ bgColor: '#23ba78b6' }}
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

  if (items.length === 0) {
    return (
      <Layout>
        <Pagetitle>Portfolio</Pagetitle>
        <Box my={16}>
          <Text>読み込みに失敗しました。時間をおいて再度お試しください。</Text>
          <Flex mt={4}>
            <Text>直接ご覧になりたい方は</Text>
            <LinkButton
              href="https://app.notion.com/p/naos-journal/2026-_NAO-OSAWA-13a2316f396e806fb9cede2fb2bb2a9e"
              border="#151515"
              color="#151515"
              target="_blank"
            >
              →元のページ
            </LinkButton>
            <Text>からご確認ください！</Text>
          </Flex>
        </Box>
      </Layout>
    );
  }

  // Year の末尾4桁で降順ソート（"2023 - 2024" → 2024、空は末尾）
  const byYearDesc = (a: PortfolioItem, b: PortfolioItem) =>
    (parseInt(b.year.slice(-4)) || 0) - (parseInt(a.year.slice(-4)) || 0);

  // Before チェック済みとそれ以外に分類
  const currentItems = items.filter((item) => !item.isBefore).sort(byYearDesc);
  const beforeItems  = items.filter((item) => item.isBefore).sort(byYearDesc);

  // TYPE_ORDER の順でグループ化し、未定義のTypeは末尾に追加
  const grouped: Record<string, PortfolioItem[]> = {};
  for (const item of currentItems) {
    if (!grouped[item.type]) grouped[item.type] = [];
    grouped[item.type].push(item);
  }
  const knownTypes   = TYPE_ORDER.filter((t) => grouped[t]);
  const unknownTypes = Object.keys(grouped).filter((t) => !TYPE_ORDER.includes(t));
  const sections     = [...knownTypes, ...unknownTypes];

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

        <Box mt={8} mb={4} fontSize={{ base: '14px', md: '16px' }} lineHeight="180%">
          <Text>ご訪問ありがとうございます！大澤菜央の制作実績紹介ページです。</Text>
          <Text mt={1}>こちらのページは担当者様のみにお渡ししておりますので、他への公開はご遠慮願います。</Text>
          <Flex>
          <Text mt={1}>このページはNotionを使用しています。うまく表示されない場合は</Text>
          <LinkButton href="/Portfolio" border="#151515" color="#151515" target="_parent">→元のページ</LinkButton>
          <Text>からご確認ください！</Text>
          </Flex>
          <Divider my={6} />
          <Flex gap={4} flexDirection={{ base: 'column', md: 'column' }}>
            <Flex>
              <Box>職務経歴 →</Box>
              <LinkButton  href="https://www.notion.so/naos-journal/About-Me-1912316f396e805594c3d4d3cb8fc15a?source=copy_link" target="_self">About Me</LinkButton>
            </Flex>
            <Flex>
              <Box mb={4}>SNSなど →</Box>
                <LinkButton href="https://avely.me/nao_uru">NAO OSAWA</LinkButton>
            </Flex>
          </Flex>
        </Box>

        <Flex my={16} flexDirection="column" gap={14}>
          {sections.map((type) => (
            <Box key={type}>
              <Box mb={6}>
                <Subtitle size="20px">{type}</Subtitle>
              </Box>
              <SimpleGrid columns={type === '🖼️ Graphic' || type === '🙋🏻‍♀️ 個人制作' ? { base: 2, sm: 3, md: 5 } : { base: 1, sm: 2, md: 3 }} gap={5}>
                {grouped[type].map((item) => (
                  <PortfolioCard key={item.id} item={item} small={type === '🖼️ Graphic' || type === '🙋🏻‍♀️ 個人制作'} />
                ))}
              </SimpleGrid>
            </Box>
          ))}

          {beforeItems.length > 0 && (
            <Box>
              <Box mb={6}>
                <Subtitle size="20px">2021年以前の制作</Subtitle>
              </Box>
              <SimpleGrid columns={{ base: 2, sm: 3, md: 5 }} gap={5}>
                {beforeItems.map((item) => (
                  <PortfolioCard key={item.id} item={item} small={true} />
                ))}
              </SimpleGrid>
            </Box>
          )}
        </Flex>
      </Layout>
    </>
  );
}
