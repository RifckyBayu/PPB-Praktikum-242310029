import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { color_list, styles } from "../styles/StyleApps";

export default function BookCollections({ books }) {

  return (

    <View style={styles.container_book_collections}>

      {/* HEADER */}
      <View style={styles.h_container}>

        <Text style={styles.container_book_collections_title}>
          Trail Running Events
        </Text>

        <Text style={{ color: color_list.green }}>
          Total {books.length} Item
        </Text>

      </View>

      {/* GRID */}
      <View style={styles.book_grid}>

        {books.length > 0 ? (

          books.map((book, index) => (

            <TouchableOpacity
              key={index}
              style={[styles.book_card, styles.shadow]}
            >

              {/* IMAGE */}
              <View style={{ position: "relative" }}>

                <Image
                  source={book.img}
                  style={styles.book_card_img}
                  resizeMode="contain"
                />

                {book.is_free && (
                  <View
                    style={[
                      styles.circle_premium_small,
                      styles.shadow,
                    ]}
                  >
                    <AntDesign
                      name="crown"
                      size={18}
                      color="black"
                    />
                  </View>
                )}

              </View>

              {/* CONTENT */}
              <View style={{ padding: 10 }}>

                <Text
                  style={styles.book_card_title}
                  numberOfLines={2}
                >
                  {book.title}
                </Text>

                <Text style={styles.book_card_author}>
                  {book.author}
                </Text>

                {/* FOOTER */}
                <View style={styles.book_card_footer}>

                  {/* RATING */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      name="star"
                      size={14}
                      color="orange"
                    />

                    <Text style={styles.book_card_rating}>
                      {book.rating}
                    </Text>
                  </View>

                  {/* VIEWS */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      name="eye"
                      size={14}
                      color="gray"
                    />

                    <Text style={styles.book_card_views}>
                      {book.views}
                    </Text>
                  </View>

                </View>

              </View>

            </TouchableOpacity>

          ))

        ) : (

          <View style={styles.not_found_container}>

            <Text style={styles.not_found_text}>
              No record found
            </Text>

          </View>

        )}

      </View>

    </View>

  );
}