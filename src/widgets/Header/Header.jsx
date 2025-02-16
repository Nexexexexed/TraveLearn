import {useState} from 'react'
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import { selectIsAuth, selectUser } from '../../entities/user/model/userSelector';
import styles from './Header.module.css';
import classNames from 'classnames';
import LogoutButton from '../../features/auth/ui/LogoutButton';

import logo from '../../shared/assets/images/logo.png'

export const Header = () => {
  const [flag,setFlag]=useState(false);

  const handleClick=()=>{
    setFlag(!flag);
  }
  return (
    <>
    <header className={styles.header}>
      <div>
        <img className={styles.logo} src={logo}></img>
      </div>
      <div>
        <p className={styles.text_logo}>TraveLearn</p>
      </div>
      <div>
        <button className={styles.btn_menu} onClick={handleClick}>
          <span className={styles.hamb_menu}></span>
        </button>
      </div>
    </header>
    <nav className={classNames(styles.nav, { [styles.show]: flag })}>
      <div className={styles.navblock}>
        <div className={styles.menu}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/about" className={styles.link}>About Us</Link>
          <Link to="#" className={styles.link}>Donate</Link>
        </div>
      </div>
      <div>

      </div>
    </nav>
    </>
  );
};

export default Header;


