<template>
    <div :class="{'bg-questions': windowSize > 1129 , 'bg-questions-mb': windowSize< 1129 }">
        <v-row justify="center">
            <v-col cols="12" align="center">
                <h1 class="mt-16 font-archivo font-size-40 white--text">Preguntas Frecuentes</h1>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" align="center">
                <p class="white--text font-size-24 mb-16 ">Hola, ¿cómo podemos ayudarte?  Selecciona una categoría de preguntas.</p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return {

        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight'])
    }

}
</script>

<style scoped>
.bg-questions{
    background-image: url('../../static/questions/bg-questions.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 320px;
}
.bg-questions-mb{
    background-image: url('../../static/questions/bg-questions-mb.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
</style>