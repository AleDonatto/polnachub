import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
Vue.use(Vuex)

export default () => new Vuex.Store({
    state: () => ({
        windowSize:null,
        windowHeight:null,
        lang: 'es',
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
        pageLaboratory: null,
        pagePolnacWiki: null,
        pageQuestions: null,
        pageWork: null,
        pageCamping: null,
        basePathApiUrl: 'https://crm.polnac.com',
        //salesfoce connection
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
        //
        showMsgProd: false,
        //polnac wiki-blog
        showbanners: true,
        card: [],
        //single
        productos: null,
        mercados: null, 
        marcas: null,
        pruebasLab: null
    }),
    actions,
    getters,
    mutations

})
