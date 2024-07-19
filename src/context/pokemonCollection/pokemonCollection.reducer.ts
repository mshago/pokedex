import {
  EActions,
  TActions,
  TInitialState,
} from '../../types/pokemonCollection.type';

export const pokemonReducer = (state: TInitialState, action: TActions) => {
  switch (action.type) {
    case EActions.ADD_POKEMON: () => {
      return {
        ...state,
      }
    }
    case EActions.UPDATE_POKEMON: () => {
      return {
        ...state,
      }
    }
    case EActions.REMOVE_POKEMON: () => {
      return {
        ...state,
      }
    }
  }
}