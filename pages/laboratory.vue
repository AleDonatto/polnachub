<template>
    <div>
        <LaboratoryHead />
        <LaboratorySections />
    </div>
</template>

<script>
export default {
    name: 'pageLaboratory',
    head: {

    },
    nuxtI18n: {
        paths: {
            es: '/laboratorio',
            eng:'/laboratory',
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

        this.$store.dispatch('getPageLaboratory')
        this.$store.dispatch('getAllTipoPruebas')
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