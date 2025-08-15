import Head from "next/head";

type HeadProps = {
  title: string;
  description: string;
  path?: string;                 
  ogImage: string;
  siteName?: string;
  ogType?: "website" | "article";
  keywords?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
};

const BASE_URL = "https://www.naosjournal.com";

// 先頭/末尾のスラッシュ整形（未指定でも安全）
const joinUrl = (base: string, p?: string) => {
  const cleanBase = (base ?? "").replace(/\/+$/, "");
  const cleanPath = (p ?? "").replace(/^\/+/, "");
  return cleanPath ? `${cleanBase}/${cleanPath}` : cleanBase || "/";
};

// 相対URLなら絶対化
const toAbs = (url: string, base = BASE_URL) => {
  try {
    return new URL(url, base).toString();
  } catch {
    return url; // 万一不正でもそのまま
  }
};

export const HeadSetting = ({
  title,
  description,
  path = "/",                  
  ogImage,
  siteName = "NAO OSAWA",
  ogType = "website",
  keywords,
  ogImageWidth = 1200,
  ogImageHeight = 630,
}: HeadProps) => {
  const url = joinUrl(BASE_URL, path);
  const ogImgAbs = toAbs(ogImage);

  return (
    <Head>
      {/* 基本 */}
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImgAbs} />
      <meta property="og:image:width" content={String(ogImageWidth)} />
      <meta property="og:image:height" content={String(ogImageHeight)} />

      {/* Twitter(X) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@naos_journal" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImgAbs} />

      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </Head>
  );
};