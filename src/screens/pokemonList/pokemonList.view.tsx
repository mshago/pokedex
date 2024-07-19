import React, { FC } from "react";
import { FlatList, ListRenderItemInfo, Text } from "react-native";
import { Container, ListItem } from "../../components";
import { PokemonListT } from "./pookemonList.type";
import { DataListT } from "../../types";

export const PokemonListView : FC<PokemonListT>= ({ data, isLoading, handlePress }) => {

  return (
    <Container isScrollViewDisabled isHeaderVisible>
        {isLoading && <Text>Loading</Text>}
        <FlatList
          data={data}
          renderItem={(item) => renderPokemonItem(item, handlePress)}
          keyExtractor={({ name }) => String(name)}
        />
    </Container>
  );
};

const renderPokemonItem = ({item}: ListRenderItemInfo<DataListT>, handlePress:(id:string) => any) => {
  return <ListItem url={item.url} onPress={() => handlePress(item.url)} />
}
