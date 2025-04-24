import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React, { useState } from "react";
import { useRouter } from "expo-router";

export default function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handlePress = () => {
        if (username && password) {
            router.push("/page1");
        } else {
            alert("Username dan password wajib diisi!");
        }
    };

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                placeholder="Enter your username"
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Enter your password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={handlePress} style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ff99cc",
        padding: 8,
        margin: 10,
        width: 200,
    },
    button: {
        backgroundColor: "#ff66b2",
        padding: 9,
        margin: 10,
        width: 200,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    }
});
