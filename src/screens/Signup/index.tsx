import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, IconButton } from 'react-native-paper';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

interface Props {
    navigation: any
}

const SignupScreen: React.FC<Props> = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Title style={styles.titleText}>Register to chat</Title>
            <FormInput
                labelName='Email'
                value={email}
                autoCapitalize='none'
                onChangeText={userEmail => setEmail(userEmail)}
            />
            <FormInput
                labelName='Password'
                value={password}
                secureTextEntry
                onChangeText={userPassword => setPassword(userPassword)}
            />
            <FormButton
                title='Signup'
                modeValue='contained'
                labelStyle={styles.loginButtonLabel}
            />
            <FormButton
                title='login'
                modeValue='text'
                onPress={() => navigation.navigate('Login')}
                uppercase={false}
                labelStyle={styles.navButtonText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 24,
        marginBottom: 10
    },
    loginButtonLabel: {
        fontSize: 22
    },
    navButtonText: {
        fontSize: 18
    },
    navButton: {
        marginTop: 10
    }
});

export default SignupScreen;
