import { pokemonTypes } from "../../types/pokemonTypes"

export type ListItemT = {
  url?:string
  onPress?:()=>{}
}

export type TypeImageT = {
  type: typeof pokemonTypes[number]
}