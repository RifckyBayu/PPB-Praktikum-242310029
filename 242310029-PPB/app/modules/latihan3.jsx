import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StatusBar,
} from "react-native";

export default function Latihan3() {

  // OBJECT DATA PERSONAL
  const personalData = {
    name: "Rifcky Bayu Bachtriar",
    nim: 242310029,
    phone_number: "083824653051",
    email: "rifckybayubachtriar@student.ibik.ac.id",
    address: "Bogor, Indonesia",

    // tambahan data
    age: 21,
    semester: 4,
    gender: "Male",
    hobby: ["Coding", "Gaming", "Lari"],
    isActive: true,
    university: "IBI Kesatuan Bogor",
  };

  return (

    <ImageBackground
      source={require("../../assets/avatars/avatar.png")}
      resizeMode="cover"
      style={styles.background}
      imageStyle={{ opacity: 0.08 }}
    >

      <SafeArea />

      <StatusBar
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />

      {/* SCROLLVIEW */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 30,
        }}
      >

        <View style={styles.container}>

          {/* AVATAR */}
          <Image
            source={require("../../assets/avatars/avatar.png")}
            style={styles.avatar}
          />

          {/* NAME */}
          <Text style={styles.name}>
            {personalData.name}
          </Text>

          {/* NIM */}
          <Text style={styles.nim}>
            {personalData.nim}
          </Text>

          {/* FORM */}

          {/* PHONE */}
          <View style={styles.cardInput}>
            <Text style={styles.label}>Phone</Text>

            <TextInput
              value={personalData.phone_number}
              style={styles.input}
            />
          </View>

          {/* EMAIL */}
          <View style={styles.cardInput}>
            <Text style={styles.label}>Email</Text>

            <TextInput
              value={personalData.email}
              style={styles.input}
            />
          </View>

          {/* ADDRESS */}
          <View style={styles.cardInput}>
            <Text style={styles.label}>Address</Text>

            <TextInput
              value={personalData.address}
              style={styles.input}
            />
          </View>

          {/* AGE */}
          <View style={styles.cardInput}>
            <Text style={styles.label}>Age</Text>

            <TextInput
              value={personalData.age.toString()}
              style={styles.input}
            />
          </View>

          {/* SEMESTER */}
          <View style={styles.cardInput}>
            <Text style={styles.label}>Semester</Text>

            <TextInput
              value={personalData.semester.toString()}
              style={styles.input}
            />
          </View>

          {/* GENDER */}
          <View style={styles.cardInput}>
            <Text style={styles.label}>Gender</Text>

            <TextInput
              value={personalData.gender}
              style={styles.input}
            />
          </View>

          {/* HOBBY */}
          <View style={styles.cardInput}>
            <Text style={styles.label}>Hobby</Text>

            <TextInput
              value={personalData.hobby.join(", ")}
              style={styles.input}
            />
          </View>

          {/* ACTIVE */}
          <View style={styles.cardInput}>
            <Text style={styles.label}>Status</Text>

            <TextInput
              value={personalData.isActive ? "Active" : "Inactive"}
              style={styles.input}
            />
          </View>

          {/* UNIVERSITY */}
          <View style={styles.cardInput}>
            <Text style={styles.label}>University</Text>

            <TextInput
              value={personalData.university}
              style={styles.input}
            />
          </View>

          {/* BUTTON */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Save Changes
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

    </ImageBackground>
  );
}

// SAFE AREA MANUAL
function SafeArea() {
  return <View style={{ height: 35 }} />;
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 25,
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#4fa3ff",
    marginBottom: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
  },

  nim: {
    fontSize: 16,
    color: "gray",
    marginBottom: 25,
  },

  cardInput: {
    width: "100%",
    marginBottom: 15,
  },

  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#444",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#fff",
    fontSize: 15,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#29b6f6",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

});