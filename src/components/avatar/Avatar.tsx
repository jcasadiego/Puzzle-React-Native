//packages
import React from "react";

//native components
import {
    View,
    Image
} from "react-native";

//styles
import { AvatarIma, AvatarContainer } from "./Styles";

export default function Avatar() {
    return (
        <AvatarContainer>
            <AvatarIma
                resizeMode="cover"
                source={{ uri: 'https://www.tekcrispy.com/wp-content/uploads/2018/10/avatar.png' }} />
        </AvatarContainer>
    )
}