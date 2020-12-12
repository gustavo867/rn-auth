import { Reducer } from 'redux';

export interface UserStateType {
  error: boolean;
  user: {
    token: string;
    name: string;
    email: string;
    profilePic: string;
  } | null;
  loading: boolean;
  msg: string;
  signed: boolean;
}

const INITIAL_STATE: UserStateType = {
  user: null,
  error: false,
  loading: false,
  msg: '',
  signed: false,
};

const UserReducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
        signed: action.payload.signed,
      };
    case 'USER_ERROR':
      return {
        ...state,
        error: true,
        msg: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
