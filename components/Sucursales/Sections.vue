<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center" class="mt-16">
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                        <v-select v-model="sucursal" class="rounded-xl" outlined :items="sucursales" item-text="sucursal" item-value="id" 
                        label="Selecciona área geográfica (México)" @change="getSucursal"></v-select>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                        <v-select class="rounded-xl" outlined></v-select>
                    </v-col>
                </v-row>

                <v-row justify="center">
                    <v-col cols="12" align="center">
                        <v-img src="/sucursales/sucursales-mexico.png" contain max-height="450" v-if="windowSize>1129"></v-img>
                        <v-img src="/sucursales/map-mobile.png" contain max-width="380" v-else></v-img>
                    </v-col>
                </v-row>

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
            sucursal: '',
            sucursales: [
                {id:0, sucursal: 'México'},
                {id:1, sucursal: 'USA'},
                {id:2, sucursal: 'LATAM'},
                {id:3, sucursal: 'Europa'},
            ],
            dataSucursales: [
                {title: 'POLNAC México', images: [{img:require('../../static/sucursales/s-mexico.png')}, {img: require('../../static/sucursales/s-mexico2.png')}], address: 'Lázaro Cárdenas No. 49, San Jerónimo Tepetlacalco, Tlalnepantla, Estado de México, 54090 México', tel: '(55) 2585 2650' },
                {title: 'POLNAC U.S.A.', images: [{img:require('../../static/sucursales/s-usa.png')},{img: require('../../static/sucursales/s-usa2.png')}], address: '4831 Underwood Rd. Pasadena, Texas 77505, U.S.A.', tel: '' },
                {title: 'Colombia', images:[{img:require('../../static/sucursales/s-colombia.png')},{img: require('../../static/sucursales/s-colombia1.png')}], address: '', tel: '52 55 4607 0841' },
                {title: 'Europe - Amsterdam Netherlands', images:[{img: require('../../static/sucursales/s-amsterdan.png')}, {img: require('../../static/sucursales/s-amsterdan2.png')}], address: '', tel: '52 55 4607 0841'},
            ],
            data: {}
        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight'])
    },
    mounted(){
        this.data = this.dataSucursales[0]
    },
    methods: {
        getSucursal(){
            this.data = this.dataSucursales[this.sucursal]
        }
    }
}
</script>

<style scoped>

</style>