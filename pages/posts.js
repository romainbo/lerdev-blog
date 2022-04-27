import { getSortedPostsData } from '../lib/allPosts'
import TwoArticles from '../components/twoArticles'

export async function getStaticProps() {
  const posts = getSortedPostsData()
  return {
    props: {
      posts,
    }
  }
}

export default function Home({ posts }) {
    return (
        <div>
        <TwoArticles posts={posts.posts}>
        </TwoArticles>
        </div>
    );
}