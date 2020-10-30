import axios from 'axios';

/* eslint no-console: ["error", { allow: ["log"] }] */
/*eslint no-unused-vars: ["error", { "args": "none" }]*/
const state = {
    idToken: null,
    userId: null,
    email: null,
    count: 1,
};

const mutations = {
    authUser(state, userData) {
        state.idToken = userData.token;
        state.userId = userData.userId;
        state.email = userData.email;
    },
    clearAuthData(state) {
        state.idToken = null;
        state.userId = null;
    },
    increment() {
        state.count++;
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
            commit('authUser', {
                token: res.data.idToken,
                userId: res.data.userId,
                email: authData.email,
            });
            
            const now = new Date();
            const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', res.data.localId);
            localStorage.setItem('email', authData.email);

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
                email: authData.email,
            });
            
            const now = new Date();
            const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', res.data.localId);
            localStorage.setItem('email', authData.email);

            dispatch('setLogoutTimer', res.data.expiresIn);
        })
        .catch(error => console.log(error));
    },
    tryAutoLogin({commit}) {
        const token = localStorage.getItem('token');
        if(!token) {
            return;
        }

        const expirationDate = new Date(localStorage.getItem('expirationDate'));

        const now = new Date();
        
        if(now >= expirationDate) {
            console.log('here');
            return;
        }
        const userId = localStorage.getItem('userId');
        const email = localStorage.getItem('email');

        commit('authUser', {
            token: token,
            userId: userId,
            email: email,
        });
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
                })
             .catch(error => console.log(error));
    },
    logout({commit}) {
        commit('clearAuthData');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('email');
    },
    increment ({commit}) {
        commit('increment');
    }
};

const getters = {
    email (state) {
        return state.email;
    },
    token (state) {
        return state.idToken;
    },
    isLogged () {
        return state.idToken != null
    },
    myCounter () {
        return state.count
    }
};

export default {
    state,
    mutations,
    getters,
    actions,
}