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