import {Image, View, TextInput} from "react-native";
import {useState} from "react";
import styles from "./styles";

function Header({onFilterChange}) {
  const [filter, setFilter] = useState("");

  const handleFilterChange = text => {
    setFilter(text);
    onFilterChange(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search here"
        value={filter}
        onChangeText={handleFilterChange}
      />
      <Image style={styles.lupa} source={require("../../../assets/lupa.png")}/>
    </View>

  );
}

export default Header;