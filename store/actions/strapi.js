export default {
    async getPageTranspolimer({commit, state}){
        let pageData
        if(state.lang === 'eng'){
            pageData = await this.$axios.$get('/api/pagetranspolimer?populate[head][populate]=%2A&populate[process][populate]=%2A&populate[section][populate]=%2A&populate[technologies][populate]=%2A&locale=en') 
        }else
            pageData = await this.$axios.$get('/api/pagetranspolimer?populate[head][populate]=%2A&populate[process][populate]=%2A&populate[section][populate]=%2A&populate[technologies][populate]=%2A&locale=es-MX')

        //console.log(pageData)
        commit('StateAssign', { pagetranspolimer: pageData.data.attributes})
    },

    async getPagePoliresin({commit,state}){
        let pageData
        if(state.lang === 'eng'){
            pageData = await this.$axios.$get('/api/poliresin?populate[head][populate]=%2A&populate[subhead][populate]=%2A&populate[infraestructura][populate]=%2A&populate[process][populate]=%2A&populate[buy][populate]=%2A&populate[services][populate]=%2A&populate[sales][populate]=%2A&locale=en')
        }else
            pageData = await this.$axios.$get('/api/poliresin?populate[head][populate]=%2A&populate[subhead][populate]=%2A&populate[infraestructura][populate]=%2A&populate[process][populate]=%2A&populate[buy][populate]=%2A&populate[services][populate]=%2A&populate[sales][populate]=%2A&locale=es-MX')
        
        //console.log(pageData)
        commit('StateAssign', {pagepoliresin: pageData.data.attributes})
    },
} 