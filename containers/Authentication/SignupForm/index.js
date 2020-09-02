import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TextField } from '@material-ui/core';
import { Button } from '../../../components/index';
import { Register } from '../../../redux/actions/auth';
const Signup = () => {
  const router = useRouter();
  const [params, setParams] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const onChange = (e) => {
    const { name } = e.target;
    setParams({ ...params, [name]: e.target.value });
  };

  const onSubmit = () => {
    Register(params)
      .then(() => {
        router.push('/login');
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Head>
        <title>Sign up | ITMC Codecamp</title>
      </Head>
      <div className="form--container" align="center">
        <div align="center" className="form">
          <h1 className="form__title">ITMC Codecamp</h1>
          <p className="form__module">Đăng ký</p>
          <form className="form__group">
            <TextField
              style={{ borderBottom: ' 1px solid #DEE2E6' }}
              className="form__group--input"
              label="Địa chỉ email"
              type="email"
              name="email"
              onChange={onChange}
            />
            <TextField
              style={{ borderBottom: ' 1px solid #DEE2E6' }}
              className="form__group--input"
              label="Họ"
              type="text"
              name="firstName"
              onChange={onChange}
            />
            <TextField
              style={{ borderBottom: ' 1px solid #DEE2E6' }}
              className="form__group--input"
              label="Tên"
              type="text"
              name="lastName"
              onChange={onChange}
            />
            <TextField
              style={{ borderBottom: ' 1px solid #DEE2E6' }}
              className="form__group--input"
              label="Mật khẩu"
              type="password"
              onChange={onChange}
              name="password"
            />
            <div style={{ width: '50%', marginTop: '2rem' }}>
              <Button type="active" text="Đăng ký" onClick={onSubmit} />
            </div>
            <div className="form__other">
              <span>
                Bạn chưa có tài khoản? <Link href="/login"> Đăng nhập </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
