import { PokemonDataT } from "../../types"

export type PokemonInfoT = {
  backgroundColor?:string
}

export type PokemonInfoViewT = {
  backgroundColor?:string
  selectedView?:string
  setSelectedView?:(view:string) => void
  pokemon:PokemonDataT
  isLoading:boolean
}