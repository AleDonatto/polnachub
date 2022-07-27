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
        credentials: null,
        pagetranspolimer: null,
        pagepoliresin: null,
        basePathApiUrl: 'http://localhost:1337',
        //salesfoce connection
        userSalesforce: {
            username: 'desatimx@polnac.com.bxt01',
            password: 'H1u2g3o435',
            grant_type: 'password',
            client_id: '3MVG9Iu66FKeHhINolE5zsI1ShisdkRJu7w4dK2dqtwu4ye5nOA70PgSM_M9u58zLzERvwfmhdYWyt2pnyFxh',
            client_secret: 'C60E440505B55C377DB5B52E7FFF0BDB453E391F11F5642DBE01ACB680969F8F'
        },
        pFabricante: [],
        pMercado: [],
        pTipoResina: [],
        pMetTransformacion: [],

    }),
    actions,
    getters,
    mutations

})
