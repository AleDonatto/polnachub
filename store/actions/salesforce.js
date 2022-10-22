export default {
    async getCredentials({commit, dispatch, state}){

        const params = new URLSearchParams();
        params.append('username', process.env.SALESFORCE_USER)
        params.append('password', process.env.SALESFORCE_PASSWORD)
        params.append('grant_type', process.env.SALESFORCE_GRANT_TYPE)
        params.append('client_id', process.env.SALESFORCE_CLIENT_ID)
        params.append('client_secret', process.env.SALESFORCE_CLIENT_SECRET)

        //this.$axios.setHeader('Access-Control-Allow-Origin', '*')
        //this.$axios.setHeader('Authorization', '*')
        //this.$axios.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH,OPTIONS')

        //await this.$axios.post('https://test.salesforce.com/Token', params)
        await this.$axios.$post('/salesforce/services/oauth2/token', params)
        .then(res => {
            let access_token = res.data.access_token
            //let access_token = '00DR00000002gFl!AQcAQMO.J4uTITbz2byqYl3250qT7PcJMACPQdkCNLf1ehYVyIlsB0FUO3kSWUBHzB3Z1RthAvWUp8XEkEjFj4y06IMVeUfz'
            
            this.$axios.setToken(access_token, 'Bearer')
            //this.axios.defaults.headers.common = {'Authorization': `Bearer ${access_token}`}

            //localStorage.setItem('userToken', access_token)
            commit('StateAssign', {credentials: res.data})
            //console.log('get credentials')
        })
        .catch( err => {
            console.log('getToken with Proxy (): ' + err)
        })
    }, 

    async getCredentialsOther({commit, dispatch, state}){

        const params = new URLSearchParams();
        params.append('grant_type', process.env.SALESFORCE_GRANT_TYPE)
        params.append('client_id', process.env.SALESFORCE_CLIENT_ID)
        params.append('client_secret', process.env.SALESFORCE_CLIENT_SECRET)
        params.append('username', process.env.SALESFORCE_USER)
        params.append('password', process.env.SALESFORCE_PASSWORD)

        /*const json_data= {
            'grant_type': process.env.SALESFORCE_GRANT_TYPE,
            'client_id': process.env.SALESFORCE_CLIENT_ID,
            'client_secret': process.env.SALESFORCE_CLIENT_SECRET,
            'username': process.env.SALESFORCE_USER,
            'password': process.env.SALESFORCE_PASSWORD
        }*/

        this.$axios.setHeader('Access-Control-Allow-Methods','POST')
        this.$axios.setHeader('Access-Control-Allow-Origin', '*')
        //this.$axios.setHeader('Authorization', '*')
        //this.$axios.setHeader('Content-Type', 'application/json',)
        //this.$axios.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH,OPTIONS')

        await this.$axios.$post('https://test.salesforce.com/services/oauth2/token', params)
        //await this.$axios.post('https://test.salesforce.com/services/oauth2/token?username=desatimx@polnac.com.bxt01&password=H1u2g3o435&grant_type=password&client_id=3MVG9Iu66FKeHhINolE5zsI1ShisdkRJu7w4dK2dqtwu4ye5nOA70PgSM_M9u58zLzERvwfmhdYWyt2pnyFxh&client_secret=C60E440505B55C377DB5B52E7FFF0BDB453E391F11F5642DBE01ACB680969F8F')
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

    async getProducto({commit, state}){
        const token = state.credentials.access_token
        this.$axios.setToken(token, 'Bearer')

        const params = new URLSearchParams()
        params.append('q', 'SELECT+Name+FROM+Familia_de_productos__c')

        await this.$axios.get('/information/services/data/v55.0/query/?q=SELECT+Name+FROM+Categoria_de_Productos__c')
        //await this.$axios.get('https://polnac--bxt01.my.salesforce.com/services/data/v55.0/query/?q=SELECT+Name+FROM+Categoria_de_Productos__c')
        .then( res => {
            //console.log(res)
            commit('StateAssign', {pProducto: res.data})
        })
    },

    async getMercado({commit, state}){
        const token = state.credentials.access_token
        this.$axios.setToken(token, 'Bearer')

        const params = new URLSearchParams()
        params.append('q', 'SELECT+Name+FROM+Mercados__c')

        await this.$axios.get('/information/services/data/v55.0/query/?q=SELECT+Name+FROM+Mercados__c')
        .then( res => {
            //console.log(res)
            commit('StateAssign', {pMercado: res.data})
        })
    },

    async getMetodoTransformacion({commit, state}){
        const token = state.credentials.access_token
        this.$axios.setToken(token, 'Bearer')

        const params = new URLSearchParams()
        params.append('q', 'SELECT+Name+FROM+Metodos_de_Transformaci_n__c')

        //await this.$axios.get('/salesforcepolnac/services/data/v55.0/query/', params)
        await this.$axios.get('/information/services/data/v55.0/query/?q=SELECT+Name+FROM+M_todos_de_transformaci_n__c')
        .then(res => {
            //console.log(res.data)
            commit('StateAssign', {pMetTransformacion: res.data})
        })
    },

    async getFabricante({commit, dispatch, state}){
        const token = state.credentials.access_token
        this.$axios.setToken(token, 'Bearer')

        const qparams = new URLSearchParams()
        qparams.append('q', 'SELECT+Name+FROM+Fabricantes_Web__c')
    
        await this.$axios.get('/information/services/data/v55.0/query/?q=SELECT+Name+FROM+Fabricantes_Web__c')
        .then(res => {
            //console.log(res)
            commit('StateAssign', {pFabricante: res.data})
        })
        .catch(err => {
            //console.log(err)
        })

    },

    searchProducts({commit, state, dispatch}, data){
        commit('StateAssign', {valProducto: data.producto})
        commit('StateAssign', {valMercado: data.mercado})
        commit('StateAssign', {valMTransformacion: data.mTransformacion})
        commit('StateAssign', {valFabricante: data.fabricante})

        dispatch('cleanTables')

        if(data.producto !== '' && data.mercado === '' && data.mTransformacion === '' && data.fabricante === ''){
            dispatch('consProducts', data.producto)
        }
        if(data.producto === '' && data.mercado === '' && data.mTransformacion === '' && data.fabricante !== ''){
            console.log('fabricante')
            dispatch('consFabricante', data.fabricante)
        }
        if(data.producto === '' && data.mercado === '' && data.mTransformacion !== '' && data.fabricante === ''){
            dispatch('consMTransformacion', data.mTransformacion)
        }
        if(data.producto === '' && data.mercado !== '' && data.mTransformacion === '' && data.fabricante === ''){
            dispatch('consMercado', data.mercado)
        }

        if(data.producto !== '' && data.mercado === '' && data.mTransformacion === '' && data.fabricante !== ''){
            const producto = data.producto
            const fabricante = data.fabricante
            dispatch('consProductsFabricantes',  {producto, fabricante} )
        }
        if(data.producto !== '' && data.mercado === '' && data.mTransformacion !== '' && data.fabricante !== ''){
            const producto = data.producto
            const fabricante = data.fabricante
            const transformacion = data.mTransformacion
            dispatch('consProduFabrTras',  {producto, fabricante, transformacion} )
        }
        if(data.producto !== '' && data.mercado === '' && data.mTransformacion !== '' && data.fabricante === ''){
            const producto = data.producto
            const transformacion = data.mTransformacion
            dispatch('consProduTran',  {producto, transformacion} )
        }
        if(data.producto !== '' && data.mercado !== '' && data.mTransformacion !== '' && data.fabricante === ''){
            const producto = data.producto
            const mercado = data.mercado
            const transformacion = data.mTransformacion
            dispatch('consProduMerTras',  {producto, mercado, transformacion} )
        }

        if(data.producto !== '' && data.mercado !== '' && data.mTransformacion === '' && data.fabricante !== ''){
            const producto = data.producto
            const mercado = data.mercado
            const fabricante = data.fabricante
            dispatch('consProduFabrMerc',  {producto, mercado, fabricante} )
        }


        if(data.producto === '' && data.mercado !== '' && data.mTransformacion !== '' && data.fabricante === ''){
            const mercado = data.mercado
            const transformacion = data.mTransformacion
            dispatch('consMerTras',  {mercado, transformacion} )
        }
        if(data.producto === '' && data.mercado !== '' && data.mTransformacion === '' && data.fabricante !== ''){
            const mercado = data.mercado
            const fabricante = data.fabricante
            dispatch('consMerFabr',  {mercado, fabricante} )
        }
        if(data.producto === '' && data.mercado === '' && data.mTransformacion !== '' && data.fabricante !== ''){
            const fabricante = data.fabricante
            const transformacion = data.mTransformacion
            dispatch('consTransFabr',  {fabricante, transformacion} )
        }
        if(data.producto === '' && data.mercado !== '' && data.mTransformacion !== '' && data.fabricante !== ''){
            const fabricante = data.fabricante
            const transformacion = data.mTransformacion
            const mercado = data.mercado
            dispatch('consTransFabrMerc',  {fabricante, transformacion, mercado} )
        }
        if(data.producto !== '' && data.mercado !== '' && data.mTransformacion !== '' && data.fabricante !== ''){
            const producto = data.producto
            const fabricante = data.fabricante
            const mercado = data.mercado
            const transformacion = data.mTransformacion
            dispatch('constAllFilters', {producto, fabricante, mercado, transformacion})
        }

    },

    async consProducts({commit, dispatch ,state}, product){
        const token = state.credentials.access_token
        this.$axios.setToken(token, 'Bearer')

        /*const query = `SELECT+Name,Family,Activo_en_web_P__c,Tipo_de_Resina_P__c,Fabricante_P__c,
        Color_P__c,Densidad_P__c,Impacto_IZOD_P__c,Dureza_Shore_p__c,Concentraci_n_P__c,Viscosidad_P__c,Modulo_de_flexi_n_P__c,Detalles_producto_web_P__c,
        Indice_de_Fluidez_p__c,Aditivo_P__c,Calzado_y_Textil_Check__c,Automotriz_y_Transportaci_n_Check__c,Construcci_n_Check__c,Cuidado_Personal_Check__c,
        Empaque_R_gido_Check__c,Consumo_Check__c,Industrial_Check__c,Electrodom_sticos_Check__c,El_ctrico_Electr_nico_Check__c,Agr_cola_Check__c,Empaque_Flexible_Check__c,
        Coextrusi_n_Check__c,Rotomoldeo_Check__c,Inyecci_n_Check__c,Extrusi_n_Chek__c,Termoformado_Check__c,Inyecci_n_Soplo_Check__c,Grupo_Pag_Web_p__c,
        Extrusi_n_Soplo_Chek__c+FROM+Product2+WHERE(${type} = True)`*/
        const query = `SELECT+NAME, Description, Familia_de_productos__r.Name, Proveedor_Pweb__r.Name, Extrusion__r.Name, Extrusion_Blow_Molding__r.Name, 
        Injection__r.Name, Injection_Blow_Molding__r.Name, Thermoforming__r.Name, Coextrusion__r.Name, Rotomolding__r.Name, Construction__r.Name, 
        Electrical_Electronics__r.Name, Medical_Pharmaceutical__r.Name, Personal__r.Name, Footwear__r.Name, Agriculture__r.Name, Automotive__r.name, 
        Rigid_Packaging__r.Name, Industrial__r.Name, Flexible_Packaging__r.Name, Appliances__r.Name, Consumer__r.Name, Activo_en_web__c, Grupos__r.Name, 
        Grupo__r.Name, Carrier__c, Densidad__c, Indice_de_Fluidez_p__c, Aditivo__c, Color__c, Impacto_IZOD__c, Dureza_Shore__c, Concentraci_n__c, Visco__c, 
        Modulo_de_flexi_n__c, Detalles_producto_web__c, Description__c+FROM+Product2+WHERE (Grupos__r.Name='${product}')`

        await this.$axios.get(`/information/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            //console.log(res)
            commit('StateAssign', {tablePruebas: res.data})
            console.log(state.tablePruebas)
            if(res.data.records.length === 0){
                commit('StateAssign', {showMsgProd: true})
            }
            /*else{
                dispatch('createtables')
            }*/
        })
        .catch(err => {
            console.log(err.response)
        })
    },
    async consFabricante({commit, dispatch, state},fabricante){
        const token = state.credentials.access_token
        this.$axios.setToken(token, 'Bearer')

        const query = `SELECT+NAME,Description,Familia_de_productos__r.Name,Proveedor_Pweb__r.Name, 
        Extrusion__r.Name,Extrusion_Blow_Molding__r.Name,Injection__r.Name,Injection_Blow_Molding__r.Name, 
        Thermoforming__r.Name,Coextrusion__r.Name,Rotomolding__r.Name,Construction__r.Name, 
        Electrical_Electronics__r.Name,Medical_Pharmaceutical__r.Name,Personal__r.Name, 
        Footwear__r.Name,Agriculture__r.Name,Automotive__r.name,Rigid_Packaging__r.Name, 
        Industrial__r.Name,Flexible_Packaging__r.Name,Appliances__r.Name,Consumer__r.Name, 
        Activo_en_web__c,Grupos__r.Name,Grupo__r.Name,Carrier__c, Densidad__c,Indice_de_Fluidez_p__c, 
        Aditivo__c,Color__c,Impacto_IZOD__c,Dureza_Shore__c,Concentraci_n__c,Visco__c, 
        Modulo_de_flexi_n__c,Detalles_producto_web__c,Description__c+FROM+Product2+WHERE (Proveedor_Pweb__r.Name='${fabricante}')`

        await this.$axios.get(`/information/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            commit('StateAssign', {tablePruebas: res.data})
            console.log(res.data)
            if(res.data.records.length === 0){
                commit('StateAssign', {showMsgProd: true})
            }else{
                dispatch('createtables')
            }
        })  
    },
    async consMercado({commit, dispatch, state}, mercado){
        const token = state.credentials.access_token
        this.$axios.setToken(token, 'Bearer')

        const query = `SELECT+NAME, Description, Familia_de_productos__r.Name, Proveedor_Pweb__r.Name, 
        Extrusion__r.Name, Extrusion_Blow_Molding__r.Name, Injection__r.Name, Injection_Blow_Molding__r.Name, 
        Thermoforming__r.Name, Coextrusion__r.Name, Rotomolding__r.Name, Construction__r.Name, 
        Electrical_Electronics__r.Name, Medical_Pharmaceutical__r.Name, Personal__r.Name, 
        Footwear__r.Name, Agriculture__r.Name, Automotive__r.name, Rigid_Packaging__r.Name, 
        Industrial__r.Name, Flexible_Packaging__r.Name, Appliances__r.Name, Consumer__r.Name, 
        Activo_en_web__c, Grupos__r.Name, Grupo__r.Name, Carrier__c, Densidad__c, Indice_de_Fluidez_p__c, 
        Aditivo__c, Color__c, Impacto_IZOD__c, Dureza_Shore__c, Concentraci_n__c, Visco__c, 
        Modulo_de_flexi_n__c, Detalles_producto_web__c, Description__c+FROM+Product2+WHERE (Industrial__r.Name='${mercado}' 
        OR Consumer__r.Name='${mercado}' OR Automotive__r.Name='${mercado}' OR Electrical_Electronics__r.Name='${mercado}'
        OR Medical_Pharmaceutical__r.Name='${mercado}' OR Construction__r.Name='${mercado}' OR Flexible_Packaging__r.Name='${mercado}'
        OR Appliances__r.Name='${mercado}' OR Agriculture__r.Name='${mercado}' OR Rigid_Packaging__r.Name='${mercado}' OR Personal__r.Name='${mercado}'
        OR Footwear__r.Name='${mercado}')`

        await this.$axios.get(`/information/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            console.log(res.data)
            commit('StateAssign', {tablePruebas: res.data})
            if(res.data.records.length === 0){
                commit('StateAssign', {showMsgProd: true})
            }else{
                dispatch('createtables')
            }
            //dispatch('createtables')
        })
        .catch(err => {
            console.log(err)
        })
    },
    async consMTransformacion({commit, dispatch, state}, transformacion){
        const token = state.credentials.access_token
        this.$axios.setToken(token, 'Bearer')
        
        const query = `SELECT+NAME, Description, Familia_de_productos__r.Name, Proveedor_Pweb__r.Name, 
        Extrusion__r.Name, Extrusion_Blow_Molding__r.Name, Injection__r.Name, Injection_Blow_Molding__r.Name, 
        Thermoforming__r.Name, Coextrusion__r.Name, Rotomolding__r.Name, Construction__r.Name, 
        Electrical_Electronics__r.Name, Medical_Pharmaceutical__r.Name, Personal__r.Name, 
        Footwear__r.Name, Agriculture__r.Name, Automotive__r.name, Rigid_Packaging__r.Name, 
        Industrial__r.Name, Flexible_Packaging__r.Name, Appliances__r.Name, Consumer__r.Name, 
        Activo_en_web__c, Grupos__r.Name, Grupo__r.Name, Carrier__c, Densidad__c, Indice_de_Fluidez_p__c, 
        Aditivo__c, Color__c, Impacto_IZOD__c, Dureza_Shore__c, Concentraci_n__c, Visco__c, 
        Modulo_de_flexi_n__c, Detalles_producto_web__c, Description__c+FROM+Product2+WHERE (Extrusion_Blow_Molding__r.Name='${transformacion}' 
        OR Thermoforming__r.Name='${transformacion}' OR Injection__r.Name='${transformacion}' OR Extrusion__r.Name='${transformacion}'
        OR Injection_Blow_Molding__r.Name='${transformacion}' OR Rotomolding__r.Name='${transformacion}' OR Thermoforming__r.Name='${transformacion}'
        OR Coextrusion__r.Name='${transformacion}')`

        await this.$axios.get(`/information/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            console.log(res.data)
            commit('StateAssign', {tablePruebas: res.data})
            if(res.data.records.length === 0){
                commit('StateAssign', {showMsgProd: true})
            }else{
                dispatch('createtables')
            }
            //dispatch('createtables')
        })
        .catch(err => {
            console.log(err)
        })
    },
    async consProductsFabricantes({commit, dispatch ,state}, data){
        const token = state.credentials.access_token
        this.$axios.setToken(token, 'Bearer')

        const query = `SELECT+NAME, Description, Familia_de_productos__r.Name, Proveedor_Pweb__r.Name, Extrusion__r.Name, Extrusion_Blow_Molding__r.Name, 
        Injection__r.Name, Injection_Blow_Molding__r.Name, Thermoforming__r.Name, Coextrusion__r.Name, Rotomolding__r.Name, Construction__r.Name, 
        Electrical_Electronics__r.Name, Medical_Pharmaceutical__r.Name, Personal__r.Name, Footwear__r.Name, Agriculture__r.Name, Automotive__r.name, 
        Rigid_Packaging__r.Name, Industrial__r.Name, Flexible_Packaging__r.Name, Appliances__r.Name, Consumer__r.Name, Activo_en_web__c, Grupos__r.Name, 
        Grupo__r.Name, Carrier__c, Densidad__c, Indice_de_Fluidez_p__c, Aditivo__c, Color__c, Impacto_IZOD__c, Dureza_Shore__c, Concentraci_n__c, Visco__c, 
        Modulo_de_flexi_n__c, Detalles_producto_web__c, Description__c+FROM+Product2+WHERE (Grupos__r.Name='${data.producto}') AND (Proveedor_Pweb__r.Name ='${data.fabricante}')`

        await this.$axios.get(`/information/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            //console.log(res)
            commit('StateAssign', {tablePruebas: res.data})
            console.log(state.tablePruebas)
            if(res.data.records.length === 0){
                commit('StateAssign', {showMsgProd: true})
            }else{
                dispatch('createtables')
            }
            //dispatch('createtables')
        })
        .catch(err => {
            console.log(err.response)
        })
    },
    async consProduFabrTras({commit, dispatch ,state}, data){
        const token = state.credentials.access_token
        this.$axios.setToken(token, 'Bearer')

        const query = `SELECT+NAME, Description, Familia_de_productos__r.Name, Proveedor_Pweb__r.Name, Extrusion__r.Name, Extrusion_Blow_Molding__r.Name, 
        Injection__r.Name, Injection_Blow_Molding__r.Name, Thermoforming__r.Name, Coextrusion__r.Name, Rotomolding__r.Name, Construction__r.Name, 
        Electrical_Electronics__r.Name, Medical_Pharmaceutical__r.Name, Personal__r.Name, Footwear__r.Name, Agriculture__r.Name, Automotive__r.name, 
        Rigid_Packaging__r.Name, Industrial__r.Name, Flexible_Packaging__r.Name, Appliances__r.Name, Consumer__r.Name, Activo_en_web__c, Grupos__r.Name, 
        Grupo__r.Name, Carrier__c, Densidad__c, Indice_de_Fluidez_p__c, Aditivo__c, Color__c, Impacto_IZOD__c, Dureza_Shore__c, Concentraci_n__c, Visco__c, 
        Modulo_de_flexi_n__c, Detalles_producto_web__c, Description__c+FROM+Product2+WHERE (Grupos__r.Name='${data.producto}') AND (Proveedor_Pweb__r.Name ='${data.fabricante}') 
        AND (Extrusion_Blow_Molding__r.Name='${data.transformacion}' 
        OR Thermoforming__r.Name='${data.transformacion}' OR Injection__r.Name='${data.transformacion}' OR Extrusion__r.Name='${data.transformacion}'
        OR Injection_Blow_Molding__r.Name='${data.transformacion}' OR Rotomolding__r.Name='${data.transformacion}' OR Thermoforming__r.Name='${data.transformacion}'
        OR Coextrusion__r.Name='${data.transformacion}')`

        await this.$axios.get(`/information/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            //console.log(res)
            commit('StateAssign', {tablePruebas: res.data})
            console.log(state.tablePruebas)
            if(res.data.records.length === 0){
                commit('StateAssign', {showMsgProd: true})
            }else{
                dispatch('createtables')
            }
            //dispatch('createtables')
        })
        .catch(err => {
            console.log(err.response)
        })
    },
    async constAllFilters({commit, state, dispatch}, data){
        const query = `SELECT+NAME, Description, Familia_de_productos__r.Name, Proveedor_Pweb__r.Name, Extrusion__r.Name, Extrusion_Blow_Molding__r.Name, 
        Injection__r.Name, Injection_Blow_Molding__r.Name, Thermoforming__r.Name, Coextrusion__r.Name, Rotomolding__r.Name, Construction__r.Name, 
        Electrical_Electronics__r.Name, Medical_Pharmaceutical__r.Name, Personal__r.Name, Footwear__r.Name, Agriculture__r.Name, Automotive__r.name, 
        Rigid_Packaging__r.Name, Industrial__r.Name, Flexible_Packaging__r.Name, Appliances__r.Name, Consumer__r.Name, Activo_en_web__c, Grupos__r.Name, 
        Grupo__r.Name, Carrier__c, Densidad__c, Indice_de_Fluidez_p__c, Aditivo__c, Color__c, Impacto_IZOD__c, Dureza_Shore__c, Concentraci_n__c, Visco__c, 
        Modulo_de_flexi_n__c, Detalles_producto_web__c, Description__c+FROM+Product2+WHERE (Grupos__r.Name='${data.producto}') AND (Proveedor_Pweb__r.Name ='${data.fabricante}') 
        AND (Industrial__r.Name='${data.mercado}' 
        OR Consumer__r.Name='${data.mercado}' OR Automotive__r.Name='${data.mercado}' OR Electrical_Electronics__r.Name='${data.mercado}'
        OR Medical_Pharmaceutical__r.Name='${data.mercado}' OR Construction__r.Name='${data.mercado}' OR Flexible_Packaging__r.Name='${data.mercado}'
        OR Appliances__r.Name='${data.mercado}' OR Agriculture__r.Name='${data.mercado}' OR Rigid_Packaging__r.Name='${data.mercado}' OR Personal__r.Name='${data.mercado}'
        OR Footwear__r.Name='${data.mercado}') AND (Extrusion_Blow_Molding__r.Name='${data.transformacion}' 
        OR Thermoforming__r.Name='${data.transformacion}' OR Injection__r.Name='${data.transformacion}' OR Extrusion__r.Name='${data.transformacion}'
        OR Injection_Blow_Molding__r.Name='${data.transformacion}' OR Rotomolding__r.Name='${data.transformacion}' OR Thermoforming__r.Name='${data.transformacion}'
        OR Coextrusion__r.Name='${data.transformacion}')`

        await this.$axios.get(`/information/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            //console.log(res)
            commit('StateAssign', {tablePruebas: res.data})
            console.log(state.tablePruebas)
            if(res.data.records.length === 0){
                commit('StateAssign', {showMsgProd: true})
            }else{
                dispatch('createtables')
            }
        })
        .catch(err => {
            console.log(err.response)
        })

    },
    async consProduTran({commit, state, dispatch}, data){
        const query = `SELECT+NAME, Description, Familia_de_productos__r.Name, Proveedor_Pweb__r.Name, Extrusion__r.Name, Extrusion_Blow_Molding__r.Name, 
        Injection__r.Name, Injection_Blow_Molding__r.Name, Thermoforming__r.Name, Coextrusion__r.Name, Rotomolding__r.Name, Construction__r.Name, 
        Electrical_Electronics__r.Name, Medical_Pharmaceutical__r.Name, Personal__r.Name, Footwear__r.Name, Agriculture__r.Name, Automotive__r.name, 
        Rigid_Packaging__r.Name, Industrial__r.Name, Flexible_Packaging__r.Name, Appliances__r.Name, Consumer__r.Name, Activo_en_web__c, Grupos__r.Name, 
        Grupo__r.Name, Carrier__c, Densidad__c, Indice_de_Fluidez_p__c, Aditivo__c, Color__c, Impacto_IZOD__c, Dureza_Shore__c, Concentraci_n__c, Visco__c, 
        Modulo_de_flexi_n__c, Detalles_producto_web__c, Description__c+FROM+Product2+WHERE (Grupos__r.Name='${data.producto}') 
        AND (Extrusion_Blow_Molding__r.Name='${data.transformacion}' 
        OR Thermoforming__r.Name='${data.transformacion}' OR Injection__r.Name='${data.transformacion}' OR Extrusion__r.Name='${data.transformacion}'
        OR Injection_Blow_Molding__r.Name='${data.transformacion}' OR Rotomolding__r.Name='${data.transformacion}' OR Thermoforming__r.Name='${data.transformacion}'
        OR Coextrusion__r.Name='${data.transformacion}')`

        await this.$axios.get(`/information/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            //console.log(res)
            commit('StateAssign', {tablePruebas: res.data})
            console.log(state.tablePruebas)
            if(res.data.records.length === 0){
                commit('StateAssign', {showMsgProd: true})
            }else{
                dispatch('createtables')
            }
            //dispatch('createtables')
        })
        .catch(err => {
            console.log(err.response)
        })
    },
    async consProduMerTras({commit, state, dispatch}, data){
        const query = `SELECT+NAME, Description, Familia_de_productos__r.Name, Proveedor_Pweb__r.Name, Extrusion__r.Name, Extrusion_Blow_Molding__r.Name, 
        Injection__r.Name, Injection_Blow_Molding__r.Name, Thermoforming__r.Name, Coextrusion__r.Name, Rotomolding__r.Name, Construction__r.Name, 
        Electrical_Electronics__r.Name, Medical_Pharmaceutical__r.Name, Personal__r.Name, Footwear__r.Name, Agriculture__r.Name, Automotive__r.name, 
        Rigid_Packaging__r.Name, Industrial__r.Name, Flexible_Packaging__r.Name, Appliances__r.Name, Consumer__r.Name, Activo_en_web__c, Grupos__r.Name, 
        Grupo__r.Name, Carrier__c, Densidad__c, Indice_de_Fluidez_p__c, Aditivo__c, Color__c, Impacto_IZOD__c, Dureza_Shore__c, Concentraci_n__c, Visco__c, 
        Modulo_de_flexi_n__c, Detalles_producto_web__c, Description__c+FROM+Product2+WHERE (Grupos__r.Name='${data.producto}') 
        AND (Industrial__r.Name='${data.mercado}' 
        OR Consumer__r.Name='${data.mercado}' OR Automotive__r.Name='${data.mercado}' OR Electrical_Electronics__r.Name='${data.mercado}'
        OR Medical_Pharmaceutical__r.Name='${data.mercado}' OR Construction__r.Name='${data.mercado}' OR Flexible_Packaging__r.Name='${data.mercado}'
        OR Appliances__r.Name='${data.mercado}' OR Agriculture__r.Name='${data.mercado}' OR Rigid_Packaging__r.Name='${data.mercado}' OR Personal__r.Name='${data.mercado}'
        OR Footwear__r.Name='${data.mercado}') AND (Extrusion_Blow_Molding__r.Name='${data.transformacion}' 
        OR Thermoforming__r.Name='${data.transformacion}' OR Injection__r.Name='${data.transformacion}' OR Extrusion__r.Name='${data.transformacion}'
        OR Injection_Blow_Molding__r.Name='${data.transformacion}' OR Rotomolding__r.Name='${data.transformacion}' OR Thermoforming__r.Name='${data.transformacion}'
        OR Coextrusion__r.Name='${data.transformacion}')`

        await this.$axios.get(`/information/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            //console.log(res)
            commit('StateAssign', {tablePruebas: res.data})
            console.log(state.tablePruebas)
            if(res.data.records.length === 0){
                commit('StateAssign', {showMsgProd: true})
            }else{
                dispatch('createtables')
            }
            //dispatch('createtables')
        })
        .catch(err => {
            console.log(err.response)
        })
    },
    async consMerTras({commit, state, dispatch}, data){
        const query = `SELECT+NAME, Description, Familia_de_productos__r.Name, Proveedor_Pweb__r.Name, Extrusion__r.Name, Extrusion_Blow_Molding__r.Name, 
        Injection__r.Name, Injection_Blow_Molding__r.Name, Thermoforming__r.Name, Coextrusion__r.Name, Rotomolding__r.Name, Construction__r.Name, 
        Electrical_Electronics__r.Name, Medical_Pharmaceutical__r.Name, Personal__r.Name, Footwear__r.Name, Agriculture__r.Name, Automotive__r.name, 
        Rigid_Packaging__r.Name, Industrial__r.Name, Flexible_Packaging__r.Name, Appliances__r.Name, Consumer__r.Name, Activo_en_web__c, Grupos__r.Name, 
        Grupo__r.Name, Carrier__c, Densidad__c, Indice_de_Fluidez_p__c, Aditivo__c, Color__c, Impacto_IZOD__c, Dureza_Shore__c, Concentraci_n__c, Visco__c, 
        Modulo_de_flexi_n__c, Detalles_producto_web__c, Description__c+FROM+Product2+WHERE (Industrial__r.Name='${data.mercado}' 
        OR Consumer__r.Name='${data.mercado}' OR Automotive__r.Name='${data.mercado}' OR Electrical_Electronics__r.Name='${data.mercado}'
        OR Medical_Pharmaceutical__r.Name='${data.mercado}' OR Construction__r.Name='${data.mercado}' OR Flexible_Packaging__r.Name='${data.mercado}'
        OR Appliances__r.Name='${data.mercado}' OR Agriculture__r.Name='${data.mercado}' OR Rigid_Packaging__r.Name='${data.mercado}' OR Personal__r.Name='${data.mercado}'
        OR Footwear__r.Name='${data.mercado}') AND (Extrusion_Blow_Molding__r.Name='${data.transformacion}' 
        OR Thermoforming__r.Name='${data.transformacion}' OR Injection__r.Name='${data.transformacion}' OR Extrusion__r.Name='${data.transformacion}'
        OR Injection_Blow_Molding__r.Name='${data.transformacion}' OR Rotomolding__r.Name='${data.transformacion}' OR Thermoforming__r.Name='${data.transformacion}'
        OR Coextrusion__r.Name='${data.transformacion}')`

        await this.$axios.get(`/information/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            //console.log(res)
            commit('StateAssign', {tablePruebas: res.data})
            console.log(state.tablePruebas)
            if(res.data.records.length === 0){
                commit('StateAssign', {showMsgProd: true})
            }else{
                dispatch('createtables')
            }
            //dispatch('createtables')
        })
        .catch(err => {
            console.log(err.response)
        })
    },
    async consMerFabr({commit, state, dispatch}, data){
        const query = `SELECT+NAME, Description, Familia_de_productos__r.Name, Proveedor_Pweb__r.Name, Extrusion__r.Name, Extrusion_Blow_Molding__r.Name, 
        Injection__r.Name, Injection_Blow_Molding__r.Name, Thermoforming__r.Name, Coextrusion__r.Name, Rotomolding__r.Name, Construction__r.Name, 
        Electrical_Electronics__r.Name, Medical_Pharmaceutical__r.Name, Personal__r.Name, Footwear__r.Name, Agriculture__r.Name, Automotive__r.name, 
        Rigid_Packaging__r.Name, Industrial__r.Name, Flexible_Packaging__r.Name, Appliances__r.Name, Consumer__r.Name, Activo_en_web__c, Grupos__r.Name, 
        Grupo__r.Name, Carrier__c, Densidad__c, Indice_de_Fluidez_p__c, Aditivo__c, Color__c, Impacto_IZOD__c, Dureza_Shore__c, Concentraci_n__c, Visco__c, 
        Modulo_de_flexi_n__c, Detalles_producto_web__c, Description__c+FROM+Product2+WHERE (Proveedor_Pweb__r.Name ='${data.fabricante}') 
        AND (Industrial__r.Name='${data.mercado}' 
        OR Consumer__r.Name='${data.mercado}' OR Automotive__r.Name='${data.mercado}' OR Electrical_Electronics__r.Name='${data.mercado}'
        OR Medical_Pharmaceutical__r.Name='${data.mercado}' OR Construction__r.Name='${data.mercado}' OR Flexible_Packaging__r.Name='${data.mercado}'
        OR Appliances__r.Name='${data.mercado}' OR Agriculture__r.Name='${data.mercado}' OR Rigid_Packaging__r.Name='${data.mercado}' OR Personal__r.Name='${data.mercado}'
        OR Footwear__r.Name='${data.mercado}')`

        await this.$axios.get(`/information/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            //console.log('mercado y fabricante')
            commit('StateAssign', {tablePruebas: res.data})
            console.log(state.tablePruebas)
            if(res.data.records.length === 0){
                commit('StateAssign', {showMsgProd: true})
            }else{
                //console.log('crando tabla ....')
                dispatch('createtables')
            }
            //dispatch('createtables')
        })
        .catch(err => {
            console.log(err.response)
        })
    },
    async consTransFabr({commit, state, dispatch}, data){
        const query = `SELECT+NAME, Description, Familia_de_productos__r.Name, Proveedor_Pweb__r.Name, Extrusion__r.Name, Extrusion_Blow_Molding__r.Name, 
        Injection__r.Name, Injection_Blow_Molding__r.Name, Thermoforming__r.Name, Coextrusion__r.Name, Rotomolding__r.Name, Construction__r.Name, 
        Electrical_Electronics__r.Name, Medical_Pharmaceutical__r.Name, Personal__r.Name, Footwear__r.Name, Agriculture__r.Name, Automotive__r.name, 
        Rigid_Packaging__r.Name, Industrial__r.Name, Flexible_Packaging__r.Name, Appliances__r.Name, Consumer__r.Name, Activo_en_web__c, Grupos__r.Name, 
        Grupo__r.Name, Carrier__c, Densidad__c, Indice_de_Fluidez_p__c, Aditivo__c, Color__c, Impacto_IZOD__c, Dureza_Shore__c, Concentraci_n__c, Visco__c, 
        Modulo_de_flexi_n__c, Detalles_producto_web__c, Description__c+FROM+Product2+WHERE (Proveedor_Pweb__r.Name ='${data.fabricante}') 
        AND (Extrusion_Blow_Molding__r.Name='${data.transformacion}' 
        OR Thermoforming__r.Name='${data.transformacion}' OR Injection__r.Name='${data.transformacion}' OR Extrusion__r.Name='${data.transformacion}'
        OR Injection_Blow_Molding__r.Name='${data.transformacion}' OR Rotomolding__r.Name='${data.transformacion}' OR Thermoforming__r.Name='${data.transformacion}'
        OR Coextrusion__r.Name='${data.transformacion}')`

        await this.$axios.get(`/information/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            //console.log(res)
            commit('StateAssign', {tablePruebas: res.data})
            console.log(state.tablePruebas)
            if(res.data.records.length === 0){
                commit('StateAssign', {showMsgProd: true})
            }else{
                dispatch('createtables')
            }
            //dispatch('createtables')
        })
        .catch(err => {
            console.log(err.response)
        })
    },
    async consTransFabrMerc({commit, state, dispatch}, data){
        const query = `SELECT+NAME, Description, Familia_de_productos__r.Name, Proveedor_Pweb__r.Name, Extrusion__r.Name, Extrusion_Blow_Molding__r.Name, 
        Injection__r.Name, Injection_Blow_Molding__r.Name, Thermoforming__r.Name, Coextrusion__r.Name, Rotomolding__r.Name, Construction__r.Name, 
        Electrical_Electronics__r.Name, Medical_Pharmaceutical__r.Name, Personal__r.Name, Footwear__r.Name, Agriculture__r.Name, Automotive__r.name, 
        Rigid_Packaging__r.Name, Industrial__r.Name, Flexible_Packaging__r.Name, Appliances__r.Name, Consumer__r.Name, Activo_en_web__c, Grupos__r.Name, 
        Grupo__r.Name, Carrier__c, Densidad__c, Indice_de_Fluidez_p__c, Aditivo__c, Color__c, Impacto_IZOD__c, Dureza_Shore__c, Concentraci_n__c, Visco__c, 
        Modulo_de_flexi_n__c, Detalles_producto_web__c, Description__c+FROM+Product2+WHERE (Proveedor_Pweb__r.Name ='${data.fabricante}') 
        AND (Industrial__r.Name='${data.mercado}' 
        OR Consumer__r.Name='${data.mercado}' OR Automotive__r.Name='${data.mercado}' OR Electrical_Electronics__r.Name='${data.mercado}'
        OR Medical_Pharmaceutical__r.Name='${data.mercado}' OR Construction__r.Name='${data.mercado}' OR Flexible_Packaging__r.Name='${data.mercado}'
        OR Appliances__r.Name='${data.mercado}' OR Agriculture__r.Name='${data.mercado}' OR Rigid_Packaging__r.Name='${data.mercado}' OR Personal__r.Name='${data.mercado}'
        OR Footwear__r.Name='${data.mercado}') AND (Extrusion_Blow_Molding__r.Name='${data.transformacion}' 
        OR Thermoforming__r.Name='${data.transformacion}' OR Injection__r.Name='${data.transformacion}' OR Extrusion__r.Name='${data.transformacion}'
        OR Injection_Blow_Molding__r.Name='${data.transformacion}' OR Rotomolding__r.Name='${data.transformacion}' OR Thermoforming__r.Name='${data.transformacion}'
        OR Coextrusion__r.Name='${data.transformacion}')`

        await this.$axios.get(`/information/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            //console.log(res)
            commit('StateAssign', {tablePruebas: res.data})
            console.log(state.tablePruebas)
            if(res.data.records.length === 0){
                commit('StateAssign', {showMsgProd: true})
            }else{
                dispatch('createtables')
            }
            //dispatch('createtables')
        })
        .catch(err => {
            console.log(err.response)
        })
    },
    async consProduFabrMerc({commit, dispatch ,state}, data){
        const token = state.credentials.access_token
        this.$axios.setToken(token, 'Bearer')

        const query = `SELECT+NAME, Description, Familia_de_productos__r.Name, Proveedor_Pweb__r.Name, Extrusion__r.Name, Extrusion_Blow_Molding__r.Name, 
        Injection__r.Name, Injection_Blow_Molding__r.Name, Thermoforming__r.Name, Coextrusion__r.Name, Rotomolding__r.Name, Construction__r.Name, 
        Electrical_Electronics__r.Name, Medical_Pharmaceutical__r.Name, Personal__r.Name, Footwear__r.Name, Agriculture__r.Name, Automotive__r.name, 
        Rigid_Packaging__r.Name, Industrial__r.Name, Flexible_Packaging__r.Name, Appliances__r.Name, Consumer__r.Name, Activo_en_web__c, Grupos__r.Name, 
        Grupo__r.Name, Carrier__c, Densidad__c, Indice_de_Fluidez_p__c, Aditivo__c, Color__c, Impacto_IZOD__c, Dureza_Shore__c, Concentraci_n__c, Visco__c, 
        Modulo_de_flexi_n__c, Detalles_producto_web__c, Description__c+FROM+Product2+WHERE (Grupos__r.Name='${data.producto}') AND (Proveedor_Pweb__r.Name ='${data.fabricante}') 
        AND (Industrial__r.Name='${data.mercado}' 
        OR Consumer__r.Name='${data.mercado}' OR Automotive__r.Name='${data.mercado}' OR Electrical_Electronics__r.Name='${data.mercado}'
        OR Medical_Pharmaceutical__r.Name='${data.mercado}' OR Construction__r.Name='${data.mercado}' OR Flexible_Packaging__r.Name='${data.mercado}'
        OR Appliances__r.Name='${data.mercado}' OR Agriculture__r.Name='${data.mercado}' OR Rigid_Packaging__r.Name='${data.mercado}' OR Personal__r.Name='${data.mercado}'
        OR Footwear__r.Name='${data.mercado}')`

        await this.$axios.get(`/information/services/data/v55.0/query/?q=${query}`)
        .then(res => {
            //console.log(res)
            commit('StateAssign', {tablePruebas: res.data})
            console.log(state.tablePruebas)
            if(res.data.records.length === 0){
                commit('StateAssign', {showMsgProd: true})
            }else{
                dispatch('createtables')
            }
            //dispatch('createtables')
        })
        .catch(err => {
            console.log(err.response)
        })
    },

    createtables({commit, dispatch, state}){
        const products = state.tablePruebas.records
        //console.log(products.length)

        products.map(item => {
            let aux = []
            let exists = false
            
            //item.Familia_de_productos__r
            if(item.Grupos__r !== null && item.Activo_en_web__c === true){
                //console.log(item)
                switch (item.Grupos__r.Name) {
                    case 'Polyethylene':
                        //console.log('PE')
                        //exists = state.tablePE.some(e => e.Name === item.Name)
                        //if(!exists){
                            aux.push(...state.tablePE, item)
                            commit('StateAssign', {tablePE: aux})
                        //}
                        break;
                    case 'Polypropylene': 
                        //console.log('PP')
                        //exists = state.tablePP.some(e => e.Name === item.Name)
                        //if(!exists){
                            aux.push(...state.tablePP,item)
                            commit('StateAssign', {tablePP: aux})
                        //}
                        break;
                    case 'Styrenics': 
                        //console.log('Estirénicos')
                        //exists = state.tableEstirenicos.some(e => e.Name === item.Name)
                        //if(!exists){
                            aux.push(...state.tableEstirenicos, item)
                            commit('StateAssign', {tableEstirenicos: aux})
                        //}
                        break;
                    case 'Rotomolding compounds colors': case 'Natural Rotomolding Compounds': case 'Black Rotomolding Compounds': case 'Specialty Rotomolding Compounds': case 'Rotomolding compounds pellets': case 'Rotomolding compounds SM': 
                        console.log('rotomoldeo')
                        //exists = state.tableRotomoldeo.some(e => e.Name === item.Name)
                        //if(!exists){
                            aux.push(...state.tableRotomoldeo, item)
                            commit('StateAssign', {tableRotomoldeo: aux})
                        //}
                        break;
                    case 'MasterBatch': case 'Masterbatch Colors':  case 'Masterbatch Colors SM': case 'Masterbatch Basic': case 'Masterbatch Basic SM': case 'Specialty Masterbatch': 
                        //console.log('masterbatch')
                        //exists = state.tableMasterbatch.some(e => e.Name === item.Name)
                        //if(!exists){
                            aux.push(...state.tableMasterbatch, item)
                            commit('StateAssign', {tableMasterbatch: aux})
                        //}
                        break;
                    case 'Engineering Plastics': 
                        //console.log('ingenieria')
                        //exists = state.tableIngenieria.some(e => e.Name === item.Name)
                        //if(!exists){
                            aux.push(...state.tableIngenieria, item)
                            commit('StateAssign', {tableIngenieria: aux})
                        //}
                        break;
                    case 'Compuestos': case 'Precolor Poliolefins Compounds': case 'Precolor additives':
                    case 'Precolor additives Compounds': case 'Precolor Styrenics Compounds':
                    case 'Precolor Specialties Compounds': case 'Precolor Poliolefins SM':
                    case 'Precolor Styrenics SM': case 'Precolor Specialties SM': 
                        //console.log('Precolor Specialties')
                        //exists = state.tableCompuestosprecolor.some(e => e.Name === item.Name)
                        //if(!exists){
                            aux.push(...state.tableCompuestosprecolor, item)
                            commit('StateAssign', {tableCompuestosprecolor: aux})
                        //}
                        break;
                    case 'Blends': case 'Filled Poliolefins Compounds': case 'Filled Styrenics Compounds': 
                    case  'Filled Specialties Compounds': case 'Filled Poliolefins SM': case 'Filled Styrenics SM': case 'Filled Specialties SM': 
                        //console.log('cargados')
                        //exists = state.tableCompuestoscargados.some(e => e.Name === item.Name)
                        //if(!exists){
                            aux.push(...state.tableCompuestoscargados ,item)
                            commit('StateAssign', {tableCompuestoscargados: aux})
                        //}
                        break;
                    case 'Thermoset Elastomers':
                        //console.log('termoplasticos') 
                        //exists = state.tableTermoplasticos.some(e => e.Name === item.Name)
                        //if(!exists){
                            aux.push(...state.tableTermoplasticos, item)
                            commit('StateAssign', {tableTermoplasticos: aux})
                        //}
                        break;
                    case 'PVC': case 'Rigid PVC': case 'Semi-Rigid PVC': case 'Flexible PVC': 
                        //console.log('pvc')
                        //exists = state.tableTermoplasticos.some(e => e.Name === item.Name)
                        //if(!exists){
                            aux.push(...state.tablePVC, item)
                            commit('StateAssign', {tablePVC: aux})
                        //}
                        break;
                    case 'Additive Concentrates': case 'Additive concentrates SM': case 'Process aids': case 'Process aids SM':
                        console.log('aditivos') 
                        //exists = state.tableAditivos.some(e => e.Name === item.Name)
                        //if(!exists){
                            aux.push(...state.tableAditivos, item)
                            commit('StateAssign', {tableAditivos: aux})
                        //}
                        break;
                    case 'Calcium Carbonate Concentrate': case 'Calcium Carbonate Concentrate SM':
                        //console.log('calcio') 
                        //exists = state.tableCalcio.some(e => e.Name === item.Name)
                        //if(!exists){
                            aux.push(...state.tableCalcio, item)
                            commit('StateAssign', {tableCalcio: aux})
                        //}
                        break;
                    case 'Bioplastics': 
                        //console.log('bioplasticos')
                        //exists = state.tableBioplasticos.some(e => e.Name === item.Name)
                        //if(!exists){
                            aux.push(...state.tableBioplasticos, item)
                            commit('StateAssign', {tableBioplasticos: aux})
                        //}
                        //state.tableBioplasticos.push(...state.tableBioplasticos, item)
                        break;
                    case 'Hules': case 'Thermoset Elastomers': 
                        //console.log('hules')
                        //exists = state.tableHules.some(e => e.Name === item.Name)
                        //if(!exists){
                            aux.push(...state.tableHules, item)
                            commit('StateAssign', {tableHules: aux})
                        //}
                        //state.tableHules.push(...state.tableHules,item)
                        break;
                }
            }else{
                commit('StateAssign', {showMsgProd: true})
            }
        })
    },

    cleanTables({commit, dispatch, state}){
        commit('StateAssign', {tablePruebas: []})
        //
        commit('StateAssign', {tablePE: []})
        commit('StateAssign', {tablePP: []})
        commit('StateAssign', {tableEstirenicos: []})
        commit('StateAssign', {tableRotomoldeo: []})
        commit('StateAssign', {tableMasterbatch: []})
        commit('StateAssign', {tableIngenieria: []})
        commit('StateAssign', {tableCompuestosprecolor: []})
        commit('StateAssign', {tableCompuestoscargados: []})
        commit('StateAssign', {tableTermoplasticos: []})
        commit('StateAssign', {tablePVC: []})
        commit('StateAssign', {tableAditivos: []})
        commit('StateAssign', {tableCalcio: []})
        commit('StateAssign', {tableBioplasticos: []})
        commit('StateAssign', {tableHules: []})
        commit('StateAssign', {tablePolvoC: []})

    },

    cleanTags({commit, dispatch, state}){
        commit('StateAssign', {valProducto: ''})
        commit('StateAssign', {valFabricante: ''})
        commit('StateAssign', {valMercado: ''})
        commit('StateAssign', {valMTransformacion: ''})

        dispatch('cleanTables')
    },

    addListCard({commit, dispatch, state}, data){
        let aux = []
        aux.push(...state.card, data)
        commit('StateAssign', {card: aux})

        console.log(this.state.card)
    }
} 