<template>
    <!-- v-if="pageAlliances !== null" -->
    <div v-if="pageAlliances !== null" :class="{'bg-alliances': windowSize > 1129, 'bg-alliances-mb': windowSize < 1129 }" :style="{ backgroundImage: `url(${basePathApiUrl + pageAlliances.banner.image.data[0].attributes.url })` }">
        <v-row justify="center" class="py-10">
            <v-col cols="12" class="mt-12" align="center">
                <!--<p class="font-title text-h3 mt-16 white--text font-weight-bold">
                    Alianzas
                </p>-->
                <p class="mt-5"></p>
                <div class="font-title text-h3 mt-16 white--text font-weight-bold" v-html="pageAlliances.banner.title"></div>
            </v-col>
            <v-col cols="10" align="center" class="mt-5 mb-10">
                <div class="title white--text " v-html="pageAlliances.banner.subtitle"></div>
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
        ...mapState(['windowHeight','windowSize','pageAlliances', 'basePathApiUrl'])
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300&display=swap');

.bg-alliances{
    /*background-image: url('../../static/alliances/bg-banner.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}

.bg-alliances-mb{
    /*background-image:url('../../static/alliances/bg-bannermb.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}

.font-title{
    font-family: 'Archivo' !important;
}
</style>