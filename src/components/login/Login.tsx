//Packages
import React, { useContext, useState } from "react";

//navite-components
import { StatusBar } from "react-native";

//Components
import { Auth } from "../../provider/AuthProvider";
import ButtonComponents from "./Button";
import Input from "./Input";
import { ScreemButton, ScreenImage } from "./styles";

export default function LoginComponents({ navigation }: any) {

    const { handleLogin } = useContext(Auth);

    const [email, setEmail] = useState(' ');
    const [password, setPass] = useState(' ');

    const [active, setActive] = useState(false);

    const [error, setError] = useState(' ');
    const [errorPass, setErrorPass] = useState(' ');

    const handleKeyBoard = () => {
        setActive(!active);
    };

    const handlesendCredentiales = () => {
        const re = /^(.+\@.+\..+)$/
        const trueMail = re.test(String(email).toLowerCase());
        trueMail ? setError(' ') : setError('Invalid Email');

        (password.length > 8) ? setErrorPass(' ') : setErrorPass('must be more than 8 characters');

        if ((password.length > 8) && (trueMail)) {
            handleLogin ? handleLogin() : null;
        }
    };

    return (
        <ScreenImage source={require('../../../assets/images/descarga2.jpeg')}>
            <StatusBar barStyle='light-content' />
            <ScreemButton height={active ? '100%' : '50%'}>
                <Input
                    name='email'
                    value={email}
                    onChangeText={setEmail}
                    onFocus={handleKeyBoard}
                    onBlur={handleKeyBoard}
                    placeholder='Write your email'
                    errorMessage={error}
                    type='mail'
                />
                <Input
                    name='password'
                    value={password}
                    onChangeText={setPass}
                    onFocus={handleKeyBoard}
                    onBlur={handleKeyBoard}
                    placeholder='Write your password'
                    errorMessage={errorPass}
                    type='password'
                />
                <ButtonComponents
                    title='Login'
                    onPress={handlesendCredentiales}
                />
            </ScreemButton>
        </ScreenImage>
    );
};