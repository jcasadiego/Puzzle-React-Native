//packages
import styled from "styled-components/native";

const ScreenContainer = styled.View`
    flex: 1;
    background-color: white;
`;

const SafeArea = styled.SafeAreaView`
    flex: 1;
`;

const BarStatus = styled.StatusBar`
    background-color: blue;
`;

export {
    ScreenContainer,
    SafeArea,
    BarStatus
}