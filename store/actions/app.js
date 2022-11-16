export default {
    setLanguaje({commit, state, dispatch}, idioma){
        
        commit('StateAssign',{lang: idioma})

        const optLng = $nuxt.$route.path
        //const idQuery = $nuxt.$route.params.id
        //console.log(optLng)
        var regex = /(\d+)/g;
        const id = optLng.match(regex)

        /*if(optLng.includes('/market/type')){
            console.log('mercados')
            this.dispatch('getMarketById', idQuery)
            //this.dispatch('getMarcaById', id[0] )
        }*/

        switch(optLng){
            case '/' :
                this.dispatch('getPageHome')
                this.dispatch('getAllProducts')
                break
            case '/aboutus': case '/aboutus/': case '/nosotros': case '/nosotros/':
                this.dispatch('getAboutUs')
                break
            case '/eng/innovation': case '/eng/innovation/': case '/innovacion/': case '/innovacion':
                this.dispatch('getPageInnvation')
                break
            case '/eng/search-products': case '/eng/search-products/': 
                this.dispatch('getPageSearchProducts')
                break
            case '/eng/services': case '/eng/services/': case '/servicios/': case '/servicios':
                this.dispatch('getPageServices')
                break
            case '/eng/markets': case '/eng/markets/': case '/mercados/': case '/marcados': 
                this.dispatch('getPageMarkets')
                this.dispatch('getAllMarkets')
                break
            case '/blogs': case '/blogs/':
                this.dispatch('getPageBlog')
                break
            case '/eng/contact': case '/eng/contact/': case '/contactanos/': case '/contactanos':
                this.dispatch('getPageContact')
                this.dispatch('getAllMarkets')
                this.dispatch('getAllProducts')
                break
            //case '/eng/polnac-group': case '/eng/polnac-group/': case '/grupo-polnac/': case '/grupo-polnac': 
            case '/eng/brands': case '/eng/brands/': case '/marcas/': case '/marcas': 
                this.dispatch('getPagePolnacGroup')
                this.dispatch('getAllMarcas')
                break
            case '/polnac-blue': case '/polnac-blue/':
                this.dispatch('getPagePolnacBlue')
                break
            case '/eng/alliances': case '/eng/alliances/': case '/allianzas/': case '/allianzas':
                this.dispatch('getPageAlliances')
                break
            case '/eng/laboratory': case '/eng/laboratory/': case '/laboratorio/': case '/laboratorio':
                this.dispatch('getPageLaboratory')
                this.dispatch('getAllTipoPruebas')
                break
            case '/polnac-wiki': case '/polnac-wiki/':
                this.dispatch('getPagePolnacWiki')
                this.dispatch('getAllTipoPruebas')
                break
            case '/eng/frequently-questions': case '/eng/frequently-questions/': case '/preguntas-frecuentes' : case '/preguntas-frecuentes/':
                this.dispatch('getPageQuestions')
                break
            case '/eng/work-at-polnac': case '/eng/work-at-polnac/': case '/trabja-con-polnac/': case '/trabja-con-polnac':
                this.dispatch('getPageWork')
                break
            
        }
        
        if($nuxt.$route.path.includes('transpolimer')){
            this.dispatch('getPageTranspolimer')
        }
        if($nuxt.$route.path.includes('poliresin')){
            this.dispatch('getPagePoliresin')
        }
    },

    defaultLanguaje({commit, state}){
        if(state.lang !== null){
            this.$i18n.locale = state.lang
        }
    },
}