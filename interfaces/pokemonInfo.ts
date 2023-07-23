export interface PokemonInfo {
  abilities: Ability[];
  order:number;
  base_experience: number;
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  moves: Move[];
  name: string;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: { name: string };
  is_hidden: boolean;
  slot: number;
}

export interface Move {
  move: { name: string };
}


export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  animated?: Sprites;
}

export interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface DreamWorld {
  front_default: string;
  front_female: null;
}


export interface Other {
  dream_world: DreamWorld;
  home: Home;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: { name: string };
}

export interface Type {
  slot: number;
  type: { name: string };
}