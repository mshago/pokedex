import React, { FC } from "react";
import { ActivityIndicator, View, Image, Dimensions } from "react-native";

//components
import { TextApp } from "../../components/textApp/TextApp";
import { ButtonSection } from "../../components/buttonSection/ButtonSection";
import { Container } from "../../components";
import { styles } from "./pokemonInfo.style";
import { PokemonInfoViewT } from "./pokemonInfo.type";
import { COLORS } from "../../assets/colors/colors";
import { Stats } from "./components/stats/Stats";

const windowWidth = Dimensions.get("window").width;

const URI_ICONS = "../../assets/img/icons/types/Tag-";
const ICONS = {
  bug: require(URI_ICONS + "Bug.png"),
  dark: require(URI_ICONS + "Dark.png"),
  dragon: require(URI_ICONS + "Dragon.png"),
  electric: require(URI_ICONS + "Electric.png"),
  fairy: require(URI_ICONS + "Fairy.png"),
  fighting: require(URI_ICONS + "Fight.png"),
  fire: require(URI_ICONS + "Fire.png"),
  flying: require(URI_ICONS + "Flying.png"),
  ghost: require(URI_ICONS + "Ghost.png"),
  grass: require(URI_ICONS + "Grass.png"),
  ground: require(URI_ICONS + "Ground.png"),
  ice: require(URI_ICONS + "Ice.png"),
  normal: require(URI_ICONS + "Normal.png"),
  poison: require(URI_ICONS + "Poison.png"),
  psychic: require(URI_ICONS + "Psychic.png"),
  rock: require(URI_ICONS + "Rock.png"),
  steel: require(URI_ICONS + "Steel.png"),
  water: require(URI_ICONS + "Water.png"),
};

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

  const getSelectedView = (selectedView: string) => {
    if (selectedView === "stats")
      return (
        <Stats
          stats={pokemon.stats}
          color={backgroundColor}
          abilities={pokemon.abilities}
        />
      );
    if (selectedView === "evolutions") return <TextApp title="Hola 2" />;
    if (selectedView === "moves") return <TextApp title="Hola 3" />;
  };

  return (
    <Container backgroundColor={backgroundColor}>
      <Image
        resizeMode={"contain"}
        style={styles.sprite}
        source={{ uri: pokemon.sprite }}
      />
      <View style={styles.info}>
        <TextApp style={styles.title} title={pokemon.name} />
        <View
          style={{
            maxWidth: windowWidth - 200,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {pokemon.types.map((type) => {
            return (
              <Image
                style={{ resizeMode: "contain", height: 65 }}
                source={ICONS[type || "normal"]}
              />
            );
          })}
        </View>
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
        {getSelectedView(selectedView)}
      </View>
    </Container>
  );
};
