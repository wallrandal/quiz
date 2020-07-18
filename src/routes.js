import Home from "./components/Home";
// import Header from "./components/Header";
const Portfolio = () => import(/* webpackChunkName: "group-portfolio" */ './components/portfolio/Portfolio')
// const PortfolioStock = () => import(/* webpackChunkName: "group-portfolio" */ './components/portfolio/Stock')
// const Stock = () => import(/* webpackChunkName: "group-stock" */ './components/stocks/Stock')
const Stocks = () => import(/* webpackChunkName: "group-stock" */ './components/stocks/Stocks')

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks },
];