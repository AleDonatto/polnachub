<template>
    <div>
        <MarketHead/>
        <MarketSections/>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'PageMarket',
    head: {},
    nuxtI18n: {
        paths: {
            es: '/mercados',
            eng:'/markets',
        }
    },
    data(){
        return {

        }
    },
    mounted() {
        this.$store.dispatch('defaultLanguaje')
        this.$store.commit('StateAssign', {windowSize:window.innerWidth})
        this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        window.addEventListener('resize', this.Resize)

        if(this.pageMarkets === null || this.lang !== 'esp'){
            this.$store.dispatch('getPageMarkets')
            this.$store.dispatch('getAllMarkets')
        }
    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
    computed: {
        ...mapState(['pageMarkets','lang'])
    }
}
</script>

<style>

</style>