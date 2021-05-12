import { StyleSheet } from "react-native";
import { MAIN_COLOR } from "../../containers/constants";

const styles = StyleSheet.create({
  peopleContainer: {
    display: "flex",
    paddingBottom: 120,
  },
  UserItemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderBottomWidth: 0.25,
  },
  UserItemAvatar: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    marginVertical: 12,
  },
  UserItemName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  UserItemEmail: {
    fontSize: 15,
  },
  UserItemIcon: {
    marginLeft: "auto",
    marginRight: 10,
  },

  searchBarContainer: {},
  searchBarInput: {
    height: 60,
    borderBottomColor: MAIN_COLOR,
  },
});
export default styles;
