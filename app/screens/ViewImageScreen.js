import { View, Text, StyleSheet, Image } from 'react-native';

import AppText from '../components/AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <View style={styles.redButton} />
            <View style={styles.greenButton} />
        <AppText>Hello</AppText>
            
        </View>
      <Image 
      source={require('../assets/chair.jpg')}
      style={styles.image}
      resizeMode={'contain'} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    buttonContainer: {
    },
    redButton: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        position: 'absolute',
        top: 40,
        left: 30,
        borderRadius: 25,
    },
    greenButton: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        position: 'absolute',
        top: 40,
        right: 30,
    },
    image: {
        width: '100%',
        height:'100%',
    },
  });