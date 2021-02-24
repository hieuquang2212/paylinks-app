import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
import AuthNavigator from '../navigations/auth-navigator';
import AppNavigator from '../navigations/app-navigator';
import * as React from 'react';
const RootStack = createStackNavigator();

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name='auth' component={AuthNavigator}/>
            <RootStack.Screen name='app' component={AppNavigator}/>
                
                
            </RootStack.Navigator>
        </NavigationContainer>
    )
}