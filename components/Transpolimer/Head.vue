<template>
    <div :class="{'bg-transpolimer': windowSize > 1129, 'bg-transpolimer-mb': windowSize < 1129 }" v-if="pagetranspolimer !== null">
        <v-row justify="center">
            <v-col cols="12" class="mt-12" align="center">
                <!--<img src="../../static/transpolimer/logotranspolimer.png" alt="logo transpolimer">-->
                <img :src="basePathApiUrl + pagetranspolimer.head.image.data[0].attributes.url" alt="logo transpolimer" >
                <!--<v-img :src="basePathApiUrl + pagetranspolimer.head.image.data[0].attributes.url" :alt="pagetranspolimer.head.image.data[0].attributes.name" max-width="240"></v-img>-->
            </v-col>
            <v-col cols="10" class="mt-5 mb-10">
                <!--<p class="title text-center white--text">
                    {{ $t('transpolimer.head') }}
                </p>-->
                <p class="title text-center white--text">
                    {{pagetranspolimer.head.title}}
                </p>
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
        ...mapState(['pagetranspolimer','basePathApiUrl', 'windowHeight','windowSize'])
    }
}
</script>

<style scoped>
.bg-transpolimer{
    background-image: url('../../static/transpolimer/bg-banner.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}

.bg-transpolimer-mb{
    background-image: url('../../static/transpolimer/bg-bannermb.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
</style>