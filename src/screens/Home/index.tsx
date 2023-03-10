import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native"
import { Participant } from "../../components/Participant";
import { styles } from './styles';

export function Home() {

    const participants = [
        'Allan',
        'Maria',
        'Adriana',
        'Joao',
        'Rodrigues',
        'Ana',
        'Thaina',
        'Marcia',
        'Mikaela',
        'Roberta'
    ];

    function handleParticipantAdd() {
        console.log("Button Adicionar");
    }

    function handleParticipantRemove(fullName: string) {
        alert(`Você removeu o ${fullName}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Shibata Supermecados</Text>
            <Text style={styles.eventDate}>Sistema de loja</Text>

            <View style={styles.form}>
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

            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map(participant => (
                        <Participant
                            key={participant}
                            fullName={participant}
                            onRemove={() => handleParticipantRemove(participant)} />
                    ))
                }

            </ScrollView>
        </View>
    );
}