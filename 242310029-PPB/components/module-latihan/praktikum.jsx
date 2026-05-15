import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ListBook from "../../../constants/list_books";

import BookCollections from "./components/BookCollections";
import Categoriesnav from "./components/Categories";
import CTABook from "./components/CTABook";
import Header from "./components/Header";

import { color_list, styles } from "./styles/StyleApps";

export default function HomeScreen() {
  const lastBook = ListBook[ListBook.length - 1];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ flex: 1 }}>
          <CTABook book={lastBook} />
          <Categoriesnav />
          <BookCollections books={ListBook} />
        </View>

        {/* FOOTER */}
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={{ color: color_list.green }}>
            © 242310029 RIfcky Bayu Bachtriar
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}