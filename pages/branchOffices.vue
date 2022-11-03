<template>
    <div>
        <SucursalesHead/>
        <SucursalesSections/>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'branchOfices',
    head: {
        
    },
    nuxtI18n: {
        paths: {
            es: '/sucursales',
            eng:'/branch-offices',
        }
    },
    data() {
        return {}
    },
    mounted() {
        this.$store.dispatch('defaultLanguaje')
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
}
</script>

<style>

</style>