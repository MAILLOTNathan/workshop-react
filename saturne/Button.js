import { Text, TouchableOpacity} from 'react-native';

export default function MyButton ({content, style, change, navigation}) {
    return (
        <TouchableOpacity style={style} onPress={() => navigation.navigate(change)} >
            <Text>{content}</Text>
        </TouchableOpacity>
    );
}