import { AnyAction } from "redux";

import { UserData } from "../../utils/firebase/firebase.utils";

import { googleSignInStart, emailSignInStart, signInSuccess, signInFailed, signOutFailed, signOutStart, signOutSuccess, signUpFailed, signUpStart, signUpSuccess } from "./user.actions";

export type UserState= {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const INITIAL_STATE : UserState = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action : AnyAction) => {

    if (googleSignInStart.match(action) 
            || emailSignInStart.match(action) 
            || signOutStart.match(action) 
            || signUpStart.match(action)
            || signUpSuccess.match(action)) {
        return {...state, isLoading: true}
    } 

    if (signOutSuccess.match(action)) {
        return {...state, isLoading: false, currentUser: null}
    } 

    if (signInSuccess.match(action)) {
        return {...state, isLoading: false, currentUser: action.payload}
    } 

    if (signOutFailed.match(action) || signUpFailed.match(action) || signInFailed.match(action)) {
        return {...state, isLoading: false, error: action.payload} 
    }

    return state;
}