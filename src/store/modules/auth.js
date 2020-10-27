import axios from 'axios';


// import router from './../../routes.js';

/* eslint no-console: ["error", { allow: ["log"] }] */
/*eslint no-unused-vars: ["error", { "args": "none" }]*/
const state = {
    idToken: null,
    userId: null,
    user: null,
};

const mutations = {
    authUser(state, userData) {
        state.idToken = userData.token;
        state.userId = userData.userId;
    },
    storeUser(state, user) {
        state.user = user;
    },
    clearAuthData(state) {
        state.idToken = null;
        state.userId = null;
    }
};

const actions = {
    setLogoutTimer({dispatch}, expirationTime) {
        setTimeout(() => {
            dispatch('logout');
        }, expirationTime * 1000)
    },
    signup: ({commit, dispatch}, authData) => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.FIREBASE_KEY, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
        })
        .then(res => {
            console.log(res);
            commit('authUser', {
                token: res.data.idToken,
                userId: res.data.userId,
            });
            dispatch('storeUser', authData);
            dispatch('setLogoutTimer', res.data.expiresIn);
        })
        .catch(error => console.log(error));
    },
    login: ({commit, dispatch}, authData) => {
        const token = typeof(process.env.FIREBASE_KEY) != "undefined" ? process.env.FIREBASE_KEY : process.env.VUE_APP_FIREBASE_KEY
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${token}`, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
        })
        .then(res => {
            commit('authUser', {
                token: res.data.idToken,
                userId: res.data.userId,
            });
            dispatch('setLogoutTimer', res.data.expiresIn);
        })
        .catch(error => console.log(error));
    },
    storeUser ({commit}, userData) {
        axios.post('/users.json', userData)
             .then(res => console.log(res))
             .catch(error => console.log(error));
    },
    fetchUser({commit}) {
        axios.get('/users.json')
             .then(res => {
                 const data = res.data;
                 const users = [];
                 for(let key in data) {
                     const user = data[key];
                     user.id = key
                     users.push(user)
                 }
                 console.log(users)
                 commit('storeUser', users[0]);
                })
             .catch(error => console.log(error));
    },
    logout({commit}) {
        commit('clearAuthData');
    }
};

const getters = {
    user (state) {
        return state.user;
    },
    isLogged () {
        return state.idToken != null
    }
};

export default {
    state,
    mutations,
    getters,
    actions,
}