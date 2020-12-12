import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import UserReducer from './userReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const reducers = {
  user: UserReducer,
};

const rootReducer = combineReducers(reducers);

export default persistReducer(persistConfig, rootReducer);
