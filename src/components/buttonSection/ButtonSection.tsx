import React, { FC } from "react";
import { TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { COLORS_TYPE } from "../../assets/colors/colors";
import { TextApp } from "../textApp/TextApp";
import { styles } from "./ButtonSection.style";
import { ButtonSectionT } from "./ButtonSection.type";

export const ButtonSection: FC<ButtonSectionT> = ({
  title,
  isSelected,
  onPress,
  styles:customStyles,
  color = COLORS_TYPE.normal,
}) => {

  const textStyles:TextStyle[] = [isSelected?styles.textSelected:{color}]

  const combinedStyles:ViewStyle[] = [styles.button, isSelected && {backgroundColor:color},customStyles]

  return (
    <TouchableOpacity onPress={onPress} style={combinedStyles}>
      <TextApp style={textStyles} title={title} />
    </TouchableOpacity>
  );
};
