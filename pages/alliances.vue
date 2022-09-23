<template>
    <div>
        <AlliancesHead />
        <AlliancesSections />
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'alliances',
    head: {},
    data() {
        return {} 
    },
    mounted() {
        this.$store.dispatch('defaultLanguaje')
        this.$store.commit('StateAssign', {windowSize:window.innerWidth})
        this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        window.addEventListener('resize', this.Resize)

        if(this.pageAlliances === null || this.lang !== 'esp'){
            this.$store.dispatch('getPageAlliances')
        }
    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
    computed: {
        ...mapState(['lang', 'pageAlliances'])
    }

}
</script>

<style>

</style>