import React, { useContext, useReducer, Dispatch, FC } from "react";
import { GlobalContext } from "./global.context";
import { TGlobalState, TDispatch, TGlobalProvider } from '../../types/global.type';


export const useGlobalState = () => {
  const [state, dispatch] = useContext<any>(GlobalContext);
  return { state, dispatch };
}

export const GlobalProvider: FC<any> = ({ children, reducer, state }) => {
  return (
  
  )
}