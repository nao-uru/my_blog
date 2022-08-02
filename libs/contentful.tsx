import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getAllPosts() {
  const entries = await client.getEntries({
    content_type:'blogPost',
    order:"-fields.date",
  });
  if(entries.items) {
    return entries.items;
  } 
}


export async function getPostBySlug(slug) {
  const entries = await client.getEntries({
    content_type:'blogPost',
    limit:1,
    "fields.slug":slug,
  });
  if(entries.items) {
    return entries.items[0];
  }
}

// タグ検索（未実装）
// 値が取れない
export async function getTagBook() {
  const response = await client.getEntries({
    content_type: "blogPost",
    // order: "-sys.createdAt",
    'metadata.tags.sys.id[all]':'Book',
    limit: 50,
  });
}
