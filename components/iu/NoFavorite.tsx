import Image from 'next/image'
import React from 'react'

const NoFavorite = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center' style={{ height: "calc(100vh - 5rem)" }}>
        <h1 className='text-2xl font-bold'> Not Favorite Pokemon Save it! </h1>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
          width={100}
          height={100}
          style={{opacity:"15%"}}
          alt='image there is not favorite pokemon' />
    </div>
  )
}

export default NoFavorite