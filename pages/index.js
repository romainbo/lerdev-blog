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
  const mostPopularPosts = [...posts.posts].sort((a, b) => b.frontmatter.popularity - a.frontmatter.popularity).slice(0,2)
  return (
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-4 md:p-0 mt-5  '>
        <div
          className='m-2 flex flex-col justify-center lg:flex-row'
        >
            <TextHalfScreen post={posts.posts[0]}>
            </TextHalfScreen>
            <Link href={`/post/${posts.posts[0].slug}`}>
              <a className='-order-1 flex justify-center  lg:order-1 lg:w-2/5 '>
                <Image
                  width={650}
                  height={340}
                  alt={posts.posts[0].frontmatter.title}
                  src={`/${posts.posts[0].frontmatter.socialImage}`}
                  objectFit={`cover`}
                  className="w-9/12"
                />
              </a>
          </Link>
        </div>
        <hr className='mt-10 lg:mt-20 border-1 border-dashed border-grey-text'></hr>
        <TwoArticles posts={mostPopularPosts}>
        </TwoArticles>
        <div className='flex content-center items-center justify-center'>
          <Link href={`/posts`}> 
            <a className="border-green-400 border-2 text-grey-text font-body uppercase py-4 px-8 rounded-sm text-l mt-4 hover:bg-green-400 hover:text-white ">Show more</a>
          </Link>
        </div>
        <hr className='mt-10 lg:mt-20  border-1 border-dashed border-grey-text'></hr>
        <div className='mt-20'>
          <Image
            width={650}
            height={340}
            alt={posts.posts[0].frontmatter.title}
            src={`/${posts.posts[0].frontmatter.socialImage}`}
          />
        </div>
    </div>
  );
}