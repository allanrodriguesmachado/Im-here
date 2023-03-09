import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#020000",
      padding: 48
    },
  
    eventName: {
      color: '#FFF',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 8,
    },
  
    eventDate: {
      color: '#ffffff84',
      fontSize: 16
    },

    input: {
        marginTop: 10,
        height: 50,
        backgroundColor: '#1F1E25',
        borderRadius: 10,
        color: '#FFF',
        padding: 16,
        fontSize: 16
    },

    buttonText: {
        color: '#FFF',
        fontSize: 24
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });