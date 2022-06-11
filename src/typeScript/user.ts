export interface User {
    info: InfoUser;
    repository: Repository[];
    loader: boolean;
}
export interface InfoUser {
    avatar_url: string;
    name: string;
    mail: string | null;
    location: string | null;
    created_at: string;
    followers: number;
    following: number;
}
export interface Repository {
    name: string;
    forks: number;
    stargazers_count: number;
    id: number;
    html_url: string;
}

export enum UserActionTypes {
    SEARCH = 'SEARCH',
    LOADER = 'LOADER',
    ADD_INFO = 'ADD-INFO'
}

export interface Search_AC {
    type: UserActionTypes.SEARCH;
    search: string;
}
export interface ADD_INFO_AC {
    type: UserActionTypes.ADD_INFO;
    info: InfoUser;
    repository: Repository[];
}
export interface Loader_AC {
    type: UserActionTypes.LOADER;
    loader: boolean;
}

export type UserAction = Search_AC | ADD_INFO_AC | Loader_AC;
