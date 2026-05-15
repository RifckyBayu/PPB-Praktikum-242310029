import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function QuizProfile() {
  return (
    <View style={styles.container}>

      {/* FOTO PROFILE */}
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        }}
        style={styles.profileImage}
      />

      {/* INPUT NAMA */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nama:</Text>

        <TextInput
          placeholder="Masukkan nama"
          style={styles.input}
        />
      </View>

      {/* INPUT NIP */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>NIP:</Text>

        <TextInput
          placeholder="Masukkan NIP"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      {/* INPUT JABATAN */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Jabatan:</Text>

        <TextInput
          placeholder="Masukkan jabatan"
          style={styles.input}
        />
      </View>

      {/* INPUT INSTITUSI */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Institusi:</Text>

        <TextInput
          placeholder="Masukkan institusi"
          style={styles.input}
        />
      </View>

      {/* BUTTON */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "black",
    marginBottom: 40,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    justifyContent: "center",
  },

  label: {
    width: 80,
    fontSize: 18,
    color: "gray",
    fontWeight: "bold",
  },

  input: {
    width: 200,
    height: 45,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 15,
    fontSize: 16,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#27B3D6",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 12,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

});