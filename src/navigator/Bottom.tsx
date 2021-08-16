//packages
import React from "react";

//native components
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Categories, HomeScreen, Settings, User } from "../screens";

import Icon from "../svg/Icon";

const Bottom = createBottomTabNavigator();

export default function BottonNavigation() {
    return (
        <Bottom.Navigator
            screenOptions={{
                "tabBarActiveTintColor": "white",
                "tabBarActiveBackgroundColor": "blue",
                "tabBarLabelStyle": {
                    "fontWeight": "700",
                    "fontFamily": "Oswald-Light"
                },
                "tabBarStyle": [
                    {
                        "display": "flex"
                    },
                    null
                ]
            }}
        >
            <Bottom.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name='home'
                            size={size}
                            focused={focused}
                            color={color}
                        />
                    ),
                    headerShown: false
                }}
            />
            <Bottom.Screen
                name="Categories"
                component={Categories}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name='categories'
                            size={size}
                            focused={focused}
                            color={color}
                        />
                    ),
                    headerShown: false
                }}
            />
            <Bottom.Screen
                name="User"
                component={User}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name='users'
                            size={size}
                            focused={focused}
                            color={color}
                        />
                    ),
                    headerShown: false
                }}
            />
            <Bottom.Screen
                name="Setting"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name='settings'
                            size={size}
                            focused={focused}
                            color={color}
                        />
                    ),
                    headerShown: false
                }}
            />
        </Bottom.Navigator>
    );
};