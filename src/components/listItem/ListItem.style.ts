import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomColor: "#c4c4c4",
    borderBottomWidth: 1,
    padding: 10,
  },
  pokemonImageContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  pokemonImage: {
    width: 80,
    height: 80,
  },
  pokemonInfo: {
    flex: 2,
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  name: {
    fontSize: 20,
    textTransform: "capitalize",
  },
  number: {
    fontSize: 14,
    color: "#a4a4a4",
  },
  types: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'flex-end',
  },
  type: {
    height: 60,
    width: 60,
  },
});
