import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const color_list = {
  green: "#5E8B6F",
  soft_green: "#8BAF9B",
  white: "#FFFFFF",
  gray: "#808080",
  orange: "orange",
};

export const styles = StyleSheet.create({

  /* MAIN CONTAINER */
  container: {
    flex: 1,
    backgroundColor: "#F3F5F4",
    paddingHorizontal: 15,
    paddingTop: 20,
  },

  /* HEADER */
  h_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  /* SEARCH */
  search_container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: color_list.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    paddingHorizontal: 12,
    marginBottom: 25,
    height: 50,
  },

  search_input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },

  /* TITLE */
  container_book_collections_title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },

  /* BOOK COLLECTION */
  container_book_collections: {
    marginTop: 10,
  },

  /* GRID */
  book_grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  /* CARD */
  book_card: {
    width: width * 0.46,
    backgroundColor: color_list.white,
    borderRadius: 14,
    marginBottom: 20,
    overflow: "hidden",
  },

  /* IMAGE */
  book_card_img: {
  width: "100%",
  height: 220,
  borderTopLeftRadius: 14,
  borderTopRightRadius: 14,
},

  /* PREMIUM ICON */
  circle_premium_small: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#FFC107",
    justifyContent: "center",
    alignItems: "center",
  },

  /* TITLE */
  book_card_title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  /* AUTHOR */
  book_card_author: {
    fontSize: 14,
    color: color_list.gray,
    marginBottom: 10,
  },

  /* FOOTER */
  book_card_footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  /* RATING */
  book_card_rating: {
    marginLeft: 4,
    fontSize: 14,
  },

  /* VIEWS */
  book_card_views: {
    marginLeft: 4,
    fontSize: 14,
    color: color_list.gray,
  },

  /* SHADOW */
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  /* NOT FOUND */
  not_found_container: {
    width: "100%",
    paddingVertical: 30,
    borderWidth: 1,
    borderColor: "#8BAF9B",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#FFFFFF",
  },

  not_found_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5E8B6F",
  },

  pagination_container: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 10,
  marginBottom: 30,
},

pagination_button: {
  width: 35,
  height: 35,
  borderWidth: 1,
  borderColor: "#D9D9D9",
  borderRadius: 8,
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: 4,
  backgroundColor: "white",
},

// components/module-latihan/styles/StyleApps.js

search_container: {
  flexDirection: "row",
  alignItems: "center",

  borderWidth: 1,
  borderColor: "#bdbdbd",

  borderRadius: 10,

  paddingHorizontal: 10,
  paddingVertical: 5,

  marginTop: 10,
  marginBottom: 20,

  backgroundColor: "white",
},

search_input: {
  flex: 1,
  marginLeft: 8,
  fontSize: 15,
  color: "black",
},

});