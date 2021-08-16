//packages
import React from 'react';

//native components
import { Text } from 'react-native';

//componensts
import { Screen, Header } from '../components';

export default function About({ navigation }: any) {
    return (
        <Screen>
            <Header
                title="About"
                navigation={navigation}
            />
            <Text>Hola mundo About!</Text>
        </Screen>
    );
};