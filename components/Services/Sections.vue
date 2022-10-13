<template>
    <div v-if="pageServices === null">
        <v-sheet class="pa-3">
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
    </div>
    <div v-else>
        <section>
            <v-container>
                <v-row justify="center" class="mt-16">
                    <v-col cols="12" xl="9">
                        <!--<v-row justify="center">
                            <v-col cols="12" lg="4" mg="4" sm="12" xs="12">
                                <h1 class="font-size-28 font-weight-bold" :class="{'mx-5' : windowSize < 1129 }">Terminal Ferroviaria</h1>
                                <ul class="text-body-all mt-5 ml-4" :class="{'mx-6' : windowSize < 1129 }">
                                    <li>5 km de vía conectadas a la línea Kansas City Southern de México</li>
                                    <li>Capacidad de almacenaje en vías de 200 hopper cars</li>
                                    <li>Báscula ferroviaria certificada y calibrada</li>
                                    <li>Moderno equipo de arrastre ferroviario para la recepción y almacenaje de hopper cars</li>
                                </ul>
                                <div class="mt-5">
                                    <v-divider v-if="windowSize < 1129"></v-divider>
                                </div>
                            </v-col>
                            <v-col cols="12" lg="4" mg="4" sm="12" xs="12">
                                <h1 class="font-size-28 font-weight-bold" :class="{'mx-5' : windowSize < 1129 }">Almacenaje</h1>
                                <ul class="text-body-all mt-5 ml-4" :class="{'mx-6' : windowSize < 1129 }">
                                    <li>Almacenamiento fiscal y nacional</li>
                                    <li>23,000 m2 de almacén cubierto con capacidad para 15,000 toneladas</li>
                                    <li>10 silos de almacenamiento con capacidad para 5,500 toneladas</li>
                                    <li>Todos los silos están equipados para la carga y descarga del material en hopper car y auto tolva.</li>
                                    <li>Andenes de carga y descarga diseñados para garantizar el buen estado de los productos almacenados</li>
                                    <li>Básculas certificadas y calibradas</li>
                                    <li>Sistema de transportación para mover material desde los silos a los equipos de envasado</li>
                                </ul>
                                <v-divider class="mt-5" v-if="windowSize < 1129"></v-divider>
                            </v-col>
                            <v-col cols="12" lg="4" mg="4" sm="12" xs="12">
                                <h1 class="font-size-28 font-weight-bold" :class="{'mx-5' : windowSize < 1129 }">Transvase</h1>
                                <ul class="text-body-all mt-5 ml-4" :class="{'mx-6' : windowSize < 1129 }">
                                    <li>Transferencias y cargas de resinas plásticas</li>
                                    <li>Trasvase de hopper car a auto tolva</li>
                                    <li>Trasvase de hopper car a silo</li>
                                    <li>Trasvase de silo a auto tolva</li>
                                    <li>Trasvase de hopper car a sacos de 25kg</li>
                                    <li>Trasvase de hopper car a super sacos</li>
                                    <li>Trasvase de sacos a auto tolvo/super sacos</li>
                                    <li>Trasvase de super sacos a sacos de 25kg</li>
                                </ul>
                                <v-divider class="mt-5" v-if="windowSize < 1129"></v-divider>
                            </v-col>

                            <v-col cols="12" lg="4" mg="4" sm="12" xs="12">
                                <h1 class="font-size-28 font-weight-bold" :class="{'mx-5' : windowSize < 1129 }">Ensacado</h1>
                                <ul class="text-body-all mt-5 ml-4" :class="{'mx-6' : windowSize < 1129 }">
                                    <li>5 líneas de ensacado</li>
                                    <li>Cada línea de ensacado maneja diferente tipo de resinas para evitar contaminaciones</li>
                                    <li>Servicio de ensacado de resinas plásticas en sacos de 25kg y super sacos de 1000kg</li>
                                    <li>Sistema de ensacado con tecnología FFS (Form-Fill-Seal)</li>
                                    <li>Sistema de ensacado de válvula</li>
                                    <li>Emplayado tipo cápsula “Stretch Hood”, la cual brinda mayor protección y estabilidad al producto</li>
                                </ul>
                                <v-divider class="mt-5" v-if="windowSize < 1129"></v-divider>
                            </v-col>
                            <v-col cols="12" lg="4" mg="4" sm="12" xs="12">
                                <h1 class="font-size-28 font-weight-bold" :class="{'mx-5' : windowSize < 1129 }">Distribución</h1>
                                <ul class="text-body-all mt-5 ml-4" :class="{'mx-6' : windowSize < 1129 }">
                                    <li>Flotilla de Transporte Especializado: tolvas de aluminio y acero de carbón auto cargables, tractores, hopper cars, Torton, Camioneta 3.5 tons</li>
                                    <li>Unidades con sistema de rastreo satelital GPS en tiempo real las 24 horas al día</li>
                                </ul>
                                <v-divider class="mt-5" v-if="windowSize < 1129"></v-divider>
                            </v-col>
                            <v-col cols="12" lg="4" mg="4" sm="12" xs="12">
                                <h1 class="font-size-28 font-weight-bold" :class="{'mx-5' : windowSize < 1129 }">Contenedores</h1>
                                <ul class="text-body-all mt-5 ml-4" :class="{'mx-6' : windowSize < 1129 }">
                                    <li>Grúa para el servicio de carga, descarga y almacenamiento de contenedores</li>
                                    <li>Contenedores de 20, 40, 48 y 53 pies</li>
                                    <li>Transporte ferroviario y terrestre</li>
                                    <li>Alianza estratégica con Naviera para la importación y exportación de contenedores</li>
                                </ul>
                                <v-divider class="mt-5" v-if="windowSize < 1129"></v-divider>
                            </v-col>
                        </v-row>-->
                        <v-row justify="center">
                            <v-col cols="12" lg="4" mg="4" sm="12" xs="12" v-for="(item, index) in pageServices.technologies" :key="index">
                                <h1 class="font-size-28 font-weight-bold" :class="{'mx-5' : windowSize < 1129 }">{{ item.title }}</h1>
                                <div class="text-body-all mt-5 ml-4" :class="{'mx-6' : windowSize < 1129 }" v-html="$md.render( item.description )"></div>
                                <v-divider class="mt-5" v-if="windowSize < 1129"></v-divider>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row justify="center">
                    <v-col cols="12" xl="9">
                        <v-row justify="center">
                            <v-col cols="12" class="mt-10">
                                <!--<p class="text-body-all">De igual manera, <span class="font-weight-bold">POLNAC</span> pone a tu disposición su moderno y acreditado laboratorio de pruebas. Equipo e instalaciones de vanguardia para el análisis y evaluación de materiales plásticas a tu alcance:</p>-->
                                <div class="text-body-all" :class="{'mx-6' : windowSize < 1129 }" v-html="pageServices.textLaboratory"></div>
                            </v-col>
                            <v-col cols="10" xl="4" lg="6" md="6" align="center" class="mb-16">
                                <nuxt-link to="/laboratory" class="text-decoration-none">
                                    <v-btn class="rounded-lg text-none d-flex justify-space-between py-5" block outlined color="#19D3C5">
                                        <span class="black--text">{{pageServices.txtBtnLaboratory}}</span>
                                        <!--<span class="black--text">Ver pruebas de Laboratorio</span>-->
                                        <v-icon right class="black--text">
                                            mdi-chevron-right
                                        </v-icon>
                                    </v-btn>
                                </nuxt-link>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="bg-servicio mt-16">
            <v-container>
                <v-row justify="center" class="mb-16">
                    <v-col cols="12" align="center" class="mt-16">
                        <!--<h1 class="white--text font-archivo font-size-40 my-10 font-weight-bold">¿Te interesa un servicio?</h1>-->
                        <h1 class="white--text font-archivo font-size-40 my-10 font-weight-bold">{{ pageServices.information.title }}</h1>
                        <nuxt-link to="/services/contact" class="text-decoration-none">
                            <!--<v-btn class="font-size-20 black--text px-10 my-5 py-6 body-1 text-none rounded-lg" color="#19D3C5">
                                Solicitar información
                            </v-btn>-->
                            <v-btn class="font-size-20 black--text px-10 my-5 py-6 body-1 text-none rounded-lg" color="#19D3C5">
                                {{ pageServices.information.txtBtn }}
                            </v-btn>
                        </nuxt-link>
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
        return {}
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight','pageServices', 'basePathApiUrl'])
    }
}
</script>

<style scoped>
.bg-servicio{
    background-color: #3D7CC9;
    height: 480px;
}
.text-decoration-none{
    text-decoration: none;
}
</style>