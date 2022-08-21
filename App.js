
import { StyleSheet } from 'react-native';


import { useState } from 'react';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  const [isNew, setIsNew] = useState('')

  return (
    <LoginScreen />
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
