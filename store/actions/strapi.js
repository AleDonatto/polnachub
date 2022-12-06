export default {
    async getPageHome({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            //pageData = await this.$axios.get('https://crm.polnac.com/api/home?populate[banner][populate]=%2A&populate[featured][populate]=%2A&populate[tecOffices][populate]=%2A&populate[alliances][populate]=%2A&populate[blog][populate]=%2A&populate[appointment][populate]=%2A&populate[imgOffices][populate]=%2A&locale=en')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/home?populate[banner][populate]=%2A&populate[featured][populate]=%2A&populate[tecOffices][populate]=%2A&populate[alliances][populate]=%2A&populate[blog][populate]=%2A&populate[appointment][populate]=%2A&populate[imgOffices][populate]=%2A&populate[Testimonials][populate]=%2A&locale=en`)
        else
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/home?populate[banner][populate]=%2A&populate[featured][populate]=%2A&populate[tecOffices][populate]=%2A&populate[alliances][populate]=%2A&populate[blog][populate]=%2A&populate[appointment][populate]=%2A&populate[imgOffices][populate]=%2A&populate[Testimonials][populate]=%2A&locale=es-MX`)
        
        //console.log(pageData)
        commit('StateAssign', {pageHome: pageData.data.attributes})
    },
    async getPageTranspolimer({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        
        if(state.lang === 'eng'){
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/pagetranspolimer?populate[head][populate]=%2A&populate[process][populate]=%2A&populate[section][populate]=%2A&populate[technologies][populate]=%2A&locale=en`) 
        }else
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/pagetranspolimer?populate[head][populate]=%2A&populate[process][populate]=%2A&populate[section][populate]=%2A&populate[technologies][populate]=%2A&locale=es-MX`)

        //console.log(pageData)
        commit('StateAssign', { pagetranspolimer: pageData.data.attributes})
    },
    async getPagePoliresin({commit,state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng'){
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/poliresin?populate[head][populate]=%2A&populate[subhead][populate]=%2A&populate[infraestructura][populate]=%2A&populate[process][populate]=%2A&populate[buy][populate]=%2A&populate[services][populate]=%2A&populate[sales][populate]=%2A&locale=en`)
        }else
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/poliresin?populate[head][populate]=%2A&populate[subhead][populate]=%2A&populate[infraestructura][populate]=%2A&populate[process][populate]=%2A&populate[buy][populate]=%2A&populate[services][populate]=%2A&populate[sales][populate]=%2A&locale=es-MX`)
        
        commit('StateAssign', {pagepoliresin: pageData.data.attributes})
    },
    async getPageInnvation({commit,state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/innovation-des?populate[banner][populate]=%2A&populate[normas][populate]=%2A&populate[equipos][populate]=%2A&locale=en`)
        else
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/innovation-des?populate[banner][populate]=%2A&populate[normas][populate]=%2A&populate[equipos][populate]=%2A&locale=es-MX`)
        
        //console.log(pageData)
        commit('StateAssign', {pageInnovation: pageData.data.attributes})
    },

    async getAboutUs({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/about-us?populate[head][populate]=%2A&populate[mision][populate]=%2A&populate[vision][populate]=%2A&populate[businesValues][populate]=%2A&populate[quality][populate]=%2A&populate[work][populate]=%2A&populate[imgWork][populate]=%2A&populate[ImgPurple][populate]=%2A&populate[timeline][populate]=%2A&populate[imgMapMexico][populate]=%2A&populate[imgMaterial][populate]=%2A&populate[imgMapUsa][populate]=%2A&populate[imgmapEurope][populate]=%2A&populate[imgMapLatam][populate]=%2A&populate[imgADN][populate]=%2A&locale=en`)
        else
            //pageData = await this.$axios.$get('https://crm.polnac.com/api/about-us?populate[head][populate]=%2A&populate[mision][populate]=%2A&populate[vision][populate]=%2A&populate[businesValues][populate]=%2A&populate[quality][populate]=%2A&locale=es-MX')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/about-us?populate[head][populate]=%2A&populate[mision][populate]=%2A&populate[vision][populate]=%2A&populate[businesValues][populate]=%2A&populate[quality][populate]=%2A&populate[work][populate]=%2A&populate[imgWork][populate]=%2A&populate[ImgPurple][populate]=%2A&populate[timeline][populate]=%2A&populate[imgMapMexico][populate]=%2A&populate[imgMaterial][populate]=%2A&populate[imgMapUsa][populate]=%2A&populate[imgmapEurope][populate]=%2A&populate[imgMapLatam][populate]=%2A&populate[imgADN][populate]=%2A&locale=es-MX`)
        
        //console.log(pageData)
        commit('StateAssign', {pageAboutUs: pageData.data.attributes})
    },

    async getPageSearchProducts({commit, state,dispatch}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/search-product?populate[banner][populate]=%2A&locale=en`)
        else
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/search-product?populate[banner][populate]=%2A&locale=es-MX`)
        
        commit('StateAssign', {pageSearchProducts: pageData.data.attributes})
        dispatch('getCredentials')
    },

    async getPageServices({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/service?populate[banner][populate]=%2A&populate[technologies][populate]=%2A&populate[information][populate]=%2A&locale=en`)
        else
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/service?populate[banner][populate]=%2A&populate[technologies][populate]=%2A&populate[information][populate]=%2A&locale=es-MX`)
        
        commit('StateAssign', {pageServices: pageData.data.attributes})
    },
    async getPageMarkets({commit,state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/market?populate[banner][populate]=%2A&populate[information][populate]=%2A&locale=en`)
        else
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/market?populate[banner][populate]=%2A&populate[information][populate]=%2A&locale=es-MX`)
        
        //console.log(pageData)
        commit('StateAssign', {pageMarkets: pageData.data.attributes})
    },
    async getPageBlog({commit,state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/page-blog?populate[banner][populate]=%2A&locale=en`)
        else
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/page-blog?populate[banner][populate]=%2A&locale=es-MX`)
        
        //console.log(pageData)
        commit('StateAssign', {pageBlog: pageData.data.attributes})
    },
    async getPageContact({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/contact?locale=en`)
        else 
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/contact?locale=es-MX`)
            
        commit('StateAssign', {pageContact: pageData.data.attributes})
    },

    async getPagePolnacGroup({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/polnac-group?populate[banner][populate]=%2A&populate[group][populate]=%2A&populate[information][populate]=%2A&populate[imgLogoTranspolimer][populate]=%2A&populate[imgLogoPoliresin][populate]=%2A&locale=en`)
        else
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/polnac-group?populate[banner][populate]=%2A&populate[group][populate]=%2A&populate[information][populate]=%2A&populate[imgLogoTranspolimer][populate]=%2A&populate[imgLogoPoliresin][populate]=%2A&locale=es-MX`)
        
        //console.log(pageData)
        commit('StateAssign', {pagePolnacGroup: pageData.data.attributes})
    },
    async getPagePolnacBlue({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/polnac-blue?populate[banner][populate]=%2A&populate[bussines][populate]=%2A&populate[economy][populate]=%2A&locale=en`)
        else 
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/polnac-blue?populate[banner][populate]=%2A&populate[bussines][populate]=%2A&populate[economy][populate]=%2A&locale=es-MX`)

        commit('StateAssign', {pagePolnacBlue: pageData.data.attributes})
    },
    async getPageAlliances({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/alliance?populate[banner][populate]=%2A&populate[companies][populate]=%2A&populate[information][populate]=%2A&locale=en`)
        else 
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/alliance?populate[banner][populate]=%2A&populate[companies][populate]=%2A&populate[information][populate]=%2A&locale=es-MX`)
        
        commit('StateAssign', {pageAlliances: pageData.data.attributes})
    },
    async getPageLaboratory({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/laboratory?populate[banner][populate]=%2A&populate[test][populate]=%2A&locale=en`)
        else 
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/laboratory?populate[banner][populate]=%2A&populate[test][populate]=%2A&locale=es-MX`)
        
        commit('StateAssign', {pageLaboratory: pageData.data.attributes})
    },
    async getPagePolnacWiki({commit,state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/polnac-wiki?populate[banner][populate]=%2A&populate[information][populate]=%2A&locale=en`)
        else 
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/polnac-wiki?populate[banner][populate]=%2A&populate[information][populate]=%2A&locale=es-MX`)
        
        commit('StateAssign', {pagePolnacWiki: pageData.data.attributes})
    },
    async getPageQuestions({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/questions-page?populate[banner][populate]=%2A&populate[optionsCredit ][populate]=%2A&populate[optionsCredit][populate]=%2A&populate[orders][populate]=%2A&populate[billings][populate]=%2A&populate[samples][populate]=%2A&populate[products][populate]=%2A&populate[others][populate]=%2A&populate[contact][populate]=%2A&locale=en`)
        else 
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/questions-page?populate[banner][populate]=%2A&populate[optionsCredit ][populate]=%2A&populate[optionsCredit][populate]=%2A&populate[orders][populate]=%2A&populate[billings][populate]=%2A&populate[samples][populate]=%2A&populate[products][populate]=%2A&populate[others][populate]=%2A&populate[contact][populate]=%2A&locale=es-MX`)
        
        commit('StateAssign', {pageQuestions: pageData.data.attributes})
    },
    async getPageWork({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/work-polnac?populate[banner][populate]=%2A&populate[lider][populate]=%2A&locale=en`)
        else 
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/work-polnac?populate[banner][populate]=%2A&populate[lider][populate]=%2A&locale=es-MX`)
        
        commit('StateAssign', {pageWork: pageData.data.attributes})
    },

    async getAllMarkets({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/single-markets/?populate[imgLogo][populate]=%2A&populate[imgMiniarure][populate]=%2A&populate[imgBanner][populate]=%2A&populate[imgCarousel][populate]=%2A&locale=en`)
        else 
            pageData = await this.$axios.$get(`https://crm.polnac.com/api/single-markets/?populate[imgLogo][populate]=%2A&populate[imgMiniarure][populate]=%2A&populate[imgBanner][populate]=%2A&populate[imgCarousel][populate]=%2A&locale=es-MX`)
        
        //console.log(pageData)
        commit('StateAssign', {mercados: pageData.data})
        return pageData.data
    },
    async getMarketById({commit, state},id){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData
        if(state.lang === 'eng')
            pageData = await this.$axios.get(`https://crm.polnac.com/api/single-markets/${id}/?populate[imgLogo][populate]=%2A&populate[imgMiniarure][populate]=%2A&populate[imgBanner][populate]=%2A&populate[imgCarousel][populate]=%2A&locale=en`)
        else 
            pageData = await this.$axios.get(`https://crm.polnac.com/api/single-markets/${id}/?populate[imgLogo][populate]=%2A&populate[imgMiniarure][populate]=%2A&populate[imgBanner][populate]=%2A&populate[imgCarousel][populate]=%2A&locale=es-MX`)
        
        //commit('StateAssign', {pageWork: pageData.data.data.attributes})
        return pageData.data
    },

    async getAllProducts({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData 
        if(state.lang === 'eng')
            pageData = await this.$axios.get(`https://crm.polnac.com/api/products?populate[imgBanner][populate]=%2A&populate[imgMiniature][populate]=%2A&populate[imagesHead][populate]=%2A&populate[imgCarousel][populate]=%2A&populate[imagesBody][populate]=%2A&populate[typeProduct][populate]=%2A&locale=en`)
        else 
            pageData = await this.$axios.get(`https://crm.polnac.com/api/products?populate[imgBanner][populate]=%2A&populate[imgMiniature][populate]=%2A&populate[imagesHead][populate]=%2A&populate[imgCarousel][populate]=%2A&populate[imagesBody][populate]=%2A&populate[typeProduct][populate]=%2A&locale=es-MX`)
        
        commit('StateAssign', {productos: pageData.data})
        return pageData.data
    },

    async getProductsById({commit, state},id){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData 
        if(state.lang === 'eng')
            pageData = await this.$axios.get(`https://crm.polnac.com/api/products/${id}/?populate[imgBanner][populate]=%2A&populate[imgMiniature][populate]=%2A&populate[imagesHead][populate]=%2A&populate[imgCarousel][populate]=%2A&populate[imagesBody][populate]=%2A&populate[typeProduct][populate]=%2A&locale=en`)
        else 
            pageData = await this.$axios.get(`https://crm.polnac.com/api/products/${id}/?populate[imgBanner][populate]=%2A&populate[imgMiniature][populate]=%2A&populate[imagesHead][populate]=%2A&populate[imgCarousel][populate]=%2A&populate[imagesBody][populate]=%2A&populate[typeProduct][populate]=%2A&locale=es-MX`)
        
        //commit('StateAssign', {pageWork: pageData.data.data.attributes})
        return pageData.data
    },

    async getAllMarcas({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData 
        if(state.lang === 'eng')
            pageData = await this.$axios.get(`https://crm.polnac.com/api/marcas/?populate[image][populate]=%2A&populate[imagesCarousel][populate]=%2A&locale=en`)
        else 
            pageData = await this.$axios.get(`https://crm.polnac.com/api/marcas/?populate[image][populate]=%2A&populate[imagesCarousel][populate]=%2A&locale=es-MX`)
        
        commit('StateAssign', {marcas: pageData.data })
        return pageData.data
    },

    async getMarcaById({commit, state},id){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData 
        if(state.lang === 'eng')
            pageData = await this.$axios.get(`https://crm.polnac.com/api/marcas/${id}/?populate[image][populate]=%2A&populate[imagesCarousel][populate]=%2A&locale=en`)
        else 
            pageData = await this.$axios.get(`https://crm.polnac.com/api/marcas/${id}/?populate[image][populate]=%2A&populate[imagesCarousel][populate]=%2A&locale=es-MX`)
        
        return pageData.data
    },

    async getAllBlogs({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData 
        if(state.lang === 'eng')
            pageData = await this.$axios.get(`https://crm.polnac.com/api/blogs/?populate[imgContent][populate]=%2A&locale=es-MX`)
        else 
            pageData = await this.$axios.get(`https://crm.polnac.com/api/blogs/?populate[imgContent][populate]=%2A&locale=es-MX`)
        
        return pageData.data
    },

    async getBlogById({commit, state},id){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData 
        if(state.lang === 'eng')
            pageData = await this.$axios.get(`https://crm.polnac.com/api/blogs/${id}/?populate[imgContent][populate]=%2A&`)
        else 
            pageData = await this.$axios.get(`https://crm.polnac.com/api/blogs/${id}/?populate[imgContent][populate]=%2A&`)
        
        //console.log(pageData)
        return pageData.data
    },

    async getAllTipoPruebas({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData 
        if(state.lang === 'eng')
            pageData = await this.$axios.get(`https://crm.polnac.com/api/lab-pruebas?populate[tipos_prueba][populate]=%2A&locale=en`)
        else 
            pageData = await this.$axios.get(`https://crm.polnac.com/api/lab-pruebas?populate[tipos_prueba][populate]=%2A&locale=es-MX`)
        
        commit('StateAssign', {pruebasLab: pageData.data})
        return pageData.data
    },
    async getAllRegiones({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData 
        if(state.lang === 'eng')
            pageData = await this.$axios.get(`https://crm.polnac.com/api/regions?populate[mapRegion][populate]=%2A`)
        else 
            pageData = await this.$axios.get(`https://crm.polnac.com/api/regions?populate[mapRegion][populate]=%2A`)
        
        return pageData.data
    },
    async getSucursales({commit, state}){
        this.$axios.setToken(false)
        //this.$axios.setHeader(false)
        this.$axios.setHeader('Accept',false)
        this.$axios.setHeader('api-token',false)
        this.$axios.setHeader("user-email", false)

        let pageData 
        if(state.lang === 'eng')
            pageData = await this.$axios.get(`https://crm.polnac.com/api/sucursales?populate[imgOfices][populate]=%2A&populate[region][populate]=%2A`)
        else 
            pageData = await this.$axios.get(`https://crm.polnac.com/api/sucursales?populate[imgOfices][populate]=%2A&populate[region][populate]=%2A`)
        
        return pageData.data
    },

    async getPageCamping({commit, state}){

        this.$axios.setHeader('Accept',null)
        this.$axios.setHeader('api-token',null)
        this.$axios.setHeader("user-email", null)
        this.$axios.setHeader('Authorization',null)

        let pageData
        pageData = await this.$axios.$get(`https://crm.polnac.com/api/landing?populate[banner][populate]=%2A&populate[images][populate]=%2A&populate[featured][populate]=%2A&populate[testimonials][populate]=%2A&populate[tecnologies][populate]=%2A&populate[bgForm][populate]=%2A&populate[imgOffices][populate]=%2A`)

        /*if(state.lang === 'eng')
            //pageData = await this.$axios.get('${urlContent}/api/home?populate[banner][populate]=%2A&populate[featured][populate]=%2A&populate[tecOffices][populate]=%2A&populate[alliances][populate]=%2A&populate[blog][populate]=%2A&populate[appointment][populate]=%2A&populate[imgOffices][populate]=%2A&locale=en')
            pageData = await this.$axios.$get(`${urlContent}/api/landing?populate[banner][populate]=%2A&populate[images][populate]=%2A&populate[featured][populate]=%2A&populate[testimonials][populate]=%2A&populate[tecnologies][populate]=%2A&pupolate[bgForm][populate]=%2A`)
        else
            pageData = await this.$axios.$get(`${urlContent}/api/landing?populate[banner][populate]=%2A&populate[images][populate]=%2A&populate[featured][populate]=%2A&populate[testimonials][populate]=%2A&populate[tecnologies][populate]=%2A&pupolate[bgForm][populate]=%2A`)*/
        
        //console.log(pageData)
        commit('StateAssign', {pageCamping: pageData.data.attributes})
    },

} 