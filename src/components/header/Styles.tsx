//Packages
import styled from "styled-components/native";

const HeaderContainer =  styled.View`
    background-color: black;
    width: 100%;
    height: 15%;
    flex-direction: row;
    padding: 24px;
    align-items: center;
    justify-content: space-between;
`;

const Tittle = styled.Text`
    color: white;
    font-weight: 700;
    font-family: Montserrat-Bold;
    font-size: 18px;
    text-transform: uppercase;
`;

const ButtonHeader = styled.TouchableOpacity``;

export {
    HeaderContainer,
    Tittle,
    ButtonHeader
};