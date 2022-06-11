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
