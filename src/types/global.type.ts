import { ReactNode } from 'react';
import { TInitialState as TPokemonState } from './pokemonCollection.type';

export interface IGlobalState {
  pokemonCollection: TPokemonState;
}

export type GlobalContextType = {
  state: IGlobalState;
}

export type TGlobalProvider = {
  reducer: any,
  state: any,
  children: ReactNode,
}
