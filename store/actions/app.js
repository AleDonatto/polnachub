export default {
    setLanguaje({commit, state, dispatch}, idioma){
        
        commit('StateAssign',{lang: idioma})

        const optLng = $nuxt.$route.path
        //console.log(optLng)

        switch(optLng){
            case '/' :
                this.dispatch('getPageHome')
                break
            case '/aboutus' || '/aboutus/':
                this.dispatch('getAboutUs')
                break
            case '/innovation':
                this.dispatch('getPageInnvation')
                break
            case '/search-products': 
                this.dispatch('getPageSearchProducts')
                break
            case '/services':
                this.dispatch('getPageServices')
                break
            case 'market': 
                this.dispatch('getPageMarkets')
                break
            case '/blogs':
                this.dispatch('getPageBlog')
                break
            case '/contact':
                this.dispatch('getPageContact')
                break
            case '/polnac-group': 
                this.dispatch('getPagePolnacGroup')
                break
            case '/polnac-blue':
                this.dispatch('getPagePolnacBlue')
                break
            case '/alliances':
                this.dispatch('getPageAlliances')
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