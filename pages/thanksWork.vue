<template>
    <WorkThanks/>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'ThanksWork',
    nuxtI18n: {
        paths: {
            es: '/trabajo-gracias',
            eng:'/work-thanks',
        }
    },
    data(){
        return {

        }
    },
    mounted() {
        this.$store.dispatch('workAtPolnac')
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