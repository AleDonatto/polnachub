import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
Vue.use(Vuex)

export default () => new Vuex.Store({
    state: () => ({
        message: 'pruebas de vuex',
        windowSize:null,
        windowHeight:null,
        lang: null,
        pagetranspolimer: null,
        pagepoliresin: null,
        basePathApiUrl: 'http://localhost:1337'
    }),
    actions,
    getters,
    mutations

})
