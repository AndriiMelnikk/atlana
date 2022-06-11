import { Dispatch } from 'redux';
import { User_api } from '../../api/users';
import { ADD_INFO_AC, InfoUser, Loader_AC, Repository, User, UserAction, UserActionTypes } from '../../typeScript/user';

const initState: User = {
    info: {
        avatar_url: '',
        name: '',
        mail: '',
        location: '',
        created_at: '',
        followers: 0,
        following: 0
    },
    repository: [],
    loader: true
};

export const user = (store = initState, action: UserAction): User => {
    switch (action.type) {
        case UserActionTypes.ADD_INFO:
            return {
                ...store,
                info: {
                    avatar_url: action.info.avatar_url,
                    name: action.info.name,
                    mail: action.info.mail,
                    location: action.info.location,
                    created_at: action.info.created_at,
                    followers: action.info.followers,
                    following: action.info.following
                },
                repository: action.repository
            };
        case UserActionTypes.LOADER:
            return {
                ...store,
                loader: action.loader
            };

        default:
            return store;
    }
};

export const AddInfo = (info: InfoUser, repository: Repository[]): ADD_INFO_AC => ({
    type: UserActionTypes.ADD_INFO,
    info,
    repository
});
export const Loader = (loader: boolean): Loader_AC => ({ type: UserActionTypes.LOADER, loader });

export const setInfoUser = (name: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch(Loader(true));
        try {
            let repo = await User_api.getUserRepo(name);
            let info = await User_api.getMoreInfo(name);
            console.log(repo);
            dispatch(AddInfo(info, repo));
            dispatch(Loader(false));
        } catch (error) {
            dispatch(Loader(false));
        }
    };
};
