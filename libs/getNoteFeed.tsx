import Parser from 'rss-parser';


export type NoteItem = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  thumbnail?: string;
};

type CustomFeedItem = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  mediaThumbnail?: string; // タグの中身が文字列になる
};

export const getNoteFeed = async (): Promise<NoteItem[]> => {
  const parser: Parser<{}, CustomFeedItem> = new Parser({
    customFields: {
      item: [
        ['media:thumbnail', 'mediaThumbnail'], // タグの中身を mediaThumbnail として取得
      ],
    },
  });

  const feed = await parser.parseURL('https://note.com/nao_osawa/rss');

  return (feed.items || []).map((item) => {
    const thumbnail = item.mediaThumbnail ?? '';

    return {
      title: item.title ?? '',
      link: item.link ?? '',
      pubDate: item.pubDate ?? '',
      contentSnippet: item.contentSnippet ?? '',
      thumbnail,
    };
  });
};