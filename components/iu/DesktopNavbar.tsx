import React from 'react'
import Link from 'next/link';

const MENULIST = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Favorites",
    href: "favorites"
  }]


const DesktopNavbar = ({ styles }: { styles: any }) => {
  return (
    <div className={styles.list}>
      <ul className='-skew-x-6'>
        {MENULIST.map((links, index) => (
          <li key={index}>
            <Link href={`/${links.href}`}>
              {links.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DesktopNavbar