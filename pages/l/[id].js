import Head from 'next/head';
import { Navigation } from '../../components/index';
import { Lesson } from '../../containers/index';
export default function LessonPage() {
  return (
    <>
      <Head>
        <title>Lesson | ITMC codecamp</title>
      </Head>
      <Navigation />
      <Lesson />
    </>
  );
}
