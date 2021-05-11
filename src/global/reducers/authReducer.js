import * as types from '../constant/authConstant';

const initialState = {
    loading: false,
    error: null,
    data: [],
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_LOGIN_REQUEST:
        return Object.assign({}, state, {
            loading: true,
        });
        case types.GET_LOGIN_SUCCESS:
        return Object.assign({}, state, {
            loading: false,
            data: action.data,
        });
        case types.GET_LOGIN_FAILED:
        return Object.assign({}, state, {
            loading: false,
            error: action.error,
        });
        case types.GET_LOGOUT_SUCCESS:
        return Object.assign({}, state, {
            data:[]
        })
        default:
        return state;
    }
}

export default authReducer;