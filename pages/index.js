import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import TextHalfScreen from '../components/textHalfScreen'
import TwoArticles from '../components/twoArticles'
import { getSortedPostsData } from '../lib/allPosts'

export async function getStaticProps() {
  const posts = getSortedPostsData()
  return {
    props: {
      posts,
    }
  }
}

export default function Home({ posts }) {
  console.log(posts)
  console.log(posts.posts[0].slug)
  const mostPopularPosts = [...posts.posts].sort((a, b) => b.frontmatter.popularity - a.frontmatter.popularity).slice(0,2)
  return (
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-4 md:p-0 mt-5  '>
        <div
          // key={slug}
          className='m-2 flex'
        >
            <TextHalfScreen post={posts.posts[0]}>
            </TextHalfScreen>
            <Link href={`/post/${posts.posts[0].slug}`}>
              <a>
                <Image
                  width={650}
                  height={340}
                  alt={posts.posts[0].frontmatter.title}
                  src={`/${posts.posts[0].frontmatter.socialImage}`}
                />
              </a>
          </Link>
        </div>
        <hr className='mt-20 border-1 border-dashed border-grey-text'></hr>
        <TwoArticles posts={mostPopularPosts}>
        </TwoArticles>
        <hr className='mt-20 border-1 border-dashed border-grey-text'></hr>
    </div>
  );
}