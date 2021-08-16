import React, { useEffect, useState } from "react";
import { ICONS } from "../constants";


export default function usenIcon(icon: string): string {

    const [iconPath, setIconPath] = useState('');

    useEffect(() => {
        switch (icon) {
            case 'home':
                setIconPath(ICONS.home)
                break;
            case 'categories':
                setIconPath(ICONS.categories)
                break;
            case 'camera':
                setIconPath(ICONS.camera)
                break;
            case 'drawer':
                setIconPath(ICONS.drawer)
                break;
            case 'left':
                setIconPath(ICONS.left)
                break;
            case 'settings':
                setIconPath(ICONS.settings)
                break;
            case 'users':
                setIconPath(ICONS.users)
                break;
            case 'login':
                setIconPath(ICONS.login)
                break;
            case 'password':
                setIconPath(ICONS.password)
                break;
            case 'email':
                setIconPath(ICONS.email)
                break;
            default:
                setIconPath(ICONS.home)
                break;
        }
    }, [])

    return iconPath;
}