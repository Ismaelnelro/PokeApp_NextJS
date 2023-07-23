
import React from 'react'
import Image from 'next/image'
import style from '@/modules/card.details.module.css'
import { Pokemon } from '@/interfaces/PokemonInterfaces'

const PokemonCardDetails = ({ pokemon }: { pokemon: Pokemon | undefined}) => {


  return (
    <div>
      {pokemon &&
        <div className={`${style.card} ice-fa`} >
          <div className={style.card_body}>
            <h1 className={style.card_body_id}>#{pokemon.id}</h1>
            <Image src={pokemon.img || '/no-image.png'} alt={pokemon.name} width={200} height={200} />
          </div>

          <div className={style.card_footer}>
            <p>
              {pokemon.name}
            </p>
          </div>
        </div>
      }
    </div>
  )
}

export default PokemonCardDetails