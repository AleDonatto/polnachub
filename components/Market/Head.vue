<template>
    <!-- v-if="pageMarkets !== null" -->
    <div v-if="pageMarkets !== null" :class="{'bg-market': windowSize > 1129, 'bg-market-mb': windowSize < 1129 }" :style="{ backgroundImage: `url(${basePathApiUrl + pageMarkets.banner.image.data[0].attributes.url })` }" >
        <v-row justify="center" class="py-10">
            <v-col cols="12" align="center" class="mt-12">
                <!--<h1 class="mt-16 font-archivo font-size-40 white--text">Mercados</h1>-->
                <h1 class="font-archivo font-size-40 white--text" v-html="pageMarkets.banner.title"></h1>
            </v-col>
            <v-col cols="10" xl="6" lg="6" md="6" sm="10" xs="10" v-if="this.mercados !== null" class="mt-5 mb-10">
                <v-select v-model="market" :label="lang === 'es' ?'Tipo de Mercado' : 'Markey Type' " solo outlined class="rounded-xl" :items="this.mercados" item-text="attributes.nameMarket" item-value="id"
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
        ...mapState(['windowHeight','windowSize','pageMarkets', 'basePathApiUrl', 'mercados', 'lang'])
    },
    mounted(){
        //this.getMercados()
    },
    methods: {
        async getMercados(){
            //this.markets = await this.$store.dispatch('getAllMarkets')
            //this.listmarkets = this.markets
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
    height: 420px;
}
.bg-market-mb{
    /*background-image: url('../../static/market/bg-market-mb.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
</style>