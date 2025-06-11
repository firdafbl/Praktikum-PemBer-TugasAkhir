import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function About() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/barbie.jpg')} style={styles.avatar} />
      <Text style={styles.username}>Barbie</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.iconText}>
            <Ionicons name="person-outline" size={20} color="#ec4899" />
            <View>
              <Text style={styles.cardTitle}>My Account</Text>
              <Text style={styles.cardSubtitle}>Make changes to your account</Text>
            </View>
          </View>
          <MaterialIcons name="report-problem" size={20} color="red" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.iconText}>
            <Ionicons name="bookmark-outline" size={20} color="#ec4899" />
            <View>
              <Text style={styles.cardTitle}>Saved Beneficiary</Text>
              <Text style={styles.cardSubtitle}>Manage your saved account</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
``
        <TouchableOpacity style={styles.card}>
          <View style={styles.iconText}>
            <Ionicons name="shield-checkmark-outline" size={20} color="#ec4899" />
            <View>
              <Text style={styles.cardTitle}>Two-Factor Authentication</Text>
              <Text style={styles.cardSubtitle}>Further secure your account for safety</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.iconText}>
            <Ionicons name="exit-outline" size={20} color="#ec4899" />
            <View>
              <Text style={styles.cardTitle}>Log out</Text>
              <Text style={styles.cardSubtitle}>Further secure your account for safety</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', paddingTop: 40 },
  avatar: { width: 100, height: 110, borderRadius: 50, marginBottom: 12 },
  username: { fontSize: 22, fontWeight: '900', marginBottom: 20 },
  cardContainer: { width: '100%', paddingHorizontal: 20 },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 14,
    borderRadius: 10,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconText: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  cardTitle: { fontSize: 15, fontWeight: '600' },
  cardSubtitle: { fontSize: 12, color: '#888' },
});
