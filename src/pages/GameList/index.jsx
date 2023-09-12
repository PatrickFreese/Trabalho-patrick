import {
    FlatList,
    Text,
    View,
    Button,
    ActivityIndicator,
  } from "react-native";
  import React, { useEffect, useState} from 'react';
  import styles from "./styles";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GameCard from '../../components/GameCard';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import carregaUser from '../../services/buscaUsers';


function GameList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // true
  const [filteredGames, setFilteredGames] = useState([]);

  console.log(filteredGames)
  const handleFilterChange = (filterText) => {
    console.log(users)
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredGames(filtered);
  };
console.log(carregaUser())
  useEffect(()=> {

    async function loadUsers(){
      const retorno = await carregaUser();
      if(retorno){
        setUsers(retorno);
        setFilteredGames(retorno);
        setLoading(false);
      }else{
        Alert.alert('Não a notas com pontos')
      }    
    }
    

    loadUsers();

  }, []);

  //console.log(users)
  if(loading){
    return (<View style={{ alignItems: 'center', justifyContent:'center', flex:1 }}>
    <ActivityIndicator color="#121212" size={45} />
  </View>)
  }

  return (
    <LinearGradient
    colors={["#111017", "#090320"]}
    start={{ x: 1, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={{ flex: 1 }}
  >
      <View style={styles.container}>
        <Header onFilterChange={handleFilterChange} />
        <List user={filteredGames} />
      </View>
      </LinearGradient>
  );
}



  function List(props) {
    const {user} = props;
    const [selectedGameId, setSelectedGameId] = useState(null);

  const navigation=useNavigation()


    const handleGamePress = id => {
      console.log(id)
      navigation.navigate("Tela3", {id})
    };
  
    const renderGame = ({item}) => (
        <GameCard user={item} noclick={() => handleGamePress(item.id)} />
        
    );

  
    return (
      <View style={styles.content}>
        <Text style={styles.title}>Your Employees</Text>
        
        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          data={user}
          renderItem={renderGame}
          keyExtractor={item => item.id}
        />
      </View>
      
    );
  }
  
  export default GameList;