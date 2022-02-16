import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "..";

const postsDirectory = join(process.cwd(), "_posts");

export function getAllSlugs() {
  return fs.readdirSync(postsDirectory).map((v) => v.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(slug: string) {
  const fullPath = join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const data = matter(fileContents)
  
  return {
    content: data.content,
    ...data.data,
    slug,
  } as Post;
}

export function getAllPosts() {
  return getAllSlugs().map((v) => getPostBySlug(v));
}
