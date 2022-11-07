<template>
    <CampaniasMain/>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'CampingPage',
    data() {
        return {}
    },
    mounted() {
        this.$store.commit('StateAssign', {windowSize:window.innerWidth})
        this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        window.addEventListener('resize', this.Resize)

        if(this.pageCamping === null){
            this.$store.dispatch('getPageCamping')
            this.$store.dispatch('getAllProducts')
        }
    },
    methods: {
        Resize(){
        this.$store.commit('StateAssign', {windowSize:window.innerWidth})
        this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
    computed: {
        ...mapState(['pageCamping'])
    }
}
</script>

<style>

</style>