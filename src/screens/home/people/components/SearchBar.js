import React from "react";
import { SafeAreaView } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../../../../assets/styles/_people";
import { MAIN_COLOR } from "../../../../containers/constants/index";

export default function SearchBar({ peopleList, setPeopleList }) {
  return (
    <SafeAreaView style={styles?.searchBarContainer}>
      <TextInput
        selectionColor={MAIN_COLOR}
        underlineColor={MAIN_COLOR}
        style={styles?.searchBarInput}
        placeholder="Search by name or email"
        left={<TextInput.Icon name="magnify" color={MAIN_COLOR} size={30} />}
        onChangeText={(text) => {
          const newPeopleList = peopleList.filter(
            (people) => people.name.toLowerCase().search(text.toLowerCase()) >= 0 || people.email.toLowerCase().search(text.toLowerCase()) >= 0
          );
          setPeopleList(newPeopleList);
        }}
      />
    </SafeAreaView>
  );
}
