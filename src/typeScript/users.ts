export interface UserList {
    avatar_url: string;
    login: string;
    public_repos: number;
    id: number;
}

export interface Users {
    search: string;
    users: UserList[] | null;
    loader: boolean;
}

export enum UsersActionTypes {
    SEARCH = 'SEARCH',
    ADD_USER = 'ADD_USER',
    LOADER = 'LOADER'
}

export interface Search_AC {
    type: UsersActionTypes.SEARCH;
    search: string;
}

export interface AddUser_AC {
    type: UsersActionTypes.ADD_USER;
    users: UserList[];
}
export interface Loader_AC {
    type: UsersActionTypes.LOADER;
    loader: boolean;
}

export type UsersAction = Search_AC | AddUser_AC | Loader_AC;
