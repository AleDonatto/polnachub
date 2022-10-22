<template>
    <div>
        <section v-if="this.marca !== null">
            <v-container>
                <v-row justify="center" class="mt-16">
                    <v-col cols="12" align="center">
                        <!--<h1 class="font-archivo font-size-30"><span class="font-weight-black">Rototech by POLNAC</span></h1>-->
                        <h1 class="font-archivo font-size-30"><span class="font-weight-black">{{this.marca.data.attributes.title}}</span></h1>
                    </v-col>
                </v-row>

                <v-row justify="center" :class="{'mx-2': windowSize<1129 }" >
                    <v-col cols="12" xl="5" lg="6" md="6" sm="11" xs="12" align-self="center">
                        <!--<v-img src="/group/roboteach.png" contain max-height="280"></v-img>-->
                        <v-img :src="basePathApiUrl + this.marca.data.attributes.image.data.attributes.url" contain max-height="260"></v-img>
                    </v-col>
                    <v-col cols="12" xl="4" lg="6" md="6" sm="12" xs="12">
                        <!--<p class="" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }">
                            <span class="font-weight-bold">La línea de negocio especializada en la producción y comercialización de resinas plásticas para el proceso de rotomoldeo.</span>
                            <br><br>
                            Productos de la más alta calidad y diseñados de acuerdo a tus especificaciones. Rototech brinda resultados y soluciones eficientes sin importar la aplicación final.
                            <br><br>
                            Compuestos en base LLDPE (Polietileno Lineal de Baja Densidad), MDPE (Polietileno de Media Densidad), y HDPE (Polietileno de Alta Densidad) en presentación de pulverizado. 
                        </p>-->
                        <p class="" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }" v-html="this.marca.data.attributes.description"></p>
                    </v-col>
                </v-row>

                <v-row justify="center">
                    <v-col cols="12" xl="9" class="my-16">
                        <v-carousel class="carousel-black" height="340" cycle hide-delimiter-background show-arrows-on-hover v-if="windowSize > 1129 &&  this.marca.data.attributes.imagesCarousel.data !== null">
                            <!--<v-carousel-item v-for="(item,i) in 4" :key="i">
                                <v-sheet height="100%">
                                    <v-row>
                                        <v-col cols="4">
                                            <v-img src="/group/baja.png" contain max-height="270"></v-img>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-img src="/group/cono.png" contain max-height="270"></v-img>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-img src="/group/sillon.png" contain max-height="270"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>-->
                            <v-carousel-item v-for="(item,i) in this.marca.data.attributes.imagesCarousel.data" :key="i">
                                <v-sheet height="100%">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-img :src="basePathApiUrl + item.attributes.url" contain max-height="270"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>

                        <v-carousel class="carousel-black" height="340" cycle hide-delimiter-background show-arrows-on-hover v-if="windowSize < 1129 && this.marca.data.attributes.imagesCarousel.data !== null">
                            <!--<v-carousel-item v-for="(item,i) in items" :key="i">
                                <v-sheet color="white" height="95%">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-img :src="item.img" contain max-height="270"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>-->
                            <v-carousel-item v-for="(item,i) in this.marca.data.attributes.imagesCarousel.data" :key="i">
                                <v-sheet color="white" height="95%">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-img :src="basePathApiUrl + item.attributes.url" contain max-height="270"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>    
                    </v-col>
                </v-row>

                <v-row justify="center" class="mb-10" :class="{'mx-2': windowSize<1129 }">
                    <v-col cols="12" xl="5" lg="6" md="6" sm="12" xs="12">
                        <div class="ck-content" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }" v-html="this.marca.data.attributes.productos"></div>

                        <!--<p class="font-weight-bold" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }">Dentro de toda la gama de productos Rototech encontrarás: </p>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/check.png" height="17" alt="">
                            <p class=" ml-3" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }">
                                Certificación FDA, aprobados para estar en contacto con alimentos y bebidas.
                            </p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/check.png" height="17" alt="">
                            <p class=" ml-3" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }">
                                {{ windowSize > 1129 ? 'UL 94 certificación en flamabilidad.' : 'Tamaño de partícula controlada.' }}
                            </p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/check.png" height="17" alt="">
                            <p class=" ml-3" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }">
                                {{ windowSize>1129 ? 'Tamaño de partícula controlada mesh 35 regulada ARM.': 'Excelentes propiedades mecánicas: estupenda estabilidad térmica, alta resistencia al impacto e intemperismo.'}}
                            </p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/check.png" height="17" alt="">
                            <p class=" ml-3" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }">
                                {{ windowSize>1129 ? 'Excelentes propiedades mecánicas: estupenda estabilidad térmica, alta resistencia al impacto y resistencia a la intemperie (V16).' : 'Protección a luz ultravioleta.' }}
                            </p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/check.png" height="17" alt="">
                            <p class=" ml-3" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }">
                                Libres de cualquier tipo de contaminación (metales pesados).
                            </p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/check.png" height="17" alt="">
                            <p class=" ml-3" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }">
                                {{ windowSize> 1129 ? 'Gran variedad de colores.': 'Gran variedad de colores, incluyendo negro, natural, negro de alta calidad, entre otros.'}}
                            </p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/check.png" height="17" alt="">
                            <p class=" ml-3" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }">
                                Compuestos especiales: espumados, granito, y antibacterial.
                            </p>
                        </div>-->
                    </v-col>
                    <v-col cols="12" xl="4" lg="6" md="6" sm="12" xs="12">
                        <div class="ck-content" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }" v-html="this.marca.data.attributes.mercados"></div>
                        <!--<p class="font-weight-bold" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }">Mercados:</p>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/lconstruccion.png" height="22" alt="">
                            <p class="ml-3" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }">Construcción</p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/lconsumo.png" height="22" alt="">
                            <p class="ml-3" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }">Consumo</p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/lindustrial.png" height="22" alt="">
                            <p class="ml-3" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }">Industrial</p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/lautomotriz.png" height="22" alt="">
                            <p class="ml-3" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }">Automotriz y Transportación</p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/lagricola.png" height="22" alt="">
                            <p class="ml-3" :class="{'font-size-20': windowSize>1129, 'text-body-all': windowSize<1129 }">Agrícola</p>
                        </div>-->
                    </v-col>
                </v-row>

                <v-row class="mt-5" justify="center">
                    <v-col cols="12" xl="9" class="bg-catalogo rounded-lg mb-10" align="center">
                        <h1 class="font-archivo white--text font-weight-bold font-size-34 mt-10">¿Deseas consultar nuestro catálogo?</h1>

                        <nuxt-link to="/search-products" class="decoration-none">
                            <v-btn class="rounded-lg px-16 py-6 mt-6 mb-16 text-none" color="#19D3C5">
                                <span class="black--text">Ver productos</span>
                            </v-btn>
                        </nuxt-link>
                    </v-col>
                </v-row>

                <v-row justify="center" class="mt-16">
                    <v-col cols="8" xl="5">
                        <h1 class="font-size-30 font-weight-bold">Otras marcas</h1>
                    </v-col>
                    <v-col cols="4" xl="4" align="right">
                        <nuxt-link to="/polnac-group" class="color-decoration">
                            <h1 class="purple-polnac" >Ver todas</h1>
                        </nuxt-link>
                    </v-col>
                </v-row>

                <v-row justify="center" class="mb-16" v-if="windowSize > 1129 && this.marcas !== null">
                    <v-col cols="3" xl="2" align="center" v-for="(mar, index) in this.marcas.data.slice(0,4)" :key="index">
                        <nuxt-link :to="`/marcas/${mar.id}`" class="decoration-none">
                            <!--<v-img src="/group/logo-bioresin.png" contain max-width="210"></v-img>-->
                            <v-img :src="basePathApiUrl + mar.attributes.image.data.attributes.url" contain max-width="210"></v-img>
                            <!--<p class="text-body-all text-left mt-2 black--text text-truncate">Especialistas en la distribución y fabricación de resinas biodegradables. </p>-->
                            <p class="text-body-all text-left mt-2 black--text text-truncate">{{mar.attributes.subtitle}}</p>
                        </nuxt-link>
                    </v-col>
                    <!--<v-col cols="3" xl="2" align="center">
                        <nuxt-link to="/marcas/2" class="decoration-none">
                            <v-img src="/group/logo-flexlene.png" contain max-width="210"></v-img>
                            <p class="text-body-all text-left mt-2 black--text text-truncate">Expertos en el diseño, desarrollo y fabricación de Compuestos de Policloruro de Vinilo (PVC).</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="3" xl="2" align="center">
                        <nuxt-link to="/marcas/3" class="decoration-none">
                            <v-img src="/group/logo-politene.png" contain max-width="210"></v-img>
                            <p class="text-body-all text-left mt-2 black--text text-truncate">Las mejores resinas a tu disposición. Los productos más destacados de los fabricantes</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="3" xl="2" align="center">
                        <nuxt-link to="/marcas/4" class="decoration-none">
                            <v-img src="/group/logo-adilene.png" contain max-width="210"></v-img>
                            <p class="text-body-all text-left mt-2 black--text text-truncate">Aditivos para solventar cualquier reto. En Adilene encontrarás un amplio abanico de aditivos para todo tipo de aplicaciones.</p>
                        </nuxt-link>
                    </v-col>-->
                </v-row>
                <v-row justify="center" v-if="windowSize < 1129 && this.marcas !== null">
                    <v-col cols="12" class="mb-16">
                        <!--<v-carousel height="280" cycle hide-delimiter-background show-arrows-on-hover>
                            <v-carousel-item v-for="(item,i) in itemsMarcas" :key="i">
                               <v-row justify="center">
                                    <v-col cols="11" align="center">
                                        <nuxt-link :to="`/marcas/${i+1}`" class="decoration-none">
                                            <v-img :src="item.img" contain max-width="270"></v-img>
                                            <p class="text-body-all text-left mt-2 black--text">{{ item.text }}</p>
                                        </nuxt-link>
                                    </v-col>
                                </v-row>
                            </v-carousel-item>
                        </v-carousel>-->
                        <v-carousel class="carousel-black" cycle height="280" hide-delimiter-background show-arrows-on-hover>
                            <v-carousel-item v-for="(item,i) in this.marcas.data.slice(0,4)" :key="i">
                                 <v-sheet height="100%">
                                    <v-row justify="center">
                                        <v-col cols="11" align="center">
                                            <nuxt-link :to="`/marcas/${item.id}`" class="decoration-none">
                                                <v-img :src="basePathApiUrl + item.attributes.image.data.attributes.url" contain max-width="270"></v-img>
                                                <p class="text-body-all text-left mt-2 black--text">{{ item.attributes.subtitle }}</p>
                                            </nuxt-link>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            /*items: [
                {img: require('../../static/group/baja.png')},
                {img: require('../../static/group/cono.png')},
                {img: require('../../static/group/sillon.png')},
            ],
            itemsMarcas: [
                {img: require('../../static/group/logo-bioresin.png'), text: 'Especialistas en la distribución y fabricación de resinas biodegradables. '},
                {img: require('../../static/group/logo-flexlene.png'), text: 'Expertos en el diseño, desarrollo y fabricación de Compuestos de Policloruro de Vinilo (PVC).'},
                {img: require('../../static/group/logo-politene.png'), text: 'Las mejores resinas a tu disposición. Los productos más destacados de los fabricantes'},
                {img: require('../../static/group/logo-adilene.png'), text: 'Aditivos para solventar cualquier reto. En Adilene encontrarás un amplio abanico de aditivos para todo tipo de aplicaciones.'},
            ],*/
            marca: null,
            marcas: null,
        }
    },
    mounted() {
        this.getMarca(this.$route.params.id)
        this.getMarcas()
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight','baPseathApiUrl'])
    },
    methods: {
        async getMarca(id){
            this.marca = await this.$store.dispatch('getMarcaById', id)
            //console.log(this.marca)
        },
        async getMarcas(){
            this.marcas = await this.$store.dispatch('getAllMarcas')
            //console.log(this.marcas)
        }

    }
}
</script>

<style scoped>
.bg-catalogo{
    background-color: #655DC6;
}
.decoration-none{
    text-decoration: none;
}
.color-decoration{
    text-decoration-color: #773DBD !important;
}
.purple-polnac{
    color: #773DBD;
}
</style>