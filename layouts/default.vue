<template>
  <v-app>

    <!--<CampaniasAppBar v-if="this.$route.path === '/campanias'"/>-->
    <Appbar/>
    <v-main>
      <!--<v-container>
        <Nuxt />
      </v-container>-->
      <Nuxt />
    </v-main>
    
    <!--<CampaniasFooter v-if="this.$route.path === '/campanias'"/>-->
    <Footer></Footer>
    
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