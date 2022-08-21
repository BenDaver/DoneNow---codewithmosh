import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import MyButton from '../components/MyButton';

export default function WelcomeScreen() {
  return (
      <ImageBackground 
        source={require('../assets/background.jpg')}
        style={styles.background}
        blurRadius={10}
        >
        <View style={styles.logoContainer}>
      <Image 
        source={require('../assets/logo-red.png')}
        style={styles.logo}
        />
        <Text style={styles.tagline}>Sell what you dont need</Text>
        </View>
        <View style={styles.buttonContainer}>
            <MyButton title="login" />
            <MyButton title="register" color='secondary' />
        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        padding: 20,
        width: '100%',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer:{
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    }

})