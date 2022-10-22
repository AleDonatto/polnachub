<template>
    <div v-if="pageContact === null">
        <v-sheet class="pa-3">
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
    </div>
    <div v-else>
        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="10">
                        <!--<h1 class="font-archivo font-size-34 font-weight-bold text-center mt-16">Contáctanos con solo dos pasos</h1>-->
                        <h1 class="font-archivo font-size-34 font-weight-bold text-center mt-16">{{pageContact.title}}</h1>
                    </v-col>
                </v-row>
                    <v-row justify="center">
                        <v-col cols="12" xl="9">
                            <v-row>
                                <v-col cols="12">
                                    <v-stepper v-model="e1" class="mt-10 mb-16 shadow-none">
                                        <v-stepper-header>
                                            <v-row>
                                                <v-col cols="6">
                                                    <v-stepper-step :complete="e1 > 1" step="1" color="#19D3C5"></v-stepper-step>
                                                </v-col>
                                                <v-col cols="6">
                                                    <v-stepper-step :complete="e1 > 2" step="2" color="#19D3C5"></v-stepper-step>
                                                </v-col>
                                            </v-row>
                                        </v-stepper-header>

                                        <div>
                                            <v-progress-linear :value="progress" color="#19D3C5"></v-progress-linear>
                                        </div>

                                        <v-stepper-items class="">
                                            <v-stepper-content step="1" class="mb-2">    
                                            <v-form @submit.prevent="" ref="formContact">
                                                <v-row>
                                                    <v-col cols="12" >
                                                        <!--<h1 class="font-archivo font-size-20 font-weight-bold">Selecciona un mercado</h1>-->
                                                        <h1 class="font-archivo font-size-20 font-weight-bold">{{pageContact.labelMarket}}</h1>
                                                        <v-sheet class="mx-auto" v-if="this.mercado !== null">
                                                            <v-slide-group v-model="model" class="pa-2" active-class="success" show-arrows-false multiple>
                                                                <v-slide-item v-for="(item ,index) in this.mercado" :key="index" v-slot="{ active, toggle}">
                                                                    <v-card class="ma-4" @click="() => { selectMarket(item.attributes.nameMarket) }" height="130" width="210"  :color="active ? '' : 'white'">
                                                                        <v-row @click="toggle" class="fill-height" align="center" justify="center">
                                                                            <v-img class="ma-4 text-right pa-2" :src="basePathApiUrl + item.attributes.imgMiniarure.data.attributes.url" contain max-height="130" max-width="210" :class="{'z-index-lower': active }"
                                                                            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                                                                                <v-btn icon dark>
                                                                                    <v-icon> {{ active ? 'mdi-check-circle' : 'mdi-check-circle-outline' }}</v-icon>
                                                                                </v-btn>
                                                                                <p class="font-weight-bold font-archive text-center white--text mt-4">{{item.attributes.nameMarket}}</p>
                                                                            </v-img>
                                                                        </v-row>
                                                                    </v-card>
                                                                </v-slide-item>
                                                            </v-slide-group>
                                                        </v-sheet>        
                                                    </v-col>
                                                </v-row>

                                                <v-row>
                                                    <v-col cols="12">
                                                        <!--<h1 class="font-archivo font-size-20 font-weight-bold">Selecciona un producto</h1>-->
                                                        <h1 class="font-archivo font-size-20 font-weight-bold">{{pageContact.labelProduct}}</h1>
                                                        <v-sheet class="mx-auto" v-if="this.productos !== null">
                                                            <v-slide-group v-model="model2" class="pa-2" active-class="success" show-arrows-false>
                                                                <v-slide-item v-for="(item, index) in this.productos.data" :key="index" v-slot="{ active, toggle}">
                                                                    <v-card class="ma-4" @click="() => {selectProduct(item.attributes.name)}" height="130" width="210"  :color="active ? '' : 'white'">
                                                                        <v-row @click="toggle" class="fill-height" align="center" justify="center">
                                                                            <v-img class="ma-4 text-right pa-2" :src="basePathApiUrl + item.attributes.imgMiniature.data.attributes.url" contain max-height="130" max-width="210" :class="{'z-index-lower': active }"
                                                                            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                                                                                <v-btn icon dark class="mr-1">
                                                                                    <v-icon> {{ active ? 'mdi-check-circle' : 'mdi-check-circle-outline' }}</v-icon>
                                                                                </v-btn>
                                                                                <p class="font-weight-bold font-archive text-center white--text mt-4">{{item.attributes.name}}</p>
                                                                            </v-img>
                                                                        </v-row>
                                                                    </v-card>
                                                                </v-slide-item>
                                                            </v-slide-group>
                                                        </v-sheet>        
                                                    </v-col>
                                                </v-row>

                                                <v-row justify="center">
                                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                                        <!--<p class="font-archivo font-size-20 font-weight-bold">Resina de interés</p>-->
                                                        <p class="font-archivo font-size-20 font-weight-bold">{{pageContact.labelResina}}</p>
                                                        <v-text-field class="rounded-xl" outlined label="Tipo de resina" v-model="formValues.resina" :rules="[rules.required]"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                                        <!--<p class="font-archivo font-size-20 font-weight-bold">Promedio de toneladas mensuales</p>-->
                                                        <p class="font-archivo font-size-20 font-weight-bold">{{pageContact.labelToneladas}}</p>
                                                        <v-text-field class="rounded-xl" outlined label="Toneladas" v-model="formValues.toneledas" :rules="[rules.required]"></v-text-field>
                                                    </v-col>
                                                </v-row>

                                                <v-row justify="end">
                                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" align="right">
                                                        <v-btn block color="#19D3C5" class="py-6 px-4 rounded-xl text-none d-flex justify-space-between" @click="nextStep">
                                                            <span class="text-left">Continuar</span>
                                                            <v-icon right>mdi-chevron-right</v-icon>
                                                        </v-btn>
                                                    </v-col>
                                                </v-row>
                                                
                                            </v-form>
                                            </v-stepper-content>

                                            <v-stepper-content step="2">
                                                <v-form @submit.prevent="sendInformation" ref="formContact2">
                                                    <!--<p class="font-archivo font-size-20 font-weight-bold">Promedio de toneladas mensuales</p>-->
                                                    <p class="my-5 font-size-20 font-weight-bold">{{ pageContact.labelForm }}</p>
                                                    <v-row>
                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                                                            <v-text-field label="Nombres" solo outlined class="rounded-xl" v-model="formValues.name" :rules="[rules.required]"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                                                            <v-text-field label="Apellidos" solo outlined class="rounded-xl" v-model="formValues.lastname" :rules="[rules.required]"></v-text-field>
                                                        </v-col>

                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                                                            <v-text-field label="Empresa" solo outlined class="rounded-xl" v-model="formValues.company" :rules="[rules.required]"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                                                            <v-select solo outlined class="rounded-xl" label="Área" :items="area" item-text="value" item-value="value" v-model="formValues.area" :rules="[rules.required]"></v-select>
                                                        </v-col>

                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                                                            <v-select label="Industria de la empresa" solo outlined class="rounded-xl" :items="industria" item-text="value" item-value="value" v-model="formValues.industry" :rules="[rules.required]"></v-select>
                                                        </v-col>
                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                                                            <v-text-field label="Email" type="email" solo outlined class="rounded-xl" v-model="formValues.email" :rules="[rules.required]"></v-text-field>
                                                        </v-col>

                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                                                            <v-text-field label="Teléfono fijo" solo outlined class="rounded-xl" v-model="formValues.phone"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                                                            <v-text-field label="Celular" solo outlined class="rounded-xl" v-model="formValues.celphone"></v-text-field>
                                                        </v-col>

                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                                                            <v-text-field label="Código Postal" solo outlined class="rounded-xl" v-model="formValues.cp"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                                                            <v-autocomplete label="País" solo outlined class="rounded-xl" v-model="formValues.country" :items="countries" item-text="country_name" item-value="country_name"
                                                            @change="getStates" :rules="[rules.required]"></v-autocomplete>
                                                        </v-col>

                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                                                            <v-autocomplete label="Estado" solo outlined class="rounded-xl" v-model="formValues.state" :items="states" item-text="state_name" item-value="state_name"
                                                            @change="getCities" :rules="[rules.required]"></v-autocomplete>
                                                        </v-col>
                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                                                            <v-autocomplete label="Ciudad" solo outlined class="rounded-xl" v-model="formValues.city" :items="citys" item-text="city_name" item-value="city_name"
                                                            :rules="[rules.required]"></v-autocomplete>
                                                        </v-col>

                                                        <v-col cols="12" class="margin-botton-0">
                                                            <v-select label="¿Cómo te enteraste de POLNAC?" solo outlined class="rounded-xl" v-model="formValues.howKnow"></v-select>
                                                        </v-col>
                                                        <v-col cols="12" class="margin-botton-0">
                                                            <v-textarea solo outlined class="rounded-xl" label="Cuéntanos brevemente qué deseas consultar con nosotros." v-model="formValues.message"></v-textarea>
                                                        </v-col>

                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                                                            <v-checkbox label="Soy cliente" color="#19D3C5" class="color-checkbox"></v-checkbox>
                                                        </v-col>
                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                                                            <v-checkbox label="Aceptar Aviso de Privacidad" color="#19D3C5"></v-checkbox>
                                                        </v-col>
                                                    </v-row>
                                                    <v-row>
                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                                            <v-btn block color="#19D3C5" outlined class="py-6 px-4 rounded-xl text-none d-flex justify-space-between" @click="previousStep">
                                                                <v-icon left color="black">mdi-chevron-left</v-icon>
                                                                <span class="text-left black--text">Regresar</span>
                                                            </v-btn>
                                                        </v-col>
                                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                                            <v-btn block color="#19D3C5" class="py-6 px-4 rounded-xl text-none d-flex justify-space-between" @click="sendInformation">
                                                                <span class="text-left">Enviar</span>
                                                                <v-icon right>mdi-chevron-right</v-icon>
                                                            </v-btn>
                                                        </v-col>
                                                    </v-row>
                                                </v-form>
                                            </v-stepper-content>
                                        </v-stepper-items>
                                    </v-stepper>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
            </v-container>
        </section>


        <v-dialog v-model="dialog" width="700" overlay-color="#2E2E65">
            <v-card elevation="6">
                <v-card-title>
                    <v-row justify="end">
                        <v-col cols="2">
                            <v-btn outlined color="white"  @click="dialog = false">
                                <v-img src="/contact/line.png" contain max-width="25"></v-img>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-title>

                <v-card-text>
                    <v-row justify="center">
                        <v-col cols="6">
                            <v-img src="/contact/dialog.png" contain max-height="120"></v-img>
                        </v-col>
                        <v-col cols="12">
                            <h1 class="font-size-24 font-weight-bold text-center black--text">¡Tu mensaje ha sido enviado!</h1>
                        </v-col>
                        <v-col cols="8">
                            <p class="text-body-all text-center text-center black--text">Gracias por tu mensaje. Te responderemos lo antes posible en tu correo.</p>
                        </v-col>
                        <v-col cols="7" class="mt-5">
                            <v-btn block class="rounded-xl text-none py-6" color="#19D3C5" @click="dialog = false">Entendido</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <!--<v-btn color="primary" text @click="dialog = false">I accept</v-btn>-->
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-snackbar v-model="snackbar"> 
            Seleccione un producto y mercado
            <template v-slot:action="{ attrs }">
                <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data (){
        return{
            e1: 1,
            model: [],
            model2: [],
            progress: 55,
            dialog: false,
            mercado: null,
            productos: null,
            area: [
                {value: 'Almacén'},
                {value: 'Calidad'},
                {value: 'Comercial'},
                {value: 'Compras'},
                {value: 'Dirección'},
                {value: 'Investigación'},
                {value: 'Logística'},
                {value: 'Mercadotecnia'},
                {value: 'Operaciones'},
                {value: 'Producción'},
                {value: 'Tesorería / Contabilidad'},
                {value: 'Otra'},
            ],
            industria: [
                {value: 'Aeronáutico'},
                {value: 'Agropecuaria'},
                {value: 'Alimentos y Bebidas'},
                {value: 'Automotriz'},
                {value: 'Calzado'},
                {value: 'Construcción'},
                {value: 'Consumo'},
                {value: 'Cosmética y Cuidado Personal'},
                {value: 'Eléctrico'},
                {value: 'Electrónico'},
                {value: 'Empaque / Envase'},
                {value: 'Herramientas, Maquinaria y Equipo'},
                {value: 'Industrial'},
                {value: 'Maquila'},
                {value: 'Médico y Farmacéutico'},
                {value: 'Metalmecánica'},
                {value: 'Película'},
                {value: 'Química'},
                {value: 'Tecnología y Electrodomésticos'},
                {value: 'Textil'},
                {value: 'Transporte'},
                {value: 'Otra'},
            ],
            selected: '',
            rules: {
                required: (value) => !!value || "Required.",
                min: (v) => v.length >= 8 || "Min 8 characters",
                email: v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            },
            formValues: {
                market: [],
                product: [],
                resina: '',
                toneladas: '',
                name: '',
                lastname: '',
                company: '',
                area: '',
                industry: '',
                email: '',
                phone: '',
                celphone: '',
                cp: '',
                country: '',
                state: '',
                city: '',
                howKnow: '',
                comments: '',
            },
            snackbar: false,
            token: '',
            countries: null,
            states: null,
            citys: null
        } 
    },
    computed: {
        ...mapState(['pageContact', 'basePathApiUrl'])
    },
    mounted() {
        this.getMercados()
        this.getProductos()
        setTimeout(() => {
            this.getCountries()
        }, 4000);
    },
    methods: {
        async getProductos(){
            this.productos = await this.$store.dispatch('getAllProducts')
            //console.log(this.productos)
        },
        async getMercados(){
            this.mercado = await this.$store.dispatch('getAllMarkets') 
            //console.log(this.mercado)
        },
        nextStep(){
            if(this.$refs.formContact.validate()){
                if( this.formValues.market === '' || this.formValues.product === ''){
                    console.log('no pasa')
                    this.snackbar = true
                }else{
                    console.log('pasa')
                    this.$refs.formContact.resetValidation()
                    this.progress = 100
                    this.e1 = 2
                }
            }
        },
        previousStep(){
            this.progress = 55
            this.e1 = 1
        },  
        sendInformation(){
            console.log(this.$refs.formContact2.validate())
            if(this.$refs.formContact.validate()){
                let date = new Date();
                this.formValues.sendDate = date.toISOString()

                const dataForm = {
                    data: this.formValues
                }

                // /api/contacto-polnacs
                /*this.$axios.post(`${process.env.BASE_URI_STRAPI}/api/contacto-polnacs`, dataForm)
                .then(res => {
                    this.dialog = !this.dialog
                    this.$refs.form.reset()
                })
                .catch(err => {
                    console.log(err.response)
                })*/
            }
        },
        selectProduct(toggle){
            //console.log(toggle)
            //this.formValues.product = toggle
            this.formValues.product.push(toggle)


        },
        selectMarket(toggle){
            this.formValues.market.push(toggle)
            //console.log(this.formValues.market)
        },
        async getToken(){
            this.$axios.setHeader('Accept','application/json')
            this.$axios.setHeader('api-token',process.env.COUNTRY_API_TOKEN)
            this.$axios.setHeader("user-email", "alej.donatto@gmail.com")
            
            const response  = await this.$axios.get('https://www.universal-tutorial.com/api/getaccesstoken')
            return response.data.auth_token
        },
        async getCountries(){
            this.token = await this.getToken()

            this.$axios.setHeader('Authorization', `Bearer ${this.token}`)
            this.$axios.setHeader("Accept", "application/json")
            
            const allCountries = await this.$axios.get('https://www.universal-tutorial.com/api/countries')
            //console.log(allCountries)
            this.countries = allCountries.data

        },
        async getStates(){
            const response = await this.$axios.get(`https://www.universal-tutorial.com/api/states/${this.formValues.country}`)
            this.states = response.data
        },
        async getCities(){
            const response = await this.$axios.get(`https://www.universal-tutorial.com/api/cities/${this.formValues.state}`)
            //console.log(response)
            this.citys = response.data
            
        }
    }
}
</script>

<style scoped>
.z-index-1{
    position:relative; 
    z-index:1;
}
.z-index-lower{
z-index: 0.2;
}
.content-left{
    justify-content: left !important;
}
.color-checkbox{
    color: #19D3C5 !important;
}
.shadow-none{
    box-shadow: none !important;
}
.click-image{
    background: linear-gradient(0deg, rgba(101, 93, 198, 0.4), rgba(101, 93, 198, 0.4));
}
.margin-botton-0{
    margin-bottom: -35px !important;
}
</style>