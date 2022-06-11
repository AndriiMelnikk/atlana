import { Dispatch } from 'redux';
import {
    Users,
    UsersAction,
    UsersActionTypes,
    Search_AC,
    AddUser_AC,
    UserList,
    Loader_AC
} from '../../typeScript/users';
import { User_api } from '../../api/users';

const initState: Users = {
    search: '',
    users: [],
    loader: false
};

export const users = (store = initState, action: UsersAction): Users => {
    switch (action.type) {
        case UsersActionTypes.SEARCH:
            return {
                ...store,
                search: action.search
            };
        case UsersActionTypes.ADD_USER:
            return {
                ...store,
                users: Array.isArray(action.users) ? action.users : [ action.users ]
            };
        case UsersActionTypes.LOADER:
            return {
                ...store,
                loader: action.loader
            };

        default:
            return store;
    }
};

export const SearchUser = (search: string): Search_AC => ({ type: UsersActionTypes.SEARCH, search });
export const AddUser = (users: UserList[]): AddUser_AC => ({ type: UsersActionTypes.ADD_USER, users });
export const Loader = (loader: boolean): Loader_AC => ({ type: UsersActionTypes.LOADER, loader });

export const setSearch = (search: string) => {
    return async (dispatch: Dispatch<UsersAction>) => {
        dispatch(SearchUser(search));
        dispatch(Loader(true));
        try {
            let users = await User_api.getUsersOne(search);
            dispatch(AddUser(users));
            dispatch(Loader(false));
        } catch (error) {
            dispatch(AddUser([]));
            dispatch(Loader(false));
        }
    };
};
