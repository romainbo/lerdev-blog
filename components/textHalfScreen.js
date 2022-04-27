import Link from 'next/link';

export default function textHalfScreen({ post }) {
  console.log(post);
  return (
    <div className='flex-1 flex flex-col justify-center items-center mt-5'>
      <div className=' md:w-650 lg:max-w-sm'>
          <Link href={`/post/${post.slug}`}> 
            <a>
              <h2 className="text-white font-title uppercase text-3xl mb-5">👉 {post.frontmatter.title}</h2>
            </a>
          </Link>
          <p className="text-white font-body mb-5 text-xl bg-gradient-to-r from-orange-500 to-pink-500 uppercase w-max px-2 font-bold rounded-sm">last article</p>
          <p className="text-grey-text font-body mb-10 text-xl">{post.frontmatter.summary}</p>
          <Link href={`/post/${post.slug}`}> 
             <a className="border-green-400 border-2 text-grey-text font-body uppercase py-4 px-8 rounded-sm text-s mt-4 hover:bg-green-400 hover:text-white hover:font-bold">Read</a>
          </Link>
      </div>
    </div>
  );
}
