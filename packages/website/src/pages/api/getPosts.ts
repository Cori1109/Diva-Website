import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getAllSlugs() {
  return fs.readdirSync(postsDirectory).map((v) => v.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug;
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
}

export function getAllPosts() {
  return getAllSlugs().map((v) => getPostBySlug(v));
}
