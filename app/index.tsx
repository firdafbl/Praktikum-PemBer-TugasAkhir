import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const loggedIn = await AsyncStorage.getItem('loggedIn');
      if (loggedIn === 'true') {
        router.replace('/(tabs)/Home');
      }
    };
    checkLogin();
  }, []);

  const handleLogin = async () => {
    if (username && password) {
      await AsyncStorage.setItem('loggedIn', 'true');
      router.replace('/(tabs)/Home');
    } else {
      alert('Username dan password wajib diisi!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Belum punya akun?{' '}
        <Text style={styles.link} onPress={() => router.push('/register')}>
          Daftar
        </Text>
      </Text>
    </View>
  );
}

const PINK = '#ff66b2';
const LIGHT_PINK = '#ffe6f0';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_PINK,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: PINK,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  button: {
    backgroundColor: PINK,
    width: '100%',
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  footerText: {
    fontSize: 14,
    color: '#333',
  },
  link: {
    color: PINK,
    fontWeight: '600',
  },
});
