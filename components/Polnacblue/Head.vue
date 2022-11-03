<template>
    <div :class="{'bg-polnacblue': windowSize > 1129, 'bg-polnacblue-mb': windowSize < 1129 }" v-if="pagePolnacBlue !== null" :style="{ backgroundImage: `url(${basePathApiUrl + pagePolnacBlue.banner.image.data[0].attributes.url })` }">
        <v-row justify="center" class="py-10">
            <v-col cols="12" class="mt-12" align="center">
                <!--<h1 class="mt-16 font-archivo font-size-40 white--text font-weight-bold">POLNAC Blue</h1>-->
                <h1 class="font-archivo font-size-40 white--text font-weight-bold" v-html="pagePolnacBlue.banner.title"></h1>
            </v-col>
            <v-col cols="10" class="mt-5 mb-10" align="center">
                <!--<p class="title white--text mt-10 mb-16">
                    ¿Qué es <span class="yellow--text font-weight-bold">POLNAC</span> Blue? Armonía, un balance triple: Económico, Social y Ambiental. 
                    Armonía, entre nuestra industria y el medio ambiente. 
                </p>-->
                <div class="title white--text" v-html="pagePolnacBlue.banner.subtitle"></div>
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
        ...mapState(['windowHeight','windowSize','pagePolnacBlue', 'basePathApiUrl'])
    }
}
</script>

<style scoped>
.bg-polnacblue{
    /*background-image: url('../../static/polnacblue/bg-banner.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}

.bg-polnacblue-mb{
    /*background-image: url('../../static/polnacblue/bg-bannermb.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
</style>