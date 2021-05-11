import * as types from '../constant/authConstant';
import {throwAnError} from '../../utils/error';
import { Alert } from 'react-native';
import { Base64 } from 'js-base64';

export const getLoginRequest = () => ({
  type: types.GET_LOGIN_REQUEST,
});

export const getLoginSuccess = (data) => ({
  type: types.GET_LOGIN_SUCCESS,
  data,
});

export const getLoginFailure = (error) => ({
  type: types.GET_LOGIN_FAILED,
  error,
});

export const AuthAction = (username, password) => {
  return async (dispatch) => {
    try {
        dispatch(getLoginRequest());
        if(username == "admin" && password == "admin"){
          const key = Math.floor(Math.random() * 1001);
          const token = Base64.encode(`key:${key},{username:${username},password:${password}}`);
          dispatch(getLoginSuccess(token));
          return true;
        } 
        Alert.alert("Username or Password doesn't matched")
        return throwAnError()
    } catch (e) {
        dispatch(getLoginFailure(e));
        return false;
    }
  };
};