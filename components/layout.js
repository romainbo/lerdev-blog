import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen bg-grey-body'>
      <header className='bg-grey-title mb-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <Link href='/'>
            <a>🏡</a>
          </Link>
          <p className='mx-auto text-xl font-title font-bold text-grey-text py-3'>A  FULL  STACK  DEVELOPER  JOURNEY</p>{' '}
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-indigo-500 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          &copy; 2022 DailyDevTips
        </div>
      </footer>
    </div>
  );
}

