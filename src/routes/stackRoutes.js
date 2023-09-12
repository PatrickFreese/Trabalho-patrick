//stackRoutes.js

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Game from '../pages/GameList';
import page3 from '../pages/tela3';

export default function StackRoutes() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
                 />
            <Stack.Screen
                name="Visual"
                component={Game}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="User"
                component={page3}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}