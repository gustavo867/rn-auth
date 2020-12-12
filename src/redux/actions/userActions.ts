import { Dispatch } from 'redux';
import signIn from '../../services/auth';

export const login = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await signIn();

      const user = {
        token: res.token,
        name: res.user.name,
        email: res.user.email,
        profilePic: res.user.profilePic,
      };

      dispatch({
        type: 'SET_USER',
        payload: {
          user,
          signed: true,
        },
      });
    } catch (e) {
      dispatch({
        type: 'USER_ERROR',
        payload: 'Error on logIn',
      });
    }
  };
};

export const logOut = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: 'SET_USER',
        payload: {
          user: null,
          signed: false,
        },
      });
    } catch (e) {
      dispatch({
        type: 'USER_ERROR',
        payload: 'Error on logOut',
      });
    }
  };
};
