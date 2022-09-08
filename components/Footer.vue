<template>
  <v-footer padless>
    <div :class="{'img-footer-d':windowSize > 1129 , 'img-footer-mobile-button': windowSize < 1129}">
      
      <v-row justify="center">
        <v-container fluid :class="{'mx-16': windowSize > 1129, 'mx-5': windowSize < 1129}">
          <v-row justify="center" align="end" class="mb-10">
            <v-col cols="11" align="end">
              <v-fab-transition>
                <v-btn color="teal" dark fab :class="{'position-btn':windowSize>1129, 'position-btn-mobile':windowSize<1129 }" @click="chatWhatsapp">
                  <v-icon>mdi-whatsapp</v-icon>                          
                </v-btn>
              </v-fab-transition>
            </v-col>
          </v-row>
          <v-row class="mt-16">
            <v-col cols="12" xl="3" lg="3" m="3" class="mt-10">
              <div class="mt-2 d-flex" :class="{'justify-left': windowSize > 1129, 'justify-center': windowSize < 1129}">
                <img src="../static/Logo-polnac-footer.png" alt="logo polnac">
              </div>
              <p v-if="windowSize > 1129" class="body-1 pr-4 text-left mt-4 teal--text accent-3--text" >
                Polímeros Nacionales S.A. de C.V. <br>
                Lázaro Cárdenas No. 49, Col. San Jerónimo Tepetlacalco, Tlalnepantla, Estado de México. C.P. 54090.
              </p>
            </v-col>
            <v-col cols="2" class="mt-10" v-if="windowSize > 1129">
              <nuxt-link to="/aboutus" class="decoration-none">
                <p class="white--text body-1">{{$t('appbar.quien')}}</p>
              </nuxt-link>
              <nuxt-link to="/alliances" class="decoration-none">
                <p class="white--text body-1">{{$t('appbar.colaboradores')}}</p>
              </nuxt-link>
              <nuxt-link to="/work-at-polnac" class="decoration-none">
                <p class="white--text body-1">{{$t('appbar.trabajo')}}</p>
              </nuxt-link>
              <nuxt-link to="/polnac-group" class="decoration-none white--text">
                <p class="white--text body-1">{{$t('appbar.grupoPolnac')}}</p>
              </nuxt-link>
            </v-col>
            <v-col cols="2" class="mt-10" v-if="windowSize > 1129">
              <nuxt-link to="/search-products" class="decoration-none">
                <p class="white--text body-1">{{ $t('appbar.products') }}</p>
              </nuxt-link>
              <nuxt-link to="/innovation" class="decoration-none">
                <p class="white--text body-1">{{$t('appbar.innovation')}}</p>
              </nuxt-link>
              <nuxt-link to="/services" class="decoration-none">
                <p class="white--text body-1">{{ $t('appbar.services') }}</p>
              </nuxt-link>
              <nuxt-link to="/market" class="decoration-none">
                <p class="white--text body-1">{{ $t('appbar.market') }}</p>
              </nuxt-link>
            </v-col>
            <v-col cols="2" class="mt-10" v-if="windowSize > 1129">
              <nuxt-link to="/blogs" class="decoration-none">
                <p class="white--text body-1">Blog</p>
              </nuxt-link>
              <nuxt-link to="/branch-ofices" class="decoration-none">
                <p class="white--text body-1">{{$t('appbar.sucursales')}}</p>
              </nuxt-link>
              <nuxt-link to="/contact" class="decoration-none">
                <p class="white--text body-1">{{ $t('appbar.contact') }}</p>
              </nuxt-link>
            </v-col>
            <v-col cols="3" class="mt-10" align="start" v-if="windowSize > 1129">
              <v-row justify="">
                <v-col cols="2">
                  <a href="https://www.linkedin.com/company/polnac/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                    <v-img src="/Linkedin.png" contain max-height="28"></v-img>
                  </a>
                </v-col>
                <v-col cols="2">
                  <a href="https://www.facebook.com/Polnac.Oficial" target="_blank" rel="noopener noreferrer">
                    <v-img src="/Facebook.png" contain max-height="28"></v-img>
                  </a>
                </v-col>
                <v-col cols="2">
                  <a href="https://www.instagram.com/polnac.oficial/" target="_blank" rel="noopener noreferrer">
                    <v-img src="/Instagram.png" contain max-height="28"></v-img>
                  </a>
                </v-col>
                <v-col cols="2">
                  <a href="https://twitter.com/PolnacOficial" target="_blank" rel="noopener noreferrer">
                    <v-img src="/Twitter.png" contain max-height="28"></v-img>
                  </a>
                </v-col>
                <v-col cols="2">
                  <a href="https://www.youtube.com/channel/UCNvsE4YYBZjCoxGXmpXGdkQ" target="_blank" rel="noopener noreferrer">
                    <v-img src="/Youtube.png" contain max-height="28"></v-img>
                  </a>
                </v-col>
              </v-row>
              <v-row class="d-block mt-2">
                <v-col>
                  <p class="white--text body-1"><v-icon class="mr-2" dark>mdi-whatsapp</v-icon> (55) 2585 2650</p>
                </v-col>
              </v-row>
              <div class="mt-2">
                <v-btn rounded class="black--text body-1 text-none primary-color">{{$t('appbar.colaborador')}}</v-btn>
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
              <p class="teal--text accent-3--text body-1"><v-icon class="mr-2" dark>mdi-whatsapp</v-icon> (55) 2585 2650</p>
              <p class="teal--text accent-3--text body-1">digital@polnac.com</p>
              <v-row justify="center">
                <v-col cols="2">
                  <v-img src="/Linkedin.png" contain max-height="27"></v-img>
                </v-col>
                <v-col cols="2">
                  <v-img src="/Facebook.png" contain max-height="27"></v-img>
                </v-col>
                <v-col cols="2">
                  <v-img src="/Instagram.png" contain max-height="27"></v-img>
                </v-col>
                <v-col cols="2">
                  <v-img src="/Twitter.png" contain max-height="27"></v-img>
                </v-col>
                <v-col cols="2">
                  <v-img src="/Youtube.png" contain max-height="27"></v-img>
                </v-col>
              </v-row>
            </v-col>

          </v-row>

          <v-row v-if="windowSize < 1129">
            <v-col cols="12" class="">
              <v-divider dark></v-divider>
            </v-col>
          </v-row>

          <v-row class="" justify="center">
            <v-col cols="12" lg="6" md="6" class="" v-if="windowSize > 1129">
              <p class="teal--text accent-3--text body-1">
                Polímeros Nacionales S.A. de C.V. 2022 - Todos los derechos reservados
              </p>
            </v-col>
            <v-col cols="12" lg="6" md="6" class="">
              <p class="teal--text accent-3--text body-1" :class="{
                'text-right': windowSize > 1129,
              }">
                Consulta nuestros 
                <a href="/" target="_blank" rel="noopener noreferrer" class="teal--text accent-3--text">Términos y Condiciones</a> y 
                <a href="/" target="_blank" rel="noopener noreferrer" class="teal--text accent-3--text">Aviso de Privacidad</a>
              </p>
            </v-col>
            <v-col v-if="windowSize < 1129" cols="12" class="">
              <p class="teal--text accent-3--text body-1">
                Polímeros Nacionales S.A. de C.V. Lázaro Cárdenas No. 49, Col. 
                San Jerónimo Tepetlacalco, Tlalnepantla, Estado de México. C.P. 54090.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </div>
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
  },
  methods:{
    chatWhatsapp(){
      window.open('https://wa.me/525525852650')
    }
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
  height: 540px;
  margin-top: -45px;
}
.img-footer-mobile-button{
  /*background-color: #655DC6;*/
  background-image: url('../static/img-footer-mb-bottom.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: -110px;
  height: 690px;
  width: 100%;
}
.letters{
  color: #E0E621
}

.position-btn{
  position: fixed !important;
  top: 90% !important;
  left: 90% !important;
  z-index: 1;
}

.position-btn-mobile{
  position: fixed !important;
  top: 90% !important;
  left: 80% !important;
  z-index: 1;
}
</style>