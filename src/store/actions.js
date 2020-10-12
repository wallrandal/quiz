import Vue from 'vue';

/* eslint no-console: ["error", { allow: ["log"] }] */
export const loadData = ({commit}) => {
    Vue.http.get('data.json')
            .then(response => {
                if(response.data) {
                    const stocks = response.data.stocks;
                    const funds = response.data.funds;
                    const stockPortfolio = response.data.stockPortfolio;

                    const portfolio = {
                        stocks,
                        stockPortfolio,
                        funds,
                    };
                    commit('SET_STOCKS', stocks);
                    commit('SET_PORTFOLIO', portfolio);
                }
            })
}