<template>
  <v-app>

    <Appbar/>
    <v-main>
      <!--<v-container>
        <Nuxt />
      </v-container>-->
      <Nuxt />
    </v-main>
    
    <Footer/>
    
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      title: 'Vuetify.js',
    }
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style scoped>

</style>