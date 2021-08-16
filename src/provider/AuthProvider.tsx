import React, { useState } from "react";

interface Ilogin {
    IsLogin?: boolean,
    handleLogin?: () => void
}

export const Auth = React.createContext<Ilogin>({});

export default function AuthProvider({ children }: any) {

    const [IsLogin, setIsLogin] = useState(false);

    const handleLogin = () => {
        setIsLogin(!IsLogin);
    }

    return (
        <Auth.Provider value={{ IsLogin, handleLogin }} >
            {children}
        </Auth.Provider>
    );
};