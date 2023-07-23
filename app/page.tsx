import { Suspense } from "react";
import PokeApi from '@/api/pokemonApi';

import { PagesLayout } from "@/components/Layout/PagesLayout";
import PokemonCard from '@/components/iu/PokemonCard';

import { Pokemon, PokemonListResponse } from '@/interfaces/PokemonInterfaces';


async function getStaticProps() {
  try {
    const { data } = await PokeApi.get<PokemonListResponse>(`pokemon?limit=150`)

    if (data) {
      const pokemons: Pokemon[] = data.results.map((pokemon, index) => ({
        ...pokemon,
        id: index + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
      }))
      return pokemons;
    }
  } catch (error) {
    console.log("Error while fetch data");

  }
}


export default async function Home() {
  const pokemons = await getStaticProps();
  return (
    <PagesLayout title="Home">
      <Suspense fallback={"Cargandoo..."}>
        <div className='flex flex-wrap justify-center gap-5 w-full p-5'>

          {
            pokemons?.map((pokemon, index) => (
              <PokemonCard key={index} pokemon={pokemon} />
            ))
          }
        </div>

      </Suspense>
    </PagesLayout>
  )
}

