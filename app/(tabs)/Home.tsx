import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedPrice, setEditedPrice] = useState('');
  const [editedImage, setEditedImage] = useState(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const saved = await AsyncStorage.getItem('items');
        if (saved) {
          setItems(JSON.parse(saved));
        } else {
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

          const defaultItems = imageList.map((img, index) => ({
            id: index.toString(),
            name: barbieNames[index] || "Barbie",
            image: Image.resolveAssetSource(img).uri,
          }));

          setItems(defaultItems);
          await AsyncStorage.setItem('items', JSON.stringify(defaultItems));
        }
      } catch (err) {
        console.log('Gagal load:', err);
      }
    };

    loadData();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setEditedImage(result.assets[0].uri);
    }
  };

  const saveEdit = async () => {
    try {
      const updated = items.map((item) =>
        item.id === selectedItem.id
          ? { ...item, price: editedPrice, image: editedImage }
          : item
      );
      setItems(updated);
      await AsyncStorage.setItem('items', JSON.stringify(updated));
      setModalVisible(false);
    } catch (err) {
      console.log('Gagal simpan:', err);
    }
  };

  const handleReset = async () => {
    try {
      await AsyncStorage.removeItem('items');
      setItems([]);
      alert('Data berhasil dihapus. Silakan tutup dan buka ulang aplikasi.');
    } catch (err) {
      console.log('Gagal reset:', err);
    }
  };

  const filteredItems = items.filter(item =>
  item.name.toLowerCase().includes(searchText.toLowerCase())
);

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <TextInput
  style={styles.searchInput}
  placeholder="Cari Barbie..."
  value={searchText}
  onChangeText={setSearchText}
/>
        <Ionicons name="search-outline" size={20} color="#888" />
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>

            <TouchableOpacity
              style={styles.editButton}
              onPress={() => {
                setSelectedItem(item);
                setEditedPrice(item.price);
                setEditedImage(item.image);
                setModalVisible(true);
              }}
            >
              <Ionicons name="create-outline" size={16} color="white" />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Reset Data</Text>
      </TouchableOpacity>

      {modalVisible && (
        <Modal visible transparent animationType="slide">
          <View style={modal.container}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Edit Barbie</Text>
            <TextInput
              value={editedPrice}
              onChangeText={setEditedPrice}
              style={modal.input}
              placeholder="Harga"
            />
            <TouchableOpacity onPress={pickImage}>
              <Text style={modal.button}>Pilih Gambar</Text>
            </TouchableOpacity>
            {editedImage && (
              <Image source={{ uri: editedImage }} style={modal.preview} />
            )}
            <TouchableOpacity onPress={saveEdit}>
              <Text style={modal.saveButton}>Simpan</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={modal.cancelButton}>Batal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
}

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
    marginHorizontal: 5,
    position: 'relative',
  },
  image: {
  width: '100%',
  height: 120,
  marginBottom: 8,
},
  name: { fontSize: 16, fontWeight: '600' },
  price: { fontSize: 14, color: '#888', marginTop: 4 },
  editButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#ff66b2',
    padding: 6,
    borderRadius: 20,
  },
  resetButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
});

const modal = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffee',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    color: '#007bff',
    marginBottom: 10,
  },
  preview: {
    width: 100,
    height: 100,
    marginBottom: 12,
    alignSelf: 'center',
  },
  saveButton: {
    backgroundColor: '#ff66b2',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  cancelButton: {
    color: '#888',
    textAlign: 'center',
  },
});
