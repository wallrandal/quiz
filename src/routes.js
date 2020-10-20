import Home from "./components/Home";
// import Header from "./components/Header";
const Portfolio = () => import(/* webpackChunkName: "group-portfolio" */ './components/portfolio/Portfolio')
// const PortfolioStock = () => import(/* webpackChunkName: "group-portfolio" */ './components/portfolio/Stock')
// const Stock = () => import(/* webpackChunkName: "group-stock" */ './components/stocks/Stock')
const Stocks = () => import(/* webpackChunkName: "group-stock" */ './components/stocks/Stocks')

const Login = () => import(/* webpackChunkName: "group-stock" */ './components/login/Login')

import Signup from "./components/login/Signup";

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
];