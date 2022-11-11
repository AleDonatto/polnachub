<template>
    <div>
        <BlogHead/>
        <BlogSections />
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'blog',
    head: {},
    data() {
        return {} 
    },
    mounted() {
        this.$store.dispatch('defaultLanguaje')
        this.$store.commit('StateAssign', {windowSize:window.innerWidth})
        this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        window.addEventListener('resize', this.Resize)

        if(this.pageBlog === null || this.lang !== 'esp'){
            this.$store.dispatch('getPageBlog')
        }
    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
    computed: {
        ...mapState(['pageBlog','lang'])
    }
}
</script>

<style>

</style>