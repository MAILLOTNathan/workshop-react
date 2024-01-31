import { Text, TouchableOpacity} from 'react-native';

export default function MyButton ({content, style}) {
    return (
        <TouchableOpacity style={style}>
            <Text>{content}</Text>
        </TouchableOpacity>
    );
}