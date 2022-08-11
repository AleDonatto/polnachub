<template>
    <div>
        <WorkHead/>
        <WorkSections/>
    </div>
</template>

<script>
export default {
    name:'Work-at-polnac',
    head: {

    },
    data(){
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