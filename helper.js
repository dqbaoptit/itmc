import { useLayoutEffect, useState } from 'react';
import { localStorageConstant } from './redux/constant';

var jwtDecode = require('jwt-decode');

export const isAuthentication = () => {
  try {
    const decode = jwtDecode(
      localStorage.getItem(localStorageConstant.ACCESS_TOKEN)
    );
    return !!decode['_id'];
  } catch (err) {
    return false;
  }
};

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
