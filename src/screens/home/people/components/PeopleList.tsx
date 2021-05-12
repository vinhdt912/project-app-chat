import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import UserItem from "./UserItem";

const PeopleList: React.FC<any> = ({ data }) => {
  const renderItem = (user) => <UserItem user={user?.item} />;

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(user) => user?.id.toString()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default PeopleList;
