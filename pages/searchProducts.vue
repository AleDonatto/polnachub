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
    head: {

    },
    nuxtI18n: {
        paths: {
            es: '/buscador-de-productos',
            eng:'/search-products',
        }
    },
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

        if(this.pageSearchProducts === null || this.lang !== 'esp'){
            this.$store.dispatch('getPageSearchProducts')
        }

        setTimeout(() => {
            this.$store.dispatch('getCredentialsOther')
            //this.$store.dispatch('getCredentials')
        }, 5000);

        /*if(this.credentials === null){
            setTimeout(() => {
                this.$store.dispatch('getCredentialsOther')
                this.$store.dispatch('getCredentials')
            }, 5000);
        }*/
    },
    created() {
        /*if(this.credentials === null){
            this.$store.dispatch('getCredentialsOther')
            this.$store.dispatch('getCredentials')
        }*/
    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
    computed: {
        ...mapState(['credentials', 'pageSearchProducts', 'lang'])
    }

}
</script>

<style>

</style>