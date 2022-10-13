<template>
    <div>
        <WorkHead/>
        <WorkSections/>
    </div>
</template>

<script>
import { mapState } from 'vuex'

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

        if(this.pageWork === null || this.lang !== 'esp'){
            this.$store.dispatch('getPageWork')
        }
    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
    computed: {
        ...mapState(['pageWork', 'lang'])
    }
}
</script>

<style>

</style>