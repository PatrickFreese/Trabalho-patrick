import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { LinearGradient } from "expo-linear-gradient";


function Home() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("GameList");
  }

  return (
    <LinearGradient
      colors={["#111017", "#090320"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
    <View style={styles.container}>
      <Image
        source={require('../../../assets/teste.png')}
        style={styles.imagem}
      />
      <Text style={styles.texto}>Manage Your Employees. All in One Place</Text>
      <Text style={styles.texto2}>Eliminate physical cards, get virtual data in your hand.</Text>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handlePress}
          >
            <LinearGradient
              colors={["#179AC3", "#4A4A4A"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                flex: 1,
                width: 240,
                height: 57,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
    </View>
    </LinearGradient>
  );
}

export default Home;
