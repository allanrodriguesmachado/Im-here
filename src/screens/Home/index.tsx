import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { styles } from './styles';

export function Home() {

    function handleParticipantAdd() {
        console.log("Button Adicionar");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Shibata Supermecados</Text>
            <Text style={styles.eventDate}>Sistema de loja</Text>

            <TextInput
                placeholder="Nome do participante"
                placeholderTextColor={"#6B6B6B"}
                keyboardType="default"
                style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}