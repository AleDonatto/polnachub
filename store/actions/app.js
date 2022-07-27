export default {
    setLanguaje({commit, state, dispatch}, idioma){
        
        commit('StateAssign',{lang: idioma})
        
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