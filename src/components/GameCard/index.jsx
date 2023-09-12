import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

function GameCard({ user, noclick }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <Text style={styles.title}>{user.name}</Text>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={noclick}
          >
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
              <Text style={styles.buttonText}>Details</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
    </View>
  );
}

export default GameCard;