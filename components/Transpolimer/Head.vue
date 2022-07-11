<template>
    <div class="bg-transpolimer">
        <v-row justify="center">
            <v-col cols="12" class="mt-12" align="center">
                <img src="../../static/transpolimer/logotranspolimer.png" alt="logo transpolimer">
                <!--<img :src="basePathApiUrl + pagetranspolimer.head.image.data.attributes.url" alt="logo transpolimer" v-if="pagetranspolimer != null">-->
                <!--<v-img :src="basePathApiUrl + pagetranspolimer.head.image.data.attributes.url" :alt="pagetranspolimer.head.image.data.attributes.name" v-if="pagetranspolimer != null" max-width="240"></v-img>-->
            </v-col>
            <v-col cols="10" class="mt-5 mb-10">
                <p class="title text-center white--text">
                    {{ $t('transpolimer.head') }}
                </p>
                <!--<p class="title text-center white--text" v-if="pagetranspolimer != null">
                    {{pagetranspolimer.head.title}}
                </p>-->
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
        ...mapState(['pagetranspolimer','basePathApiUrl'])
    }
}
</script>

<style scoped>
.bg-transpolimer{
    background-image: linear-gradient(rgba(253, 79, 23, 0.8),rgba(32, 26, 26, 0.8)), url('../../static/transpolimer/bg-transpolimer.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
</style>