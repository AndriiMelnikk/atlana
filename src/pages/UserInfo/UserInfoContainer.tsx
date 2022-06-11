import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { matchRoutes, useLocation } from 'react-router-dom';
import { AppStateTypes } from '../../redux/reducer';
import User from './index';
import { setInfoUser } from '../../redux/reducer/user';
import { InfoUser, Repository } from '../../typeScript/user';

interface Props {
    loader: boolean;
    info: InfoUser;
    repository: Repository[];
    setInfoUser: (user: string) => void;
}

const UserInfoContainer: FC<Props> = ({ info, repository, loader, setInfoUser }) => {
    const location = useLocation();
    useEffect(() => {
        setInfoUser(location.pathname);
    }, []);
    return <User info={info} repository={repository} loader={loader} />;
};

let mapStateToProps = (state: AppStateTypes) => {
    return {
        info: state.user.info,
        repository: state.user.repository,
        loader: state.user.loader
    };
};

// @ts-ignore
export default connect(mapStateToProps, { setInfoUser })(UserInfoContainer);
