import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../assets/colors/colors";
const HEIGHT = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  info: {
    flex:1,
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: COLORS.white,
    minHeight:HEIGHT - (HEIGHT/5),
    paddingTop: 50,
    paddingBottom:200,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    top: HEIGHT / 5,
    flexGrow: 1,
  },
  title: {
    fontSize: 40,
    includeFontPadding: false,
    textTransform: "capitalize",
  },
  tag: {
    height: 60,
  },
  desc: {
    marginVertical: 20,
    marginHorizontal: 20,
    textAlign: "center",
    fontSize: 14,
  },
  sprite: {
    width: 175,
    height: 175,
    position: "absolute",
    zIndex: 2,
    alignSelf: "center",
  },
});
