import React from 'react'
import PokeApi from '@/api/pokemonApi';
import { Pokemon, PokemonListResponse } from '@/interfaces/PokemonInterfaces';
import { PokemonInfo, Type } from '@/interfaces/pokemonInfo';
import PokemonCardDetails from '@/components/iu/PocemonCardDetail';
import { PagesLayout } from '@/components/Layout/PagesLayout';

const NOSSRButtonUI = dynamic(() => import('@/components/iu/ButtonUI'), { ssr: false })
// import ButtonUI from '@/components/iu/ButtonUI';
import styles from '@/modules/pokemonDetailsPage.module.css'
import dynamic from 'next/dynamic';

interface params {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const { data } = await PokeApi.get<PokemonListResponse>(`pokemon?limit=150`)

  const PokemonsNames: string[] = data.results.map((poke) => poke.name)
  const PokemonsNumbres = PokemonsNames.map((i) => `${i + 1}`);
  const params: string[] = [...PokemonsNumbres, ...PokemonsNames]


  return params.map((slug) => {
    params: { slug }
  })
}

async function getStaticProps(slug: string) {
  try {
    const { data } = await PokeApi.get<PokemonInfo>(`pokemon/${slug}`)

    if (data) {
      const id = data.id
      const pokemonCard: Pokemon = {
        id,
        name: data.name,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
      }
      const pokemonDetails: PokemonInfo = {
        id: data.id,
        name: data.name,
        is_default: data.is_default,
        height: data.height,
        abilities: data.abilities,
        base_experience: data.base_experience,
        held_items: data.held_items,
        moves: data.moves,
        order: data.order,
        sprites: data.sprites,
        stats: data.stats,
        types: data.types,
        weight: data.weight
      }
      return {
        pokemonCard,
        pokemonDetails
      }
    }
  } catch (error) {
    console.log("Error while fetch data", error);
  }
}




const PokemonDetails = async ({ params }: params) => {
  const { slug } = params
  const data = await getStaticProps(slug)




  return (
    <PagesLayout title="">
      <div className={styles.container}>

        <PokemonCardDetails pokemon={data?.pokemonCard} />

        <div className={styles.details_container}>
          <div className={styles.details_header}>
            <h1>{data?.pokemonDetails.name}</h1>
            <NOSSRButtonUI Poke={data?.pokemonCard} />
          </div>
          <div className={styles.details_body}>
            <div className={styles.details_body_basic}>
              <h1>ORDER: {data?.pokemonDetails.order}</h1>
              <h1>weight : {data?.pokemonDetails.weight} grs</h1>
              <h1>height: {data?.pokemonDetails.height} m</h1>
            </div>
            <div className={styles.details_body_types}>
              <h1>TYPES</h1>
              <ul>
                {data?.pokemonDetails.types.map((types, i): any => (
                  <li key={types.type.name} className={`${types.type.name}-fa`}>{types.type.name}</li>
                ))}
              </ul>
            </div>
            <div className={styles.details_body_abilities}>
              <h1>ABILITIES</h1>
              <ul>
                {data?.pokemonDetails.abilities.map((abilities, i): any => (
                  <li key={abilities.ability.name}>{abilities.ability.name}</li>
                ))}
              </ul>
            </div>
            <div className={styles.details_body_moves}>
              <h1>MOVES</h1>
              <ul>
                {data?.pokemonDetails.moves.map((moves, i): any => (
                  <li key={moves.move.name}>{moves.move.name}</li>
                ))}
              </ul>
            </div>
            <div className={styles.details_body_stats}>
              <h1>STATS</h1>
              <ul>

                {data?.pokemonDetails.stats.map((stats, i): any => (
                  <div>
                    <li key={stats.stat.name}>{stats.stat.name}</li>
                    <p>base:{stats.base_stat}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </PagesLayout>
  )
}


export default PokemonDetails


