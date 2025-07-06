import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const imageList = [
  require('@/assets/barbie2.jpg'),
  require('@/assets/barbie3.jpg'),
  require('@/assets/barbie4.jpg'),
  require('@/assets/barbie5.jpg'),
  require('@/assets/barbie.jpg'),
  require('@/assets/barbie7.jpg'),
  require('@/assets/barbie8.jpg'),
  require('@/assets/barbie9.jpg'),
  require('@/assets/barbie10.jpg'),
  require('@/assets/barbie11.jpg'),
  require('@/assets/barbie12.jpg'),
  require('@/assets/barbie13.jpg'),
  require('@/assets/barbie14.jpg'),
  require('@/assets/barbie15.jpg'),
  require('@/assets/barbie16.jpg'),
  require('@/assets/barbie17.jpg'),
];

const barbieNames = [
  "Fashionista",
  "Barbie Popstar",
  "Princess Mermaid",
  "Ballerina Barbie",
  "Doctor Barbie",
  "Skater Barbie",
  "Butterfly Barbie",
  "Cool Barbie",
  "Pretty Barbie",
  "Princess Ariel",
  "Cute Barbie",
  "Barbie & Dog",
  "Fairy Barbie",
  "Graceful Barbie",
  "Soccer Barbie",
  "Shopping Barbie"
];

export default function List() {
  const [data, setData] = useState([]);
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const stored = await AsyncStorage.getItem('barbieData');
      if (stored) {
        setData(JSON.parse(stored));
      }
    } catch (error) {
      console.log('Gagal load data:', error);
    }
  };

  const saveData = async (newData) => {
    try {
      await AsyncStorage.setItem('barbieData', JSON.stringify(newData));
    } catch (error) {
      console.log('Gagal simpan data:', error);
    }
  };

  const handleAdd = () => {
    if (newStatus.trim() === '') {
      Alert.alert('Status tidak boleh kosong!');
      return;
    }

    if (data.length >= imageList.length) {
      Alert.alert('Maksimal jumlah koleksi tercapai!');
      return;
    }

    const index = data.length;
    const newItem = {
      id: Date.now().toString(),
      status: newStatus,
      image: imageList[index],
      name: barbieNames[index] || 'Barbie',
    };

    const updated = [...data, newItem];
    setData(updated);
    saveData(updated);
    setNewStatus('');
  };

  const handleDelete = (id) => {
    Alert.alert('Konfirmasi', 'Yakin ingin hapus data ini?', [
      { text: 'Batal' },
      {
        text: 'Hapus',
        onPress: () => {
          const updated = data.filter((item) => item.id !== id);
          setData(updated);
          saveData(updated);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Status (New/Second)"
          value={newStatus}
          onChangeText={setNewStatus}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Tambah</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              <Image source={item.image} style={styles.thumb} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>Rp.100.000,00</Text>
              </View>
              <Text
                style={[
                  styles.status,
                  { color: item.status === 'New' ? 'green' : 'blue' },
                ]}
              >
                {item.status}
              </Text>
            </View>
            <View style={styles.actionRow}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(item.id)}
              >
                <Text style={styles.buttonText}>Hapus</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 8,
  },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
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
  row: { flexDirection: 'row', alignItems: 'center' },
  thumb: { width: 50, height: 80, marginRight: 12, borderRadius: 8 },
  name: { fontWeight: '700', fontSize: 16 },
  price: { color: '#888', marginTop: 4 },
  status: { marginLeft: 'auto', fontWeight: 'bold' },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  buttonText: { color: '#fff' },
});
