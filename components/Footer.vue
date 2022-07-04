<template>
    <v-footer>
      <v-row v-if="windowSize < 1129 && this.$route.path === '/'">
        <v-col class="img-footer-mobile">
        </v-col>
      </v-row>

      <v-row v-if="this.$route.path.includes('poliresin') || this.$route.path.includes('transpolimer')">
        <FormContact />
      </v-row>

      <v-row justify="center" v-else-if="this.$route.path.includes('aboutus') ">
        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="img-about-l" :class="{'height-mb': windowSize < 1129}"></v-col>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12" :class="{'img-about-r': windowSize > 1129 , 'img-about-r-mb': windowSize < 1129 }">
          <div class="py-10 my-10" :class="{'px-16': windowSize > 1129, 'px-2': windowSize < 1129}">
            <h1 class="display-2 font-weight-bold my-10 white--text">¿Te interesa trabajar con nosotros?</h1>
            <p class="white--text body-1">
              ¡Únete a una de las industrias más <span class="yellow--text">sólidas y robustas</span> de la actualidad! 
              Forma parte de una empresa mexicana más vanguardista en constante crecimiento internacional.
            </p>
            <v-btn dark rounded color="rgba(25, 211, 197, 1)" class="px-10 py-5 black--text">Ver vacantes</v-btn>
          </div>
        </v-col>
      </v-row>

      <v-row v-else justify="center">
        <v-col class="img-footer-cita">
          <div class="py-10 px-10 my-10">
            <h1 class="my-10 white--text">{{ $t('home.titleappointment') }}</h1>
            <p class="white--text">
              {{ $t('home.subappointment') }}
            </p>
            <v-btn dark rounded color="rgba(25, 211, 197, 1)">
              {{ $t('home.btnappointment') }}
            </v-btn>
          </div>
        </v-col>
        
        <v-col class="img-footer" v-if="windowSize > 1129"></v-col>
      </v-row>

      <v-row :class="{'img-footer-d':windowSize > 1129 , 'img-footer-mobile-button': windowSize < 1129}" justify="center">
        <v-container fluid :class="{'mx-16': windowSize > 1129, 'mx-5': windowSize < 1129}">
          <v-row class="mt-16">
            <v-col cols="4" class="mt-10">
              <img src="../static/Logo-polnac-footer.png" alt="logo polnac">
              <p v-if="windowSize > 1129" class="text-left mt-1" :class="{'purple--text': this.$route.path === '/', 'teal--text accent-3--text': this.$route.path.includes('transpolimer') || this.$route.path.includes('poliresin') || this.$route.path.includes('aboutus')}">
                Polimeros Nacionales S.A. de C.V. <br>
                Lazaro Cardenaz No. 49 Col. San Jerónimo <br>
                Tepetlacalco, Tlalnepantla, Estado de Mexico <br>
                C.P. 54090 
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
              <p class="white--text">Innovacion</p>
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
                <v-btn rounded class="white--text" :class="{'purple': this.$route.path === '/', 'teal': this.$route.path.includes('transpolimer') || this.$route.path.includes('poliresin') || this.$route.path.includes('aboutus')}">¿Eres colaborador?</v-btn>
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
              <p :class="{'purple--text': this.$route.path === '/', 'teal--text accent-3--text': this.$route.path.includes('transpolimer') || this.$route.path.includes('poliresin') || this.$route.path.includes('aboutus')}"><v-icon class="mr-2" dark>mdi-whatsapp</v-icon> (55) 2585 2650</p>
              <p :class="{'purple--text': this.$route.path === '/', 'teal--text accent-3--text': this.$route.path.includes('transpolimer') || this.$route.path.includes('poliresin') || this.$route.path.includes('aboutus')}">digital@polnac.com</p>
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
              <p :class="{'purple--text': this.$route.path === '/', 'teal--text accent-3--text': this.$route.path.includes('transpolimer') || this.$route.path.includes('poliresin') || this.$route.path.includes('aboutus')}">Polímeros Nacionales S.A. de C.V. 2022 - Todos los derechos reservados</p>
            </v-col>
            <v-col cols="12" lg="6" md="6" class="">
              <p class="" :class="{'purple--text': this.$route.path === '/', 'teal--text accent-3--text': this.$route.path.includes('transpolimer') || this.$route.path.includes('poliresin') || this.$route.path.includes('aboutus')}">Consulta nuestros Términos y Condiciones y Aviso de Privacidad</p>
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
.img-footer-cita{
  background-image: url('../static/footer-cita.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
}

.img-footer {
  background-image: url('../static/footer.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.img-footer-mobile {
  background-image: url('../static/footer.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 350px;
}
.img-footer-d{
  background-image: url('../static/footer-1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  margin-top: -25px;
}
.img-about-l{
  background-image: url('../static/aboutus/img-footer-l.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.height-mb {
  height: 450px;
  width: 100%;
}
.img-about-r{
  background-image: url('../static/aboutus/img-footer-r.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.img-about-r-mb{
  background-image: url('../static/aboutus/bg-aboutus-agenda.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 600px;
}

.img-footer-mobile-button{
  /*background-color: #655DC6;*/
  background-image: url('../static/img-footer-mb-bottom.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: -100px;
  height: 680px;
}

</style>