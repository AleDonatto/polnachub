<template>
    <!--  v-if="pageServices !== null" -->
    <div :class="{'bg-services': windowSize > 1129, 'bg-services-mb': windowSize < 1129 }">
        <v-row justify="center">
            <v-col cols="12" align="center">
                <h1 class="mt-16 font-archivo font-size-40 font-weight-bold white--text">Servicios</h1>
                <!--<h1 class="mt-16 font-archivo font-size-40 font-weight-bold white--text">{{pageServices.banner.title}}</h1>-->
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="10" lg="5" md="5" sm="9" xs="9">
                <p class="white--text mt-10 mb-16 title text-center">
                    <span class="yellow--text font-weight-bold">POLNAC</span>: La única empresa 360° de la industria plástica. Soluciones para cualquier reto.
                    Bajo nuestra filial, Transpolimer, encontrarás un extenso repertorio de Servicios 
                    Logísticos Especializados: terminal ferroviaria, servicios de almacenaje, trasvase, 
                    ensacado, distribución, y servicio de carga y descarga de contenedores. 
                </p>
                <!--<div class="white--text mt-10 mb-16 title text-center" v-html="$md.render( pageServices.banner.subtitle)"></div>-->
            </v-col>
        </v-row>
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
        ...mapState(['windowHeight','windowSize','pageServices'])
    }
}
</script>

<style scoped>
.bg-services{
    background-image: url('../../static/services/bg-services.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%; 
}

.bg-services-mb{
    background-image: url('../../static/services/bg-servicesmb.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%; 
}
</style>