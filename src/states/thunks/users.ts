import { getUsers } from "../actions";
import { ActionCreator } from "redux";

export function asyncGetUsers() {
    return async (dispatch: ActionCreator<object>) => {
        const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
        const data = await response.json();
        console.log('data: ', data);
        dispatch(getUsers(data));
    }
}