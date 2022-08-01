export default {
    async getCredentials({commit, dispatch, state}){

        const params = new URLSearchParams();
        params.append('username', state.userSalesforce.username)
        params.append('password', state.userSalesforce.password)
        params.append('grant_type', state.userSalesforce.grant_type)
        params.append('client_id', state.userSalesforce.client_id)
        params.append('client_secret', state.userSalesforce.client_secret)

        //await this.$axios.post('https://test.salesforce.com/Token', params)
        await this.$axios.post('/salesforce/services/oauth2/token', params)
        .then(res => {
            let access_token = res.data.access_token
            
            this.$axios.setToken(access_token, 'Bearer')
            //this.axios.defaults.headers.common = {'Authorization': `Bearer ${access_token}`}

            localStorage.setItem('userToken', access_token)
            commit('StateAssign', {credentials: res.data})
            console.log('get credentials')
        })
        .catch( err => {
            console.log('getToken(): ' + err)
        })
    }, 

    async getCredentialsOther({commit, dispatch, state}){

        const params = new URLSearchParams();
        params.append('username', state.userSalesforce.username)
        params.append('password', state.userSalesforce.password)
        params.append('grant_type', state.userSalesforce.grant_type)
        params.append('client_id', state.userSalesforce.client_id)
        params.append('client_secret', state.userSalesforce.client_secret)

        await this.$axios.post('https://test.salesforce.com/services/oauth2/token', params)
        //await this.$axios.post('/salesforce/services/oauth2/token', params)
        .then(res => {
            let access_token = res.data.access_token
            
            this.$axios.setToken(access_token, 'Bearer')
            //this.axios.defaults.headers.common = {'Authorization': `Bearer ${access_token}`}

            localStorage.setItem('userToken', access_token)
            commit('StateAssign', {credentials: res.data})
            console.log('get credentials')
        })
        .catch( err => {
            console.log('getToken(): ' + err)
        })
    }, 

    async getTypeResina ({commit}){
        const params = new URLSearchParams()
        params.append('q', 'SELECT+Name+FROM+Familia_de_productos__c')

        await this.$axios.get('/products/services/data/v55.0/query/?q=SELECT+Name+FROM+Familia_de_productos__c')
        .then( res => {
            //console.log(res)
            commit('StateAssign', {pTipoResina: res.data})
        })
    },

    async getMercado({commit}){
        const params = new URLSearchParams()
        params.append('q', 'SELECT+Name+FROM+Mercados__c')

        await this.$axios.get('/products/services/data/v55.0/query/?q=SELECT+Name+FROM+Mercados__c')
        .then( res => {
            //console.log(res)
            commit('StateAssign', {pMercado: res.data})
        })
    },

    async getMetodoTransformacion({commit}){
        const params = new URLSearchParams()
        params.append('q', 'SELECT+Name+FROM+Metodos_de_Transformaci_n__c')

        //await this.$axios.get('/salesforcepolnac/services/data/v55.0/query/', params)
        await this.$axios.get('/products/services/data/v55.0/query/?q=SELECT+Name+FROM+Metodos_de_Transformaci_n__c')
        .then(res => {
            //console.log(res.data)
            commit('StateAssign', {pMetTransformacion: res.data})
        })
    },

    async getFabricante({commit, dispatch, state}){

        const qparams = new URLSearchParams()
        qparams.append('q', 'SELECT+Name+FROM+Fabricantes_Web__c')
    
        await this.$axios.get('/products/services/data/v55.0/query/?q=SELECT+Name+FROM+Fabricantes_Web__c')
        .then(res => {
            //console.log(res)
            commit('StateAssign', {pFabricante: res.data})
        })
        .catch(err => {
            //console.log(err)
        })

    },

    async consProducts({commit, dispatch ,state}, product){

        const {type} = product
        const query = `SELECT+Name,Family,Activo_en_web_P__c,Tipo_de_Resina_P__c,Fabricante_P__c,
        Color_P__c,Densidad_P__c,Impacto_IZOD_P__c,Dureza_Shore_p__c,Concentraci_n_P__c,Viscosidad_P__c,Modulo_de_flexi_n_P__c,Detalles_producto_web_P__c,
        Indice_de_Fluidez_p__c,Aditivo_P__c,Calzado_y_Textil_Check__c,Automotriz_y_Transportaci_n_Check__c,Construcci_n_Check__c,Cuidado_Personal_Check__c,
        Empaque_R_gido_Check__c,Consumo_Check__c,Industrial_Check__c,Electrodom_sticos_Check__c,El_ctrico_Electr_nico_Check__c,Agr_cola_Check__c,Empaque_Flexible_Check__c,
        Coextrusi_n_Check__c,Rotomoldeo_Check__c,Inyecci_n_Check__c,Extrusi_n_Chek__c,Termoformado_Check__c,Inyecci_n_Soplo_Check__c,Grupo_Pag_Web_p__c,
        Extrusi_n_Soplo_Chek__c+FROM+Product2+WHERE(${type} = True)`

        await this.$axios.get(`/products/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            console.log(res)
            commit('StateAssign', {tablePruebas: res.data})
        })
    },

    async consTypeResina({commit, dispatch, state},product){
        const query = `SELECT+Name,Family,Activo_en_web_P__c,Tipo_de_Resina_P__c,Fabricante_P__c,
        Color_P__c,Densidad_P__c,Impacto_IZOD_P__c,Dureza_Shore_p__c,Concentraci_n_P__c,Viscosidad_P__c,Modulo_de_flexi_n_P__c,Detalles_producto_web_P__c,
        Indice_de_Fluidez_p__c,Aditivo_P__c,Calzado_y_Textil_Check__c,Automotriz_y_Transportaci_n_Check__c,Construcci_n_Check__c,Cuidado_Personal_Check__c,
        Empaque_R_gido_Check__c,Consumo_Check__c,Industrial_Check__c,Electrodom_sticos_Check__c,El_ctrico_Electr_nico_Check__c,Agr_cola_Check__c,Empaque_Flexible_Check__c,
        Coextrusi_n_Check__c,Rotomoldeo_Check__c,Inyecci_n_Check__c,Extrusi_n_Chek__c,Termoformado_Check__c,Inyecci_n_Soplo_Check__c,Grupo_Pag_Web_p__c,
        Extrusi_n_Soplo_Chek__c+FROM+Product2+WHERE (Family='${product}')`

        console.log(product)

        await this.$axios.get(`/products/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            console.log(res)
            commit('StateAssign', {tablePruebas: res.data})

            dispatch('createtable')
        })  
    },

    createtable({commit, dispatch, state}){
        const products = state.tablePruebas.records

        products.map(item => {

            switch (item.Tipo_de_Resina_P__c) {
                case 'PE':
                    state.tablePE.push(item)
                    break;
                case 'PP': 
                    state.tablePP.push(item)
                    break;
                case 'Estirénicos': 
                    break;
                case 'Rotomoldeo': 
                    break;
                case 'Masterbatch': 
                    break;
                case 'Ingeniería': 
                    break;
                case 'Compuestos precolor': 
                    break;
                case 'Compuestos cargados': 
                    break;
                case 'Elastómeros Termoplásticos': 
                    break;
                case 'PVC': 
                    break;
                case 'Concentrados de Aditivos': 
                    break;
                case 'Concentrados de Calcio': 
                    break;
                case 'Bioplásticos': 
                    break;
                case 'Hules': 
                    break;
            
                default:
                    break;
            }
        })
    }




} 