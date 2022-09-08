<template>
    <!--<div v-if="pageInnovation === null">
        <v-sheet class="pa-3">
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
    </div>-->
    <div>
        <section>
            <v-container>
                <v-row class="my-16" justify="center">
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" v-if="windowSize < 1129">
                        <v-img src="/innovation/asesoria.png" contain max-height="350"></v-img>
                    </v-col>
                    <v-col cols="12" xl="4" lg="6" md="6" sm="12" xs="12" align-self="end">
                        <p class="font-size-20">
                            Apegados siempre a las más altas normas internacionales
                            de calidad y seguridad. Nuestro inagotable equipo de Investigación y Desarrollo trabaja para respaldar e impulsar las innovaciones de nuestros socios de negocio. 
                            <br><br>
                            Ofrecemos a nuestros clientes toda la asesoría técnica y comercial necesaria para alcanzar sus objetivos de negocio. Todo con la finalidad de mejorar el rendimiento y rentabilidad de los productos finales. 
                        </p>
                        <!--<div class="font-size-20" v-html="$md.render( pageInnovation.normas.description)"></div>-->
                    </v-col>
                    <v-col cols="12" xl="5" lg="6" md="6" sm="12" xs="12" v-if="windowSize > 1129">
                        <v-img src="/innovation/asesoria.png" contain max-height="370"></v-img>
                        <!--<v-img :src="basePathApiUrl + pageInnovation.normas.image.data.attributes.url" contain ></v-img>-->
                    </v-col>

                    <v-col cols="12" xl="5" lg="6" md="6" sm="12" xs="12" class="mt-8" :class="{'mb-16': windowSize >1129 }" align="center">
                        <v-img src="/innovation/equipo.png" contain max-height="370"></v-img>
                        <!--<v-img :src="basePathApiUrl + pageInnovation.equipos.image.data.attributes.url" contain ></v-img>-->
                    </v-col>
                    <v-col cols="12" xl="4" lg="6" md="6" sm="12" xs="12" class="mt-8 mb-16" align-self="center">
                        <p class="font-size-20">
                            Equipos de vanguardia y los mejores técnicos nos permiten garantizar la calidad de nuestros productos.
                            <br> <br>
                            Contamos con equipos de planta piloto que nos permiten generar las muestras necesarias para desarrollar 
                            una formulación optima dentro de los parámetros de proceso necesarios de nuestros clientes. 
                            <br> <br>
                            Nuestra maestría a la orden de tus necesidades: <br>
                            <span class="font-weight-bold">Compuestos hechos a tu medida.</span> 
                        </p>
                        <!--<div class="font-size-20" v-html="$md.render( pageInnovation.equipos.description)"></div>-->
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section></section>
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
        ...mapState(['windowHeight','windowSize', 'basePathApiUrl', 'pageInnovation'])
    }
}
</script>

<style>

</style>