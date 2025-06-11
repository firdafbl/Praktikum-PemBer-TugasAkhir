import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const data = [
  { id: '1', status: 'sukses' },
  { id: '2', status: 'gagal' },
  { id: '3', status: 'sukses' },
  { id: '4', status: 'gagal' },
  { id: '5', status: 'sukses' },
  { id: '6', status: 'gagal' },
  { id: '7', status: 'gagal' },
];

export default function List() {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.row}>
            <Image source={require('@/assets/barbie.jpg')} style={styles.thumb} />
            <View>
              <Text style={styles.name}>Barbie</Text>
              <Text style={styles.price}>Rp.100.000,00</Text>
            </View>
            <Text
              style={[
                styles.status,
                { color: item.status === 'sukses' ? 'green' : 'red' },
              ]}
            >
              {item.status}
            </Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumb: { width: 50, height: 80, marginRight: 12, borderRadius: 8 },
  name: { fontWeight: '700', fontSize: 16 },
  price: { color: '#888', marginTop: 4 },
  status: { marginLeft: 'auto', fontWeight: 'bold' },
});
