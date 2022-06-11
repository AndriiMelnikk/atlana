import { connect } from 'react-redux';
import React, { FC, useEffect } from 'react';
import { AppStateTypes } from '../../redux/reducer';
import UserListF from './index';
import { UserList } from '../../typeScript/users';
import { setSearch } from '../../redux/reducer/users';

interface Props {
    search: string;
    userList: UserList[];
    setSearch: (value: string) => void;
    loader: boolean;
}

const UserListContainer: FC<Props> = ({ search, userList, setSearch, loader }) => {
    useEffect(() => {
        setSearch('');
    }, []);
    return <UserListF search={search} userList={userList} setSearch={setSearch} loader={loader} />;
};

let mapStateToProps = (state: AppStateTypes) => {
    return {
        search: state.users.search,
        userList: state.users.users,
        loader: state.users.loader
    };
};

// @ts-ignore
export default connect(mapStateToProps, { setSearch })(UserListContainer);
