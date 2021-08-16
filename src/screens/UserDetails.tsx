//packages
import React from 'react';

//native components
import { Text, Button } from 'react-native';

//componensts
import { Screen, Header} from '../components';

export default function UserDetails({navigation}: any){
    return(
        <Screen>
            <Header
                title="Users Details"
                actionLeft={() => navigation.openDrawer()}
                navigation={navigation}
            />
            <Text>Hola mundo User Details!</Text>
            <Button
                title="Navigator to Home"
                onPress={() => navigation.goBack()}
            />
        </Screen>
    );
};