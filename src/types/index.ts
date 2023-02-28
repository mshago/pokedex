export type DataListT = {
  name: string;
  url: string;
};

export type PokemonPreviewDataT = {
  name: string;
  number: number;
  sprite: string;
  types: string[];
};

export type PokemonDataT = {
  abilities: Array<AbilityT>;
  desc: string;
  name: string;
  types: string[];
  sprite: string;
  stats: number[];
};

export type AbilityT = {
  name:string,
  effect:string,
}