import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navigation } from '../../components/index';
import { Course } from '../../containers/index';
export default function CoursePage() {
  return (
    <>
      <Head>
        <title>Course | ITMC Codecamp</title>
      </Head>
      <Navigation />
      <Course />
    </>
  );
}
