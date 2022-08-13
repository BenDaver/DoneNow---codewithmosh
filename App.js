
import { StyleSheet, View } from 'react-native';

import AppText from './app/components/AppText';
import MyButton from './app/components/MyButton';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <MyButton title="Login" onPress={()=> console.warn('Heya')}/>
    </View>
    //<ViewImageScreen />
    //
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
