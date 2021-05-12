import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import styles from "../../../assets/styles/_people";
import PeopleList from "./components/PeopleList";
import SearchBar from "./components/SearchBar";

const PeopleScreen: React.FC<any> = () => {
  const people = useSelector((state: any) => state.people.list);
  const [peopleList, setPeopleList] = useState(people);
  return (
    <SafeAreaView style={styles.peopleContainer}>
      <SearchBar peopleList={people} setPeopleList={setPeopleList} />
      <PeopleList data={peopleList} />
    </SafeAreaView>
  );
};

export default PeopleScreen;
