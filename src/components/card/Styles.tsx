import styled from "styled-components/native";

const CardContainer = styled.View`
  height: 250px;
  width: 100%;
  background-color: #d5d0d0;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const CardHeader = styled.View`
  padding-horizontal: 8px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-color: gray;
  border-bottomWidth: 1px;
`;

const CardBody = styled.View`
  flex: 3;
`;

const CardDescription = styled.View`
      padding: 8px;
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
      letter-spacing: 32px;
`;

const CardFooter = styled.View`
      flex: 1;
      flex-direction: row;
      align-items: center;
      justify-content: space-between; 
      padding-horizontal: 8px;
      border-color: gray;
      border-topWidth: 1px;
`;

const ButtonFoster = styled.TouchableOpacity``;

const CardView = styled.View``;

const CardTitle = styled.Text``;

export {
  CardContainer,
  CardHeader,
  CardBody,
  CardDescription,
  CardFooter,
  CardView,
  CardTitle, 
  ButtonFoster
};