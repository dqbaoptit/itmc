import Head from 'next/head';
import { isAuthentication } from '../../helper';
import { Login, Courses } from '../../containers/index';

export default function CoursesPage() {
  return (
    <>
      <Head>
        <title>Khoá học | ITMC Codecamp</title>
      </Head>
      {isAuthentication() ? (
        <section>
          <Courses />
        </section>
      ) : (
        <Login />
      )}
    </>
  );
}
