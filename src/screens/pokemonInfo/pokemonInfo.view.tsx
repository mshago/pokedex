import React, { FC } from "react";
import { ActivityIndicator, View, Image } from "react-native";

//components
import { TextApp } from "../../components/textApp/TextApp";
import { ButtonSection } from "../../components/buttonSection/ButtonSection";
import { Container } from "../../components";
import { styles } from "./pokemonInfo.style";
import { PokemonInfoViewT } from "./pokemonInfo.type";
import { COLORS } from "../../assets/colors/colors";
import {Stats} from "./components/stats/Stats";

export const PokemonInfoView: FC<PokemonInfoViewT> = ({
  backgroundColor,
  selectedView,
  setSelectedView,
  pokemon,
  isLoading,
}) => {

  if (isLoading) {
    return (
      <Container backgroundColor={backgroundColor}>
        <ActivityIndicator color={COLORS.red} />
      </Container>
    );
  }

  const getSelectedView = (selectedView:string) => {
    if(selectedView === "stats")
      return <Stats/>
    if(selectedView === "evolutions")
      return <TextApp title="Hola 2"/>
    if(selectedView === "moves")
      return <TextApp title="Hola 3"/>
  }

  return (
    <Container backgroundColor={backgroundColor}>
      <Image
          resizeMode={"contain"}
          style={styles.sprite}
          source={{ uri: pokemon.sprite }}
        />
      <View style={styles.info}>
        <TextApp style={styles.title} title={pokemon.name} />
        <TextApp style={styles.desc} title={pokemon.desc} />
        <View
          style={{
            flexDirection: "row",
            alignSelf: "stretch",
            marginHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <ButtonSection
            title={"STATS"}
            color={backgroundColor}
            isSelected={selectedView === "stats"}
            onPress={() => setSelectedView("stats")}
          />
          <ButtonSection
            color={backgroundColor}
            title={"EVOLUTIONS"}
            isSelected={selectedView === "evolutions"}
            onPress={() => setSelectedView("evolutions")}
          />
          <ButtonSection
            color={backgroundColor}
            title={"MOVES"}
            isSelected={selectedView === "moves"}
            onPress={() => setSelectedView("moves")}
          />
        </View>
        {
          getSelectedView(selectedView)
        }
      </View>
    </Container>
  );
};
