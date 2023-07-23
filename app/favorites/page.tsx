'use client'
import React, { useEffect, useState } from 'react'
import { PagesLayout } from '@/components/Layout/PagesLayout'
import NoFavorite from '@/components/iu/NoFavorite'
import PokemonCard from '@/components/iu/PokemonCard'
import { Pokemon } from '@/interfaces/PokemonInterfaces'

const FavoritesPage = () => {


  const getFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites') || "[]");
  }

  const [favorites, setFavorites] = useState<Pokemon[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, [])

  return (
    <PagesLayout title=''>
      {favorites.length === 0
        ? <NoFavorite /> :
        <div className='flex gap-12 justify-start p-14'>
          {
            favorites.map(poke => (
              <div key={poke.id}>
                <PokemonCard pokemon={poke}></PokemonCard>
              </div>
            ))
          }
        </div>
      }
    </PagesLayout>
  )
}

export default FavoritesPage