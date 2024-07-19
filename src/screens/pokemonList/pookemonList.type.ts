import { DataListT } from "../../types"

export type PokemonListT = {
  data: DataListT[]
  isLoading: boolean
  handlePress: (id:string) => void
}