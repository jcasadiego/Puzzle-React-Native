//Packages
import React from "react";

//styles
import { HeaderContainer, Tittle, ButtonHeader} from "./Styles";

//native components
import Icon from "../../svg/Icon";

interface IHeader {
    actionLeft?: () => void,
    actionRight?: () => void,
    title: string,
    navigation: any
}

export default function Header({ title, actionLeft, actionRight, navigation }: IHeader) {

    const handleRightAction = () => {
        navigation.navigator('Camera');
    };

    const handleLeftAction = () => {
        navigation.goBack();
    };

    return (
        <HeaderContainer>
            <ButtonHeader onPress={actionLeft ? actionLeft : handleLeftAction}>
                <Icon name={actionLeft ? 'drawer' : 'left'} size={24} color="white" focused={false} />
            </ButtonHeader>
            <Tittle>
                {title}
            </Tittle>
            <ButtonHeader onPress={actionRight ? actionRight : handleRightAction}>
                <Icon name={actionLeft ? 'camera' : ' '} size={24} color="white" focused={false} />
            </ButtonHeader>
        </HeaderContainer>
    )
}