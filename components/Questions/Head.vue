<template>
    <div :class="{'bg-questions': windowSize > 1129 , 'bg-questions-mb': windowSize< 1129 }" v-if="pageQuestions !== null" :style="{ backgroundImage: `url(${basePathApiUrl + pageQuestions.banner.image.data[0].attributes.url })` }">
        <v-row justify="center" class="py-10">
            <v-col cols="12" align="center" class="mt-12">
                <!--<h1 class="mt-16 font-archivo font-size-40 white--text">Preguntas Frecuentes</h1>-->
                <h1 class="font-archivo font-size-40 white--text" v-html="pageQuestions.banner.title"></h1>
            </v-col>
            <v-col cols="10" class="mt-5 mb-10" align="center">
                <!--<p class="white--text font-size-24 mb-16 ">Hola, ¿cómo podemos ayudarte?  Selecciona una categoría de preguntas.</p>-->
                <p class="white--text font-size-24" v-html="pageQuestions.banner.subtitle"></p>
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
        ...mapState(['windowSize', 'windowHeight', 'showbanners', 'pageQuestions', 'basePathApiUrl'])
    }

}
</script>

<style scoped>
.bg-questions{
    /*background-image: url('../../static/questions/bg-questions.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
.bg-questions-mb{
    /*background-image: url('../../static/questions/bg-questions-mb.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
</style>