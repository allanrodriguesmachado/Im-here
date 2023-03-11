import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { Participant } from "../../components/Participant";
import { styles } from './styles';

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            setParticipantName('');
            return Alert.alert("Atenção!", "Participante já cadastrado")
        }

        if (!participants.includes(participantName)) {
            return Alert.alert("Atenção!", "Informe o nome do participante")
        }

        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('');
    }

    function handleParticipantRemove(fullName: string) {
        return Alert.alert("Atenção", "Deseja remover participante?",
            [
                {
                    text: 'não',
                },
                {
                    text: 'sim',
                    onPress: () => Alert.alert(`Participante ${fullName} removido(a)`),
                }
            ]
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Shibata Supermecados</Text>
            <Text style={styles.eventDate}>Sistema de loja</Text>

            <View style={styles.form}>
                <TextInput
                    onChangeText={setParticipantName}
                    value={participantName}
                    placeholder="Nome do participante"
                    placeholderTextColor={"#6B6B6B"}
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        fullName={item}
                        onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Niguém chegou no evento ainda? Adicione participantes
                    </Text>
                )}
            />
        </View>
    );
}