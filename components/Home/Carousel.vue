<template>
    <div>
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
        <v-carousel v-model="model" height="580" hide-delimiter-background show-arrows-on-hover cycle>
            <v-carousel-item v-for="color in colors" :key="color">
                <v-sheet tile class="bg-img">
                    <v-row justify="center">
                        <v-container>
                            <v-col xl="5" md="5" sm="12" xs="12" class="py-10 my-10" align="center">
                                <h1 class="white--text font-weight-bold pa-5" :class="{'text-left': windowSize > 1129, 'text-center': windowSize < 1129}">
                                    {{ $t('home.portafolio') }}
                                </h1>
                                <p class="subtitle-1 white--text mt-3 pa-5" :class="{'text-left': windowSize > 1129, 'text-center': windowSize < 1129}">
                                    <!--{{ $t('home.subportafolio') }}
                                    <br>-->
                                    <span class="subtitle-1 yellow--text text-uppercase">Polnac</span>  se especializa en la fabircacion de compuestos, concentrados de color,
                                    y la comercializacion de resinas plasticas, logrando ser el <span class="subtitle-1 yellow--text">lider</span> en el <span class="subtitle-1 yellow--text">escenario
                                    mundial de la insdustria</span>.
                                </p>

                                <v-btn rounded class="px-10 py-5 white--text text-none" color="rgba(25, 211, 197, 1)">{{ $t('home.btnhead') }}</v-btn>
                            </v-col>
                        </v-container>
                    </v-row>
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
            model: 0,
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
        ...mapState(['windowHeight','windowSize'])
    }
}
</script>

<style scoped>
.bg-img{
    background-image: linear-gradient(rgba(119, 61, 189, 0.7), rgba(119, 61, 189, 0.7)),url('../../static/bg-carousel-1.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
</style>