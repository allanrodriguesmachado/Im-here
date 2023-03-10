import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
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
        if (participants.includes("Allan")) {
            return Alert.alert("Atenção!", "Participante já cadastrado")
        }
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
                    style: 'destructive'

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
                    placeholder="Nome do participante"
                    placeholderTextColor={"#6B6B6B"}
                    keyboardType="default"
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