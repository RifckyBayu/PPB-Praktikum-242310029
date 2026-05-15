import { Link, useRouter } from "expo-router";
import { Button, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Latihan6() {
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
          First Screen
        </Text>

        {/* Navigasi menggunakan Link */}
        <Link
          href={"/modules/latihan-6/screen2"}
          push
          asChild
        >
          <Button title="Go to second screen" />
        </Link>

        {/* Navigasi menggunakan router.push */}
        <Button
          title="Go to third screen"
          onPress={() =>
            router.push("/modules/latihan-6/screen3")
          }
        />
      </View>
    </SafeAreaView>
  );
}