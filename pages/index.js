import Head from 'next/head';
import Header from '../components/header';

const home = () => {
  return(
    <div>
      <Head>
        <title> The Fixers </title>
        <meta name="description" content="Where demands meets supplies" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <Header />

      <h1 className="text-3xl"> The Home Page</h1>
    </div>
  )
}

export default home;