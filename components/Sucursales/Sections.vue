<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center" class="mt-16">
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                        <v-select v-model="region" class="rounded-xl" outlined :items="regiones" item-text="sucursal" item-value="id" 
                        label="Selecciona área geográfica" @change="getSucursal"></v-select>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                        <v-select v-model="sucursal" label="Sucursales" class="rounded-xl" outlined :disabled="sucursalesDisabled"
                        :items="sucursales" item-text="name" item-value="name" ref="sucursal" @change="getDataSucursal"></v-select>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" align="center">
                        <v-img :src="data.map" contain max-height="450" v-if="windowSize>1129"></v-img>
                        <v-img :src="data.mapmb" contain max-width="380" v-else></v-img>
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

                <v-row class="mb-16">
                    <v-col cols="12" lg="8" md="8" sm="12" xs="12" class="mb-10">
                        <h1 class="black--text font-size-24 mb-5">{{data.title}}</h1>
                        <v-row v-if="windowSize > 1129">
                            <v-col cols="6" v-for="(item, index) in data.images" :key="index">
                                <v-img :src="item.img" contain max-height="420"></v-img>
                            </v-col>
                        </v-row>
                        <v-row v-if="windowSize < 1129">
                            <v-carousel class="carousel-black" :show-arrows="false" dark height="270" cycle hide-delimiter-background show-arrows-on-hover>
                                <v-carousel-item v-for="(item,i) in data.images" :key="i">
                                    <v-row justify="center">
                                        <v-col cols="11">
                                            <v-img :src="item.img" contain max-height="270"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-carousel-item>
                            </v-carousel>
                        </v-row>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xs="12" align-self="center" class="mb-10">
                        <h1 class="black--text font-size-24 mb-5">Datos de contacto</h1>

                        <p class="font-size-16" v-if="data.address !== ''"><span class="font-weight-bold">Dirección:</span> {{data.address}}</p>
                        <div class="d-flex justify-space-between mt-2" v-if="data.tel !== ''">
                            <div class="d-flex justify-start">
                                <img src="../../static/sucursales/phone.png" height="27"/>
                                <p class="ml-2 font-size-16">{{ data.tel }}</p>
                            </div>
                            <div class="">
                                <v-btn class="text-none rounded-xl" outlined>Llamar</v-btn>
                            </div>
                        </div>
                        <v-divider class="mt-2"></v-divider>
                        <div class="d-flex justify-start mt-2">
                            <img src="../../static/sucursales/mail.png" height="27"/>
                            <p class="ml-2 font-size-16">digital@polnac.com</p>
                        </div>
                        <v-divider class="mt-2"></v-divider>
                        <div class="d-flex justify-start mt-2">
                            <img src="../../static/sucursales/map.png" height="27"/>
                            <p class="ml-2 font-size-16 text-purple font-weight-bold">Abrir con mapas</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return{
            region: '',
            regiones: [
                {id:0, sucursal: 'MEXICO'},
                {id:1, sucursal: 'USA'},
                {id:2, sucursal: 'LATAM'},
                {id:3, sucursal: 'EUROPA'},
            ],
            sucursales: null,
            dataSucursales: [
                {title: 'POLNAC México', mapmb: require('../../static/sucursales/map-mobile.png') ,map: require('../../static/sucursales/sucursales-mexico.png'), images: [{img:require('../../static/sucursales/s-mexico.png')}, {img: require('../../static/sucursales/s-mexico2.png')}], address: 'Lázaro Cárdenas No. 49, San Jerónimo Tepetlacalco, Tlalnepantla, Estado de México, 54090 México', tel: '(55) 2585 2650' },
                {title: 'POLNAC U.S.A.', mapmb: require('../../static/sucursales/mapusamb.png') ,map: require('../../static/sucursales/mapusa.png') ,images: [{img:require('../../static/sucursales/s-usa.png')},{img: require('../../static/sucursales/s-usa2.png')}], address: '4831 Underwood Rd. Pasadena, Texas 77505, U.S.A.', tel: '' },
                {title: 'Colombia', mapmb: require('../../static/sucursales/map-mobile.png'), map: require('../../static/sucursales/sucursales-mexico.png') ,images:[{img:require('../../static/sucursales/s-colombia.png')},{img: require('../../static/sucursales/s-colombia1.png')}], address: '', tel: '52 55 4607 0841' },
                {title: 'Europe - Amsterdam Netherlands', mapmb: require('../../static/sucursales/mapeuropamb.png'), map: require('../../static/sucursales/sucursales-mexico.png') ,images:[{img: require('../../static/sucursales/s-amsterdan.png')}, {img: require('../../static/sucursales/s-amsterdan2.png')}], address: '', tel: '52 55 4607 0841'},
            ],
            center: {
                lat:19.415290318763805,lng:-99.12714146567397
            },
            markers:[
            ],
            data: {},
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
            sucursal: '',
        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight']),
        /*infowindowPosition() {
            return {
                lat: parseFloat(this.selectedMarker.latitude),
                lng: parseFloat(this.selectedMarker.longitude)
            }
        },*/
    },
    mounted(){
        this.data = this.dataSucursales[0]
    },
    methods: {
        getSucursal(){
            if(this.region===0){
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
            }
            this.data = this.dataSucursales[this.region]
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
            console.log(this.sucursal)
            let dataSucursal = {}
            switch(this.sucursal){
                case 'Estado de Mexico': 
                    dataSucursal = {
                        title: 'POLNAC México',
                        map: require('../../static/sucursales/sucursales-mexico.png'),
                        images: [
                            {img: require('../../static/sucursales/s-mexico.png')},
                            {img: require('../../static/sucursales/s-mexico2.png')}
                        ],
                        address: 'Lázaro Cárdenas No. 49, San Jerónimo Tepetlacalco, Tlalnepantla, Estado de México, 54090 México',
                        tel: '(55) 2585 2650',
                        mail: 'digital@polnac.com',
                        linkmap: ''
                    }
                    this.data = dataSucursal
                    break
                case 'Monterrey': 
                    dataSucursal = {
                        title: 'Sucursal Monterrey',
                        map: require('../../static/sucursales/sucursales-mexico.png'),
                        images: [
                            {img: require('../../static/sucursales/smonterrey1.png')},
                            {img: require('../../static/sucursales/smonterrey2.png')}
                        ],
                        address: 'Av. Ruiz Cortinez No. 245, Edificio 1 Módulo 23 Norte, Parque Industrial Kalos Col. Jardines de la Victoria, Guadalupe, Nuevo León C.P. 67119',
                        tel: '52 (81) 8351 9087',
                        mail: 'digital@polnac.com',
                        linkmap: ''
                    }
                    this.data = dataSucursal
                    break
                case 'León': 
                    dataSucursal = {
                        title: 'Sucursal León',
                        map: require('../../static/sucursales/sucursales-mexico.png'),
                        images: [
                            {img: require('../../static/sucursales/sleon1.png')},
                            {img: require('../../static/sucursales/sleon2.png')}
                        ],
                        address: 'Blvd, J. José Torres Landa No. 4704 Interior F, Polígono Industrial Jerez, Col. Cerrito de Jerez, León, Guanajuato C.P. 37530',
                        tel: '52 (477) 194 5787',
                        mail: 'digital@polnac.com',
                        linkmap: ''
                    }
                    this.data = dataSucursal
                    break
                case 'Guadalajara':
                    dataSucursal = {
                        title: 'Sucursal Jalisco',
                        map: require('../../static/sucursales/sucursales-mexico.png'),
                        images: [
                            {img: require('../../static/sucursales/sjalisco1.png')},
                            {img: require('../../static/sucursales/sjalisco2.png')}
                        ],
                        address: 'Periférico Sur No. 6350 Bodega G-1 Col. Artesanos, Tlaquepaque, Jalisco C.P. 45610',
                        tel: '52 (33) 3673 8288',
                        mail: 'digital@polnac.com',
                        linkmap: ''
                    }
                    this.data = dataSucursal
                    break 
                case 'Puebla': 
                    dataSucursal = {
                        title: 'Sucursal Puebla',
                        map: require('../../static/sucursales/sucursales-mexico.png'),
                        images: [
                            {img: require('../../static/sucursales/spuebla1.png')},
                            {img: require('../../static/sucursales/spuebla2.png')}
                        ],
                        address: 'Calle 30 Norte No. 604 Bodega 24 Col. Resurgimiento, Puebla, Pue. C.P. 72370',
                        tel: '52 (222) 235 1666',
                        mail: 'digital@polnac.com',
                        linkmap: ''
                    }
                    this.data = dataSucursal
                    break 
                case 'Mérida': 
                    dataSucursal = {
                        title: 'Sucursal Mérida',
                        map: require('../../static/sucursales/sucursales-mexico.png'),
                        images: [
                            {img: require('../../static/sucursales/smerida1.png')},
                            {img: require('../../static/sucursales/smerida2.png')}
                        ],
                        address: 'Km 41 Anillo Periférico Poniente, Bodega No. 7, Col. El Porvenir, Bodegas Yucatán, Mérida, Yucatán C.P. 97238',
                        tel: '52 (999) 912 2477',
                        mail: 'digital@polnac.com',
                        linkmap: ''
                    }
                    this.data = dataSucursal
                    break
                case 'Querétaro + CEDIS': 
                    dataSucursal = {
                        title: 'Sucursal Querétaro',
                        map: require('../../static/sucursales/sucursales-mexico.png'),
                        images: [
                            {img: require('../../static/sucursales/squeretaro1.png')},
                            {img: require('../../static/sucursales/squeretaro2.png')}
                        ],
                        address: 'Km 41 Anillo Periférico Poniente, Bodega No. 7, Col. El Porvenir, Bodegas Yucatán, Mérida, Yucatán C.P. 97238',
                        tel: '52 (999) 912 2477',
                        mail: 'digital@polnac.com',
                        linkmap: ''
                    }
                    this.data = dataSucursal
                    break
                case 'San Luis Potosi': 
                    dataSucursal = {
                        title: 'Sucursal Mérida',
                        map: require('../../static/sucursales/sucursales-mexico.png'),
                        images: [
                            {img: require('../../static/sucursales/ssanluis1.png')},
                            {img: require('../../static/sucursales/ssanluis2.png')}
                        ],
                        address: 'Acceso IlI No. 42 Nave 13 y 14 Parque Industrial Benito Juarez, Querétaro, Qro. C.P. 76130',
                        tel: '52 (442) 209 5046',
                        mail: 'digital@polnac.com',
                        linkmap: ''
                    }
                    this.data = dataSucursal
                    break
                case 'Colombia': 
                    dataSucursal = {
                        title: 'Colombia',
                        map: require('../../static/sucursales/sucursales-mexico.png'),
                        images: [
                            {img:require('../../static/sucursales/s-colombia.png')},
                            {img: require('../../static/sucursales/s-colombia1.png')}
                        ],
                        address: '',
                        tel: '52 55 4607 0841',
                        mail: 'digital@polnac.com',
                        linkmap: ''
                    }
                    this.data = dataSucursal
                    break
                case 'Ecuador': 
                    dataSucursal = {
                        title: 'Ecuador',
                        map: require('../../static/sucursales/sucursales-mexico.png'),
                        images: [
                            {img: require('../../static/sucursales/secuador1.png')},
                            {img: require('../../static/sucursales/secuador2.png')}
                        ],
                        address: '',
                        tel: '57 304 212 3927',
                        mail: 'digital@polnac.com',
                        linkmap: ''
                    }
                    this.data = dataSucursal
                    break
                case 'Guatemala': 
                    dataSucursal = {
                        title: 'Guatemala',
                        map: require('../../static/sucursales/sucursales-mexico.png'),
                        images: [
                            {img: require('../../static/sucursales/sguatemala1.png')},
                            {img: require('../../static/sucursales/sguatemala2.png')}
                        ],
                        address: '',
                        tel: '52 55 4607 0841',
                        mail: 'digital@polnac.com',
                        linkmap: ''
                    }
                    this.data = dataSucursal
                    break
            }
        }

    },
}
</script>

<style scoped>

</style>