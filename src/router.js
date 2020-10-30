import { createWebHistory, createRouter } from "vue-router";
/* eslint no-console: ["error", { allow: ["log"] }] */
import Home from "./components/Home";
// import Header from "./components/Header";
const Portfolio = () => import(/* webpackChunkName: "group-portfolio" */ './components/portfolio/Portfolio')
// const PortfolioStock = () => import(/* webpackChunkName: "group-portfolio" */ './components/portfolio/Stock')
// const Stock = () => import(/* webpackChunkName: "group-stock" */ './components/stocks/Stock')
const Stocks = () => import(/* webpackChunkName: "group-stock" */ './components/stocks/Stocks')

const Login = () => import(/* webpackChunkName: "group-stock" */ './components/login/Login')

import Signup from "./components/login/Signup";

import auth from './store/modules/auth';

const routes = [
    { path: '/', component: Home },
    { 
        path: '/portfolio', 
        component: Portfolio, 
        beforeEnter(to, from, next) {
            if(auth.state.user) {
                next();
            } else {
                next('/login');
            }
        }
    },
    { 
        path: '/stocks', 
        component: Stocks 
    },
    { 
        path: '/login', 
        component: Login 
    },
    { 
        path: '/signup', 
        component: Signup 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;