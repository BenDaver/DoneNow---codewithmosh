import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

export default function MyButton({title, onPress}) {
  return (
       <TouchableOpacity style={styles.buttonContainer}>
        <Text 
        style={styles.text}
        onPress={onPress}
        >{title} 
        </Text>
       </TouchableOpacity> 
    
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        width: "100%",
        borderRadius: 25,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
    }
})