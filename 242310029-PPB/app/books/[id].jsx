import {
    Text,
    View,
} from "react-native";

import {
    SafeAreaView,
} from "react-native-safe-area-context";

import {
    useLocalSearchParams,
} from "expo-router";

export default function DetailBuku() {

  const { id, category } =
    useLocalSearchParams();

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

        <Text style={{ fontSize: 28 }}>
          Detail Buku
        </Text>

        <Text style={{ fontSize: 20 }}>
          ID Buku: {id}
        </Text>

        <Text style={{ fontSize: 20 }}>
          Category: {category}
        </Text>

      </View>

    </SafeAreaView>
  );
}