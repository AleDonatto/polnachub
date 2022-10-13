<template>
    <div class="bg-sucursales" v-if="windowSize > 1129">
        <v-row justify="center">
            <v-col cols="12" align="center" class="mt-15" align-self="center">
                <h1 class="white--text mt-16 font-archivo font-size-40">Sucursales</h1>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            regiones: null,
            sucursales: null,
        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight'])
    },
    mounted(){

    },
    methods: {
        async getRegion(){
            this.regiones = await this.$store.dispatch('')
        }
    }
}
</script>

<style scoped>
.bg-sucursales{
    background-image: url('../../static/sucursales/bg-sucursales.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 360px;
}

.bg-sucursales-mb{
    background-image: url('../../static/sucursales/bg-sucursales.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
</style>