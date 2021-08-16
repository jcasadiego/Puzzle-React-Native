//packages
import React, { useContext } from 'react';

//native components
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './Drawer';
import { Camera, LoginScreen, SettingsDetails, UserDetails } from '../screens';
import { Auth } from '../provider/AuthProvider';


const Stack = createStackNavigator();

export default function StackNavigator() {

    const {IsLogin} = useContext(Auth);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {
                    IsLogin ? (
                        <>
                            <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
                            <Stack.Screen name="UserDetailsr" component={UserDetails} options={{ headerShown: false }} />
                            <Stack.Screen name="SettingsDetails" component={SettingsDetails} options={{ headerShown: false }} />
                            <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                        </>

                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};