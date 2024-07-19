import { pokemonReducer } from "../pokemonCollection/pokemonCollection.reducer";
import { TGlobalState } from "../../types/global.type";

export const globalInitialState: TGlobalState = {
  pokemonCollection: [],
};

export const globalReducer = (state: TGlobalState, action: any) => ({
  pokemonCollection: pokemonReducer(state.pokemonCollection, action),
});
