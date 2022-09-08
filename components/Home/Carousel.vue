<template>
    <!-- v-if="pageHome !== null" -->
    <div >
        <!--<v-row justify="center">
            <v-container>
                <v-col xl="5" md="5" sm="12" xs="12" class="py-10 my-10" align="center">
                    <h1 class="white--text font-weight-bold pa-5">
                        {{ $t('home.portafolio') }}
                    </h1>
                    <p class="subtitle-1 white--text mt-3 pa-5">
                        {{ $t('home.subportafolio') }}
                        <br>
                        <span class="subtitle-1 yellow--text">Polnac</span>  se especializa en la fabircacion de compuestos, concentrados de color,
                        y la comercializacion de resinas plasticas, logrando ser el <span class="subtitle-1 yellow--text">lider</span> en el <span class="subtitle-1 yellow--text">escenario
                        mundial de la insdustria</span>. 
                    </p>

                    <v-btn rounded class="px-10 py-5 white--text" color="rgba(25, 211, 197, 1)">{{ $t('home.btnhead') }}</v-btn>
                </v-col>
            </v-container>
        </v-row>-->
        <v-carousel v-model="model" :height="windowSize > 1129 ? '510' : '690' " hide-delimiter-background show-arrows-on-hover cycle >
            <!--<v-carousel-item v-for="(color, index ) in pageHome.banner" :key="index">-->
            <v-carousel-item v-for="(color, index ) in colors" :key="index">
                <!--:class="{'bg-img' : index !== 2}"-->
                <v-sheet tile class="bg-img" :class="windowSize > 1129 ? 'size-bg' : 'size-bg-mb'">
                    <!--<video src="../../static/video/home.mp4" autoplay="true" controls muted="muted" loop="true" v-if="index === 2" :class="{'size-video' : windowSize > 1129, 'size-video-mb': windowSize < 1129}"></video>-->
                    <v-container>
                        <v-row justify="center">
                            <v-col cols="12" xl="5" md="6" sm="12" xs="12" class="py-10 my-10">
                                <h1 class="font-archivo font-title pa-5 text-video" :class="{'text-left': windowSize > 1129, 'text-center': windowSize < 1129}">
                                    <mark class="text-mark white--text">{{ $t('home.portafolio') }}</mark>
                                    <!--<mark class="text-mark white--text">{{ color.title }}</mark> -->
                                </h1>
                                <p class="subtitle-1 white--text mt-3 pa-5 text-video" :class="{'text-left': windowSize > 1129, 'text-center': windowSize < 1129}">
                                    <!--{{ $t('home.subportafolio', {polnac: 'POLNAC'}) }}
                                    <br>-->
                                    <span class="subtitle-1 letters text-uppercase font-weight-bold">POLNAC</span> se especializa en la fabricación de compuestos, concentrados de color, 
                                    y a la comercialización de resinas plásticas, logrando ser <span class="letters subtitle-1 font-weight-bold">líder</span> en el <span class="letters subtitle-1 font-weight-bold">escenario mundial de la industria</span>.
                                </p>
                                <!--<div class="subtitle-1 white--text mt-3 pa-5 text-video" :class="{'text-left': windowSize > 1129, 'text-center': windowSize < 1129}" v-html="$md.render( color.subtitle)"></div>-->

                                <div class="d-flex" :class="{'justify-center': windowSize < 1129, 'justify-start ml-5': windowSize > 1129}">
                                    <v-btn rounded class="rounded-xl px-10 py-5 black--text body-1 text-none primary-color">{{ $t('home.btnhead') }}</v-btn>
                                </div>
                            </v-col>
                            <v-col cols="12" xl="4" lg="6" md="6"></v-col>
                        </v-row>
                    </v-container>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            model: 2,
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize','pageHome'])
    }
}
</script>

<style scoped>
.bg-img{
    background-image: linear-gradient(to right, rgba(46, 46, 101, 0.7), rgba(119, 61, 189, 0.7)),url('../../static/bg-carousel-1.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}

.size-bg{
    height: 520px;
}
.size-bg-mb{
    height: 700px;
}
.font-title{
    /*font-family: 'Archivo' !important;*/
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0px;
}
.letters{
    color: #E0E621;
}

video{
    position: absolute;
    left: 0;
    top: 0;
} 

.size-video{
    width: 100%;
}

.size-video-mb{
    height: 100%;
}

.text-video{
    position: relative;
    overflow: hidden;
}
.text-mark{
    background-color: rgba(74, 25, 102, 0.99);
    line-height: -2px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
}
</style>