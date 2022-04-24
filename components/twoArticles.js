import Link from 'next/link';
import Image from 'next/image';

export default function twoArticles({ posts }) {
  console.log(posts);
  console.log(posts[0].frontmatter.tags);
  //const mostPopulars = [...posts.posts];
  //mostPopulars.sort((a, b) => b.frontmatter.popularity - a.frontmatter.popularity).slice(0,2);
  
  
  //console.log("after sort : ", posts.map(a => { a.slug, a.frontmatter }));
  return (
    <div>
      <h2 className='text-white font-title uppercase text-3xl mb-5 text-center mt-20 '>most popular</h2>
      <div className='flex-1 flex justify-center align-center '>
            {posts.map(function(post) {
            return <div
              key={post.slug}
              className='mt-2 mx-4 flex text-white flex-none w-1/3 flex-col'
            >
              <Link href={`/post/${post.slug}`}>
                <a>
                  <Image
                    width={650}
                    height={340}
                    alt={post.frontmatter.title}
                    src={`/${post.frontmatter.socialImage}`}
                  />
                </a>
            </Link>
            <a href={`/post/${post.slug}`}>
              <h2 className="text-white font-title uppercase text-3xl mb-5">{post.frontmatter.title}</h2>
            </a>
              <div className='flex'>
                {post.frontmatter.tags.map(function(tag) {
                  return <p className="text-white font-body mb-5 mr-2 text-xl bg-gradient-to-r from-orange-500 to-pink-500 uppercase w-max px-2 font-bold rounded-sm">{tag}</p>
                })}
              </div>
              <a href={`/post/${post.slug}`}>
                <p className="text-grey-text font-body mb-5 text-xl">{post.frontmatter.summary}</p>
              </a>
            </div>
          })}
      </div>
    </div>
  );
}