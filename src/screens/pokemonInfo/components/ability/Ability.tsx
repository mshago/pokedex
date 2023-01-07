import { TextApp } from "components/textApp/TextApp"
import { textTransform } from "helpers/text"
import React, { FC } from "react"
import { View } from "react-native"
import { styles } from "./Ability.style"
import { AbilityT } from "./Ability.type"

export const Ability:FC<AbilityT> = ({ability, color}) => {

  return (
    <View style={styles.container}>
      <TextApp title={ability.name} style={[styles.title,{color}]}/>
      <TextApp title={textTransform(ability.effect)}/>
    </View>
  )
}