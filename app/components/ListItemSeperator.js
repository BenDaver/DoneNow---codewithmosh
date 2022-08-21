import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function ListItemSeperator() {
  return (
    <View style={styles.seperator} />
  )
}

const styles = StyleSheet.create({
    seperator: {
        width: '100%',
        height: 2,
        backgroundColor: colors.light,
    }
})