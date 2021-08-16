//packages
import React from 'react';

//native components
import { Text } from 'react-native';

//componensts
import { Screen,Header } from '../components';

export default function SettingsDetails({navigation}: any){
    return(
        <Screen>
            <Header
                title="Settings Details"
                actionLeft={() => navigation.openDrawer()}
                navigation={navigation}
            />
            <Text>Hola mundo Setting Details!</Text>
        </Screen>
    );
};