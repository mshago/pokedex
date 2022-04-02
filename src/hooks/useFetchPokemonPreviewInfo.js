import { useEffect, useState } from "react"
import { getPokemonPreviewInfo } from "../helpers/getPokemon"

export const useFetchPokemonPreview = (url) => {
    
    const [state, setState] = useState({
        data:[],
        loading: true,
    })

    useEffect(() => {
        getPokemonPreviewInfo(url)
            .then(x => setState({
                data: x,
                loading: false
            }))
    },[])

    return state;
}