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
        //pages from strapi
        pageHome: null,
        pagetranspolimer: null,
        pagepoliresin: null,
        pageInnovation: null,
        pageAboutUs: null,
        pageSearchProducts: null,
        pageServices: null,
        pageMarkets: null, 
        pageBlog: null,
        pagePolnacGroup: null,
        pageContact: null,
        pagePolnacBlue: null,
        pageAlliances: null,
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
        pProducto: [],
        pMetTransformacion: [],
        valFabricante: null, 
        valMercado: null, 
        valMTransformacion: null,
        valProducto: null,
        //tables products
        tablePruebas: [],
        showMsgProd: false,
        //
        tablePE: [],
        tablePP: [],
        tableEstirenicos: [],
        tableRotomoldeo: [],
        tableMasterbatch: [],
        tableIngenieria: [],
        tableCompuestosprecolor: [],
        tableCompuestoscargados: [],
        tableTermoplasticos: [],
        tablePVC: [],
        tableAditivos: [],
        tableCalcio: [],
        tableBioplasticos: [],
        tableHules: [],
        tablePolvoC: [],
        //polnac wiki-blog
        showbanners: true
    }),
    actions,
    getters,
    mutations

})
