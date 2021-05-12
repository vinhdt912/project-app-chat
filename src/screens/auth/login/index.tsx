import * as React from "react";
import { useContext, useState } from "react";
import { Image, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import styles from "../../../assets/styles/_login";
import { MAIN_COLOR } from "../../../containers/constants/index";
import { AuthContext } from "../../../navigation/AuthProvider";
import { validateEmail, validatePassword } from "../../../containers/utils/index";

const LoginScreen: React.FC<any> = ({ navigation, route }) => {
  const [email, setEmail] = useState(route?.params?.email ? route?.params?.email : "");
  const [password, setPassword] = useState(route?.params?.password ? route?.params?.password : "");
  const [hidePassword, setHidePassword] = useState(true);
  const { login, loading, error } = useContext(AuthContext);
  const dispatch = useDispatch();

  const checkAll = () => {
    if (validateEmail(email) && validatePassword(password)) return true;
    return false;
  };

  return (
    <View style={styles.registerContainer}>
      <Image style={styles.logo} source={require("../../../assets/images/logo.png")} />
      <TextInput
        defaultValue={route?.params?.email}
        selectionColor={MAIN_COLOR}
        underlineColor={!validateEmail(email) && email !== "" ? "red" : MAIN_COLOR}
        label="Email"
        style={styles.textInput}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        defaultValue={route?.params?.password}
        selectionColor={MAIN_COLOR}
        underlineColor={!validatePassword(password) && password !== "" ? "red" : MAIN_COLOR}
        label="Password"
        style={styles.textInputPassWord}
        secureTextEntry={hidePassword}
        onChangeText={(password) => setPassword(password)}
        right={<TextInput.Icon name="eye-off" color={MAIN_COLOR} size={20} onPress={() => setHidePassword(!hidePassword)} />}
      />
      <Button
        disabled={!checkAll() || loading}
        loading={loading}
        mode="contained"
        color={MAIN_COLOR}
        labelStyle={styles.submitButton}
        onPress={() => {
          login(email, password);
        }}
      >
        Submit
      </Button>
      <Text style={styles.textError}>{error && error}</Text>
      <Text style={styles.textNotHaveAccount}>Don't have an account?</Text>
      <Text style={styles.textLogin} onPress={() => navigation.replace("Register")}>
        Register
      </Text>
    </View>
  );
};

export default LoginScreen;
