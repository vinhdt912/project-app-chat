import { StyleSheet } from "react-native";
import { MAIN_COLOR } from "../../containers/constants";

const rootSize = 20;
const basicMargin = 20;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: MAIN_COLOR,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 50,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "90%",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 100,
  },
  modalClose: {
    textAlign: "right",
    margin: 10,
    fontSize: 15,
    color: MAIN_COLOR,
  },
  userAvatar: {
    marginVertical: 10,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 100,
    maxHeight: 100,
  },
  userName: {
    color: "black",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 25,
    fontWeight: "bold",
  },
  userEmail: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 15,
    marginBottom: 20,
    color: "gray",
  },
  modalButton: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  modalButtonIcon: {
    padding: 5,
    paddingLeft: 8,
    borderRadius: 100,
    backgroundColor: MAIN_COLOR,
    color: "white",
    fontSize: 25,
    marginLeft: 5,
    marginRight: 15,
  },
  modalButtonText: {
    color: "black",
    fontSize: 20,
  },
});
export default styles;
