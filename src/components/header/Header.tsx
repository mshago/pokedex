import React, { FC } from "react";
import { View, StatusBar } from "react-native";
import {TextApp} from "../textApp/TextApp";
import { styles } from "./Header.style";
import { HeaderT } from "./Header.type";

export const Header: FC<HeaderT> = ({ title, goBack }) => {
  return (
    <View style={styles.header}>
      <StatusBar barStyle="light-content" backgroundColor={"#f00000"} />
      <TextApp title={title} style={styles.title} />
    </View>
  );
};
