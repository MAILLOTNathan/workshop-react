import { Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

import { styles } from './MyStyle';
import MyButton from './Button';

export default function Screen1 ({navigation}) {
    return (
        <View style={styles.container}>
            <Text>
                Que veux-tu visiter comme planete ?
            </Text>
            <TextInput style={styles.text}>Saisi ici la planete</TextInput>
            <MyButton content={"wesh"} style={styles.button} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                <Text>
                    change
                </Text>
            </TouchableOpacity>
        </View>
    );
}