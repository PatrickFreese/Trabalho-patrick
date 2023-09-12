import { AntDesign } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stackRoutes';

import GameList from '../pages/GameList';
import Tela3 from '../pages/tela3';


//importamos nosso componente recém criado
import CustomDrawer from '../components/CustomDrawer';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/* <Tab.Navigator
        screenOptions={{
          //headerShown: false,
          //tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#FFF',
          tabBarStyle: {
            backgroundColor: '#000',
            paddingBottom: 4,
            paddingTop: 4,
            height: '7%',
            borderTopWidth: 2
          }
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={StackRoutes}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => { 
              return <AntDesign name="home" size={size} color={color} />
             }
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => { 
              return <AntDesign name="infocirlceo" size={size} color={color} />
             }
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarLabel: 'Inicio',
            //headerShown: false,
            tabBarIcon: ({ color, size }) => { 
              return <AntDesign name="contacts" size={size} color={color} />
             }
          }}
        />
        </Tab.Navigator> */

export default function Routes() {
 //estamos dizendo que agora o conteúdo do menu drawer é oriundo de CustomDrawer
  return (
    <Drawer.Navigator
        drawerContent={CustomDrawer}
        screenOptions={{
            headerShown: false,

            drawerStyle: {
                backgroundColor: '#121212'
            },

            drawerActiveBackgroundColor: '#3B3DBF',
            drawerActiveTintColor: "#FFF",

            drawerInactiveBackgroundColor: '#CCC',
            drawerInactiveTintColor: "#000",
        }}
    >
        <Drawer.Screen
            name="HomeStack"
            component={StackRoutes}
            options={{
                title: 'Inicio'
            }}
        />
                 <Drawer.Screen
             name="GameList"
             component={GameList}
        />
          <Drawer.Screen
             name="Tela3"
             component={Tela3}
        />
    </Drawer.Navigator>
  );
}