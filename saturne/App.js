import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Screen1"
            component={Screen1}
            options={{title: 'Welcome'}}
            />
            <Stack.Screen name="Screen2" component={Screen2} options={{title: 'NoWelcome'}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
