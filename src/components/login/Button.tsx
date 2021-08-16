//Packages
import React from "react";

//Components
import { Button, TextButton } from "./styles";

interface Ibutton {
    title: string,
    onPress: () => void
}

export default function ButtonComponents({title, onPress}: Ibutton) {
    return(
        <Button onPress={onPress}>
            <TextButton>{title}</TextButton>
        </Button>
    );
};