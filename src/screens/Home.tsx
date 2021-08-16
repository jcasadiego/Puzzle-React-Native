//packages
import React from 'react';

//native components
import { Text, Button } from 'react-native';

//componensts
import { Header, Screen } from '../components';

export default function HomeScreen({ navigation }: any) {

    return (
        <Screen>
            <Header
                title="Home"
                actionLeft={() => navigation.openDrawer()}
                actionRight={() => navigation.navigate('Camera')}
                navigation={navigation}
            />
            <Text>Hola mundo!!</Text>
            <Button
                title="Navigator to user details"
                onPress={() => navigation.navigate('UserDetailsr')}
            />
        </Screen>
    );
};