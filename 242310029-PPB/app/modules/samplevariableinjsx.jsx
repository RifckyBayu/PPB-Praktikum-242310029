import { Text, View } from 'react-native';

const samplevariableinjsx = () => {
    const title = "Contoh penggunaan variabel dalam JSX";
    const personalData = {
        name: "Rifcky Bayu Bachtriar",
        jurusan: "Teknologi Informasi",
        aktif: true,
    };
    const extracurricular = ["Basket", "Futsal", "Badminton"];
    const a = 10, b = 20;
    
  return (
    <View>
        <Text>{title}</Text>
        <Text>Jawaban penjumlahan: {a + b}</Text>

        <Text>Memanggil data array pada JSX</Text>
        <Text>extracurricular</Text>
        {extracurricular.map((item, index) => (
            <Text key={index}>{item}</Text>
        ))} 

        <Text>Memanggil data object pada JSX</Text>
        <Text>personalData</Text>
        <Text>Name: {personalData.name}</Text>
        <Text>Jurusan: {personalData.jurusan}</Text>
        <Text>Aktif: {personalData.aktif ? "Ya" : "Tidak"}</Text>      
    </View>
  )
}

export default samplevariableinjsx