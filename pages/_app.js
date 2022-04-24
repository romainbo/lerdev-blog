import Layout from '../components/layout';
import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,600;0,700;0,800;0,900;1,300;1,400;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>

  )
}

export default MyApp
