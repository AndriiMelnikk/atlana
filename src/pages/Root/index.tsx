import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import style from './style.module.scss';
// component
import UsersList from '../UsersList/UserListContainer';
import UserInfo from '../UserInfo/UserInfoContainer';
import { Link } from 'react-router-dom';

const Root: FC = () => {
    return (
        <div className={style.app}>
            <h1>
                <Link to='/'> GitHub Search</Link>{' '}
            </h1>
            <Routes>
                <Route path='/' element={<UsersList />} />
                <Route path='/*' element={<UserInfo />} />
            </Routes>
        </div>
    );
};

export default Root;
