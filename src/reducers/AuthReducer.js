import { 
    EMAILCHANGED,
    PASSCHANGED,
    LOGINBUTTONPRESS
} from '../actions/Tyles';

const INIT_STATE = {
    emailValue: '',
    passValue: '',
}

export default (state=INIT_STATE, action) => {
    switch (action.payload) {
        case EMAILCHANGED:
            return ({ ...state, emailValue: action.payload });
        case PASSCHANGED:
            return ({ ...state, passValue: action.payload });
        case LOGINBUTTONPRESS:
            return ({ ...state, INIT_STATE })
        default:
            return state;
    }
};
