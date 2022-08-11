<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center" class="my-16">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                        <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                            <v-img src="/market/consumo.png" contain max-height="240"></v-img>
                            <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                <img src="../../static/market/lconsumo.png" height="27" />
                                <p class="font-archivo font-size-18 font-weight-bold ml-2">Consumo</p>
                            </div>
                            <p class="body-1 text-truncate">
                                Un mercado dinámico el cual ha enriquecido inmensurablemente el día a día de todos los seres humanos.
                            </p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                        <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                            <v-img src="/market/empaque.png" contain max-height="240"></v-img>
                            <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                <img src="../../static/market/lempaque.png" height="27" />
                                <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Empaque Flexible</p>
                            </div>
                            <p class="body-1 text-truncate">Más de tres décadas de experiencia en uno de los mercados de mayor consumo a nivel mundial. </p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                        <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                            <v-img src="/market/empaquerigido.png" contain max-height="240"></v-img>
                            <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                <img src="../../static/market/lrigido.png" height="27" />
                                <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Empaque Rígido</p>
                            </div>
                            <p class="body-1 text-truncate">Más de tres décadas de experiencia en uno de los mercados de mayor consumo a nivel mundial. </p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                        <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                            <v-img src="/market/agricola.png" contain max-height="240"></v-img>
                            <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                <img src="../../static/market/lagricola.png" height="27" />
                                <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Agrícola</p>
                            </div>
                            <p class="body-1 text-truncate">Logrando más con menos. Incesante innovación para una de las industrias más indispensables. Dentro de la familia de productos POLNAC encontrarás todo tipo de materiales.</p>
                        </nuxt-link>
                    </v-col>

                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                        <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">    
                            <v-img src="/market/cuidadopersonal.png" contain max-height="240"></v-img>
                            <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                <img src="../../static/market/lcuidado.png" height="27" />
                                <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Cuidado Personal</p>
                            </div>
                            <p class="body-1 text-truncate">Un mercado dinámico el cual ha enriquecido inmensurablemente el día a día de todos los seres humanos.</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                        <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                            <v-img src="/market/electronico.png" contain max-height="240"></v-img>
                            <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                <img src="../../static/market/lelectrico.png" height="27" />
                                <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Eléctrico-Electrónico</p>
                            </div>
                            <p class="body-1 text-truncate">Un mercado dinámico el cual ha enriquecido inmensurablemente el día a día de todos los seres humanos.</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                        <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                            <v-img src="/market/electrodomesticos.png" contain max-height="240"></v-img>
                            <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                <img src="../../static/market/lelectrodomesticos.png" height="27" />
                                <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Electrodomésticos</p>
                            </div>
                            <p class="body-1 text-truncate">Un mercado dinámico el cual ha enriquecido inmensurablemente el día a día de todos los seres humanos.</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                        <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                            <v-img src="/market/industria.png" contain max-height="240"></v-img>
                            <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                <img src="../../static/market/lindustrial.png" height="27" />
                                <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Industrial</p>
                            </div>
                            <p class="body-1 text-truncate">Un mercado dinámico el cual ha enriquecido inmensurablemente el día a día de todos los seres humanos.</p>
                        </nuxt-link>
                    </v-col>

                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                        <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                            <v-img src="/market/automotriz.png" contain max-height="240"></v-img>
                            <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                <img src="../../static/market/lautomotriz.png" height="27" />
                                <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Automotriz y Transportación</p>
                            </div>
                            <p class="body-1 text-truncate">Un mercado dinámico el cual ha enriquecido inmensurablemente el día a día de todos los seres humanos.</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                        <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                            <v-img src="/market/construccion.png" contain max-height="240"></v-img>
                            <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                <img src="../../static/market/lconstruccion.png" height="27" />
                                <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Construcción</p>
                            </div>
                            <p class="body-1 text-truncate">Un mercado dinámico el cual ha enriquecido inmensurablemente el día a día de todos los seres humanos.</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                        <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                            <v-img src="/market/calzado.png" contain max-height="240"></v-img>
                            <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                <img src="../../static/market/lcalzado.png" height="27" />
                                <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Calzado y Textil</p>
                            </div>
                            <p class="body-1 text-truncate">Un mercado dinámico el cual ha enriquecido inmensurablemente el día a día de todos los seres humanos.</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                        <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                            <v-img src="/market/medico.png" contain max-height="240"></v-img>
                            <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                <img src="../../static/market/lmedico.png" height="27" />
                                <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Médico y Farmacéutico</p>
                            </div>
                            <p class="body-1 text-truncate">Un mercado dinámico el cual ha enriquecido inmensurablemente el día a día de todos los seres humanos.</p>
                        </nuxt-link>
                    </v-col>
                </v-row>
                <v-row justify="center" v-if="windowSize < 1129">
                    <v-col cols="10">
                        <v-btn block rounded outlined color="#19D3C5" class="roinded-lg text-none">
                            <span class="black--text">Mostrar más artículos</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <Productos />
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {}
    },
    computed: {
        ...mapState(['windowSize','windowHeigth'])
    }
}
</script>

<style scoped>
.decoration-none{
    text-decoration: none !important;
}
.text-truncate {
    line-height: 1.5rem;
    height: 3rem;
    overflow: hidden !important;
    text-overflow: '...' !important;
    content: '...' !important;
}

.text-truncate::after {
    content: '...' !important;
    white-space: nowrap;
}

</style>