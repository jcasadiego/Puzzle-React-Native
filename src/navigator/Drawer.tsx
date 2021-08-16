//packages
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//navigator
import BottonNavigation from './Bottom';
import { About } from '../screens';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Botton" component={BottonNavigation} options={{ headerShown: false, title: 'Home' }} />
            <Drawer.Screen name="About" component={About} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
};