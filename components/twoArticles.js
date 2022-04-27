import Link from 'next/link';
import Image from 'next/image';

export default function twoArticles({ posts }) {
  return (
    <div>
      <h2 className='text-white font-title uppercase text-3xl mb-7 text-center mt-20 '>{posts.length > 2 ? '👇 all posts' : '🚀 most popular' }</h2>
      <div className='flex-1 flex flex-col lg:flex-row justify-center align-center flex-wrap'>
            {posts.map(function(post) {
            return <div
              key={post.slug}
              className='mt-2 mx-4 flex text-white flex-none lg:w-2/5 flex-col md:justify-center'
            >
              <Link href={`/post/${post.slug}`}>
                <a className='flex justify-center'>
                  <Image
                    width={650}
                    height={340}
                    alt={post.frontmatter.title}
                    src={`/${post.frontmatter.socialImage}`}
                    objectFit={`cover`}
                  />
                </a>
            </Link>
            <div className='md:w-650 lg:w-full md:m-auto lg:m-0'>
              <a href={`/post/${post.slug}`}>
                <h2 className="text-white font-title uppercase mt-5 text-3xl mb-5">{post.frontmatter.title}</h2>
              </a>
                <div className='flex'>
                  {post.frontmatter.tags.map(function(tag) {
                    return <p className="text-white font-body mb-5 mr-2 text-xl bg-gradient-to-r from-orange-500 to-pink-500 uppercase w-max px-2 font-bold rounded-sm">{tag}</p>
                  })}
                </div>
                <a href={`/post/${post.slug}`}>
                  <p className="text-grey-text font-body mb-10 text-xl">{post.frontmatter.summary}</p>
                </a>
              </div>
            </div>
          })}
      </div>
    </div>
  );
}
