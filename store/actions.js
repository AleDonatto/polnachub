export default {
    setLanguaje({commit, state, dispatch}, idioma){
        commit('StateAssign',{lang: idioma})
    },
    defaultLanguaje({commit, state}){
        if(state.lang !== null){
            this.$i18n.locale = state.lang
        }
    }
}