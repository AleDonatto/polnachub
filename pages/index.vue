<template>
  <div>  
    <HomeCarousel />
    <HomeSections />
  </div>
</template>

<script>
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
  },
  methods: {
    Resize(){
      this.$store.commit('StateAssign', {windowSize:window.innerWidth})
      this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
    }
  }
}
</script>
