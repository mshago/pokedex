import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import TextApp from "../TextApp";
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
  fight: require(URI_ICONS + "Fight.png"),
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
  return <Image style={styles.type} source={ICONS[type ? type : "normal"]} />;
};

export const ListItem: FC<ListItemT> = ({ url, onPress }) => {
  const [pressed, setPressed] = useState(false);

  const { data: pokemon, loading } = useFetchPokemonPreview(url);

  let justifyTypes: any;

  if(pokemon){
    justifyTypes = [styles.typesContainer,{justifyContent:pokemon.types.length > 1 ? 'space-between':'flex-end'}]
  }

  if (loading) {
    return (
      <View style={styles.item}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPressOut={() => setPressed(!pressed)}
      onPressIn={() => setPressed(!pressed)}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        {
          backgroundColor: pressed ? "rgb(210,230,255)" : "white",
        },
        styles.item,
      ]}
    >
      <>
        <View style={styles.pokemon}>
          <Image
            source={{
              uri: pokemon.sprite,
            }}
            style={styles.photo}
          />
          <View style={styles.info}>
            <TextApp style={styles.name} title={pokemon.name} />
            <TextApp style={styles.number} title={"#" + pokemon.number} />
          </View>
        </View>
        <View style={justifyTypes}>
          <TypeImage type={pokemon.types ? pokemon.types[0] : "normal"} />
          {pokemon.types && pokemon.types.length > 1 ? <TypeImage type={pokemon.types[1]} /> : null}
        </View>
      </>
    </TouchableOpacity>
  );
};
