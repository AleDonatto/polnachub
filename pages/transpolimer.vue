<template>
    <div>
        <TranspolimerHead />
        <TranspolimerSections />
    </div>
</template>

<script>
export default {
    name: "transpolimerPage",
    head: {},
    data() {
        return {}
    },
    mounted() {
        this.$store.dispatch('defaultLanguaje')
        this.$store.commit('StateAssign', {windowSize:window.innerWidth})
        this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        window.addEventListener('resize', this.Resize)

        this.$store.dispatch('getPageTranspolimer')
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