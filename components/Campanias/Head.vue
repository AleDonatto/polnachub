<template>
    <div v-if="pageCamping !== null">
        <div class="" v-if="pageCamping.showBanner === true">
            <v-carousel v-model="model" :height="windowSize > 1129 ? '560' : '640' " hide-delimiter-background show-arrows-on-hover cycle >
                <v-carousel-item v-for="(color, index ) in pageCamping.banner" :key="index">
                <!--<v-carousel-item v-for="(color, index ) in 1" :key="index">-->
                    <!--:class="{'bg-img' : index !== 2}"-->
                    <v-sheet tile class="bg-img" :class="windowSize > 1129 ? 'size-bg' : 'size-bg-mb'" :style="{ backgroundImage: `linear-gradient(to right, rgba(46, 46, 101, 0.7), rgba(119, 61, 189, 0.7)),url(${basePathApiUrl + color.image.data[0].attributes.url })` }">
                        <video :src="basePathApiUrl + color.image.data[0].attributes.url" autoplay="true" controls muted="muted" loop="true" v-if="color.image.data[0].attributes.name.includes('.mp4')" :class="{'size-video' : windowSize > 1129, 'size-video-mb': windowSize < 1129}"
                            :style="{ backgroundImage: `linear-gradient(to right, rgba(46, 46, 101, 0.7), rgba(119, 61, 189, 0.7))` }"></video>
                        <v-container>
                            <v-row >
                                <v-col cols="12" xl="8" md="6" sm="12" xs="12" class="py-10 my-10" align="star">
                                    <h1 class="font-archivo font-title pa-5 text-video">
                                        <!--<mark class="text-mark white--text">{{ $t('home.portafolio') }}</mark>-->
                                        <span v-html="color.title" class=""></span>
                                    </h1>

                                    <div class="subtitle-1 white--text mt-3 pa-5 text-video" :class="{'text-left': windowSize > 1129, 'text-center': windowSize < 1129}" v-html="color.subtitle"></div>

                                    <div class="d-flex" :class="{'justify-center': windowSize < 1129, 'justify-start ml-5 mb-10': windowSize > 1129}">
                                        <!--<nuxt-link to="#informacion" class="decoration-none">
                                            
                                        </nuxt-link>-->
                                        <a href="#informacion" class="decoration-none">
                                            <v-btn rounded class="rounded-xl px-10 py-5 black--text body-1 text-none primary-color">
                                                Más información
                                            </v-btn>
                                        </a>
                                    </div>
                                </v-col>
                                <v-col cols="12" xl="4" lg="6" md="6"></v-col>
                            </v-row>
                        </v-container>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            model: 1
        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize','pageCamping', 'basePathApiUrl'])
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300&display=swap');

.bg-img{
    /*background-image: linear-gradient(to right, rgba(46, 46, 101, 0.7), rgba(119, 61, 189, 0.7)),url('../../static/bg-carousel-1.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 640px;
}

</style>