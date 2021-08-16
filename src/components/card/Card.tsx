//oackages
import React, { useState } from "react";

//Styles
import { CardContainer, CardHeader, CardBody, CardDescription, CardFooter, ButtonFoster, CardView, CardTitle } from "./Styles";

//components
import { Avatar, Flag } from "../index";

interface Icard {
  name?: string,
  country?: string,
  age?: number,
  sex?: string,
  points?: number
}

export default function Card({ name, country, age, sex }: Icard) {

  const [points, setPoints] = useState(0);

  return (
    <CardContainer>
      <CardHeader>
        <Avatar />
        <CardView>
          <CardTitle>{name}</CardTitle>
        </CardView>
      </CardHeader>
      <CardBody>
        <CardDescription>
          <CardTitle>
            This is a citizen from {country} that has {age} years old is a {sex}.
          </CardTitle>
          {
            country === "Guatemala" ?
              <Flag color="white" leftColor="blue" rightColor="blue" shieldColor="blue" />
              :
              <Flag color="white" leftColor="transparent" rightColor="transparent" shieldColor="red" />
          }
        </CardDescription>
      </CardBody>
      <CardFooter>
        <ButtonFoster onPress={() => { setPoints(points + 1) }}>
          <CardTitle>
            Sumar ++
          </CardTitle>
        </ButtonFoster>
        <CardTitle>{points}</CardTitle>
        <ButtonFoster onPress={() => { setPoints(points - 1) }}>
          <CardTitle>
            Restar --
          </CardTitle>
        </ButtonFoster>
      </CardFooter>
    </CardContainer>
  );
};