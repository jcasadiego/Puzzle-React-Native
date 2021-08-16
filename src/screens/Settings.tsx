//packages
import React, { useState, useContext } from 'react';
import Geolocation from '@react-native-community/geolocation';

//native components
import { Alert, Button } from 'react-native';

//componensts
import { Screen,Header } from '../components';
import ButtonComponents from '../components/login/Button';
import { Auth } from '../provider/AuthProvider';

export default function Settings({navigation}: any){
    
    const [location, setLocation] = useState('')
    
    const {handleLogin} = useContext(Auth);

    const showLocation = () => {
        Geolocation.getCurrentPosition( 
            info => {
                const position = JSON.stringify(info);
                setLocation(position);
                console.log(position);
            }, 
            error => {
                Alert.alert(JSON.stringify(error));
            },
            {
                enableHighAccuracy: true,
                timeout: 200000,
                maximumAge: 1000
            }
        );
    };

    const handleLogout = () => {
        handleLogin ? handleLogin() : 'null'
    };
    
    return(
        <Screen>
            <Header
                title="Settings"
                actionLeft={() => navigation.openDrawer()}
                navigation={navigation}
            />
            <ButtonComponents title='Show Location' onPress={showLocation}/>
            <Button title='Logout' onPress={handleLogout} />
        </Screen>
    );
};