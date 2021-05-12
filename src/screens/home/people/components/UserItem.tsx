import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import styles from "../../../../assets/styles/_people";
import { Ionicons } from "react-native-vector-icons";
import { useState } from "react";
import { MAIN_COLOR } from "../../../../containers/constants/index";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../../../containers/redux/actions/people";

const UserItem: React.FC<any> = ({ user }) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  return (
    <View style={styles?.UserItemContainer}>
      <Image style={styles?.UserItemAvatar} source={require("../../../../assets/images/logo.png")} />
      <View>
        <Text style={styles?.UserItemName}>{user?.name}</Text>
        <Text style={styles?.UserItemEmail}>{user?.email}</Text>
      </View>
      <Ionicons
        style={styles?.UserItemIcon}
        name={liked ? "heart" : "heart-outline"}
        size={40}
        color={liked ? MAIN_COLOR : "gray"}
        onPress={() => {
          dispatch(addToFavorite(user));
          setLiked(!liked);
        }}
      />
    </View>
  );
};

export default UserItem;
