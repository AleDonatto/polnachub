<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center" class="mt-16">
                    <v-col cols="12" align="center">
                        <h1 class="font-archivo font-size-30 font-weight-bold">Rototech by POLNAC</h1>
                    </v-col>
                </v-row>

                <v-row justify="center">
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" align-self="center">
                        <v-img src="/group/roboteach.png" contain max-height="280"></v-img>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                        <p class="text-body-all">
                            <span class="font-weight-bold">La línea de negocio especializada en la producción y comercialización de resinas plásticas para el proceso de rotomoldeo.</span>
                            <br><br>
                            Productos de la más alta calidad y diseñados de acuerdo a tus especificaciones. Rototech brinda resultados y soluciones eficientes sin importar la aplicación final.
                            <br><br>
                            Compuestos en base LLDPE (Polietileno Lineal de Baja Densidad), MDPE (Polietileno de Media Densidad), y HDPE (Polietileno de Alta Densidad) en presentación de pulverizado. 
                        </p>
                    </v-col>
                </v-row>

                <v-row justify="center">
                    <v-col cols="12" class="my-16">
                        <v-carousel :show-arrows="false" height="340" dark v-if="windowSize > 1129">
                            <v-carousel-item v-for="(item,i) in 4" :key="i">
                                <v-sheet color="white" height="100%">
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
                            </v-carousel-item>
                        </v-carousel>

                        <v-carousel :show-arrows="false" height="340" dark v-if="windowSize < 1129">
                            <v-carousel-item v-for="(item,i) in items" :key="i">
                                <v-sheet color="white" height="100%">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-img :src="item.img" contain max-height="270"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>    
                    </v-col>
                </v-row>

                <v-row justify="center" class="mb-10">
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                        <p class="font-weight-bold text-body-all">Dentro de toda la gama de productos Rototech encontrarás: </p>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/check.png" height="17" alt="">
                            <p class=" ml-3 text-body-all">Certificación FDA, aprobados para estar en contacto con alimentos y bebidas.</p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/check.png" height="17" alt="">
                            <p class=" ml-3 text-body-all">UL 94 certificación en flamabilidad.</p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/check.png" height="17" alt="">
                            <p class=" ml-3 text-body-all">Tamaño de partícula controlada mesh 35 regulada ARM.</p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/check.png" height="17" alt="">
                            <p class=" ml-3 text-body-all">Excelentes propiedades mecánicas: estupenda estabilidad térmica, alta resistencia al impacto y resistencia a la intemperie (V16).</p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/check.png" height="17" alt="">
                            <p class=" ml-3 text-body-all">Libres de cualquier tipo de contaminación (metales pesados).</p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/check.png" height="17" alt="">
                            <p class=" ml-3 text-body-all">Gran variedad de colores.</p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/check.png" height="17" alt="">
                            <p class=" ml-3 text-body-all">Compuestos especiales: espumados, granito, y antibacterial.</p>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                        <p class="font-weight-bold text-body-all">Mercados:</p>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/lconstruccion.png" height="22" alt="">
                            <p class="ml-3 text-body-all">Construcción</p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/lconsumo.png" height="22" alt="">
                            <p class="ml-3 text-body-all">Consumo</p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/lindustrial.png" height="22" alt="">
                            <p class="ml-3 text-body-all">Industrial</p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/lautomotriz.png" height="22" alt="">
                            <p class="ml-3 text-body-all">Automotriz y Transportación</p>
                        </div>
                        <div class="d-flex inline-block">
                            <img src="../../static/group/lagricola.png" height="22" alt="">
                            <p class="ml-3 text-body-all">Agrícola</p>
                        </div>
                    </v-col>
                </v-row>

                <v-row class="mt-5" justify="center">
                    <v-col cols="12" class="bg-catalogo rounded-lg mb-10" align="center">
                        <h1 class="font-archivo white--text font-weight-bold font-size-34 mt-10">¿Deseas consultar nuestro catálogo?</h1>

                        <nuxt-link to="/search-products" class="decoration-none">
                            <v-btn class="rounded-lg px-16 py-6 mt-6 mb-16 text-none" color="#19D3C5">
                                <span class="black--text">Ver productos</span>
                            </v-btn>
                        </nuxt-link>
                    </v-col>
                </v-row>

                <v-row justify="center" class="mt-16">
                    <v-col cols="8">
                        <h1 class="font-size-30 font-weight-bold">Otras marcas</h1>
                    </v-col>
                    <v-col cols="4" align="right">
                        <nuxt-link to="/polnac-group" class="color-decoration">
                            <h1 class="purple-polnac" >Ver todas</h1>
                        </nuxt-link>
                    </v-col>
                </v-row>
                <v-row justify="center" class="mb-16" v-if="windowSize > 1129">
                    <v-col cols="3" align="center">
                        <nuxt-link to="/marcas/1" class="decoration-none">
                            <v-img src="/group/logo-bioresin.png" contain max-width="210"></v-img>
                            <p class="text-body-all text-left mt-2 black--text">Especialistas en la distribución y fabricación de resinas biodegradables. </p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="3" align="center">
                        <nuxt-link to="/marcas/2" class="decoration-none">
                            <v-img src="/group/logo-flexlene.png" contain max-width="210"></v-img>
                            <p class="text-body-all text-left mt-2 black--text">Expertos en el diseño, desarrollo y fabricación de Compuestos de Policloruro de Vinilo (PVC).</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="3" align="center">
                        <nuxt-link to="/marcas/3" class="decoration-none">
                            <v-img src="/group/logo-politene.png" contain max-width="210"></v-img>
                            <p class="text-body-all text-left mt-2 black--text">Las mejores resinas a tu disposición. Los productos más destacados de los fabricantes</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="3" align="center">
                        <nuxt-link to="/marcas/4" class="decoration-none">
                            <v-img src="/group/logo-adilene.png" contain max-width="210"></v-img>
                            <p class="text-body-all text-left mt-2 black--text">Aditivos para solventar cualquier reto. En Adilene encontrarás un amplio abanico de aditivos para todo tipo de aplicaciones.</p>
                        </nuxt-link>
                    </v-col>
                </v-row>
                <v-row justify="center" v-if="windowSize < 1129">
                    <v-col cols="12" class="mb-16">
                        <v-carousel :show-arrows="false" dark height="280">
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
            items: [
                {img: require('../../static/group/baja.png')},
                {img: require('../../static/group/cono.png')},
                {img: require('../../static/group/sillon.png')},
            ],
            itemsMarcas: [
                {img: require('../../static/group/logo-bioresin.png'), text: 'Especialistas en la distribución y fabricación de resinas biodegradables. '},
                {img: require('../../static/group/logo-flexlene.png'), text: 'Expertos en el diseño, desarrollo y fabricación de Compuestos de Policloruro de Vinilo (PVC).'},
                {img: require('../../static/group/logo-politene.png'), text: 'Las mejores resinas a tu disposición. Los productos más destacados de los fabricantes'},
                {img: require('../../static/group/logo-adilene.png'), text: 'Aditivos para solventar cualquier reto. En Adilene encontrarás un amplio abanico de aditivos para todo tipo de aplicaciones.'},
            ]
        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight'])
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