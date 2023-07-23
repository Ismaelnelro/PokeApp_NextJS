import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const HamburgNavbar = ({ styles }: { styles: any }) => {
  return (
    <div className={styles.menu}>
      <GiHamburgerMenu size={32} />
    </div>
  )
}

export default HamburgNavbar