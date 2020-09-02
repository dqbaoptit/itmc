import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Login, handleAfterLogin } from '../../../redux/actions/auth';

import { TextField } from '@material-ui/core';
import { Button } from '../../../components/index';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import '../index.scss';

const LoginForm = () => {
  const [params, setParams] = useState({ email: '', password: '' });
  const onChange = (e) => {
    const { name } = e.target;
    setParams({ ...params, [name]: e.target.value });
  };

  const onSubmit = () => {
    Login(params)
      .then((res) => {
        handleAfterLogin(res.data);
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <>
      <Head>
        <title>Login | ITMC Codecamp</title>
      </Head>
      <div className="form--container" align="center">
        <div align="center" className="form">
          <h1 className="form__title">ITMC Codecamp</h1>
          <p className="form__module">Đăng nhập</p>
          <form className="form__group">
            <TextField
              style={{ borderBottom: ' 1px solid #DEE2E6' }}
              className="form__group--input"
              label="Địa chỉ email"
              type="email"
              name="email"
              value={params.email}
              onChange={onChange}
            />

            <TextField
              style={{ borderBottom: ' 1px solid #DEE2E6' }}
              className="form__group--input"
              label="Mật khẩu"
              type="password"
              name="password"
              value={params.password}
              onChange={onChange}
            />
            <div style={{ width: '50%', cursor: 'pointer' }}>
              <Button
                type={
                  !!params['email'] && !!params['password']
                    ? 'active'
                    : 'inactive'
                }
                text="Đăng nhập"
                onClick={
                  !!params['email'] && !!params['password']
                    ? onSubmit
                    : undefined
                }
              />
            </div>
            <div className="form__other">
              <span>
                Bạn chưa có tài khoản? <Link href="/signup"> Đăng ký </Link>
              </span>
              <div>
                <a
                  onClick={() => setForget(true)}
                  style={{ cursor: 'pointer' }}
                >
                  Quên mật khẩu
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
