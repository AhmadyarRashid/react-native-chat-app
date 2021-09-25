import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/Signup';
import LoginScreen from '../screens/Login';

const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName='Login' headerMode='none'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Signup' component={SignupScreen} />
        </Stack.Navigator>
    );
}

export default AuthStack;
