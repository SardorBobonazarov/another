import { createStore } from "vuex";
import swiper from '../modules/swiper'
import homeCard from '../modules/home/homeCard'
import homeService from '../modules/home/homeService'
import homeProcess from '../modules/home/homeProcess'
import insurances from '../modules/insurance/insurances'
import news from '../modules/news/news'
import leaders from "../modules/about/leaders/leaders";
import docs from '../modules/docs/docs'
import branches from '../modules/branches/branches'


const store = createStore({
    state: {
        activeMenu: false
    },
    mutations: {},
    actions: {},
    modules: { 
        swiper, 
        homeCard, 
        homeService, 
        homeProcess, 
        insurances, 
        news,
        leaders,
        docs,
        branches
    }
})

export default store