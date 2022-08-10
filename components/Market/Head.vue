<template>
    <div :class="{'bg-market': windowSize > 1129, 'bg-market-mb': windowSize < 1129 }">
        <v-row justify="center">
            <v-col cols="12" align="center">
                <h1 class="mt-16 font-archivo font-size-40 white--text">Mercados</h1>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="10" xl="6" lg="6" md="6" sm="10" xs="10">
                <v-select label="Tipo de Mercado" solo outlined class="mb-16 rounded-xl"></v-select>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {}
    },
    computed: {
        ...mapState(['windowHeight','windowSize'])
    }
}
</script>

<style scoped>
.bg-market{
    background-image: url('../../static/market/bg-market.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 320px;
}
.bg-market-mb{
    background-image: url('../../static/market/bg-marketmb.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
</style>