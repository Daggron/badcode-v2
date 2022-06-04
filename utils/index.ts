import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const POST_PATH = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  const postsFilePath = fs
    .readdirSync(POST_PATH)
    .filter((postPath) => /\.mdx?$/.test(postPath));

  const postsMetaData = postsFilePath.map((filePath) => {
    const source = fs.readFileSync(path.join(POST_PATH, filePath));
    const { data } = matter(source);

    return { data, filePath };
  });

  return postsMetaData;
}

export function getPostBySlug(slug: string) {
  const posts = getAllPosts();
  const post = posts.find((eachPost) => eachPost.data.slug === slug);
  const { content, data } = matter(
    fs.readFileSync(path.join(POST_PATH, `${post.filePath}`), 'utf8'),
  );
  return {
    content,
    data,
  };
}
