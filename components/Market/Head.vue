<template>
    <!-- v-if="pageMarkets !== null" -->
    <div v-if="pageMarkets !== null" :class="{'bg-market': windowSize > 1129, 'bg-market-mb': windowSize < 1129 }" :style="{ backgroundImage: `url(${basePathApiUrl + pageMarkets.banner.image.data[0].attributes.url })` }" >
        <v-row justify="center">
            <v-col cols="12" align="center">
                <!--<h1 class="mt-16 font-archivo font-size-40 white--text">Mercados</h1>-->
                <h1 class="mt-16 font-archivo font-size-40 white--text" v-html="pageMarkets.banner.title"></h1>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="10" xl="6" lg="6" md="6" sm="10" xs="10">
                <v-select v-model="market" label="Tipo de Mercado" solo outlined class="mb-16 rounded-xl" :items="markets.data" item-text="attributes.nameMarket" item-value="id"
                @change="gotoMarket"></v-select>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            markets: [],
            market: 0
        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize','pageMarkets', 'basePathApiUrl'])
    },
    mounted(){
        this.getMercados()
    },
    methods: {
        async getMercados(){
            this.markets = await this.$store.dispatch('getAllMarkets')
            //console.log(this.markets)
        },
        gotoMarket(){
            this.$router.push(`/market/type/${this.market}`)
        }
    }
}
</script>

<style scoped>
.bg-market{
    /*background-image: url('../../static/market/bg-market.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 320px;
}
.bg-market-mb{
    /*background-image: url('../../static/market/bg-market-mb.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 320px;
}
</style>