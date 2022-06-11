import { Octokit } from '@octokit/core';
const octokit = new Octokit({ auth: `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` });

export const User_api = {
    getUsersOne(users: string) {
        let user = '/users';
        if (users) user = `/users/${users}`;
        return octokit.request(`GET ${user}`, {}).then((res) => {
            return res.data;
        });
    },
    getUserRepo(users: string) {
        let name = `/users${users}`;
        return octokit
            .request(`GET ${name}/repos`, {
                username: name
            })
            .then((res) => {
                return res.data;
            });
    },
    getMoreInfo(users: string) {
        let name = `/users${users}`;
        return octokit
            .request(`GET ${name}`, {
                username: name
            })
            .then((res) => {
                return res.data;
            });
    }
};