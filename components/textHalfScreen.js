import Link from 'next/link';

export default function textHalfScreen({ post }) {
  console.log(post);
  return (
    <div className='flex-1 flex flex-col justify-center items-center'>
      <div className='max-w-sm'>
          <h2 className="text-white font-title uppercase text-3xl mb-5">{post.frontmatter.title}</h2>
          <p className="text-white font-body mb-5 text-xl bg-gradient-to-r from-orange-500 to-pink-500 uppercase w-max px-2 font-bold rounded-sm">last article</p>
          <p className="text-grey-text font-body mb-5 text-xl">{post.frontmatter.summary}</p>
          <Link href={`/post/${post.slug}`}> 
          <a className="border-orange-400 border-2 text-grey-text font-body uppercase py-4 px-8 rounded-sm text-xs mt-4">Read</a>
        </Link>
      </div>
    </div>
  );
}