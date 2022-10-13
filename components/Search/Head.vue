<template>
    <!-- v-if="pageSearchProducts !== null" -->
    <div v-if="pageSearchProducts !== null">
        <div :class="{'bg-search':windowSize > 1129, 'bg-search-mb': windowSize < 1129 }" :style="{ backgroundImage: `url(${basePathApiUrl + pageSearchProducts.banner.image.data[0].attributes.url })` }">
            <v-row justify="center" class="">
                <v-col cols="12" class="mt-16 mb-10" align="center">
                    <!--<h1 class="mt-10 white--text font-archivo font-size-40 font-weight-bold">Buscador de productos</h1>-->
                    <h1 class="mt-10 white--text font-archivo font-size-40 font-weight-bold" v-html="pageSearchProducts.banner.title"></h1>
                </v-col>
            </v-row>
            <v-container v-if="windowSize > 1129">
                <v-row justify="center"> 
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <!--<p>{{producto}}</p>-->
                        <v-select placeholder="Producto" rounded solo v-model="producto"
                        :items="pProducto.records" item-text="Name" item-value="Name" name="tResina"></v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <!--<p>{{fabricante}}</p>-->
                        <v-select placeholder="Fabricante" rounded solo v-model="fabricante"
                        :items="pFabricante.records" item-text="Name" item-value="Name"></v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <!--<p>{{mercado}}</p>-->
                        <v-select placeholder="Mercado" rounded solo v-model="mercado"
                        :items="pMercado.records" item-text="Name" item-value="Name"></v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" class="">
                        <!--<p>{{mTransformacion}}</p>-->
                        <v-select placeholder="Método de Transformación" rounded solo v-model="mTransformacion"
                        :items="pMetTransformacion.records" item-text="Name" item-value="Name"></v-select>
                    </v-col>
                </v-row>
                <v-row justify="center" v-if="windowSize>1129">
                    <v-col cols="4">
                        <v-btn color='gray' rounded class="text-none text-none" block @click="cleanFilters">
                            <span class="black--text">Cancelar</span>
                        </v-btn>
                    </v-col>
                    <v-col cols="4" class="mb-16">
                        <v-btn rounded color="#19d3c5" class="black--text text-none" block @click="searchProducts({producto, fabricante, mercado, mTransformacion})">Aplicar</v-btn>
                    </v-col>
                </v-row>
                <!--<p>{{credentials}}</p>-->
            </v-container>
        </div>

        <div v-if="windowSize < 1229">
            <v-container class="form">
                <v-row justify="center"> 
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-select placeholder="Tipo de resina" rounded solo v-model="producto"
                        :items="pProducto.records" item-text="Name" item-value="Name" name="tResina"></v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-select placeholder="Fabricante" rounded solo v-model="fabricante"
                        :items="pFabricante.records" item-text="Name" item-value="Name"></v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-select placeholder="Mercado" rounded solo v-model="mercado"
                        :items="pMercado.records" item-text="Name" item-value="Name"></v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" class="">
                        <v-select placeholder="Método de Transformación" rounded solo v-model="mTransformacion"
                        :items="pMetTransformacion.records" item-text="Name" item-value="Name"></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-btn rounded color='#19d3c5' outlined class="text-none text-none" block @click="cleanFilters">
                            <span class="black--text">Cancelar</span>
                        </v-btn>
                    </v-col>
                    <v-col cols="6" class="">
                        <v-btn rounded color="#19d3c5" class="black--text text-none" block @click="searchProducts({producto, fabricante, mercado, mTransformacion})">
                            Aplicar
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import jsforce from 'jsforce'

export default {
    data(){
        return {
            producto: '',
            fabricante: '',
            mercado: '',
            mTransformacion: ''
        }
    },
    mounted() {
        /*setTimeout(() => {
             if(this.credentials !== null){
                //this.$store.dispatch('getFabricante')
                //this.$store.dispatch('getMercado')
                //this.$store.dispatch('getMetodoTransformacion')
                //this.$store.dispatch('getProducto')
            }
        }, 6000);*/
        //this.clientLogin()
    },
    computed: {
        ...mapState([
            'windowHeight',
            'windowSize',
            'pageSearchProducts', 
            'pFabricante', 
            'pMercado', 
            'pMetTransformacion',
            'pProducto', 
            'credentials',
            'basePathApiUrl'
        ]),
    },
    methods: {
        ...mapActions(['searchProducts']),
        cleanFilters(){
            this.producto = ''
            this.fabricante = ''
            this.mercado = ''
            this.mTransformacion = ''
        },
        async clientLogin(){
            const username = process.env.SALESFORCE_USER
            const password = process.env.SALESFORCE_PASSWORD

            /*var conn = new jsforce.Connection({
                //loginUrl : 'https://test.salesforce.com',
                oauth2 : {
                    // you can change loginUrl to connect to sandbox or prerelease env.
                    //loginUrl : 'https://test.salesforce.com/services/oauth2/token',
                    loginUrl : 'https://test.salesforce.com',
                    clientId : process.env.SALESFORCE_CLIENT_ID,
                    clientSecret : process.env.SALESFORCE_CLIENT_SECRET,
                    //redirectUri : 'https://test.salesforce.com/'
                }
            });*/

            const connection = new jsforce.Connection({})
            //console.log(connection)
            await connection.login(username, password)


            /*conn.login(username, password, function(err, userInfo) {
                if (err) { return console.error(err); }
                // Now you can get the access token and instance URL information.
                // Save them to establish connection next time.
                console.log(conn.accessToken);
                console.log(conn.instanceUrl);
                // logged in user property
                console.log("User ID: " + userInfo.id);
                console.log("Org ID: " + userInfo.organizationId);
                // ...
            });*/
            //conn.login(username, password);

            
            //console.log(conn)
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300&display=swap');

.bg-search{
    /*background-image: url('../../static/search/bg-banner.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}

.bg-search-mb{
    /*background-image: url('../../static/search/bg-bannermb.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
.font-title{
    font-family: 'Archivo' !important;
}
.form{
    margin-top: -180px;
    margin-bottom: 60px;
}
</style>