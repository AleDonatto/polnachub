<template>
    <div>
        <InnovationHead />
        <InnovationSections />
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'page-Innavation',
    head: {},
    nuxtI18n: {
        paths: {
            es: '/innovacion',
            eng:'/innovation',
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

        if(this.pageInnovation === null || this.lang !== 'esp'){
            this.$store.dispatch('getPageInnvation')
        }
    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
    computed: {
        ...mapState(['pageInnovation','lang'])
    }
}
</script>

<style>

</style>