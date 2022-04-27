import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen bg-grey-body'>
      <header className='bg-grey-title mb-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <Link href='/'>
            <a>LERDEV</a>
          </Link>
          <p className='mx-auto text-sm w-1/2 text-center md:text-xl lg:text-xl font-title font-bold text-grey-text py-3'>A  FULL  STACK  DEVELOPER  JOURNEY</p>{' '}
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-grey-body mt-8 py-4 flex flex-col items-center'>
        <p className='text-grey-text font-body mb-10 text-xl w-1/2 text-center'>Created with React, Nextjs and Nodejs by Lerdev (github link)</p>
        <p className='text-grey-text font-body mb-10 text-xl w-1/2 text-center'>You can follow us on twitter (twitter link)</p>
      </footer>
    </div>
  );
}

