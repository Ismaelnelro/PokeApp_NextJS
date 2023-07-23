import Image from 'next/image'
import React from 'react'

const LogoNavbar = ({ styles }: { styles: any }) => {
  return (
    <div className={styles.imagen}>
      <p>
        POKEMONS
      </p>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        width={50}
        height={50}
        alt="logo"
      />
      <p>
        APP
      </p>
    </div>
  )
}

export default LogoNavbar