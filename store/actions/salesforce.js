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
        

    }


} 