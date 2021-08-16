//packages
import React from 'react';

//native components
import { Text } from 'react-native';

//componensts
import { Screen, Header} from '../components';

export default function User({navigation}: any){
    return(
        <Screen>
            <Header
                title="Users"
                actionLeft={() => navigation.openDrawer()}
                navigation={navigation}
            />
            <Text>Hola mundo User!</Text>
        </Screen>
    );
};