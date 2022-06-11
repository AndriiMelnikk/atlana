import React, { FC, useState } from 'react';

import style from './style.module.scss';
import Search from '../../components/Search';
import { FiSearch } from 'react-icons/fi';
import { InfoUser, Repository } from '../../typeScript/user';
import Loader from '../../components/Loader';

interface Props {
    info: InfoUser;
    repository: Repository[];
    loader: boolean;
}

const UserInfo: FC<Props> = ({ info, repository, loader }) => {
    const [ valueRepo, setValueRepo ] = useState('');

    let repo = repository.filter((list): any => list.name.toLowerCase().includes(valueRepo.toLowerCase())).map((e) => {
        return <RepoLi key={e.id} forks={e.forks} name={e.name} starts={e.stargazers_count} url={e.html_url} />;
    });

    const date = new Date(info.created_at).toLocaleString('en-us', { year: 'numeric', month: 'short', day: 'numeric' });

    if (loader) return <Loader />;
    else
        return (
            <div className={style.userInfo}>
                <div className={style.infoBlock}>
                    <div>
                        <img src={info.avatar_url} alt={'photo'} />
                    </div>
                    <div>
                        <ul>
                            <li>
                                <span>Name: {info.name}</span>
                            </li>
                            <li>
                                <span>Mail: {info.mail ? info.mail : '-'}</span>
                            </li>
                            <li>
                                <span>Location: {info.location ? info.location : '-'}</span>
                            </li>
                            <li>
                                <span>Join Date: {date}</span>
                            </li>
                            <li>
                                <span>{info.followers} Followers</span>
                            </li>
                            <li>
                                <span>Following {info.following}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <Search
                    value={valueRepo}
                    placeholder={'Search for User`s Repositories'}
                    click={(e) => {
                        setValueRepo(e.value);
                    }}>
                    <FiSearch />
                </Search>
                <div className={style.blockRepo}>
                    <ul>{repo}</ul>
                </div>
            </div>
        );
};

interface RepoLi {
    name: string;
    forks: number;
    starts: number;
    url: string;
}

const RepoLi: FC<RepoLi> = ({ name, forks, starts, url }) => {
    return (
        <li
            className={style.repoLi}
            onClick={() => {
                window.location.href = url;
            }}>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                <p>Forks: {forks}</p>
                <p>Starts: {starts}</p>
            </div>
        </li>
    );
};
export default UserInfo;
