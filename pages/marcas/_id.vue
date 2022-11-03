<template>
    <div>
        <GrupoMarcas/>
    </div>
</template>

<script>
export default {
    head: {},
    nuxtI18n: {
        paths: {
            es: '/marcas/:id',
            eng:'/brands/:id',
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
    }
}
</script>

<style scoped>

</style>