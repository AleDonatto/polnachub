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
                        <v-col cols="12" class="mt-10" v-if="windowSize < 1129">
                            <div class="mt-2 d-flex" :class="{'justify-left': windowSize > 1129, 'justify-center': windowSize < 1129}">
                                <img src="../../static/Logo-polnac-footer.png" alt="logo polnac">
                            </div>
                        </v-col>
                        <v-col cols="3" class="mt-10" v-if="windowSize > 1129">
                            <div class="mt-2 d-flex" :class="{'justify-left': windowSize > 1129, 'justify-center': windowSize < 1129}">
                                <img src="../../static/Logo-polnac-footer.png" alt="logo polnac">
                            </div>
                        </v-col>
                        <v-col cols="6" v-if="windowSize > 1129">
                            <p class="letters body-1 pr-4 text-left" >
                                <span class="font-weight-bold">Global Headquarter</span>:  Estado de México, México <br>
                                <span class="font-weight-bold">Sucursales Nacionales</span>: San Luis Potosí ‧Tijuana ‧ Monterrey ‧ Jalisco León ‧ Querétaro ‧ Puebla ‧ Mérida <br>
                                <span class="font-weight-bold">Sucursales Internacionales</span>: POLNAC USA ‧ POLNAC Colombia POLNAC Ecuador ‧ POLNAC Guatemala ‧ POLNAC Europa <br>
                            </p>
                        </v-col>
                        <v-col cols="3" class="mt-10" align="start" v-if="windowSize > 1129">
                            <v-row justify="">
                                <v-col cols="2">
                                    <a href="https://www.linkedin.com/company/polnac/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                                        <v-img src="/footer/Linkedin.png" contain max-height="28"></v-img>
                                    </a>
                                </v-col>
                                <v-col cols="2">
                                    <a href="https://www.facebook.com/Polnac.Oficial" target="_blank" rel="noopener noreferrer">
                                    <v-img src="/footer/Facebook.png" contain max-height="28"></v-img>
                                    </a>
                                </v-col>
                                <v-col cols="2">
                                    <a href="https://www.instagram.com/polnac.oficial/" target="_blank" rel="noopener noreferrer">
                                    <v-img src="/footer/Instagram.png" contain max-height="28"></v-img>
                                    </a>
                                </v-col>
                                <v-col cols="2">
                                    <a href="https://twitter.com/PolnacOficial" target="_blank" rel="noopener noreferrer">
                                    <v-img src="/footer/Twitter.png" contain max-height="28"></v-img>
                                    </a>
                                </v-col>
                                <v-col cols="2">
                                    <a href="https://www.youtube.com/channel/UCNvsE4YYBZjCoxGXmpXGdkQ" target="_blank" rel="noopener noreferrer">
                                    <v-img src="/footer/Youtube.png" contain max-height="28"></v-img>
                                    </a>
                                </v-col>
                            </v-row>
                            <v-row class="d-block mt-2">
                                <v-col>
                                    <p class="white--text body-1"><v-icon class="mr-2" dark>mdi-whatsapp</v-icon> (55) 2585 2650</p>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
        
                    <v-row>
                        <v-col cols="12" class="my-5">
                            <v-divider dark></v-divider>
                        </v-col>
                    </v-row>

                    <v-row v-if="windowSize < 1129">
                        <v-col cols="12" class="" align="center">
                            <v-row justify="center">
                                <v-col cols="12" align="center">
                                    <p class="white--text body-1"><v-icon class="mr-2" dark>mdi-whatsapp</v-icon> (55) 2585 2650</p>
                                </v-col>
                                <v-col cols="12" align="center">
                                    <p class="white--text body-1">digital@polnac.com</p>
                                </v-col>
                            </v-row>
                            <v-row justify="center">
                                <v-col cols="2">
                                    <a href="https://www.linkedin.com/company/polnac/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                                        <v-img src="/footer/Linkedin.png" contain max-height="28"></v-img>
                                    </a>
                                </v-col>
                                <v-col cols="2">
                                    <a href="https://www.facebook.com/Polnac.Oficial" target="_blank" rel="noopener noreferrer">
                                    <v-img src="/footer/Facebook.png" contain max-height="28"></v-img>
                                    </a>
                                </v-col>
                                <v-col cols="2">
                                    <a href="https://www.instagram.com/polnac.oficial/" target="_blank" rel="noopener noreferrer">
                                    <v-img src="/footer/Instagram.png" contain max-height="28"></v-img>
                                    </a>
                                </v-col>
                                <v-col cols="2">
                                    <a href="https://twitter.com/PolnacOficial" target="_blank" rel="noopener noreferrer">
                                    <v-img src="/footer/Twitter.png" contain max-height="28"></v-img>
                                    </a>
                                </v-col>
                                <v-col cols="2">
                                    <a href="https://www.youtube.com/channel/UCNvsE4YYBZjCoxGXmpXGdkQ" target="_blank" rel="noopener noreferrer">
                                    <v-img src="/footer/Youtube.png" contain max-height="28"></v-img>
                                    </a>
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
                            <p class="teal--text accent-3--text body-1" :class="{'text-right': windowSize > 1129, 'text-center': windowSize < 1129}">
                                Consulta nuestros 
                                <a href="/terms/TÉRMINOS_Y_CONDICIONES_POLNAC_abril_2022.pdf" target="_blank" rel="noopener noreferrer" class="teal--text accent-3--text">Términos y Condiciones</a> y 
                                <a href="/terms/Aviso_de_Privacidad_POLNAC_abril_2022.pdf" target="_blank" rel="noopener noreferrer" class="teal--text accent-3--text">Aviso de Privacidad</a>
                            </p>
                        </v-col>
                        <v-col v-if="windowSize < 1129" cols="12" class="">
                            <p class="teal--text accent-3--text body-1 text-center">
                                Polímeros Nacionales S.A. de C.V. Lázaro Cárdenas No. 49, Col. San Jerónimo Tepetlacalco, Tlalnepantla, 
                                Estado de México. C.P. 54090.
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
    background-image: url('../../static/footer-1.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
    margin-top: -25px;
  }
  .img-footer-mobile-button{
    /*background-color: #655DC6;*/
    background-image: url('../../static/img-footer-mb-bottom.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin-top: -110px;
    height: 680px;
    width: 100%;
  }
  .letters{
    color: #7A92C5;
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