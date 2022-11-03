<template>
    <CampaniasGracias/>
</template>

<script>

export default {
    name: 'graciasLand',
    head: {},
    data(){
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

}
</script>

<style>

</style>