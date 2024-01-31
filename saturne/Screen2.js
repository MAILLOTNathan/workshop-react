import { Text, View, TextInput } from 'react-native';

import MyButton from './Button';
import { styles } from './MyStyle';

export default function Screen2 ({navigation}) {
    return (
        <View style={styles.container}>
            <Text>
                Base
            </Text>
            <TextInput style={styles.text}></TextInput>

            <MyButton content={'Convertir'} style={styles.button} change={'Screen1'} navigation={navigation} />
            <MyButton content={'Voir taux'} style={styles.button}  change={'Screen2'} navigation={navigation}/>
        </View>
    );
}