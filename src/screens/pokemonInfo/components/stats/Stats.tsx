import { View } from "react-native";
import React, { FC } from "react";
import { StatsT } from "./Stats.type";
import StatsComponent from "../../../../components/Stats";
import { TextApp } from "../../../../components/textApp/TextApp";
import { styles } from "./Stats.style";
import { Ability } from "../ability/Ability";

export const Stats: FC<StatsT> = ({ color, stats, abilities }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <StatsComponent color={color} stats={stats} />
      <View style={styles.componentContainer}>
        <TextApp title="Abilities" style={[{ color }, styles.title]} />
        {abilities.map((ability, index) => {
          return <Ability key={index} ability={ability} color={color} />;
        })}
      </View>
      <View style={styles.componentContainer}>
        <TextApp title="Weaknesses" style={[{ color }, styles.title]} />
      </View>
    </View>
  );
};
