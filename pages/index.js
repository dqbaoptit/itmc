import { Home, Login } from '../containers/index';
import { isAuthentication } from '../helper';

export default function HomePage() {
  return (
    <>
      {isAuthentication() ? (
        <section>
          <Home />
        </section>
      ) : (
        <Login />
      )}
    </>
  );
}
