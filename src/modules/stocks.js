import stocks from "../data/stocks";
/* eslint no-console: ["error", { allow: ["log"] }] */
const state = {
    stocks: [],
};

const mutations = {
    'SET_STOCKS' (state) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        state.stocks = stocks;
    },
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    
    initStocks: ({ commit }) => {
        commit('SET_STOCKS');
    },
    
    randomizeStocks: ({ commit }) => {
        commit('RND_STOCKS');
    },
    
};

const getters = {
    stocks: state => state.stocks,
};

export default {
    state,
    mutations,
    getters,
    actions
}