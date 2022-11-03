<template>
    <div>
        <ContactThanks />
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'ThanksPolnac',
    nuxtI18n: {
        paths: {
            es: '/gracias-por-contactarnos',
            eng:'/thanks-for-contactingus',
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