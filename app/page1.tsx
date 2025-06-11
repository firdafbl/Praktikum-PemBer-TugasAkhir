import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function DetailBarbie() {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('@/assets/barbie.jpg')} style={styles.image} />
      <Text style={styles.title}>Barbie</Text>
      <Text style={styles.desc}>
      <u>Barbie</u>, boneka fashion ikonik yang telah menjadi simbol mainan sejak pertama kali diperkenalkan pada tahun 1959, memiliki sejarah yang panjang dan sukses dalam dunia industri mainan. Namun, kesuksesan Barbie tidak hanya karena kepopulerannya sebagai mainan, tetapi juga karena strategi marketing brand mereka yang luar biasa.

Barbie pertama kali diperkenalkan oleh perusahaan mainan Amerika, Mattel, pada tahun 1959. Disebut dengan nama lengkap “Barbie Millicent Roberts”, boneka ini dirancang oleh Ruth Handler, salah satu pendiri Mattel, yang terinspirasi dari boneka Jerman bernama Bild Lilli. Barbie menjadi inovasi terobosan dalam mainan, karena pada saat itu, sebagian besar boneka yang ada berbentuk bayi atau anak-anak kecil. Barbie, dengan postur dan pakaian yang mirip manusia dewasa, memberikan pengalaman bermain yang berbeda dan menarik.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  image: { width: '100%', height: 200, resizeMode: 'contain', marginBottom: 20 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12, textAlign: 'center' },
  desc: { fontSize: 16, lineHeight: 24, color: '#333' },
});
