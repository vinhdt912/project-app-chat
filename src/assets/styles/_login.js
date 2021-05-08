import { StyleSheet } from "react-native";
import { MAIN_COLOR } from "../../containers/constants";

const rootSize = 20;
const basicMargin = 20;
const styles = StyleSheet.create({
  registerContainer: {
    display: "flex",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: rootSize,
  },
  logo: {
    width: rootSize * 5,
    height: rootSize * 5,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: basicMargin,
  },
  textInput: {
    marginBottom: basicMargin,
  },
  textInputPassWord: {
    marginBottom: basicMargin,
  },
  submitButton: {
    color: "white",
  },
  textError: {
    fontSize: (rootSize * 3) / 4,
    textAlign: "center",
    marginTop: basicMargin / 2,
    color: "red",
  },
  textNotHaveAccount: {
    textAlign: "center",
    marginTop: basicMargin / 2,
    color: "gray",
  },
  textLogin: {
    fontSize: (rootSize * 3) / 4,
    textAlign: "center",
    marginTop: basicMargin / 2,
    color: "purple",
  },
});

export default styles;
