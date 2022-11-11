<template>
    <div>
        <GrupoHead/>
        <GrupoSections />
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "GrupoPolnac",
    head: {},
    nuxtI18n: {
        paths: {
            es: '/marcas',
            eng:'/brands',
        }
    },
    data() {
        return {};
    },
    mounted() {
        this.$store.dispatch('defaultLanguaje')
        this.$store.commit('StateAssign', {windowSize:window.innerWidth})
        this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        window.addEventListener('resize', this.Resize)

        if(this.pagePolnacGroup === null || this.lang !== 'esp'){
            this.$store.dispatch('getPagePolnacGroup')
        }
    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
    computed: {
        ...mapState(['pagePolnacGroup', 'lang'])
    }
}
</script>

<style>

</style>