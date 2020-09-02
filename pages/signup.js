import { Signup } from '../containers/index';
import { useRouter } from 'next/router';
import { isAuthentication } from '../helper';

export default function Form() {
  const router = useRouter();

  React.useEffect(() => {
    if (isAuthentication()) {
      router.push('/');
    }
  }, []);

  return <Signup />;
}
