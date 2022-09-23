<template>
    <div>
        <polnacblueHead/>
        <PolnacblueSections />
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return {}
    },
    mounted() {
        this.$store.dispatch('defaultLanguaje')
        this.$store.commit('StateAssign', {windowSize:window.innerWidth})
        this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        window.addEventListener('resize', this.Resize)

        if(this.pagePolnacBlue === null || this.lang !== 'esp'){
            this.$store.dispatch('getPagePolnacBlue')
        }
    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
    computed: {
        ...mapState(['pagePolnacBlue', 'lang'])
    }

}
</script>

<style>

</style>