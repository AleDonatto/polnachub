<template>
    <div v-if="pagetranspolimer === null">
        <v-sheet class="pa-3">
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
    </div>
    <div v-else>
        <section>
            <v-container>
                <v-row justify="center">
                    <v-col lg="5" md="5" sm="12" xs="12" class="mt-10 mb-5" align-self="center">
                        <!--<p>
                            {{ $t('transpolimer.services') }}
                            <br><br> 
                            {{ $t('transpolimer.tecnology') }}
                            <br><br>
                            {{ $t('transpolimer.qualities') }}
                        </p>-->
                        <div v-html="pagetranspolimer.section.description"></div>
                    </v-col>
                    <v-col lg="5" md="5" sm="12" xs="12" align-self="center" :class="{'my-2': windowSize < 1129, 'my-10': windowSize > 1129}">
                        <v-carousel dark cycle :height="windowSize > 1129 ? '300' : '210'" hide-delimiter-background show-arrows-on-hover :class="{'mt-1': windowSize < 1129, 'mt-5': windowSize > 1129}">
                            <v-carousel-item v-for="(slide, i) in 3" :key="i">
                                <v-sheet height="100%">
                                    <v-row class="fill-height" align="center" justify="center">
                                        <div>
                                            <v-img src="/transpolimer/carousel-trasnpolimer.png" contain width="450" v-if="windowSize>1129"></v-img>
                                            <v-img src="/transpolimer/carousel-mb.png" contain width="320" v-else></v-img>
                                        </div>
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
                <!--<v-row>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" align-self="center">
                        <v-img src="/transpolimer/almacenamiento.png" contain max-height="90"></v-img>
                        <p class="text-center mt-2"><span class="font-weight-bold headline">18 silos</span> <br> de almacenamiento con capacidad de 7,700 toneladas</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" align-self="center">
                        <v-img src="/transpolimer/almacenaje.png" contain max-height="90"></v-img>
                        <p class="text-center mt-2"><span class="font-weight-bold headline">23,000 m<sup>2</sup></span> <br> de <span class="font-weight-bold">almacenaje</span> techado</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" align-self="center">
                        <v-img src="/transpolimer/hopper.png" contain max-height="90" max-width="110"></v-img>
                        <p class="text-center mt-2"> <span class="font-weight-bold">200 hopper</span> cars de almacenaje en <span class="font-weight-bold">vías férreas</span></p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" align-self="center">
                        <v-img src="/transpolimer/andenes.png" contain max-height="90" max-width="110"></v-img>
                        <p class="text-center mt-2">6 andenes de carga</p>
                    </v-col>
                </v-row>-->
                <!--<v-row>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" align-self="center">
                        <v-img src="/transpolimer/ensacado.png" contain max-height="90" max-width="110"></v-img>
                        <p class="text-center mt-2"><span class="font-weight-bold">5 líneas de ensacado</span> con tecnología FFS</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" align-self="center">
                        <v-img src="/transpolimer/transporte.png" contain max-height="90" max-width="110"></v-img>
                        <p class="text-center mt-2">
                            <span class="font-weight-bold">43 equipos de transporte terrestre</span> especializados para traslado de materiales
                        </p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" align-self="center">
                        <v-img src="/transpolimer/grua.png" contain max-height="90" max-width="110"></v-img>
                        <p class="text-center mt-2"><span class="font-weight-bold">Grúa para traslado y anclaje de contenedores</span> desde 20 hasta 53 pies</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" align-self="center">
                        <v-img src="/transpolimer/robot-paletizador.png" contain max-height="90" max-width="110" ></v-img>
                        <p class="text-center mt-2"><span class="font-weight-bold">2 robot paletizador</span> con tecnología de punta</p>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" align-self="center">
                        <v-img src="/transpolimer/bulk.png" contain max-height="90" max-width="110"></v-img>
                        <p class="text-center mt-2 font-weight-bold">Revestimiento SeaBulk</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" align-self="center">
                        <v-img src="/transpolimer/basculas.png" contain max-height="90" max-width="110"></v-img>
                        <p class="text-center mt-2"><span class="font-weight-bold">Básculas certificadas</span> ferroviaria y camionera</p>
                    </v-col>
                </v-row>-->

                <v-row justify="center">
                    <v-col align-self="center" cols="12" lg="3" md="3" sm="12" xs="12" align="center" v-for="(item , index) in pagetranspolimer.technologies" :key="index">
                        <img :src="basePathApiUrl + item.image.data.attributes.url" alt="">
                        <div v-html="item.description"></div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-divider></v-divider>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12">
                        <!--<h1 class="font-title-section display-1 font-weight-bold text-center my-10">Proceso general</h1>-->
                        <h1 class="font-title-section display-1 font-weight-bold text-center my-10">{{ pagetranspolimer.process.title}}</h1>
                    </v-col>
                </v-row>
                <v-row justify="center" v-if="windowSize > 1129">
                    <v-col>
                        <div class="justify-center">
                            <!--<v-img src="/transpolimer/proceso-general.png" contain></v-img>-->
                            <v-img :src="basePathApiUrl + pagetranspolimer.process.image.data.attributes.url" contain></v-img>
                        </div>
                    </v-col>
                </v-row>
                <v-row v-else class="overflow-x-auto">
                    <div class="mx-5">
                        <!--<v-img src="/transpolimer/proceso-general.png" max-height="250" max-width="1200"></v-img>-->
                        <v-img :src="basePathApiUrl + pagetranspolimer.process.image.data.attributes.url" contain max-height="250" max-width="1200"></v-img>
                    </div>
                </v-row>
            </v-container>
        </section>

        <section class="my-16">
            <v-container>
                <v-divider></v-divider>
            </v-container>
        </section>

        <FormContact />
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
        }
    },
    methods: {
    },
    computed:{
        ...mapState(['windowHeight','windowSize','pagetranspolimer','basePathApiUrl'])
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300&display=swap');

.theme--light.v-divider{
    color: brown !important;
    border-color: brown !important;
    height: 10pt !important;
}

.font-title-section{
    font-family: 'Archivo' !important;
    font-size: 30px;
    font-weight: 700;
    line-height: 26px;
}
</style>