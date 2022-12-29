import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID='dd0roywjqx3t',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN='Y5z0_h17-TMkiv95rCpicrYRh6aod94NfZrN0-N0Q5o',
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

export async function getAllSamplePosts() {
  const entries = await client.getEntries({
    content_type:'samplePost',
    // order:"-fields.title",
  });
  if(entries.items) {
    return entries.items;
  } 
}

export async function getSamplePostBySlug(slug) {
  const entries = await client.getEntries({
    content_type:'samplePost',
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
