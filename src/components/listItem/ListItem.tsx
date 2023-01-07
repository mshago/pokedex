import React from "react";
import { View, TouchableOpacity, Image} from "react-native";
import {TextApp} from "../textApp/TextApp";
import { useFetchPokemonPreview } from "../../hooks/useFetchPokemonPreviewInfo";
import { styles } from "../listItem/ListItem.style";
import { FC } from "react";
import { ListItemT, TypeImageT } from "./ListItem.type";

const URI_ICONS = "../../assets/img/icons/types/Types-";
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

const TypeImage: FC<TypeImageT> = ({ type }) => {
  return <Image style={styles.type} source={ICONS[type || "normal"]} />;
};

export const ListItem: FC<ListItemT> = ({ url, onPress }) => {
  const { data, loading } = useFetchPokemonPreview(url);

  if (loading) return <TextApp title='Loading...' style={{}}/>;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.itemContainer}
    >
      <View style={styles.pokemonImageContainer}>
        <Image
          source={{
            uri: data.sprite,
          }}
          style={styles.pokemonImage}
        />
      </View>
      <View style={styles.pokemonInfo}>
        <TextApp style={styles.name} title={data.name} />
        <TextApp style={styles.number} title={"#" + data.number} />
      </View>
      <View style={styles.types}>
        <TypeImage type={data.types ? data.types[0] : "normal"} />
        {data.types.length > 1 && <TypeImage type={data.types[1]} />}
      </View>
    </TouchableOpacity>
  );
};
