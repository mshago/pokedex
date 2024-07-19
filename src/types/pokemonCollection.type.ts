export type TInitialState = [

];

export type TActions = {
  type: EActions;
}

export enum EActions {
  ADD_POKEMON,
  UPDATE_POKEMON,
  REMOVE_POKEMON,
}