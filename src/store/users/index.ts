import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_LOADING } from '../contants';
import { LoginObject } from '@/interfaces/users';
import { loginService } from '@/services/users';
import LocalStorageService from '@/services/localStorage';

enum status {
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}

interface State {
    status: status;
    user: object;
    error: any;
}

export default {
    namespaced: true,
    state: {
        status: status.SUCCESS,
        user: {},
        error: null,
    },

    mutations: {
        [LOGIN_SUCCESS]: (state: State, payload: any) => {
            state.user = payload.user;
            state.status = status.SUCCESS;
            LocalStorageService.setItem('token', payload.token);
        },
        [LOGIN_LOADING]: (state: State) => (state.status = status.LOADING),
        [LOGIN_ERROR]: (state: State, payload: any) => ((state.error = payload), (state.status = status.SUCCESS)),
    },

    actions: {
        loginUser: async ({ commit }: any, { email, password }: LoginObject): Promise<any> => {
            try {
                commit(LOGIN_LOADING);
                const response = await loginService({ email, password });
                commit(LOGIN_SUCCESS, response.data.data);
            } catch (error) {
                commit(LOGIN_ERROR, error);
            }
        },
    },
};
