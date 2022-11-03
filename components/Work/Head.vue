<template>
    <div :class="{'bg-work': windowSize>1129 ,'bg-work-mb': windowSize<1129 }" v-if="pageWork !== null" :style="{ backgroundImage: `url(${basePathApiUrl + pageWork.banner.image.data[0].attributes.url })` }">
        <v-row justify="center" class="py-10">
            <v-col cols="12" class="mt-12" align="center">
                <!--<h1 class="mt-16 white--text font-archivo font-size-40 font-weight-bold">¿Por qué trabajar en POLNAC?</h1>-->
                <h1 class="white--text font-archivo font-size-40 font-weight-bold" v-html="pageWork.banner.title"></h1>
            </v-col>

            <v-col cols="10" class="mt-5 mb-10" align="center">
                <!--<p class="title white--text mt-10 mb-16">
                    No hay recurso más importante que el capital humano
                    de todos los colaboradores que conforman <span class="yellow--text font-weight-bold">POLNAC</span>. 
                </p>-->
                <p class="title white--text" v-html="pageWork.banner.subtitle"></p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return {}
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight', 'pageWork', 'basePathApiUrl'])
    }
}
</script>

<style scoped>
.bg-work{
    /*background-image: url('../../static/work/bg-work.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}

.bg-work-mb{
    /*background-image: url('../../static/work/bg-work.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
</style>