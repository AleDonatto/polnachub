<template>
    <!--v-if="pageAboutUs !== null"-->

    <div v-if="pageAboutUs !== null" :class="{'bg-about': windowSize > 1129, 'bg-about-mb': windowSize < 1129 }" :style="{ backgroundImage: `url(${basePathApiUrl + pageAboutUs.head.image.data[0].attributes.url })` }">
        <v-row justify="center" class="py-10">
            <v-col cols="12" class="mt-12" align="center">
                <!--<h1 class="font-archivo font-size-40 white--text font-weight-bold">¿Quiénes somos?</h1>-->
                <h1 class="font-archivo font-size-40 white--text font-weight-bold" v-html="pageAboutUs.head.title"></h1>
            </v-col>
            <v-col cols="9" class="mt-5 mb-10" align="center">
                <!--<p class="title white--text">
                    Desde 1984, <span class="letters font-weight-bold">POLNAC</span> ha construido unas historia basada en la innovación, <br>
                    el compromiso, y la excelencia. <span class="letters font-weight-bold">POLNAC</span>: siempre comprometido, siempre a la vanguardia.
                </p>-->
                <div class="title white--text" v-html="pageAboutUs.head.subtitle"></div>
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
        ...mapState(['windowSize', 'windowHeight','basePathApiUrl','pageAboutUs'])
    }
}
</script>

<style scoped>

.bg-about{
    /**url('../../static/aboutus/bg-about.png') */
    /*background-image: url('../../static/aboutus/bg-banner.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}

.bg-about-mb{
    /**url('../../static/aboutus/bg-about.png') */
    /*background-image: url('../../static/aboutus/bg-bannermb.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
.letters{
    color: #E0E621
}

</style>