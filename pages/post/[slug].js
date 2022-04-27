import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export async function getStaticPaths() {
    const files = fs.readdirSync('posts');
    const paths = files.map((fileName) => ({
        params: {
        slug: fileName.replace('.md', ''),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
const { data: frontmatter, content } = matter(fileName);

// Each time an article is displayed, we change its popularity
const currentPopularityString = "popularity: " + frontmatter.popularity;
const newPopularityString = "popularity: " + (frontmatter.popularity + 1);
fs.writeFileSync(`posts/${slug}.md`, fileName.replace(currentPopularityString, newPopularityString))

return {
    props: {
    frontmatter,
    content,
    },
};
}

export default function PostPage({ frontmatter, content }) {
    return (
      <div className='prose mx-auto'>
        <h1 className='text-white'>{frontmatter.title}</h1>
        <div className='text-grey-text' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    );
  }

  