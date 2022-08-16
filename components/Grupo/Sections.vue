<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center" class="my-16">
                    <v-col cols="12" xl="9">
                        <v-row>
                            <v-col cols="12" lg="6" md="6" sm="12" xs="12" align-self="center">
                                <p class="font-size-20">Sin importar cuales sean tus necesidades <span class="font-weight-bold">Grupo POLNAC</span> tiene soluciones para ti: </p>
                                <ul class="font-size-20">
                                    <li>Resinas</li>
                                    <li>Compuestos</li>
                                    <li>Concentrados de Color</li>
                                    <li>Bioresinas</li>
                                    <li>Reciclados y resinas Post-Industriales</li>
                                    <li>Servicios de logística y mucho más</li>
                                </ul>
                                <p class="font-size-20 mt-5">
                                    La filosofía POLNAC respalda a todo el grupo: proporcionar soluciones innovadoras con el mejor servicio, la más alta calidad y a precios altamente competitivos.
                                </p>
                            </v-col>
                            <v-col cols="12" lg="6" md="6" align-self="center">
                                <v-img src="/group/log.png" contain max-height="340"></v-img>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row class="" justify="center">
                    <v-col align="center">
                        <h1 class="font-archivo font-size-40 font-weight-bold my-10">Empresas filiales</h1>
                    </v-col>
                </v-row>
                <v-row justify="center" class="my-16">
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" align="center">
                        <v-img src="/group/logo-poliresin.png" contain max-height="150"></v-img>
                        <v-btn rounded outlined color="#19D3C5" class="mt-4 px-10 py-6 text-none">
                            <nuxt-link to="/poliresin" class="text-decoration-none black--text">
                                Saber más
                            </nuxt-link>
                        </v-btn>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" align="center">
                        <v-img src="/group/logo-transpolimer.png" contain max-height="150"></v-img>
                        <v-btn rounded outlined color="#19D3C5" class="mt-4 px-10 py-6 text-none">
                            <nuxt-link to="/transpolimer" class="text-decoration-none black--text">Saber más</nuxt-link>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row>
                    <v-col align="center" class="my-10">
                        <h1 class="font-archivo font-size-40 font-weight-bold">Nuestras marcas</h1>
                    </v-col>
                </v-row>
                <v-row justify="center" class="my-16"> 
                    <v-col cols="12" xl="9">
                        <v-row>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                <nuxt-link to="/marcas/1" class="decoration-none text-none">
                                    <v-img src="/group/logo-colorforte.png" contain max-height="90"></v-img>
                                    <p class="font-size-18 text-left mt-5 black--text">Innovación en el desarrollo, diseño y fabricación de...</p>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                <nuxt-link to="/marcas/2" class="decoration-none text-none">
                                    <v-img src="/group/logo-poliforte.png" contain max-height="90"></v-img>
                                    <p class="font-size-18 text-left mt-5">Líder en el diseño, fabricación y comercialización de Compuestos.</p>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                <nuxt-link to="/marcas/3" class="decoration-none text-none">
                                    <v-img src="/group/logo-bioresin.png" contain max-height="90"></v-img>
                                    <p class="font-size-18 text-left mt-5">Especialistas en la distribución y fabricación de resinas biodegradables. </p>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                                <nuxt-link to="/marcas/4" class="decoration-none text-none">
                                    <v-img src="/group/logo-rototech.png" contain max-height="90"></v-img>
                                    <p class="font-size-18 text-left mt-5">La línea de negocio especializada en la producción y comercialización de resinas plásticas para el proceso de rotomoldeo.</p>
                                </nuxt-link>
                            </v-col>

                            <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                                <nuxt-link to="/marcas/5" class="decoration-none text-none">
                                    <v-img src="/group/logo-gomalene.png" contain max-height="90"></v-img>
                                    <p class="font-size-18 text-left mt-5">El portafolio más completo de Elastómeros Termoplásticos y Hules:</p>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                                <nuxt-link to="/marcas/6" class="decoration-none text-none">
                                    <v-img src="/group/logo-flexlene.png" contain max-height="90"></v-img>
                                    <p class="font-size-18 text-left mt-5">Expertos en el diseño, desarrollo y fabricación de Compuestos de Policloruro de Vinilo (PVC).</p>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                                <nuxt-link to="/marcas/7" class="decoration-none text-none">
                                    <v-img src="/group/logo-politene.png" contain max-height="90"></v-img>
                                    <p class="font-size-18 text-left mt-5">Las mejores resinas a tu disposición. Los productos más destacados de los fabricantes</p>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                                <nuxt-link to="/marcas/8" class="decoration-none text-none">
                                    <v-img src="/group/logo-adilene.png" contain max-height="90"></v-img>
                                    <p class="font-size-18 text-left mt-5">Aditivos para solventar cualquier reto. En Adilene encontrarás un amplio abanico de aditivos para todo tipo de aplicaciones.</p>
                                </nuxt-link>
                            </v-col>
                        </v-row>
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
        return {

        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize'])
    }
}
</script>

<style scoped>
.decoration-none{
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87) !important;
}
</style>