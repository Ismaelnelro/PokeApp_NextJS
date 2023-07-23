
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/modules/card.module.css'
import { Pokemon } from '@/interfaces/PokemonInterfaces'

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {


  return (
    <>
      {/* {pokemon && <Link href={`pokemon/${pokemon.id}`}> */}
      {pokemon && <Link href={`pokemon/${pokemon.name}`}>
        <div className={`${style.card} ice-fa`} >
          <div className={style.card_body}>
            <h1>#{pokemon.id}</h1>
            <Image src={pokemon.img} alt={pokemon.name} width={100} height={100} />
          </div>

          <div className={style.card_footer}>
            <p>
              {pokemon.name}
            </p>
          </div>
        </div>
      </Link>
      }
    </>
  )
}

export default PokemonCard