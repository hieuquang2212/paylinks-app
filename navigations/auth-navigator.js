import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from  '@react-navigation/native';
import LoginScreen from '../components/Login';
const AuthStack = createStackNavigator();
import * as React from 'react';
export default function AuthNavigator() {
    return (
            <AuthStack.Navigator headerMode='none'>
                <AuthStack.Screen 
                    name="login"
                    options={{
                        title: 'Login'
                    }}
                    component={LoginScreen}
                />
            </AuthStack.Navigator>
    )
}