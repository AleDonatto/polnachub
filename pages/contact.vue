<template>
    <div>
        <ContactForm/>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'pageContact',
    head: {},
    nuxtI18n: {
        paths: {
            es: '/contactanos',
            eng:'/contact',
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

        if(this.pageContact === null || this.lang !== 'esp'){
            this.$store.dispatch('getPageContact')
            this.$store.dispatch('getAllProducts')
        }
    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
    computed: {
        ...mapState(['pageContact','lang'])
    }
}
</script>

<style scoped>

</style>