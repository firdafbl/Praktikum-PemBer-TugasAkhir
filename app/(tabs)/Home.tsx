import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const items = Array.from({ length: 6 }).map((_, i) => ({
  id: i.toString(),
  name: 'Barbie',
  price: 'Rp.100.000,00',
  image: require('@/assets/barbie.jpg'),
}));

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <TextInput style={styles.searchInput} placeholder="Cari..." />
        <Ionicons name="search-outline" size={20} color="#888" />
      </View>

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => router.push('/page1')}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PINK = '#ff66b2';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  searchWrapper: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginBottom: 10,
    height: 40,
  },
  searchInput: { flex: 1, marginRight: 8 },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 10,
  },
  image: { width: 80, height: 90, marginBottom: 8 },
  name: { fontSize: 16, fontWeight: '600' },
  price: { fontSize: 14, color: '#888', marginTop: 4 },
});
