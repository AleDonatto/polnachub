<template>
    <div class="bg-poliresin">
        <v-row justify="center">
            <v-col cols="12" class="mt-12" align="center">
                <v-img src="/poliresin/POLIRESINLOGO.png" contain max-width="450"></v-img>
            </v-col>
            <v-col cols="10" class="mt-5 mb-10">
                <p class="title text-center white--text">
                    {{ $t('poliresin.head') }}
                </p>
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
        ...mapState(['windowHeight','windowSize'])
    }
    
}
</script>

<style scoped>
.bg-poliresin{
    background-image: linear-gradient(134.76deg, #2A4496 -18.47%, #159346 100.45%),url('../../static/poliresin/bg-poliresin.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
</style>