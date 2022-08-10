<template>
    <div>
        <section v-if="windowSize > 1129">
            <v-container>
                <v-row justify="center" class="my-10">
                    <v-col cols="6">
                        <v-img src="/blog/horizontes.png" contain max-height="320"></v-img>
                    </v-col>
                    <v-col cols="6" align-self="center">
                        <p class="font-archivo font-weight-bold font-size-40">Nuevos horizontes</p>
                        <p class="text-body-all">
                            El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea 
                            de las Naciones Unidas para el Medio Ambiente aprobó una resolución 
                            histórica para hacer frente a la contaminación plástica. Se prevé 
                            que un acuerdo internacional entre en vigor a finales de 2024.
                        </p>
                        <nuxt-link to="/blogs/1" class="">
                            <p class="text-right text-purple font-weight-bold">
                                Seguir leyendo
                            </p>
                        </nuxt-link>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center" :class="{'my-16' : windowSize < 1129 }">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <nuxt-link to="/blogs/1" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-productos.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <nuxt-link to="/blogs/2" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-mercados.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <nuxt-link to="/blogs/3" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-tendencias.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <nuxt-link to="/blogs/4" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :width="windowSize>1129 ? '325' : '300'" :height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-polnac.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>

                    <v-col cols="3" v-if="windowSize >1129">
                        <nuxt-link to="/blogs/5" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                <img src="/blog-productos.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle>
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="3"  v-if="windowSize >1129">
                        <nuxt-link to="/blogs/6" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                <img src="/blog-mercados.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle>
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="3"  v-if="windowSize >1129">
                        <nuxt-link to="/blogs/7" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                <img src="/blog-tendencias.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle>
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="3"  v-if="windowSize >1129">
                        <nuxt-link to="/blogs/8" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                <img src="/blog-polnac.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle>
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section  v-if="windowSize >1129">
            <v-container fluid>
                <v-row justify="center">
                    <v-col cols="12" align="center">
                        <h1 class="font-archivo font-weight-bold font-size-30">Recomendados</h1>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" lg="9" md="10" class="mb-10">
                        <v-sheet class="mx-auto" height="250">
                            <v-slide-group v-model="model" class="pa-5" show-arrows>
                                <v-slide-item v-for="(item, index) in productos" :key="index" >
                                    <nuxt-link :to="`/products/${index}`">
                                        <v-card height="250" class="shadow-out">
                                            <v-hover v-slot="{ hover }">
                                                <v-card class="ma-5 card-blog shadow-out" width="220" height="390">
                                                    <v-img :src="item.img" style="width: 100%">
                                                        <v-expand-transition>
                                                            
                                                        <!--<div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text" style="height: 100%;"></div>-->
                                                        <v-img :src="item.imgH" v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal text-h2 white--text" style="height: 100%;"></v-img>
                                                        </v-expand-transition>
                                                    </v-img>
                                                </v-card>
                                            </v-hover>
                                        </v-card>
                                    </nuxt-link>
                                </v-slide-item>
                            </v-slide-group>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row  v-if="windowSize >1129">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <nuxt-link to="/blogs/1" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-productos.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <nuxt-link to="/blogs/2" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-mercados.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <nuxt-link to="/blogs/3" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-tendencias.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <nuxt-link to="/blogs/4" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :width="windowSize>1129 ? '325' : '300'" :height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-polnac.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>

                    <v-col cols="3" v-if="windowSize >1129">
                        <nuxt-link to="/blogs/5" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                <img src="/blog-productos.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle>
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="3"  v-if="windowSize >1129">
                        <nuxt-link to="/blogs/6" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                <img src="/blog-mercados.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle>
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="3"  v-if="windowSize >1129">
                        <nuxt-link to="/blogs/7" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                <img src="/blog-tendencias.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle>
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="3"  v-if="windowSize >1129">
                        <nuxt-link to="/blogs/8" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '205'" :max-height="windowSize >1129 ? '390': '320'">
                                <img src="/blog-polnac.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle>
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>
                </v-row>

                <v-row justify="center">
                    <v-col cols="12" lg="4" md="4" sm="10" xs="10" class="mb-16">
                        <v-btn outlined block color="#19D3C5" class="text-none py-6 rounded-lg">
                            <span class="black--text">Mostrar más artículos</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return {
            model: null,
            productos: [
                {img: require('../../static/plasticos.png'), imgH: require('../../static/h-plasticos.png')},
                {img: require('../../static/compuestos.png'),imgH: require('../../static/h-compuestos.png') },
                {img: require('../../static/masterbatch.png'),imgH: require('../../static/h-masterbach.png') },
                {img: require('../../static/aditivos.png'), imgH: require('../../static/h-aditivos.png') },
                {img: require('../../static/carbonato.png'),imgH: require('../../static/h-carbonato.png') },
                {img: require('../../static/rotomoldeo.png'),imgH: require('../../static/h-rotomoldeo.png') },
                {img: require('../../static/pvc.png'), imgH: require('../../static/h-pvc.png')},
                {img: require('../../static/termoplasticos.png'), imgH: require('../../static/h-termo.png') },
                {img: require('../../static/biodegradables.png'), imgH: require('../../static/h-biodegradables.png') },
                {img: require('../../static/hules.png'), imgH: require('../../static/h-hules.png') },
                {img: require('../../static/polietileno.png'), imgH: require('../../static/h-polietileno.png') },
                {img: require('../../static/polipropileno.png'), imgH: require('../../static/h-polipropileno.png') },
                {img: require('../../static/estirenicos.png'), imgH: require('../../static/h-estirenicos.png') },
            ],
        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight'])
    }
}
</script>

<style scoped>
.text-purple{
    color: #773DBD;
}
.shadow-out{
    box-shadow: none !important;
}
</style>