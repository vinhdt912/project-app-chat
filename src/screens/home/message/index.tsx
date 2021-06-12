import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../../../navigation/AuthProvider";
import Header from "../common/Header";
import ProfileModal from "./components/ProfileModal";

const MessageScreen: React.FC<any> = () => {
  const { user, logout } = useContext(AuthContext);
  const [isShow, setIsShow] = useState(false);

  const openModal = () => {
    setIsShow(true);
  };
  const toggle = () => {
    setIsShow(false);
  };

  return (
    <View>
      <ProfileModal user={user} isShow={isShow} toggle={() => toggle()} handleLogout={() => logout()} />
      <Header title="Message" iconLeft="person-circle" iconRight="add" handleClickIconLeft={() => openModal()} />
      <Text>Message Screen</Text>
    </View>
  );
};

export default MessageScreen;
