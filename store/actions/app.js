export default {
    setLanguaje({commit, state, dispatch}, idioma){
        
        commit('StateAssign',{lang: idioma})

        const optLng = $nuxt.$route.path
        //console.log(optLng)

        switch(optLng){
            case '/' :
                this.dispatch('getPageHome')
                break
            case '/aboutus': case '/aboutus/':
                this.dispatch('getAboutUs')
                break
            case '/innovation': case '/innovation/':
                this.dispatch('getPageInnvation')
                break
            case '/search-products': case '/search-products/': 
                this.dispatch('getPageSearchProducts')
                break
            case '/services': case '/services/':
                this.dispatch('getPageServices')
                break
            case '/market': case '/market/': 
                this.dispatch('getPageMarkets')
                //this.dispatch('getAllMarkets')
                break
            case '/blogs': case '/blogs/':
                this.dispatch('getPageBlog')
                break
            case '/contact': case '/contact/':
                this.dispatch('getPageContact')
                break
            case '/polnac-group': case '/polnac-group/': 
                this.dispatch('getPagePolnacGroup')
                break
            case '/polnac-blue': case '/polnac-blue/':
                this.dispatch('getPagePolnacBlue')
                break
            case '/alliances': case '/alliances/':
                this.dispatch('getPageAlliances')
                break
            case '/laboratory': case '/laboratory/':
                this.dispatch('getPageLaboratory')
                break
            case '/polnac-wiki': case '/polnac-wiki/':
                this.dispatch('getPagePolnacWiki')
                break
            case '/frequently-questions': case '/frequently-questions/': 
                this.dispatch('getPageQuestions')
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