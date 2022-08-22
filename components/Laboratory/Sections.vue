<template>
    <div>
        <section >
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" class="mt-16" align="center">
                        <!--<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :width="windowSize > 1129 ? '1080' : '360'" :height="windowSize > 1129 ? '600' : '260'" type="text/html" 
                        src="https://www.youtube.com/embed/CJ9LyIMleDA?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com">
                        </iframe>-->

                        <iframe class="rounded-lg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :width="windowSize > 1129 ? '1080' : '360'" :height="windowSize > 1129 ? '600' : '260'" type="text/html" 
                        src="https://tourmkr.com/F1KVqkjYDY/37164458p&241.89h&88.13t">
                        </iframe>
                    </v-col>
                    <v-col cols="12" xl="10" class="my-10">
                        <p class="font-size-20">
                            El equipo de trabajo <span class="font-weight-bold">POLNAC</span> opera bajo los estándares más elevados lo cual aseguran completa 
                            imparcialidad y confidencialidad en la elaboración de pruebas y emisión de resultados. 
                            <br><br>
                            Innovación constante y ante todo calidad. El laboratorio de prueba <span class="font-weight-bold">POLNAC</span> opera bajo un 
                            sistema de calidad que cumple con los lineamentos en la norma ISO/IEC 17025:2005, requisitos 
                            generales para la competencia de los laboratorios de prueba y calibración. Esto, se traduce 
                            en procedimientos de operación normalizados, control de procesos de evaluación y de los equipos 
                            de medición utilizados, y una revisión periódica del personal y su forma de trabajo. 
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </section>


        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" align="center" class="my-10">
                        <h1 class="font-archivo font-size-30 font-weight-bold">Pruebas de Laboratorio</h1>
                    </v-col>
                </v-row>

                <div v-if="windowSize < 1129">
                    <v-expansion-panels v-model="panel" multiple>
                        <v-expansion-panel class="my-2">
                            <v-expansion-panel-header class="font-weight-bold bg-color-laboratory">
                                Índice de fluidez
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <div class="">
                                    <v-row >
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM</p>
                                        </v-col>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM D 1238</p>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ISO</p>
                                        </v-col>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ISO 1133</p>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col cols="8" class="mt-2">
                                            <p class="body-2 font-weight-bold">Conoce más sobre el proceso</p>
                                        </v-col>
                                        <v-col cols="4" class="mt-2">
                                            <nuxt-link to="/polnac-wiki?tag=laboratory">
                                                <p class="body-2 more font-weight-bold">Leer más</p>
                                            </nuxt-link>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="my-2">
                            <v-expansion-panel-header class="font-weight-bold bg-color-laboratory">
                                Densidad por desplazamiento
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <div class="">
                                    <v-row >
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM</p>
                                        </v-col>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM D 792 A</p>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col cols="8" class="mt-2">
                                            <p class="body-2 font-weight-bold">Conoce más sobre el proceso</p>
                                        </v-col>
                                        <v-col cols="4" class="mt-2">
                                            <nuxt-link to="/polnac-wiki">
                                                <p class="body-2 more font-weight-bold">Leer más</p>
                                            </nuxt-link>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="my-2">
                            <v-expansion-panel-header class="font-weight-bold bg-color-laboratory">
                                Resistencia al impacto IZOD
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <div class="">
                                    <v-row >
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM</p>
                                        </v-col>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM D 256 A</p>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ISO</p>
                                        </v-col>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ISO 180</p>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col cols="8" class="mt-2">
                                            <p class="body-2 font-weight-bold">Conoce más sobre el proceso</p>
                                        </v-col>
                                        <v-col cols="4" class="mt-2">
                                            <nuxt-link to="/polnac-wiki">
                                                <p class="body-2 more font-weight-bold">Leer más</p>
                                            </nuxt-link>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="my-2">
                            <v-expansion-panel-header class="font-weight-bold bg-color-laboratory">
                                Resistencia al impacto por dardo
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <div class="">
                                    <v-row >
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM</p>
                                        </v-col>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM D 1709</p>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col cols="8" class="mt-2">
                                            <p class="body-2 font-weight-bold">Conoce más sobre el proceso</p>
                                        </v-col>
                                        <v-col cols="4" class="mt-2">
                                            <nuxt-link to="/polnac-wiki">
                                                <p class="body-2 more font-weight-bold">Leer más</p>
                                            </nuxt-link>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="my-2">
                            <v-expansion-panel-header class="font-weight-bold bg-color-laboratory">
                                Resistencia a la tensión
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <div class="">
                                    <v-row >
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM</p>
                                        </v-col>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM D 638</p>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ISO</p>
                                        </v-col>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ISO 527-2</p>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col cols="8" class="mt-2">
                                            <p class="body-2 font-weight-bold">Conoce más sobre el proceso</p>
                                        </v-col>
                                        <v-col cols="4" class="mt-2">
                                            <nuxt-link to="/polnac-wiki">
                                                <p class="body-2 more font-weight-bold">Leer más</p>
                                            </nuxt-link>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="my-2">
                            <v-expansion-panel-header class="font-weight-bold bg-color-laboratory">
                                Elongación al rompimiento
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <div class="">
                                    <v-row >
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM</p>
                                        </v-col>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM D 1238</p>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col cols="8" class="mt-2">
                                            <p class="body-2 font-weight-bold">Conoce más sobre el proceso</p>
                                        </v-col>
                                        <v-col cols="4" class="mt-2">
                                            <nuxt-link to="/polnac-wiki">
                                                <p class="body-2 more font-weight-bold">Leer más</p>
                                            </nuxt-link>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="my-2" >
                            <v-expansion-panel-header class="font-weight-bold bg-color-laboratory">
                                Módulo de flexión
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <div class="">
                                    <v-row >
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM</p>
                                        </v-col>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM D 1238</p>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ISO</p>
                                        </v-col>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ISO 1133</p>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col cols="8" class="mt-2">
                                            <p class="body-2 font-weight-bold">Conoce más sobre el proceso</p>
                                        </v-col>
                                        <v-col cols="4" class="mt-2">
                                            <nuxt-link to="/polnac-wiki">
                                                <p class="body-2 more font-weight-bold">Leer más</p>
                                            </nuxt-link>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="my-2">
                            <v-expansion-panel-header class="font-weight-bold bg-color-laboratory">
                                Temperatura de reblandecimiento VICAT
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <div class="">
                                    <v-row >
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM</p>
                                        </v-col>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ASTM D 1238</p>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ISO</p>
                                        </v-col>
                                        <v-col align-self="center" class="mt-2">
                                            <p>ISO 1133</p>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col cols="8" class="mt-2">
                                            <p class="body-2 font-weight-bold">Conoce más sobre el proceso</p>
                                        </v-col>
                                        <v-col cols="4" class="mt-2">
                                            <nuxt-link to="/polnac-wiki">
                                                <p class="body-2 more font-weight-bold">Leer más</p>
                                            </nuxt-link>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        
                    </v-expansion-panels>
                </div>

                <v-row justify="center" class="mt-10" v-if="windowSize > 1129">
                    <v-col cols="12" lg="4" md="4" sm="12" xm="12">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Índice de fluidez</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM D 1238</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col align-self="center" class="mt-2">
                                    <p>ISO</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ISO 1133</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki?tag=laboratory&id=1">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xm="12">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Densidad por desplazamiento</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM D 792 A</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki?tag=laboratory&id=2">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xm="12">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Resistencia al impacto IZOD</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM D 256 A</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col align-self="center" class="mt-2">
                                    <p>ISO</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ISO 180</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>

                    <v-col cols="12" lg="4" md="4" sm="12" xm="12">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Resistencia al impacto por dardo</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM D 1709</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xm="12">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Resistencia a la tensión</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM D 638</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col align-self="center" class="mt-2">
                                    <p>ISO</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ISO 527-2</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xm="12">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Elongación al rompimiento</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM D 1238</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>

                    <v-col cols="12" lg="4" md="4" sm="12" xm="12" v-if="showMore">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Módulo de Flexión</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col cols="6" align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col cols="6" align-self="center" class="mt-2">
                                    <p>ASTMD D 790</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row >
                                <v-col cols="6" align-self="center" class="mt-2">
                                    <p>ISO</p>
                                </v-col>
                                <v-col cols="6" align-self="center" class="mt-2">
                                    <p>ISO 178</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xm="12" v-if="showMore">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Temperatura de reblandecimiento VICAT</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTMD D 1525</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col align-self="center" class="mt-2">
                                    <p>ISO</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ISO 306</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xm="12" v-if="showMore">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Temperatura de deflexión bajo carga</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTMD D 648</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col align-self="center" class="mt-2">
                                    <p>ISO</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ISO 75-1</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>

                    <v-col cols="12" lg="4" md="4" sm="12" xm="12" v-if="showMore">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Contenido de Cenizas</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col cols="6" align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col cols="6" align-self="center" class="mt-2">
                                    <p>ASTMD D 5630</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xm="12" v-if="showMore">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Contenido de carga en resinas curadas</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTMD D 2584</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xm="12" v-if="showMore">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Determinación de brillo</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTMD 523</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>

                    <v-col cols="12" lg="4" md="4" sm="12" xm="12" v-if="showMore">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Resistencia a la Flama</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col cols="6" align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col cols="6" align-self="center" class="mt-2">
                                    <p>UL94</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xm="12" v-if="showMore">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Dureza Shore A y D</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTMD D 2240</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xm="12" v-if="showMore">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Determinación de contracción por molde</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTMD D955</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row >
                                <v-col align-self="center" class="mt-2">
                                    <p>ISO</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ISO 294-4</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>

                    <v-col cols="12" lg="4" md="4" sm="12" xm="12" v-if="showMore">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Fluidez en seco y Densidad en bulto</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTMD D1895</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xm="12" v-if="showMore">
                        <div class="rounded-lg bg-pruebas px-5 py-1">
                            <p class="font-size-18 font-weight-bold">Tamaño de partícula</p>
                        </div>
                        <div class="">
                            <v-row >
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTM</p>
                                </v-col>
                                <v-col align-self="center" class="mt-2">
                                    <p>ASTMD D1921</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="9" class="mt-2">
                                    <p class="font-size-18 font-weight-bold">Conoce más sobre el proceso</p>
                                </v-col>
                                <v-col cols="3" class="mt-2">
                                    <nuxt-link to="/polnac-wiki">
                                        <p class="font-size-18 more font-weight-bold">Leer más</p>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>


                </v-row>

                <v-row justify="center">
                    <v-col cols="12"  align="center" class="mb-5 mt-10">
                        <v-btn outlined class="rounded-lg text-none px-10 py-5" color="#19D3C5" @click="showMore = !showMore">
                            <span class="black--text">{{ showMore === true ? 'Ocultar pruebas' : 'Mostrar más pruebas'}}</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center" class="my-10"> 
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" align-self="center" v-if="windowSize < 1129">
                        <v-img src="/laboratory/pruebas-laboratory.png" contain max-height="360"></v-img>
                    </v-col>
                    <v-col cols="12" xl="4" lg="6" md="6" sm="12" xs="12" align="center" align-self="center" :class="{'mb-16': windowSize < 1129 }">
                        <p class="font-size-20 text-left">Adicionalmente se realizan otras pruebas como:</p>
                        <ul class="font-size-20 text-left">
                            <li>Determinación de humedad</li>
                            <li>Determinación de color con espectrofotómetro</li>
                            <li>Preparación de probetas de inyección</li>
                            <li>Interperismo (envejecimiento)</li>
                            <li>DSC Calorimetría diferencial de barrido</li>
                            <li>Espectrofotómetro de IR (infrarrojo)</li>
                            <li>TGA análisis termogravimétrico</li>
                            <li>Microscopía Electrónica de Barrido</li>
                        </ul>
                    </v-col>
                    <v-col cols="12" xl="4" lg="6" md="6" sm="12" xs="12" align-self="center" class="mb-16" v-if="windowSize > 1129">
                        <v-img src="/laboratory/pruebas-laboratory.png" contain max-height="370"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            panel: [0],
            readonly: false,
            showMore: false,
        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize'])
    }

}
</script>

<style scoped>
.bg-pruebas{
    background: rgba(25, 211, 197, 0.3);
}
.more{
    color: #773DBD;
}
.bg-color-laboratory{
    background-color: rgba(25, 211, 197, 0.6) !important;
}
</style>