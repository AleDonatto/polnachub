export default {
    async getPageHome({commit, state}){
        this.$axios.setToken(false)
        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.get('http://localhost:1337/api/home?populate[banner][populate]=%2A&populate[featured][populate]=%2A&populate[tecOffices][populate]=%2A&populate[alliances][populate]=%2A&populate[blog][populate]=%2A&populate[appointment][populate]=%2A&populate[imgOffices][populate]=%2A&locale=en')
        else
            pageData = await this.$axios.get('http://localhost:1337/api/home?populate[banner][populate]=%2A&populate[featured][populate]=%2A&populate[tecOffices][populate]=%2A&populate[alliances][populate]=%2A&populate[blog][populate]=%2A&populate[appointment][populate]=%2A&populate[imgOffices][populate]=%2A&locale=es-MX')
        
        commit('StateAssign', {pageHome: pageData.data.data.attributes})
    },
    async getPageTranspolimer({commit, state}){
        this.$axios.setToken(false)
        let pageData
        
        if(state.lang === 'eng'){
            pageData = await this.$axios.$get('http://localhost:1337/api/pagetranspolimer?populate[head][populate]=%2A&populate[process][populate]=%2A&populate[section][populate]=%2A&populate[technologies][populate]=%2A&locale=en') 
        }else
            pageData = await this.$axios.$get('http://localhost:1337/api/pagetranspolimer?populate[head][populate]=%2A&populate[process][populate]=%2A&populate[section][populate]=%2A&populate[technologies][populate]=%2A&locale=es-MX')

        //console.log(pageData)
        commit('StateAssign', { pagetranspolimer: pageData.data.attributes})
    },
    async getPagePoliresin({commit,state}){
        this.$axios.setToken(false)
        let pageData
        if(state.lang === 'eng'){
            pageData = await this.$axios.$get('http://localhost:1337/api/poliresin?populate[head][populate]=%2A&populate[subhead][populate]=%2A&populate[infraestructura][populate]=%2A&populate[process][populate]=%2A&populate[buy][populate]=%2A&populate[services][populate]=%2A&populate[sales][populate]=%2A&locale=en')
        }else
            pageData = await this.$axios.$get('http://localhost:1337/api/poliresin?populate[head][populate]=%2A&populate[subhead][populate]=%2A&populate[infraestructura][populate]=%2A&populate[process][populate]=%2A&populate[buy][populate]=%2A&populate[services][populate]=%2A&populate[sales][populate]=%2A&locale=es-MX')
        
        //console.log(pageData)
        commit('StateAssign', {pagepoliresin: pageData.data.attributes})
    },
    async getPageInnvation({commit,state}){
        this.$axios.setToken(false)
        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get('http://localhost:1337/api/innovation-des?populate[banner][populate]=%2A&populate[normas][populate]=%2A&populate[equipos][populate]=%2A&locale=en')
        else
            pageData = await this.$axios.$get('http://localhost:1337/api/innovation-des?populate[banner][populate]=%2A&populate[normas][populate]=%2A&populate[equipos][populate]=%2A&locale=es-MX')
        
        //console.log(pageData)
        commit('StateAssign', {pageInnovation: pageData.data.attributes})
    },

    async getAboutUs({commit, state}){
        this.$axios.setToken(false)
        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get('http://localhost:1337/api/about-us?populate[head][populate]=%2A&populate[mision][populate]=%2A&populate[vision][populate]=%2A&populate[businesValues][populate]=%2A&populate[quality][populate]=%2A&populate[work][populate]=%2A&populate[imgWork][populate]=%2A&populate[imgPurple][populate]=%2A&locale=en')
        else
            //pageData = await this.$axios.$get('/strapi/api/about-us?populate[head][populate]=%2A&populate[mision][populate]=%2A&populate[vision][populate]=%2A&populate[businesValues][populate]=%2A&populate[quality][populate]=%2A&locale=es-MX')
            pageData = await this.$axios.$get('http://localhost:1337/api/about-us?populate[head][populate]=%2A&populate[mision][populate]=%2A&populate[vision][populate]=%2A&populate[businesValues][populate]=%2A&populate[quality][populate]=%2A&populate[work][populate]=%2A&populate[imgWork][populate]=%2A&populate[imgPurple][populate]=%2A&locale=es-MX')
        
        commit('StateAssign', {pageAboutUs: pageData.data.attributes})
    },

    async getPageSearchProducts({commit, state}){
        this.$axios.setToken(false)
        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get('http://localhost:1337/api/search-product?populate[banner][populate]&locale=en')
        else
            pageData = await this.$axios.$get('http://localhost:1337/api/search-product?populate[banner][populate]&locale=es-MX')
        
        //console.log(pageData)
        commit('StateAssign', {pageSearchProducts: pageData.data.attributes})
    },
    async getPageServices({commit, state}){
        this.$axios.setToken(false)
        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get('http://localhost:1337/api/service?populate[banner][populate]=%2A&populate[technologies][populate]=%2A&populate[information][populate]=%2A&locale=en')
        else
            pageData = await this.$axios.$get('http://localhost:1337/api/service?populate[banner][populate]=%2A&populate[technologies][populate]=%2A&populate[information][populate]=%2A&locale=es-MX')
        
        //console.log(pageData)
        commit('StateAssign', {pageServices: pageData.data.attributes})
    },
    async getPageMarkets({commit,state}){
        this.$axios.setToken(false)
        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get('http://localhost:1337/api/market?populate[banner][populate]&populate[information][populate]&locale=en')
        else
            pageData = await this.$axios.$get('http://localhost:1337/api/market?populate[banner][populate]&populate[information][populate]&locale=es-MX')
        
        //console.log(pageData)
        commit('StateAssign', {pageMarkets: pageData.data.attributes})
    },
    async getPageBlog({commit,state}){
        this.$axios.setToken(false)
        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get('http://localhost:1337/api/page-blog?populate[banner][populate]&locale=en')
        else
            pageData = await this.$axios.$get('http://localhost:1337/api/page-blog?populate[banner][populate]&locale=es-MX')
        
        //console.log(pageData)
        commit('StateAssign', {pageBlog: pageData.data.attributes})
    },
    async getPageContact({commit, state}){
        this.$axios.setToken(false)
        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.get('http://localhost:1337/api/contact?locale=en')
        else 
            pageData = await this.$axios.get('http://localhost:1337/api/contact?locale=es-MX')
            
        commit('StateAssign', {pageContact: pageData.data.data.attributes})
    },

    async getPagePolnacGroup({commit, state}){
        this.$axios.setToken(false)
        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.get('http://localhost:1337/api/polnac-group?populate[banner][populate]=%2A&populate[group][populate]=%2A&populate[information][populate]=%2A&populate[imgLogoTranspolimer][populate]=%2A&populate[imgLogoPoliresin][populate]=%2A&locale=en')
        else
            pageData = await this.$axios.get('http://localhost:1337/api/polnac-group?populate[banner][populate]=%2A&populate[group][populate]=%2A&populate[information][populate]=%2A&populate[imgLogoTranspolimer][populate]=%2A&populate[imgLogoPoliresin][populate]=%2A&locale=es-MX')
        
        //console.log(pageData)
        commit('StateAssign', {pagePolnacGroup: pageData.data.data.attributes})
    },
    async getPagePolnacBlue({commit, state}){
        this.$axios.setToken(false)
        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.get('http://localhost:1337/api/polnac-blue?populate[banner][populate]=%2A&populate[bussines][populate]=%2A&populate[economy][populate]=%2A&locale=en')
        else 
            pageData = await this.$axios.get('http://localhost:1337/api/polnac-blue?populate[banner][populate]=%2A&populate[bussines][populate]=%2A&populate[economy][populate]=%2A&locale=es-MX')

        commit('StateAssign', {pagePolnacBlue: pageData.data.data.attributes})
    },
    async getPageAlliances({commit, state}){
        this.$axios.setToken(false)
        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.get('http://localhost:1337/api/alliance?populate[banner][populate]=%2A&populate[companies][populate]=%2A&populate[information][populate]=%2A&locale=en')
        else 
            pageData = await this.$axios.get('http://localhost:1337/api/alliance?populate[banner][populate]=%2A&populate[companies][populate]=%2A&populate[information][populate]=%2A&locale=es-MX')
        
        commit('StateAssign', {pageAlliances: pageData.data.data.attributes})
    }
} 