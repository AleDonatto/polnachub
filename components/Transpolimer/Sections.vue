<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center">
                    <v-col lg="5" md="5" sm="12" xs="12" class="my-10" align-self="center">
                        <p>
                            {{ $t('transpolimer.services') }}
                            <br><br> 
                            {{ $t('transpolimer.tecnology') }}
                            <br><br>
                            {{ $t('transpolimer.qualities') }}
                        </p>
                    </v-col>
                    <v-col lg="5" md="5" sm="12" xs="12" align-self="center" class="my-10" :class="{'my-4': windowSize < 1129}">
                        <v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover class="mt-5" :class="{'mt-1': windowSize < 1129}">
                            <v-carousel-item v-for="(slide, i) in 3" :key="i">
                                <v-sheet color="red" height="100%">
                                    <v-row class="fill-height" align="center" justify="center">
                                        <div class="text-h2">
                                            <img src="../../static/transpolimer/slider-transpolimer.png" alt="">
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
                <v-row>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/transpolimer/almacenamiento.png" alt="almacenamiento">
                        <p class="text-center mt-2"><span class="font-weight-bold headline">18 silos</span> <br> de almacenamiento con capacidad de 7,700 toneladas</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="13" sm="12" xs="12" align="center">
                        <img src="../../static/transpolimer/almacenaje.png" alt="almacenaje">
                        <p class="text-center mt-2"><span class="font-weight-bold headline">23,000 m<sup>2</sup></span> <br> de almacenaje techado</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" align-self="center">
                        <img src="../../static/transpolimer/hopper.png" alt="hopper">
                        <p class="text-center mt-2"> <span class="font-weight-bold">200 hopper</span> cars de almacenaje en <span class="font-weight-bold">vías férreas</span></p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/transpolimer/andenes.png" alt="andenes">
                        <p class="text-center mt-2">6 andenes de carga</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/transpolimer/ensacado.png" alt="lineas de ensacado">
                        <p class="text-center mt-2"><span class="font-weight-bold">5 líneas de ensacado</span> con tecnología FFS</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" align-self="center">
                        <img src="../../static/transpolimer/transporte.png" alt="equipo de transporte">
                        <p class="text-center mt-2">
                            <span class="font-weight-bold">43 equipos de transporte terrestre</span> especializados para traslado de materiales
                        </p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/transpolimer/grua.png" alt="grua para translado">
                        <p class="text-center mt-2"><span class="font-weight-bold">Grúa para traslado y anclaje de contenedores</span> desde 20 hasta 53 pies</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/transpolimer/robot-paletizador.png" alt="robot paletizado">
                        <p class="text-center mt-2"><span class="font-weight-bold">2 robot paletizador</span> con tecnología de punta</p>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" align-self="center">
                        <img src="../../static/transpolimer/bulk.png" alt="seabulk">
                        <p class="text-center mt-2 font-weight-bold">Revestimiento SeaBulk</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/transpolimer/basculas.png" alt="basculas certificadas">
                        <p class="text-center mt-2"><span class="font-weight-bold">Básculas certificadas</span> ferroviaria y camionera</p>
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
                        <h1 class="text-center my-10">Proceso general</h1>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col>
                        <div class="d-flex justify-center">
                            <v-img src="/transpolimer/proceso-general.png" contain></v-img>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="mb-5">
            <v-container>
                <v-divider></v-divider>
            </v-container>
        </section>
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
        ...mapState(['windowHeight','windowSize'])
    }
}
</script>

<style scoped>

.theme--light.v-divider{
    color: brown !important;
    border-color: brown !important;
    height: 10pt !important;
}
</style>