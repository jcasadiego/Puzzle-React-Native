//packages
import React from 'react';
import { gql, useQuery } from '@apollo/client';

//native components
import { ActivityIndicator, FlatList, ImageBackground, Text } from 'react-native';

//componensts
import { Screen, Header } from '../components';
import { STYLES } from '../constants';

const GET_AUTHORS = gql`
    query{
        authors{
            id,
            name,
            title,
            biography,
            picture{
                url
            }
        }
    }
`;

export default function Categories({ navigation }: any) {

    const { loading, error, data } = useQuery(GET_AUTHORS);

    const renderHero = ({ item }: any) => {
        return (
            <ImageBackground
                source={{ uri: item.picture.url }}
                style={{ width: '100%', height: 300, marginBottom: 35, opacity: 0.9 }}
                resizeMode="cover"
            >
                <Text
                    style={{
                        color: 'white',
                        fontWeight: '700',
                        bottom: 40,
                        fontSize: 25,
                        margin: 10,
                        position: 'absolute'
                    }}
                >
                    {item.name}
                </Text>
                <Text
                    style={{
                        color: 'white',
                        bottom: 0,
                        fontSize: 18,
                        margin: 10,
                        position: 'absolute'
                    }}
                >
                    {item.title}
                </Text>
            </ImageBackground>
        );
    };

    if (loading) {
        return <ActivityIndicator color='blue' />;
    };

    if (error) {
        return <Text>Error loading data</Text>;
    };

    const {authors} = data;

    return (
        <Screen>
            <Header
                navigation={navigation}
                title="Categories"
                actionLeft={() => navigation.openDrawer()}
            />
            <FlatList
                keyExtractor={(item: any) => item.id}
                data={authors}
                style={{ padding: STYLES.padding.xl }}
                renderItem={renderHero}
            />
        </Screen>
    );
};