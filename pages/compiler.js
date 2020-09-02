import Head from 'next/head';
import { Navigation } from '../components/index';
import { Programs } from '../containers/index';
export default function Compiler() {
  return (
    <>
      <Head>
        <title>Compiler | ITMC Codecamp</title>
      </Head>
      <div>
        <Navigation />
        <div style={{ marginTop: 10 }}>
          <Programs />
        </div>
      </div>
    </>
  );
}
