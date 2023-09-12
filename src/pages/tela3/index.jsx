//PAGES/CONTACT/index.jsx

import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import carregaUser from "../../services/buscaUser";

function Tela3() {
  const [user, setUser] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    const { id } = route.params;
    async function loadUsers(user) {
      const retorno = await carregaUser(user);
      if (retorno) {
        setUser(retorno);
      } else {
        Alert.alert("Não há usuario");
      }
    }

    loadUsers(id);
  }, [route.params.id]);

  function handlePerfil() {
    navigation.navigate("GameList");
    setUser({});
  }

  return (
    <LinearGradient
      colors={["#111017", "#090320"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Image source={{ uri: user.image }} style={styles.image} />
        <View style={styles.card}>
          <Text style={styles.titulos}>Nome</Text>
          <Text style={styles.dadosUser}>{user.name}</Text>
          <Text style={styles.titulos}>Email</Text>
          <Text style={styles.dadosUser}>{user.email}</Text>
          <Text style={styles.titulos}>Contact Number</Text>
          <Text style={styles.dadosUser}>{user.email}</Text>
          <Text style={styles.titulos}>DOB</Text>
          <Text style={styles.dadosUser}>{user.birth_date}</Text>
          <Text style={styles.titulos}>Gender</Text>
          <Text style={styles.dadosUser}>{user.birth_date}</Text>
          <Text style={styles.titulos}>Location</Text>
          <Text style={styles.dadosUser}>{user.city}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePerfil}>
          <LinearGradient
            colors={["#179AC3", "#4A4A4A"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              flex: 1,
              width: 116,
              height: 42,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.buttonText}>Return</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default Tela3;
