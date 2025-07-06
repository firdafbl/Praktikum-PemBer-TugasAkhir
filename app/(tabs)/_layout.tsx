import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#ff66b2',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#ccc',
          height: 60,
        },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 4 },
        tabBarIcon: ({ color, size }) => {
          let iconName: any;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'List') iconName = 'list-outline';
          else if (route.name === 'About') iconName = 'person-outline';
          else iconName = 'ellipse-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Home" options={{ title: 'Koleksi' }} />
      <Tabs.Screen name="List" options={{ title: 'Kelola' }} />
      <Tabs.Screen name="About" options={{ title: 'Profil' }} />
    </Tabs>
  );
}
