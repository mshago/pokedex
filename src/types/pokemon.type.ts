export type TPokemon = {
  abilities: string[];
  description: string;
  id: number;
  number: number;
  name: string;
  sprite: string;
  stats: TPokemonStat[];
  types: string[];
}