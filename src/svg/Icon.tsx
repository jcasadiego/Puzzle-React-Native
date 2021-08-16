//packages
import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { usenIcon } from "../hooks";

interface IIcon {
    name: string,
    size: number,
    focused?: boolean,
    color: string
}

export default function Icon({name, size, focused, color}: IIcon) {
    
    const icon = usenIcon(name)

    if(!name){
        return (
            <View />
        );
    }else {
        return (
            <Svg
                // @ts-ignore
                xmlns="http://www.w3.org/2000/svg"
                className="prefix__h-6 prefix__w-6"
                fill={focused ? color : 'transparent'}
                viewBox="0 0 24 24"
                stroke={color}
                width={size}
                height={size}
            >
                <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={icon}
                />
            </Svg>
        );
    }
};