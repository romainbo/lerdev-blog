import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getSortedPostsData() {
  // Get files in posts directory
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    // Get post name, without md extension
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    // Get post content, including information
    const { data: frontmatter } = matter(readFile);
    return {
      slug, 
      frontmatter,
      };
  });

  // Order posts by most recent
  posts.sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date));
  return {
      posts
    };
}