import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

export default function LoginScreen() {
  return (
    <Screen style={styles.comtainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />

        <AppForm
            initialValues={{ email: '', password:''}}
            onSubmit={ values => console.log(values)}
            validationSchema={validationSchema}
        >
            <AppFormField
                        autoCapitalize="none"
                        placeholder="Email"
                        autoCorrect={false}
                        icon="email"
                        name="email"
                        keyboardType="email-address"
                        textContetnType="emailAdress"
                        />
                    <AppFormField
                        autoCapitalize="none"
                        placeholder="Password"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        keyboardType="email-address"
                        textContentType="password"
                        secureTextEntry
                        />
                    <SubmitButton title={"login"} 
                        />
        </AppForm>


    </Screen>
  )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    comtainer: {
        padding: 10,
    }
})