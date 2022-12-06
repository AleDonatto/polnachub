<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center" class="mt-16">
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" v-if="this.regiones !== null">
                        <v-select v-model="region" class="rounded-xl" outlined :items="regiones.data" item-text="attributes.name" item-value="id" 
                        label="Selecciona área geográfica" @change="() => getSucursal(region)"></v-select>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" v-if="this.sucursales !== null">
                        <v-select v-model="sucursal" label="Sucursales" class="rounded-xl" outlined :disabled="sucursalesDisabled"
                        :items="sucursales" item-text="attributes.name" item-value="id" ref="sucursal" @change="getDataSucursal"></v-select>
                    </v-col>
                </v-row>
                <v-row justify="center" v-if="dataRegion !== null">
                    <v-col cols="12" align="center" v-for="(img , index) in this.dataRegion" :key="index">
                        <v-img :src="basePathApiUrl + img.attributes.mapRegion.data.attributes.url" contain max-height="450" v-if="windowSize>1129"></v-img>
                        <v-img :src="basePathApiUrl + img.attributes.mapRegion.data.attributes.url" contain max-width="380" v-else></v-img>
                    </v-col>
                </v-row>
                <!--<v-row justify="center">
                    <v-col cols="12" class="rounded-xl">
                        {lat:19.415290318763805,lng:-99.12714146567397}
                        <GmapMap :center="center" :zoom="8" map-type-id="roadmap" style="width:100%; height:450px">
                            <GmapInfoWindow :options="infowindowOption" :position="infowindowPosition" :opened="infowindowOpened" @closeclick="handleCloseWindow">
                                <div class="">
                                    <h1>POLNAC México (test)</h1>
                                    <p class="mt-5">Dirección: Lázaro Cárdenas No. 49, San Jerónimo Tepetlacalco, Tlalnepantla, Estado de México, 54090 México (test)</p>
                                </div>
                            </GmapInfoWindow>
                            <GmapMarker title="example" :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" @click="handleMarker(m)"/>
                        </GmapMap>
                    </v-col>
                </v-row>-->

                <v-row class="mb-16" v-if="this.data !== null ">
                    <v-col cols="12" lg="8" md="8" sm="12" xs="12" class="mb-10" v-for="(suc, index) in data" :key="index">
                        <h1 class="black--text font-size-24 mb-5">{{suc.attributes.name}}</h1>
                        <v-row v-if="windowSize > 1129">
                            <v-col cols="6" v-for="(item, index) in suc.attributes.imgOfices.data" :key="index">
                                <v-img :src="basePathApiUrl + item.attributes.url" contain max-height="420"></v-img>
                            </v-col>
                        </v-row>
                        <v-row v-if="windowSize < 1129">
                            <v-carousel class="carousel-black" :show-arrows="false" dark height="270" cycle hide-delimiter-background show-arrows-on-hover>
                                <v-carousel-item v-for="(item,i) in suc.attributes.imgOfices.data" :key="i">
                                    <v-row justify="center">
                                        <v-col cols="11">
                                            <v-img :src="basePathApiUrl + item.attributes.url" contain max-height="270"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-carousel-item>
                            </v-carousel>
                        </v-row>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xs="12" align-self="center" class="mb-10"  v-for="(suc, index) in data" :key="index+1">
                        <h1 class="black--text font-size-24 mb-5">Datos de contacto</h1>

                        <p class="font-size-16" v-if="suc.attributes.address !== ''"><span class="font-weight-bold">Dirección:</span> {{suc.attributes.address}}</p>
                        <div class="d-flex justify-space-between mt-2" v-if="suc.attributes.phone !== ''">
                            <div class="d-flex justify-start">
                                <img src="../../static/sucursales/phone.png" height="27"/>
                                <p class="ml-2 font-size-16">{{ suc.attributes.phone }}</p>
                            </div>
                            <div class="">
                                <v-btn class="text-none rounded-xl" outlined>Llamar</v-btn>
                            </div>
                        </div>
                        <v-divider class="mt-2"></v-divider>
                        <div class="d-flex justify-start mt-2">
                            <img src="../../static/sucursales/mail.png" height="27"/>
                            <p class="ml-2 font-size-16">{{suc.attributes.email}}</p>
                        </div>
                        <v-divider class="mt-2"></v-divider>
                        <div class="d-flex justify-start mt-2">
                            <img src="../../static/sucursales/map.png" height="27"/>
                            <p class="ml-2 font-size-16 text-purple font-weight-bold">Abrir con mapas</p>
                        </div>
                    </v-col>
                </v-row>
                <v-row v-else class="mt-16 mb-9"></v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return{
            region: 3,
            regiones: [],
            sucursales: [],
            dataSucursales: [],
            center: {
                lat:19.415290318763805,lng:-99.12714146567397
            },
            markers:[],
            data: null,
            dataRegion: null,
            sucursalesDisabled: true,
            infowindowOption: {
                pixelOffset: {
                    width: 0,
                    height: -35
                }
            },
            infowindowPosition: { lat: 0, lng: 0},
            infowindowOpened: false,
            selectedMarker:{},
            sucursal: 1,
        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight', 'basePathApiUrl']),
        /*infowindowPosition() {
            return {
                lat: parseFloat(this.selectedMarker.latitude),
                lng: parseFloat(this.selectedMarker.longitude)
            }
        },*/
    },
    mounted(){
        this.getRegiones()
        this.getSucursales()
        //this.getDataSucursal()
    },
    methods: {
        getSucursal(){
            this.sucursales = this.dataSucursales.data.filter(item => item.attributes.region.data.id === this.region)
            this.sucursalesDisabled = false
            this.dataRegion = this.regiones.data.filter(item => item.id === this.region)
            //console.log(this.sucursales)

            //console.log(this.sucursales)
            /*if(this.region===0){
                const array = [
                    {id:0, name:'Estado de Mexico' },
                    {id:1, name:'Monterrey' },
                    {id:2, name:'León' },
                    {id:3, name:'Guadalajara' },
                    {id:4, name:'Puebla' },
                    {id:5, name:'Mérida' },
                    {id:6, name:'Querétaro + CEDIS' },
                    {id:7, name:'San Luis Potosi' },
                ]
                const mapArray = [
                    {position: {lat:19.415290318763805, lng:-99.12714146567397}},
                    {position: {lat:25.73816511924164, lng:-100.20343800183194}},
                    {position: {lat:25.73816511924164, lng:-100.20343800183194}},
                    {position: {lat:21.094554508369278, lng:-101.63085859481089}},
                    {position: {lat:19.037830462326582, lng:-98.17787986964119}}, //puebla
                    {position: {lat:20.988265309491354, lng:-89.68002826142865}}, //merida
                    {position: {lat:22.0824458381272, lng:-100.89562760188646}}, //san luis
                    {position: {lat:20.580859718783074, lng:-103.36861251093539}}//guadalajara

                ]

                this.markers = mapArray
                this.sucursales = array
                this.sucursalesDisabled = false
            }
            if(this.region===1){
                const array = [
                    {id:0, name:'Pasadena Texas' },
                ]

                this.sucursales = array
                this.sucursalesDisabled = false
            }
            if(this.region===2){
                
                const array = [
                    {id:0, name:'Colombia' },
                    {id:1, name:'Ecuador' },
                    {id:2, name:'Guatemala' },
                ]

                this.sucursales = array
                this.sucursalesDisabled = false
            }
            if(this.region===3){
                const array = [
                    {id:0, name:'Paises Bajos' },
                ]

                this.sucursales = array
                this.sucursalesDisabled = false
            }*/
            //this.data = this.dataSucursales[this.region]
        },
        handleMarker(item){
            this.infowindowOpened = true
            this.selectedMarker = item
            this.infowindowPosition = {lat: this.selectedMarker.position.lat, lng: this.selectedMarker.position.lng }
        },
        handleCloseWindow(){
            this.infowindowOpened = false
            this.selectedMarker = {}
        },
        getDataSucursal(){
            //this.sucursalesDisabled = false
            this.data = this.dataSucursales.data.filter(item => item.id === this.sucursal)
        },
        async getRegiones(){
            this.regiones = await this.$store.dispatch('getAllRegiones')
            //console.log(this.regiones)
            this.dataRegion = this.regiones.data.filter(item => item.id === 3)
        },
        async getSucursales(){
            this.dataSucursales = await this.$store.dispatch('getSucursales')
            this.sucursales = this.dataSucursales.data.filter(item => item.attributes.region.data.id === this.region)
            this.sucursalesDisabled = false

            this.data = this.dataSucursales.data.filter(item => item.id === this.sucursal)
            //console.log(this.sucursales)
        },

    },
}
</script>

<style scoped>

</style>