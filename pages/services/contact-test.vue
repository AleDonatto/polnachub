<template>
    <div>
        <ServicesContact/>
    </div>
</template>

<script>
export default {
    head: {},
    nuxtI18n: {
        paths: {
            es: '/servicios/contacto',
            eng:'/services/contact',
        }
    },
    data() {
        return {

        }
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
    }
}
</script>

<style>

</style>