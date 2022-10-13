<template>
    <div>
        <!--<PolnacwikiHead/>-->
        <PolnacwikiSections/>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {

        }
    },
    mounted() {
        this.$store.dispatch('defaultLanguaje')
        this.$store.commit('StateAssign', {windowSize:window.innerWidth})
        this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        window.addEventListener('resize', this.Resize)

        if(this.pagePolnacWiki === null || this.lang !== 'esp'){
            this.$store.dispatch('getPagePolnacWiki')
        }
    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
    computed: {
        ...mapState(['pagePolnacWiki','lang'])
    }
}
</script>

<style scoped>

</style>