<template>
    <v-app>
  
      <CampaniasAppBar/>
      <v-main>
        <!--<v-container>
          <Nuxt />
        </v-container>-->
        <Nuxt />
      </v-main>
      
      <CampaniasFooter/>
      
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'CampingLayout',
    data () {
      return {
        title: 'Campings',
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