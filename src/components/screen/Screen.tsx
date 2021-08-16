//packages
import React from "react";
import { StatusBar } from "react-native";

//styles
import { ScreenContainer, SafeArea, BarStatus } from "./Styles";

interface IFlag {
    children?: any
}

export default function Screen({ children }: IFlag) {

    return (
        <SafeArea>
            <StatusBar backgroundColor="transparent" barStyle="dark-content"/>
            <ScreenContainer>
                {children}
            </ScreenContainer>
        </SafeArea>
    );
};