import { StyleSheet } from "react-native";
import { MAIN_COLOR } from "../../containers/constants";

const rootSize = 20;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: MAIN_COLOR,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 50,
  },
  headerIcon: {
    marginHorizontal: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: rootSize,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
export default styles;
