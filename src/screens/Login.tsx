//packages
import React, { useState } from 'react';

//componensts
import { LoginComponents } from '../components';

export default function LoginScreen({ navigation }: any) {

    return (
        <LoginComponents navigation={navigation}/>
    );
};