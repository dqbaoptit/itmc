import { useState } from 'react';
import './index.scss';
import NotesIcon from '@material-ui/icons/Notes';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useRouter } from 'next/router';
import { SwipeableDrawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListIcon from '@material-ui/icons/List';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { useWindowSize } from '../../helper';

const Nav = () => {
  const [width, height] = useWindowSize();
  const router = useRouter();
  const prefix = router.pathname.split('/')[1];
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="nav">
        <div className="nav__name" onClick={() => router.push('/')}>
          ITMC Codecamp
        </div>
        {width > 768 && (
          <div className="nav__center">
            <ul>
              <li
                className={`nav__center__item nav__center__item${
                  prefix == '' && '--active'
                }`}
                onClick={() => router.push('/')}
              >
                <a>TRANG CHỦ</a>
              </li>
              {/* <li
                className={`nav__center__item nav__center__item${
                  prefix == 'staff' && '--active'
                }`}
                onClick={() => router.push('/staff')}
              >
                <a>STAFF</a>
              </li> */}
              <li
                className={`nav__center__item nav__center__item${
                  prefix == 'courses' && '--active'
                }`}
                onClick={() => router.push('/courses')}
              >
                <a>DANH SÁCH KHOÁ HỌC</a>
              </li>
              <li
                className={`nav__center__item nav__center__item${
                  prefix == 'compiler' && '--active'
                }`}
                onClick={() => router.push('/compiler')}
              >
                <a>OUR COMPILER</a>
              </li>
            </ul>
          </div>
        )}
        <div className="nav__right">
          {width <= 768 && (
            <div
              className="nav__right__list"
              style={{ fontSize: 27 }}
              onClick={() => setOpen(true)}
            >
              <NotesIcon />
            </div>
          )}
          <div
            className="nav__right__user"
            onClick={() => {
              localStorage.clear();
              window.location.reload(false);
            }}
          >
            <ExitToAppIcon style={{ fontSize: 30 }} />
          </div>
        </div>
        <SwipeableDrawer
          anchor="top"
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className="menu-drop">
            <div className="menu-drop__item" onClick={() => router.push('/')}>
              <DashboardIcon
                className="menu-drop__item__icon menu-drop__item__icon--active"
                style={{ fontSize: 40 }}
              />
              <h4 className="menu-drop__item__text menu-drop__item__text--active">
                Trang chủ
              </h4>
            </div>
            <div
              className="menu-drop__item"
              onClick={() => router.push('/courses')}
            >
              <ListIcon
                className="menu-drop__item__icon"
                style={{ fontSize: 40 }}
              />
              <h4 className="menu-drop__item__text">Danh sách khoá học</h4>
            </div>
            <div
              className="menu-drop__item"
              onClick={() => router.push('/compiler')}
            >
              <MailOutlineIcon
                className="menu-drop__item__icon"
                style={{ fontSize: 40 }}
              />
              <h4 className="menu-drop__item__text">Compiler</h4>
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    </div>
  );
};
export default Nav;
