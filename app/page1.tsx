import { useRouter } from "expo-router";
import { Image, ScrollView, View, StyleSheet, Text, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Home() {
    const data = [
        {
            name: "Firda Febiola",
            age: 21,
            city: "Ngajum",
        },
        {
            name: "Nabilla Thabita Wilma",
            age: 19,
            city: "Pasuruan",
        },
        {
            name: "Ihda Firasatul Ilma",
            age: 20,
            city: "Gondanglegi",
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.card}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.age}>{item.age} tahun</Text>
                <Text style={styles.city}>{item.city}</Text>
            </View>
        );
    };
    const router = useRouter();
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Image
                    source={{
                        uri: "https://img.freepik.com/premium-vector/queen-girl_1177067-299.jpg",
                    }}
                    style={styles.image}
                />
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffe6f0", 
    },
    scrollContent: {
        alignItems: "center",
        paddingVertical: 30,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: "#ff66b2",
    },
    card: {
        backgroundColor: "#ffcce6", 
        borderWidth: 2,
        borderColor: "#ff99cc",
        borderRadius: 15,
        padding: 20,
        marginVertical: 10,
        width: 300,
        alignItems: "center",
        shadowColor: "#ff66b2",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#cc0066",
    },
    age: {
        fontSize: 18,
        fontWeight: "600",
        color: "#e60073",
        marginTop: 5,
    },
    city: {
        fontSize: 16,
        fontStyle: "italic",
        color: "#b30059",
        marginTop: 5,
    },
});
