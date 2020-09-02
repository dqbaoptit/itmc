import Head from 'next/head';
import { Navigation } from '../../components/index';

export default function Home() {
  return (
    <>
      <Head>
        <title>ITMC Codecamp</title>
      </Head>
      <div className="home">
        <Navigation />
      </div>
    </>
  );
}
