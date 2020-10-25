import axios from 'axios';

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
    }
};

const actions = {
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
        })
        .catch(error => console.log(error));
    },
    login: ({commit}, authData) => {
        console.log(authData);
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.FIREBASE_KEY, {
            email: authData.email,
            password: authData.password,
        })
        .then(res => {
            console.log(res);
            commit('authUser', {
                token: res.data.idToken,
                userId: res.data.userId,
            });
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
                 console.log(res);
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