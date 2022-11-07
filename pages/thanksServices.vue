<template>
    <ServicesContact />
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'ThanksServices',
    nuxtI18n: {
        paths: {
            es: '/servicos-gracias',
            eng:'/services-thanks',
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
    computed: {
        ...mapState(['lang'])
    }
}
</script>

<style>

</style>