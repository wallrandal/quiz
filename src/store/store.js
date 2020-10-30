import portfolio from './modules/portfolio'
import stocks from './modules/stocks'
import auth from './modules/auth'
import * as actions from './actions';
import { createStore } from 'vuex';

export default createStore({
    actions,
    modules: {
        stocks,
        portfolio,
        auth,
    },
});