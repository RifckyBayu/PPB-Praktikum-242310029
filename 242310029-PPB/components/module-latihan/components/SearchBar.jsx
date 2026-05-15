// components/module-latihan/components/SearchBar.jsx

import Ionicons from "@expo/vector-icons/Ionicons";

import {
  TextInput,
  View,
} from "react-native";

import {
  styles
} from "../styles/StyleApps";

export default function SearchBar({
  search,
  setSearch,
}) {

  return (

    <View style={styles.search_container}>

      <Ionicons
        name="search"
        size={20}
        color="gray"
      />

      <TextInput
        placeholder="Search here"
        placeholderTextColor="gray"
        value={search}
        onChangeText={(text) => setSearch(text)}
        style={styles.search_input}
      />

    </View>

  );
}