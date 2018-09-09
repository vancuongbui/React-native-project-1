import { 
    EMAILCHANGED,
    PASSCHANGED,
    LOGINBUTTONPRESS
} from './Tyles';

export const emailChangeHandler = (emailValue) => {
    // the action always return a type and payload
    return {
        type: EMAILCHANGED,
        payload: emailValue
    }
};

export const passChangeHandler = (passValue) => {
    // the action always return a type and payload
    return {
        type: PASSCHANGED,
        payload: passValue
    }
};
