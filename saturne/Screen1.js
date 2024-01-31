import { Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

import { styles } from './MyStyle';
import MyButton from './Button';

export default function Screen1 ({navigation}) {
    return (
        <View style={styles.container}>
            <Text>
                Base
            </Text>
            <TextInput style={styles.text}></TextInput>
            <Text>
                Amount
            </Text>
            <TextInput style={styles.text}></TextInput><Text>
                To
            </Text>
            <TextInput style={styles.text}></TextInput>

            <MyButton content={'Convertir'} style={styles.button} change={'Screen1'} navigation={navigation} />
            <MyButton content={'Voir taux'} style={styles.button}  change={'Screen2'} navigation={navigation}/>
        </View>
    );
}