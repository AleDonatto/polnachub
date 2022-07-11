<template>
    <div class="bg-poliresin">
        <v-row justify="center">
            <v-col cols="12" class="mt-12" align="center">
                <v-img src="/poliresin/POLIRESINLOGO.png" contain max-width="450"></v-img>
                <!--<v-img :src="basePathApiUrl + pagepoliresin.head.image.data.attributes.url" contain max-width="450" v-if="pagepoliresin != null"></v-img>-->
            </v-col>
            <v-col cols="10" class="mt-5 mb-10">
                <p class="title text-center white--text">
                    {{ $t('poliresin.head') }}.
                </p>
                <!--<p class="title text-center white--text" v-if="pagepoliresin != null">
                    {{ pagepoliresin.head.title }}
                </p>-->
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
        ...mapState(['windowHeight','windowSize','pagepoliresin','basePathApiUrl'])
    }
    
}
</script>

<style scoped>
.bg-poliresin{
    background-image: linear-gradient(rgba(42, 68, 150,0.7) ,rgba(21, 147, 70,0.7)),url('../../static/poliresin/bg-poliresin.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
</style>