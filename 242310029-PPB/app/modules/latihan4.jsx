import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ListBook } from "../../constants/list_books";

import BookCollections from "../../components/module-latihan/components/BookCollections";
import Categoriesnav from "../../components/module-latihan/components/Categories";
import CTABook from "../../components/module-latihan/components/CTABook";
import Header from "../../components/module-latihan/components/Header";

import { color_list, styles } from "../../components/module-latihan/styles/StyleApps";

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
            © 242310029 Rifcky Bayu Bachtriar
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}// memanggil components\module-latihan\praktikum.jsx
