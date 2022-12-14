import { StyleSheet, Image, View, TouchableHighlight } from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'

export default function ListItem({title, subTitle, image, onPress, IconComponent, renderRightActions}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        underlayColor={colors.light}
        onPress={onPress}>

        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
      marginLeft: 10,
      justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '500',
    },
    subTitle: {
        color: colors.medium,
    }
})