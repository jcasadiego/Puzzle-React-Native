//packages
import React, { useState } from 'react';
import { launchCamera } from 'react-native-image-picker';

//native components
import { Button, Image, Text } from 'react-native';

//componensts
import { Screen, Header } from '../components';

export default function Camera({ navigation }: any) {

    const [image, setImage] = useState('');

    const takePhoto = (res: any) => {
        setImage(res.uri)
    };

    const openCamera = () => {
        launchCamera({
            mediaType: 'photo',
            maxHeight: 400,
            maxWidth: 400,
            quality: 1
        },
            takePhoto
        );
    };

    return (
        <Screen>
            <Header
                navigation={navigation}
                title="Camera"
            />
            <Text>Hola mundo Camera!</Text>
            {
                image ? (
                    <Image
                        source={{ uri: image }}
                        style={{
                            width: 400,
                            height: 400
                        }}
                        resizeMode='cover'
                    />
                ) :
                    null
            }
            <Button title='Open Camera' onPress={openCamera} />
        </Screen>
    );
};