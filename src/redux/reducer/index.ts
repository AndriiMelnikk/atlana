import { users } from './users';
import { user } from './user';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ users, user });

export type AppStateTypes = ReturnType<typeof rootReducer>;
