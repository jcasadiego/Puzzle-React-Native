import { USERS } from "../actionTypes";
import state from "../state"

const initialState = {
    users: {}
};

export default (state: {users: {}} = initialState, action: any) => {
    switch (action.type){
        case USERS:
            return{
                ...state,
                users: {...action.payload}
            };
        default:
            return state;
    };
};