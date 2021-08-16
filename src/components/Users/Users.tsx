//Packages
import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList } from "react-native";

//State
import { asyncGetUsers } from '../../states/thunks'
import { connect } from "react-redux";


//components
import Card from "./Card";
import Header from "../header/Header";
import Screen from "../screen/Screen";

interface Iitrue {
    id: string,
    name: string,
    desc: string,
    image: string
};

function UserComponent({ navigation, getDate, users }: any) {

    const [superHeroes, setSuperHeroes] = useState([]);

    const handleGetHeroes = async () => {
        const response = await fetch(
            'https://akabab.github.io/superhero-api/api/all.json'
        );
        return await response.json();
    };

    useEffect(() => {
        getDate();
        setSuperHeroes(users);
    }, []);

    return (
        <Screen>
            <React.Suspense
                fallback={<ActivityIndicator size="large" color="#00ff00" />}>
                <Header
                    navigation={navigation}
                    actionLeft={() => navigation.openDrawer()}
                    title="Users"
                />
                <FlatList
                    renderItem={Card}
                    keyExtractor={(item: any) => item.id}
                    data={superHeroes}
                />
            </React.Suspense>
        </Screen>
    );
};

const mapStateToProps = (state: object) => {
    return state;
};

const mapDispatchToProps = (dispatch: any) => {
    getDate: () => dispatch(asyncGetUsers())
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)