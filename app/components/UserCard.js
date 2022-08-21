import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import colors from '../config/colors'

export default function UserCard() {
  return (
      <View style={styles.userBar}>
        <Image style={styles.avatar} source={require('../assets/mosh.jpg')} />
            <View style={styles.userText}>
                <AppText style={styles.userName}>Mosh Hamedani</AppText>
                <AppText style={styles.userSub}>programmingwithmosth@gmail.com</AppText>
            </View>

      </View>
  )
}

const styles = StyleSheet.create({
    userBar: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: colors.white,
        padding: 15,
        alignItems: 'center',
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    userText: {
        paddingHorizontal: 10,
    },
    userName: {
        fontSize: 20,
        fontWeight: '500',
    },
    userSub: {
        fontSize: 16,
        color: colors.medium,
    }
})