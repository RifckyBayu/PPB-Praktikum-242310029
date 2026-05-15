import {
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { useLocalSearchParams } from "expo-router";

import { ListBook } from "../../../constants/list_books";

export default function DetailPage() {

  const { id } = useLocalSearchParams();

  const detailBook = ListBook.find(
    (item) => item.id == id
  );

  return (
    <View style={styles.container}>

      <Image
        source={detailBook.img}
        style={styles.image}
      />

      <Text style={styles.title}>
        {detailBook.title}
      </Text>

      <Text style={styles.author}>
        {detailBook.author}
      </Text>

      <Text style={styles.synopsis}>
        {detailBook.synopsis}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },

  image: {
    width: "100%",
    height: 250,
    borderRadius: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },

  author: {
    fontSize: 18,
    color: "gray",
    marginTop: 10,
  },

  synopsis: {
    fontSize: 16,
    marginTop: 20,
    lineHeight: 24,
  },

});