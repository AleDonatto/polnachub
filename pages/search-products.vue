<template>
    <div>
        <SearchHead/>
        <SearchSections/>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'SearchProducts',
    data() {
        return {

        }
    },
    mounted() {
        //this.$store.dispatch('getCredentials')
        this.$store.dispatch('defaultLanguaje')
        this.$store.commit('StateAssign', {windowSize:window.innerWidth})
        this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        window.addEventListener('resize', this.Resize)
    },
    created() {
        if(this.credentials === null){
            this.$store.dispatch('getCredentials')
        }
    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
    computed: {
        ...mapState(['credentials'])
    }

}
</script>

<style>

</style>