<template>
    <div v-if="this.mercado !== null">
        <div :class="{'bg-market': windowSize > 1129, 'bg-market-mb': windowSize < 1129 }" :style="{ backgroundImage: `url(${basePathApiUrl + mercado.data.attributes.imgBanner.data.attributes.url })` }">
            <v-row justify="center">
                <v-col cols="12" align="center" class="mt-10">
                    <!--<h1 class="mt-16 font-archivo font-size-40 white--text">Electrodomésticos</h1>-->
                    <h1 class="mt-16 font-archivo font-size-40 white--text">{{this.mercado.data.attributes.nameMarket}}</h1>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="10" xl="6" lg="6" md="6" sm="10" xs="10" align="center">
                    <!--<p class="white--text font-size-24 mb-16">Optimizando tu vida</p>-->
                    <p class="white--text font-size-24 mb-16">{{this.mercado.data.attributes.subtitle}}</p>
                </v-col>
            </v-row>
        </div>

        <section>
            <v-container>
                <v-row class="" justify="center">
                    <v-col cols="12" class="my-16">
                        <!--<p class="text-body-all">
                            <span class="font-weight-bold">POLNAC</span> tiene a tu disposición un extenso abanico de productos listos 
                            para solventar cualquier reto; desde compuestos personalizados para 
                            línea blanca y refrigeración hasta materiales para enseres menores.  <br><br>
                            Nuestra pasión es contribuir al éxito de tu empresa. Sin importar la 
                            índole del desafio: técnico, estético o de desempeño, aquí encontrarás 
                            todas las soluciones. 
                        </p>-->
                        <p class="text-body-all ck-content" v-html="this.mercado.data.attributes.description"></p>
                    </v-col>
                    <v-col cols="12" class="mb-10">
                        <!--<v-carousel class="carousel-black" :show-arrows="false" height="340" dark cycle hide-delimiter-background show-arrows-on-hover v-if="windowSize > 1129">
                            <v-carousel-item v-for="(item,i) in 4" :key="i">
                                <v-sheet color="white" height="100%">
                                    <v-row>
                                        <v-col cols="4">
                                            <v-img src="/market/caja.png" contain max-height="270"></v-img>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-img src="/market/tostador.png" contain max-height="270"></v-img>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-img src="/market/refrigerador.png" contain max-height="270"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>-->

                        <v-carousel class="carousel-black" :show-arrows="false" height="340" dark cycle hide-delimiter-background show-arrows-on-hover v-if="windowSize > 1129 && this.mercado !== null">
                            <v-carousel-item v-for="(imgCar,i) in this.mercado.data.attributes.imgCarousel.data" :key="i">
                                <v-sheet color="white" height="100%">
                                    <v-row>
                                        <v-col cols="12" align="center">
                                            <v-img :src="basePathApiUrl + imgCar.attributes.url" contain max-height="270"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>

                        <v-carousel :show-arrows="false"  cycle hide-delimiter-background show-arrows-on-hover height="340" dark v-if="windowSize < 1129">
                            <v-carousel-item v-for="(item,i) in this.mercado.data.attributes.imgCarousel.data" :key="item.id+i" class="carousel-black">
                                <v-sheet color="white" height="100%">
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
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row>
                    <v-col cols="8">
                        <h1 class="font-size-30 font-weight-bold">Productos recomendados</h1>
                    </v-col>
                    <v-col cols="4" align="right">
                        <nuxt-link to="/market" class="color-decotarion">
                            <h1 class="purple-polnac">Ver todas</h1>
                        </nuxt-link>
                    </v-col>
                </v-row>
                <v-row justify="center" class="mb-16" v-if="windowSize > 1129 && this.productos !== null">
                    <v-col cols="3" v-for="(item, index) in this.productos.data.slice(0,4)" :key="item.id+index">
                        <nuxt-link :to="`/market/type/${item.id}`" class="decoration-none">
                            <v-img :src="basePathApiUrl +  item.attributes.imgMiniature.data.attributes.url" contain max-height="270" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                                <p class="white--text font-weight-bold text-center text-body-all mt-15">{{item.attributes.name}}</p>
                            </v-img>
                        </nuxt-link>
                    </v-col>
                    <!--<v-col cols="3">
                        <nuxt-link to="/market/type/3">
                            <v-img src="/contact/compuestos.png" contain max-height="270"></v-img>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="3">
                        <nuxt-link to="/market/type/4">
                            <v-img src="/contact/masterbatch.png" contain max-height="270"></v-img>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="3">
                        <nuxt-link to="/market/type/5">
                            <v-img src="/contact/aditivos.png" contain max-height="270"></v-img>
                        </nuxt-link>
                    </v-col>-->
                </v-row>
                <v-row v-if="windowSize < 1129 && this.productos !== null" class="mb-16">
                    <v-carousel class="carousel-black" :show-arrows="false" dark height="270" cycle hide-delimiter-background show-arrows-on-hover>
                        <v-carousel-item v-for="(item,i) in this.productos.data.slice(0,4)" :key="item.id+i">
                            <v-row justify="center">
                                <v-col cols="11">
                                    <nuxt-link :to="`/market/type/${item.id}`">
                                        <v-img :src="basePathApiUrl +  item.attributes.imgMiniature.data.attributes.url" contain max-height="270" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                                            <p class="white--text font-weight-bold text-center text-body-all margin-top">{{item.attributes.name}}</p>
                                        </v-img>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </v-carousel-item>
                    </v-carousel>
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
            /*itemsMercado: [
                {img : require('../../static/contact/plasticos.png')},
                {img : require('../../static/contact/compuestos.png')},
                {img : require('../../static/contact/masterbatch.png')},
                {img : require('../../static/contact/aditivos.png')},
            ],
            items: [
                {img : require('../../static/contact/plasticos.png')},
                {img : require('../../static/contact/compuestos.png')},
                {img : require('../../static/contact/masterbatch.png')},
            ],*/
            mercado: null,
            productos: null,
        }
    },
    mounted(){
        //console.log(this.$route.params.id)
        this.getMercadoId(this.$route.params.id)
        this.getProductos()
    },
    computed: {
        ...mapState(['windowHeight','windowSize', 'basePathApiUrl'])
    },
    methods: {
        async getMercadoId(id){
            this.mercado = await this.$store.dispatch('getMarketById', id)
            //console.log(this.mercado)
        },
        async getProductos(){
            this.productos = await this.$store.dispatch('getAllProducts')
            //console.log(this.productos)
        }
    }
}
</script>

<style scoped>
.bg-market{
    /*background-image: url('../../static/market/bg-typemarket.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 350px;
}
.bg-market-mb{
    /*background-image: url('../../static/market/bg-typemarket.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
.purple-polnac{
    color: #773DBD;
}
.color-decotarion{
    text-decoration-color: #773DBD !important;
}

.theme--dark.v-btn.v-btn--icon {
    color: black !important;
}

.margin-top{
    margin-top: 10vh !important;
}
</style>