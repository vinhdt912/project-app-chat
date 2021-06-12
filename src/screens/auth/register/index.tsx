import * as React from "react";
import { useContext, useState } from "react";
import { Image, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styles from "../../../assets/styles/_register";
import { DATA_USER, MAIN_COLOR } from "../../../containers/constants/index";
import { validateEmail, validatePassword } from "../../../containers/utils/index";
import { AuthContext } from "../../../navigation/AuthProvider";

const RegisterScreen: React.FC<any> = ({ navigation }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const { register, loading, error } = useContext(AuthContext);

  const checkAll = () => {
    if (displayName && validateEmail(email) && validatePassword(password)) return true;
    return false;
  };

  return (
    <View style={styles.registerContainer}>
      <Image style={styles.logo} source={require("../../../assets/images/logo.png")} />
      <TextInput
        selectionColor={MAIN_COLOR}
        underlineColor={MAIN_COLOR}
        label="Name"
        style={styles.textInput}
        value={displayName}
        onChangeText={(name) => setDisplayName(name)}
      />
      <TextInput
        selectionColor={MAIN_COLOR}
        underlineColor={!validateEmail(email) && email !== "" ? "red" : MAIN_COLOR}
        label="Email"
        style={styles.textInput}
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        selectionColor={MAIN_COLOR}
        underlineColor={!validatePassword(password) && password !== "" ? "red" : MAIN_COLOR}
        label="Password"
        style={styles.textInput}
        secureTextEntry={hidePassword}
        value={password}
        onChangeText={(password) => setPassword(password)}
        right={<TextInput.Icon name="eye-off" color={MAIN_COLOR} size={20} onPress={() => setHidePassword(!hidePassword)} />}
      />
      <Button
        disabled={!checkAll() || loading}
        loading={loading}
        mode="contained"
        color={MAIN_COLOR}
        labelStyle={styles.submitButton}
        onPress={async () => {
          await register(displayName, email, password);
          const check = DATA_USER.filter((user) => user.email.search(email) >= 0);
          if (check.length === 0) {
            DATA_USER.push({ id: DATA_USER.length, name: displayName, email: email, password: password });
            navigation.replace("Login", { email: email, password: password });
          }
        }}
      >
        Submit
      </Button>
      <Text style={styles.textError}>{error && error}</Text>
      <Text style={styles.textHaveAccount}>Already have an account?</Text>
      <Text style={styles.textLogin} onPress={() => navigation.replace("Login")}>
        Login
      </Text>
    </View>
  );
};

export default RegisterScreen;
