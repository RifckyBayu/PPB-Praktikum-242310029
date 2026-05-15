import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

export default function Praktikum2() {

  // OBJECT DATA DIRI
  const personalData = {
    name: "Rifcky Bayu Bachtriar",
    weight: 60,
    height: 165,
  };

  // ARRAY OBJECT MAKANAN
  const meals = [
    {
      meal_time: "Sarapan",
      calories: 400,
    },
    {
      meal_time: "Makan Siang",
      calories: 500,
    },
    {
      meal_time: "Makan Malam",
      calories: 600,
    },
    {
      meal_time: "Camilan",
      calories: 300,
    },
  ];

  // TOTAL KALORI
  let totalCalories = 0;

  meals.forEach((item) => {
    totalCalories += item.calories;
  });

  // KONVERSI TINGGI BADAN CM -> M
  const heightInMeter = personalData.height / 100;

  // HITUNG BMI
  const bmi =
    personalData.weight /
    (heightInMeter * heightInMeter);

  // STATUS BMI
  let bmiStatus = "";

  if (bmi < 18.5) {
    bmiStatus = "Kurus";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiStatus = "Ideal";
  } else {
    bmiStatus = "Berlebih";
  }

  // STATUS KALORI
  let calorieStatus = "";

  if (totalCalories < 1800) {
    calorieStatus = "Kurang";
  } else if (
    totalCalories >= 1800 &&
    totalCalories <= 2500
  ) {
    calorieStatus = "Cukup";
  } else {
    calorieStatus = "Berlebih";
  }

  // KESIMPULAN
  let conclusion = "";

  if (
    bmiStatus === "Ideal" &&
    calorieStatus === "Cukup"
  ) {
    conclusion =
      "Berat badan sudah ideal dan asupan kalori sesuai.";
  } else if (
    bmiStatus === "Kurus"
  ) {
    conclusion =
      "Berat badan masih kurang, perlu menambah asupan nutrisi.";
  } else {
    conclusion =
      "Perlu menjaga pola makan dan olahraga.";
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.mainTitle}>
        Evaluasi Berat Badan Ideal
      </Text>

      {/* DATA DIRI */}
      <Text style={styles.title}>
        Pasien
      </Text>

      <Text>
        Nama: {personalData.name}
      </Text>

      <Text>
        Berat Badan: {personalData.weight} kg
      </Text>

      <Text>
        Tinggi Badan: {personalData.height} cm
      </Text>

      {/* MAKANAN */}
      <Text style={styles.title}>
        Porsi Makanan Harian
      </Text>

      {meals.map((item, index) => (
        <Text key={index}>
          {item.meal_time} - {item.calories} kalori
        </Text>
      ))}

      <Text style={styles.total}>
        Total Kalori: {totalCalories}
      </Text>

      {/* HASIL */}
      <Text style={styles.title}>
        Hasil Perhitungan
      </Text>

      <Text>
        BMI: {bmi.toFixed(2)}
      </Text>

      <Text>
        Status BMI: {bmiStatus}
      </Text>

      <Text>
        Status Kalori: {calorieStatus}
      </Text>

      {/* KESIMPULAN */}
      <Text style={styles.conclusion}>
        {conclusion}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
  },

  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  total: {
    marginTop: 10,
    fontWeight: "bold",
  },

  conclusion: {
    marginTop: 25,
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
});