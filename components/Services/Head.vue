<template>
    <!--  v-if="pageServices !== null" -->
    <div v-if="pageServices !== null" :class="{'bg-services': windowSize > 1129, 'bg-services-mb': windowSize < 1129 }" :style="{ backgroundImage: `url(${basePathApiUrl + pageServices.banner.image.data[0].attributes.url })` }">
        <v-row class="py-10" justify="center" >
            <v-col cols="12" class="mt-12" align="center">
                <!--<h1 class="mt-16 font-archivo font-size-40 font-weight-bold white--text">Servicios</h1>-->
                <div class="font-archivo font-size-40 font-weight-bold white--text" v-html="pageServices.banner.title"></div>
            </v-col>
            <v-col cols="10" class="mt-5 mb-10">
                <!--<p class="white--text mt-10 mb-16 title text-center">
                    <span class="yellow--text font-weight-bold">POLNAC</span>: La única empresa 360° de la industria plástica. Soluciones para cualquier reto.
                    Bajo nuestra filial, Transpolimer, encontrarás un extenso repertorio de Servicios 
                    Logísticos Especializados: terminal ferroviaria, servicios de almacenaje, trasvase, 
                    ensacado, distribución, y servicio de carga y descarga de contenedores. 
                </p>-->
                <div class="white--text title text-center" v-html="pageServices.banner.subtitle"></div>
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
        ...mapState(['windowHeight','windowSize','pageServices', 'basePathApiUrl'])
    }
}
</script>

<style scoped>
.bg-services{
    /*background-image: url('../../static/services/bg-services.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}

.bg-services-mb{
    /*background-image: url('../../static/services/bg-servicesmb.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
</style>