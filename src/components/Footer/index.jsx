import {View, Image} from "react-native";
import styles from "./styles";

function Footer() {
  return (
    <View style={styles.footer}>
      <Image style={styles.menu} source={require("../../../assets/Home.png")}/>
      <Image style={styles.menu} source={require("../../../assets/Profile.png")}/>
    </View>
  );
}

export default Footer;