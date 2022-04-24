import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import TextHalfScreen from '../components/textHalfScreen'
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
  return (
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-4 md:p-0'>
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
    </div>
  );
}