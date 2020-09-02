import Api from '../../config/Api';
import { authConstant, localStorageConstant } from '../constant';

export const Login = async (params) => {
  try {
    const { data } = await Api.post(authConstant.LOGIN, params);
    return data;
  } catch (err) {
    throw err;
  }
};
export const Register = async (params) => {
  try {
    const { data } = await Api.post(authConstant.REGISTER, params);
    return data;
  } catch (err) {
    throw err;
  }
};

export const handleAfterLogin = (data) => {
  localStorage.setItem(
    localStorageConstant.ACCESS_TOKEN,
    JSON.stringify(data.accessToken)
  );
  localStorage.setItem(
    localStorageConstant.REFRESH_TOKEN,
    JSON.stringify(data.refreshToken)
  );
  window.location.reload(false);
};

export const handleLogout = () => {
  localStorage.clear();
  window.location.href = '/';
};
