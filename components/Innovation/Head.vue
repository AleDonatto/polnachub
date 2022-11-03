<template>
    <!--  v-if="pageInnovation !== null" -->
    <div v-if="pageInnovation !== null">
        <!---->
        <div  :class="{'bg-innovation': windowSize > 1129 , 'bg-innovation-mb': windowSize < 1129 }" :style="{ backgroundImage: `url(${basePathApiUrl + pageInnovation.banner.image.data[0].attributes.url })` }">
            <v-row justify="center" class="py-10">
                <v-col cols="12"  class="mt-12" align="center">
                    <!--<h1 class="font-archivo font-size-40 mt-16 white--text font-weight-bold">Innovación & Desarrollo</h1>-->

                    <h1 class="font-archivo font-size-40 white--text font-weight-bold" v-html="pageInnovation.banner.title"></h1>
                </v-col>
                <v-col cols="10" class="mt-5 mb-10" align="center">
                    <!--<p class="title white--text mt-10 mb-16">
                        Donde está la innovación está <span class="yellow--text font-weigth-bold">POLNAC</span>: Nos distingue nuestra pasión para encontrar nuevos mercados, 
                        nuevas soluciones, nuevos desarrollos. 
                    </p>-->
                    <div class="title white--text" v-html="pageInnovation.banner.subtitle"></div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return {
            styles: {}
        }
    },
    beforeMount(){
    },
    computed: {
        ...mapState(['windowHeight','windowSize', 'pageInnovation', 'basePathApiUrl'])
    }
}
</script>

<style scoped>
.bg-innovation{
    /*background-image: url('../../static/innovation/bg-banner.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}

.bg-innovation-mb{
    /*background-image: url('../../static/innovation/bg-bannermb.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
</style>