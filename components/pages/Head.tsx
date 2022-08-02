import * as React from 'react';
import Head from 'next/head';
import { GA_TRACKING_ID } from '../../libs/gtag';

export const HeadSetting = ({ title, description, keyword, path ,card }) => {

  const url = '<https://www.naosjournal.com/>' + path;


  return (
    <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={card} />
      <meta property="og:site_name" content={title} />
      <meta name="keywords" content={keyword} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@naos_journal" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={card} />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href={"/favicon.ico"} />

      {GA_TRACKING_ID && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
        `,
                }}
              />
            </>
          )}
    </Head>
    </>
  );
};

