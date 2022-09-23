<template>
  <div>  
    <HomeCarousel />
    <HomeSections />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IndexPage',
  head: {},
  data(){
    return {
    }
  },
  mounted() {
    this.$store.commit('StateAssign', {windowSize:window.innerWidth})
    this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
    window.addEventListener('resize', this.Resize)
    this.$store.dispatch('defaultLanguaje')

    if(this.pageHome === null || this.lang !== 'esp'){
      this.$store.dispatch('getPageHome')
    }
  },
  methods: {
    Resize(){
      this.$store.commit('StateAssign', {windowSize:window.innerWidth})
      this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
    }
  },
  computed: {
    ...mapState(['pageHome','lang'])
  }
}
</script>
