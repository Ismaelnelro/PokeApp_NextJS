'use client'

import React, { useEffect, useState } from 'react'
import style from '@/modules/buttonFavorite.module.css'
import { Pokemon } from '@/interfaces/PokemonInterfaces'
import confetti from 'canvas-confetti';

const ButtonUI = ({ Poke }: { Poke: Pokemon | undefined }) => {

  const onToggleFavorite = () => {
    setexistInFavorite(!existInFavorite);

    if (!existInFavorite) {
      confetti({
        zIndex: 999,
        particleCount: 200,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      })
    }

    let favorite: Pokemon[] = JSON.parse(localStorage.getItem("favorites") || '[]')

    if (favorite.some(PokeFavorite => PokeFavorite.id === Poke?.id)) {
      console.log("hay uno igual");
      favorite = favorite.filter(poke => poke.id !== Poke?.id)
    } else {
      favorite.push(Poke || { id: "", name: "", img: "" })
    }

    localStorage.setItem("favorites", JSON.stringify(favorite));
  }

  const existFavorite = (Poke: Pokemon | undefined) => {
    // if (typeof window === 'undefined') return false;
    let favorite: Pokemon[] = JSON.parse(localStorage.getItem("favorites") || '[]')
    return favorite.some(PokeFavorite => PokeFavorite.id === Poke?.id)
  }

  const [existInFavorite, setexistInFavorite] = useState<Boolean>(existFavorite(Poke))

  useEffect(() => {
    existFavorite(Poke);
  }, [])
  return (
    <button className={style.button} onClick={() => onToggleFavorite()}>
      {existInFavorite ? "In favorites" : "Save in favorites"}
    </button>
  )
}

export default ButtonUI