<template>
    <div :class="{'bg-laboratory': windowSize > 1229, 'bg-laboratory-mb': windowSize < 1129 }">
        <v-row justify="center">
            <v-col cols="12" align="center">
                <h1 class="mt-16 font-archivo font-size-40 white--text font-weight-bold">Laboratorio</h1>
            </v-col>
            <v-col cols="10" align="center">
                <p class="title white--text mt-10 mb-16">
                    Tecnología <span class="yellow--text font-weight-bold">POLNAC</span> a tu disposición: un moderno y acreditado laboratorio de prueba, el cual ofrece un 
                    servicio externo de análisis y evaluación de materiales plásticos, equipado con instalaciones y tecnología de punta. 
                    Certificado bajo las más altas normas internacionales para la evaluación de propiedades y procesamiento de datos.
                </p>
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
        ...mapState(['windowHeight','windowSize'])
    }
}
</script>

<style scoped>
.bg-laboratory{
    background-image: url('../../static/laboratory/bg-banner.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
.bg-laboratory-mb{
    background-image: url('../../static/laboratory/bg-banner.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
</style>