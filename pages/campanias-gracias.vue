<template>
    <CampaniasGracias />
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'ThanksLand',
    data() {
        return {}
    },
    mounted() {
        this.$store.commit('StateAssign', {windowSize:window.innerWidth})
        this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        window.addEventListener('resize', this.Resize)
    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
    computed: {
        ...mapState(['lang'])
    }
}
</script>

<style>

</style>