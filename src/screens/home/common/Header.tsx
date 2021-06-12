import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import styles from "../../../assets/styles/_home";

const Header: React.FC<any> = ({ title, iconLeft, iconRight, handleClickIconLeft, handleClickIconRight }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.headerIcon} onPress={handleClickIconLeft}>
        <Ionicons name={iconLeft} color="white" size={30} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity>
        {iconRight && (
          <Ionicons style={styles.headerIcon} name={iconRight} color="white" size={30} handleClickIconRight={handleClickIconRight} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
