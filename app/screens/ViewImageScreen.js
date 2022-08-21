import { View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
          <MaterialCommunityIcons name="close" size={34} color="white" style={{position: "absolute", top:40, left: 30}}  />
          <MaterialCommunityIcons name="trash-can-outline" size={34} color="white" style={{position: "absolute", top:40, right: 30}}  />

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
      backgroundColor: colors.black,
    },
    image: {
        width: '100%',
        height:'100%',
    },
  });