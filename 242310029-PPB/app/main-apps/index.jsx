import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";

import { ListBook } from "../../constants/list_books";

export default function HomePage() {

  const router = useRouter();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Trail Running Events
      </Text>

      <FlatList
        data={ListBook}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push(`/main-apps/detail/${item.id}`)
            }
          >

            <Image
              source={item.img}
              style={styles.image}
            />

            <View style={{ padding: 10 }}>

              <Text style={styles.cardTitle}>
                {item.title}
              </Text>

              <Text>{item.author}</Text>

            </View>

          </TouchableOpacity>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f2f2f2",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 180,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

});