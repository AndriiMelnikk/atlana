import React, { FC } from 'react';
import style from './style.module.scss';
import { FiSearch } from 'react-icons/fi';
import Search from '../../components/Search';
import Loader from '../../components/Loader';
import { UserList } from '../../typeScript/users';
import { Link } from 'react-router-dom';

interface Props {
    search: string;
    userList: UserList[];
    setSearch: (search: string) => void;
    loader: boolean;
}

const UsersList: FC<Props> = ({ search, userList, setSearch, loader }) => {
    const list = userList.map((e): any => {
        return <UserLi key={e.id} img={e.avatar_url} name={e.login} repos={e.public_repos} />;
    });

    return (
        <div className={style.userList}>
            <Search value={search} placeholder={'Search for User'} click={(e) => setSearch(e.value)}>
                <FiSearch />
            </Search>
            <div>
                <ul className={style.ulBlock}>
                    {loader ? (
                        <Loader />
                    ) : list.length ? (
                        list
                    ) : (
                        <p className={style.errorSearch}>Користувача не знайдено (</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

interface UserLi {
    img: string;
    name: string;
    repos: number | undefined;
}

const UserLi: FC<UserLi> = ({ img, name, repos = 0 }) => {
    return (
        <li>
            <Link to={`/${name}`} className={style.li}>
                <img src={img} alt='userPhoto' />
                <h3>{name}</h3>
                <span>Repo: {repos}</span>
            </Link>
        </li>
    );
};

export default UsersList;
