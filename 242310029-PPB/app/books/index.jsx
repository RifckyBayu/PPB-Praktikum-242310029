import { useRouter } from "expo-router";
import {
    SafeAreaView,
} from "react-native-safe-area-context";

import {
    Pressable,
    Text,
    View,
} from "react-native";

export default function BooksPage() {

  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >

        <Text style={{ fontSize: 24 }}>
          Books Page
        </Text>

        {/* Dynamic Route */}
        <Pressable
          onPress={() =>
            router.push("/books/10")
          }
          style={{
            backgroundColor: "green",
            padding: 15,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white" }}>
            Detail Buku ID 10
          </Text>
        </Pressable>

        {/* Query Parameter */}
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/books/20",
              params: {
                category: "novel",
              },
            })
          }
          style={{
            backgroundColor: "orange",
            padding: 15,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white" }}>
            Kirim Query Parameter
          </Text>
        </Pressable>

      </View>

    </SafeAreaView>
  );
}