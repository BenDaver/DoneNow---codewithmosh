import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native'

export default function WelcomeScreen() {
  return (
      <ImageBackground 
        source={require('../assets/background.jpg')}
        style={styles.background}
        >
        <View style={styles.logoContainer}>
      <Image 
        source={require('../assets/logo-red.png')}
        style={styles.logo}
        />
        <Text>Sell what you dont need</Text>
        </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ECDC4',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer:{
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    }
})