import { NotionAPI } from 'notion-client';
import type { NextApiRequest, NextApiResponse } from 'next';

const NOTION_PAGE_ID = '13a2316f396e806fb9cede2fb2bb2a9e';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const api = new NotionAPI();
    const recordMap = await Promise.race([
      api.getPage(NOTION_PAGE_ID),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), 20_000)
      ),
    ]);
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.status(200).json(recordMap);
  } catch (e) {
    console.error('Notion fetch failed:', e);
    res.status(500).json({ error: 'Failed to fetch Notion page' });
  }
}
