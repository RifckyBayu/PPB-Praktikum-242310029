import { useRouter } from "expo-router";
import { Button, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen2() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Second Screen
        </Text>

        <Button
          title="Go back"
          onPress={() => router.back()}
        />
      </View>
    </SafeAreaView>
  );
}