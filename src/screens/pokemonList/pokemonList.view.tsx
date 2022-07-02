import React, { FC } from "react";
import { FlatList, ListRenderItemInfo, Text } from "react-native";
import { Container, ListItem } from "../../components";
import { PokemonListT } from "./pookemonList.type";
import { DataListT } from "../../types";

export const PokemonListView : FC<PokemonListT>= ({ data, isLoading, handlePress }) => {

  return (
    <Container isScrollViewDisabled>
        {isLoading && <Text>Loading</Text>}
        <FlatList
          data={data}
          initialNumToRender={10}
          renderItem={renderPokemonItem}
          keyExtractor={({ name }) => String(name)}
        />
    </Container>
  );
};

const renderPokemonItem = ({item}: ListRenderItemInfo<DataListT>) => {
  return <ListItem url={item.url} />
}
