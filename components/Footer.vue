<template>
    <v-footer color="black">
      <v-row :class="{'img-footer-d':windowSize > 1129 , 'img-footer-mobile-button': windowSize < 1129}" justify="center">
        <v-container fluid :class="{'mx-16': windowSize > 1129, 'mx-5': windowSize < 1129}">
          <v-row class="mt-16" justify-sm="center">
            <v-col cols="4" class="mt-10">
              <img src="../static/Logo-polnac-footer.png" alt="logo polnac">
              <p v-if="windowSize > 1129" class="text-left mt-1 teal--text accent-3--text" >
                Polímeros Nacionales S.A. de C.V. <br>
                Lázaro Cárdenas No. 49, Col. San Jerónimo Tepetlacalco, Tlalnepantla, Estado de México. C.P. 54090.
              </p>
            </v-col>
            <v-col cols="2" class="mt-10" v-if="windowSize > 1129">
              <p class="white--text">¿Quiénes Somos?</p>
              <p class="white--text">Colaboradores</p>
              <p class="white--text">Trabaja con nosotros</p>
              <p class="white--text">Grupo POLNAC</p>
            </v-col>
            <v-col cols="2" class="mt-10" v-if="windowSize > 1129">
              <p class="white--text">Productos</p>
              <p class="white--text">Innovación</p>
              <p class="white--text">Servicios</p>
              <p class="white--text">Mercados</p>
            </v-col>
            <v-col cols="2" class="mt-10" v-if="windowSize > 1129">
              <p class="white--text">Blog</p>
              <p class="white--text">Sucursales</p>
              <p class="white--text">Contacto</p>
            </v-col>
            <v-col cols="2" class="mt-10" align="center" v-if="windowSize > 1129">
              <v-row justify="center">
                <v-col cols="3">
                  <v-icon dark class="mx-2">mdi-linkedin</v-icon>
                </v-col>
                <v-col cols="3">
                  <v-icon dark class="mx-2">mdi-facebook</v-icon>
                </v-col>
                <v-col cols="3">
                  <v-icon dark class="mx-2">mdi-instagram</v-icon>
                </v-col>
                <v-col cols="3">
                  <v-icon dark class="mx-2">mdi-twitter</v-icon>
                </v-col>
              </v-row>
              <v-row class="d-block mt-2">
                <v-col>
                  <p class="white--text"><v-icon class="mr-2" dark>mdi-whatsapp</v-icon> (55) 2585 2650</p>
                </v-col>
              </v-row>
              <div class="mt-2">
                <v-btn rounded class="white--text text-none teal">¿Eres colaborador?</v-btn>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" class="my-5">
              <v-divider dark></v-divider>
            </v-col>
          </v-row>

          <v-row v-if="windowSize < 1129">
            <v-col cols="" align="center">
              <p class="teal--text accent-3--text"><v-icon class="mr-2" dark>mdi-whatsapp</v-icon> (55) 2585 2650</p>
              <p class="teal--text accent-3--text">digital@polnac.com</p>
              <v-row justify="center">
                <v-col cols="3">
                  <v-icon dark class="mx-2">mdi-linkedin</v-icon>
                </v-col>
                <v-col cols="3">
                  <v-icon dark class="mx-2">mdi-facebook</v-icon>
                </v-col>
                <v-col cols="3">
                  <v-icon dark class="mx-2">mdi-instagram</v-icon>
                </v-col>
                <v-col cols="3">
                  <v-icon dark class="mx-2">mdi-twitter</v-icon>
                </v-col>
              </v-row>
            </v-col>

          </v-row>

          <v-row v-if="windowSize < 1129">
            <v-col cols="12" class="">
              <v-divider dark></v-divider>
            </v-col>
          </v-row>

          <v-row class="mb-10" justify="center">
            <v-col cols="12" lg="6" md="6" class="">
              <p class="teal--text accent-3--text">
                Polímeros Nacionales S.A. de C.V. 2022 - Todos los derechos reservados
              </p>
            </v-col>
            <v-col cols="12" lg="6" md="6" class="">
              <p class="teal--text accent-3--text" :class="{
                'text-right': windowSize > 1129,
              }">
                Consulta nuestros Términos y Condiciones y Aviso de Privacidad
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['windowHeight','windowSize'])
  }
}
</script>

<style scoped>

.img-footer-d{
  background-image: url('../static/footer-1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  margin-top: -5px;
}
.img-footer-mobile-button{
  /*background-color: #655DC6;*/
  background-image: url('../static/img-footer-mb-bottom.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: -120px;
  height: 680px;
}
.letters{
  color: #E0E621
}
</style>