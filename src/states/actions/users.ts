import { USERS } from "../actionTypes";

interface Iusers {
    payload: object
}

export function getUsers({payload}: Iusers){
    return{
        type: USERS,
        payload
    };
};