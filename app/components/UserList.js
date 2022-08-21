import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText'
import colors from '../config/colors';

export default function UserList( {name, title, color, size} ) {
  return (
    <View style={styles.listBar}>
        <MaterialCommunityIcons name={name} size={{size}} color={color} />
        <AppText style={styles.listText}>{title}</AppText>      
    </View>
  )
}

const styles = StyleSheet.create({
    listBar: {
        height: 60,
        width: '100%',
        alignItems: 'center',
    },
    listText: {
        fontWeight: '500',
        fontSize: 20,
        color: colors.black,
    },
})