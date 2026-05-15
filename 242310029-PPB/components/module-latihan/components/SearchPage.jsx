import { useMemo, useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import BookCollections from "./BookCollections";
import SearchBar from "./SearchBar";

import { styles } from "../styles/StyleApps";

import { ListBook } from "../../../constants/list_books";

export default function SearchPage() {

  /* SEARCH */
  const [search, setSearch] = useState("");

  /* DATA */
  const [books, setBooks] = useState(ListBook);

  /* PAGINATION */
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 4;

  /* FILTERING */
  const BookDataMemori = useMemo(() => {

    let computedData = [...books];

    /* SEARCH FILTER */
    if (search) {

      computedData = computedData.filter((listData) => {

        return Object.keys(listData).some((key) => {

          try {

            const value = listData[key];

            return (
              value != null &&
              String(value)
                .toLowerCase()
                .includes(search.toLowerCase())
            );

          } catch (error) {

            return false;

          }

        });

      });

    }

    return computedData;

  }, [search, books]);

  /* TOTAL PAGE */
  const totalPage = Math.ceil(
    BookDataMemori.length / itemPerPage
  );

  /* START INDEX */
  const startIndex =
    (currentPage - 1) * itemPerPage;

  /* END INDEX */
  const endIndex =
    startIndex + itemPerPage;

  /* CURRENT DATA */
  const currentData =
    BookDataMemori.slice(
      startIndex,
      endIndex
    );

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle={"dark-content"} />

      {/* SEARCH */}
      <SearchBar
  search={search}
  setSearch={setSearch}
/>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* COLLECTION */}
        <BookCollections books={currentData} />

        {/* PAGINATION */}
        {BookDataMemori.length > 0 && (

          <View style={styles.pagination_container}>

            {/* PREV */}
            <TouchableOpacity
              disabled={currentPage === 1}
              onPress={() =>
                setCurrentPage(currentPage - 1)
              }
              style={styles.pagination_button}
            >
              <Text>{"<<"}</Text>
            </TouchableOpacity>

            {/* PAGE NUMBER */}
            {[...Array(totalPage)].map((_, index) => (

              <TouchableOpacity
                key={index}
                onPress={() =>
                  setCurrentPage(index + 1)
                }
                style={[
                  styles.pagination_button,

                  currentPage === index + 1 && {
                    backgroundColor: "#5E8B6F",
                  },
                ]}
              >

                <Text
                  style={{
                    color:
                      currentPage === index + 1
                        ? "white"
                        : "black",
                  }}
                >
                  {index + 1}
                </Text>

              </TouchableOpacity>

            ))}

            {/* NEXT */}
            <TouchableOpacity
              disabled={
                currentPage === totalPage
              }
              onPress={() =>
                setCurrentPage(currentPage + 1)
              }
              style={styles.pagination_button}
            >
              <Text>{">>"}</Text>
            </TouchableOpacity>

          </View>

        )}

      </ScrollView>

    </SafeAreaView>

  );
}