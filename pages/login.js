import { Login } from '../containers/index';
import { useRouter } from 'next/router';
import { isAuthentication } from '../helper';
export default () => {
  const router = useRouter();

  React.useEffect(() => {
    if (isAuthentication()) {
      router.push('/');
    }
  }, []);
  return (
    <>
      <Login />
    </>
  );
};
