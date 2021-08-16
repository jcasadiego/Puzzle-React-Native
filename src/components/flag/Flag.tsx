//packages
import React from "react";

//styles
import { FlagContainer, FlagShield, FlagSide} from "./Styles";

interface IFlag {
    color?: string,
    leftColor?: string,
    rightColor?: string,
    shieldColor?: string
}

export default function Flag({ color, leftColor, rightColor, shieldColor }: IFlag) {
    return (
        <FlagContainer background={color}>
            <FlagSide background={leftColor}/>
            <FlagShield background={shieldColor}/>
            <FlagSide background={rightColor}/>
        </FlagContainer>
    );
};