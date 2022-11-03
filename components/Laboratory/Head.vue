<template>
    <div v-if="pageLaboratory !== null" :class="{'bg-laboratory': windowSize > 1229, 'bg-laboratory-mb': windowSize < 1129 }" :style="{ backgroundImage: `url(${basePathApiUrl + pageLaboratory.banner.image.data[0].attributes.url })` }">
        <v-row justify="center" class="py-10">
            <v-col cols="12" class="mt-12" align="center">
                <!--<h1 class="mt-16 font-archivo font-size-40 white--text font-weight-bold">Laboratorio</h1>-->
                <h1 class="font-archivo font-size-40 white--text font-weight-bold" v-html="pageLaboratory.banner.title"></h1>
            </v-col>
            <v-col cols="10" class="mt-5 mb-10" align="center">
                <!--<p class="title white--text mt-10 mb-16">
                    Tecnología <span class="yellow--text font-weight-bold">POLNAC</span> a tu disposición: un moderno y acreditado laboratorio de prueba, el cual ofrece un 
                    servicio externo de análisis y evaluación de materiales plásticos, equipado con instalaciones y tecnología de punta. 
                    Certificado bajo las más altas normas internacionales para la evaluación de propiedades y procesamiento de datos.
                </p>-->
                <div class="title white--text" v-html="pageLaboratory.banner.subtitle"></div>
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
        ...mapState(['windowHeight','windowSize','pageLaboratory', 'basePathApiUrl'])
    }
}
</script>

<style scoped>
.bg-laboratory{
    /*background-image: url('../../static/laboratory/bg-banner.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
.bg-laboratory-mb{
    /*background-image: url('../../static/laboratory/bg-banner.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
</style>