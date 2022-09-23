<template>
    <div>
        <ServicesHead />
        <ServicesSections />
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'pageServices',
    head: {},
    data() {
        return {

        }
    },
    mounted() {
        this.$store.dispatch('defaultLanguaje')
        this.$store.commit('StateAssign', {windowSize:window.innerWidth})
        this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        window.addEventListener('resize', this.Resize)

        if(this.pageServices === null || this.lang !== 'esp'){
            this.$store.dispatch('getPageServices')
        }

    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
    computed: {
        ...mapState(['pageServices','lang'])
    }
}
</script>

<style>

</style>