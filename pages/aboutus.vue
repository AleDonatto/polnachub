<template>
    <div>
        <AboutusHead/>
        <AboutusSections/>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "aboutUsPage",
    head: {},
    data() {
        return {}
    },
    mounted() {
        this.$store.dispatch('defaultLanguaje')
        this.$store.commit('StateAssign', {windowSize:window.innerWidth})
        this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        window.addEventListener('resize', this.Resize)

        if(this.pageAboutUs === null || this.lang !== 'esp'){
            this.$store.dispatch('getAboutUs')
        }
    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
    computed: {
        ...mapState(['pageAboutUs','lang'])
    }
    
}
</script>

<style>

</style>