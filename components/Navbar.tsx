import React from 'react'

import HamburgNavbar from './iu/HamburgNavbar';
import DesktopNavbar from './iu/DesktopNavbar';
import LogoNavbar from './iu/LogoNavbar';
import ThemeSwitcher from './themeSwitcher';

import styles from '@/modules/navbar.module.css'

const Navbar = () => {

  return (
    <div className={styles.navbar}>
      <LogoNavbar styles={styles} />
      <DesktopNavbar styles={styles} />
      <ThemeSwitcher />
      <HamburgNavbar styles={styles} />
    </div >
  )
}

export default Navbar