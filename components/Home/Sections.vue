<template>
    <div>

        <section>
            <v-container>
                <div class="my-10 mx-10">
                    <v-row justify="center">
                        <v-col md="6" sm="12" xs="12" align-self="center" align="center">
                            <h1 class="font-title text-none text-left" :class="{'headline': windowSize < 1129, 'display-1': windowSize > 1129}">
                                POLNAC, más de <br>
                                <span class="cyan--text accent-3--text">35 años de inovación</span> 
                            </h1>

                            <v-img src="./video.png" contain max-height="350" max-width="350" v-if="windowSize < 1129"></v-img>

                            <p class="my-5 text-left">
                                Desde 1984 <span class="font-weight-bold">POLNAC</span> ha construido una historia basada en innovación, compromiso y mejora continua. <span class="font-weight-bold">POLNAC</span> siempre a la vanguardia. 
                            </p>

                            <v-btn rounded color="#773DBD" class="px-10 body-1 py-5 white--text text-none">{{ $t('home.btnabout') }}</v-btn>
                        </v-col>
                        <v-col md="6" sm="12" xs="5" align="center" v-if="windowSize > 1129">
                            <v-img src="./video.png" contain max-height="350" max-width="350"></v-img>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </section>

        <section>
            <div class="my-10 mx-10">
                <h1 class="font-title-section font-weight-black text-center my-10">{{ $t('home.titledestacados') }}</h1>
                <v-row>
                    <v-col xl="3" md="3" sm="12" xs="12" class="des-1" v-if="windowSize > 1129">
                    </v-col>
                    <v-col xl="3" md="3" sm="12" xs="12" class="des-2" v-if="windowSize > 1129">
                    </v-col>
                    <v-col xl="3" md="3" sm="12" xs="12" class="des-3" align-self="end">
                        <h4 class="white--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</h4>
                        <p class="white--text mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel accumsan...</p>
                        <p class="white--text text-right">...Ver mas</p>
                    </v-col>
                    <v-col xl="3" md="3" sm="12" xs="12" class="des-4" v-if="windowSize > 1129">
                    </v-col>
                </v-row>
                <div class="d-flex justify-center my-10">
                    <v-btn class="white--text body-1 px-10 py-4 text-none" color="black" rounded>{{ $t('home.btnproducts') }}</v-btn>
                </div>
            </div>
        </section>

        <section>
            <v-container>
                <h1 class="font-title-section font-weight-bold black--text text-center my-10">{{ $t('home.catproducts') }}</h1>
                <v-row justify="center">
                    <v-col xl="3" md="3" sm="6" xs="6" align="center">
                        <img src="../../static/plasticos.png" alt="plasticos de ingenieria">
                    </v-col>
                    <v-col xl="3" md="3" sm="6" xs="6" align="center">
                        <img src="../../static/compuestos.png" alt="compuestos">
                    </v-col>
                    <v-col xl="3" md="3" sm="6" xs="6" align="center">
                        <img src="../../static/masrterbach.png" alt="masterbach">
                    </v-col>
                    <v-col xl="3" md="3" sm="6" xs="6" align="center">
                        <img src="../../static/aditivos.png" alt="compuestos aditivos">
                    </v-col>
                </v-row>
                <div class="d-flex justify-center my-10">
                    <v-btn class="white--text body-1 px-10 py-4 text-none" color="#773DBD" rounded>{{ $t('home.btncategories') }}</v-btn>
                </div>
            </v-container>
        </section>

        <section>
            <div class="bg-testimonios my-10">
                <v-container>
                    <h1 class="font-title-section font-weight-bold white--text text-center my-10">{{ $t('home.titletestimonials') }}</h1>

                    <v-sheet class="mx-auto my-10 bg-color">
                        <v-slide-group multiple show-arrows>
                            <v-slide-item v-for="n in 10" :key="n" v-slot="{ active, toggle }">
                                <v-card class="mx-5 px-5 my-2" width="400" color="rgba(9, 187, 174, 1)">
                                    <v-card-text>
                                        <div>Word of the Day</div>
                                        <p class="text-h4 text--primary">
                                            be•nev•o•lent
                                        </p>
                                        <p>adjective</p>
                                        <div class="text--primary">
                                            well meaning and kindly.<br>
                                            "a benevolent smile"
                                        </div>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn text color="deep-purple accent-4">
                                            Learn More
                                        </v-btn>
                                    </v-card-actions>
                                    <v-btn
                                        class="mx-2"
                                        :input-value="active"
                                        active-class="purple white--text"
                                        depressed
                                        rounded
                                        @click="toggle"
                                    >
                                        Options {{ n }}
                                    </v-btn>
                                </v-card>
        
                            </v-slide-item>
                        </v-slide-group>
                    </v-sheet>

                </v-container>
            </div>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col lg="6" md="6" sm="12" xs="12" align="center">
                        <h1 class="display-2 font-weight-bold text-left">Empresa <span class="purple--text">100% mexicana </span> de <span class="teal--text accent-2--text">alcance mundial</span></h1>
                        <p class="subtitle-1 mt-2 text-justify">
                            <span class="font-weight-bold">POLNAC</span> brinda un servicio integral, eficiente y confiable a través de una atención personalizada enfocada en las necesidades y especificaciones de cada cliente.
                        </p>
                    </v-col>
                    <v-col lg="6" md="6" sm="12" xs="12" align="center">
                        <v-img :src=" windowSize > 1129 ? './map.png': './map-mobile.png'" contain max-height="450" max-width="450" alt="sucursales"></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                        <h1 class="display-1 purple--text font-weight-bold text-center">+300,000 m<sup>2</sup></h1>
                        <p class="subtitle-1 text-center">de <span class="font-weight-bold">infraestructura</span> para la fabricación de productos</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                        <h1 class="display-1 purple--text font-weight-bold text-center">+90,000 ton</h1>
                        <p class="subtitle-1 text-center">de <span class="font-weight-bold">capacidad de producción</span> anual</p>
                    </v-col>
                    <v-col lg="6" md="6" sm="12" xs="12">
                        <p class="subtitle-1 text-center">Sucursales nacionales <span class="font-weight-bold">estratégicamente</span> ubicadas en: Monterrey, Guadalajara, Estado de México, San Luis Potosí, León, Mérida, Puebla, Querétaro y Tijuana.</p>
                    </v-col>
                </v-row>

                <v-row justify="center">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <div class="d-flex justify-center">
                            <img src="../../static/plantas.png" alt="plantas de fabricacion" />
                        </div>
                        <p class="text-center mt-2">Tres avanzadas <span class="font-weight-bold">plantas de fabricación</span> en México y Estados Unidos</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <div class="d-flex justify-center">
                            <img src="../../static/sucursales.png" alt="sucursales" />
                        </div>
                        <p class="text-center mt-2">Cinco <span class="font-weight-bold">sucursales internacionales</span>: USA, Europa, Colombia, Ecuador y Guatemala</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <div class="d-flex justify-center">
                            <img src="../../static/almacen.png" alt="almacen" />
                        </div>
                        <p class="text-center mt-2">Equipos de <span class="font-weight-bold">almacenamiento</span> y <span class="font-weight-bold">transporte</span> de vanguardia</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <div class="d-flex justify-center">
                            <img src="../../static/ferrocarril.png" alt="ferrocarril" />
                        </div>
                        <p class="text-center mt-2"><span class="font-weight-bold">Terminal ferroviaria</span> con más de 5 km de vías</p>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <div class="d-flex justify-center">
                            <img src="../../static/laboratorio.png" alt="laboratorios" />
                        </div>
                        <p class="text-center mt-2"><span class="font-weight-bold">Moderno laboratorio</span> de Innovación & Desarrollo</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <div class="d-flex justify-center">
                            <img src="../../static/estandares.png" alt="estandares" />
                        </div>
                        <p class="text-center mt-2">Procesos alineados y certificados bajo <span class="font-weight-bold">estándares internacionales</span>.</p>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <div class="bg-alianzas">
                <v-container>
                    <h1 class="font-title-section text-center white--text font-weight-bold my-10">{{ $t('home.titlealliances') }}</h1>
                    <p class="white--text text-center px-15">
                        <span class="text-uppercase font-weight-bold letters">POLNAC</span>  ha forjado <span class="font-weight-bold letters">alianzas estratégicas</span> con los principales productores de
                        materia prima a <span class="font-weight-bold letters">nivel mundial</span>, siempre buscando poner a disposición de sus clientes
                        los mejores materiales a precios competitivos. 
                    </p>
                    <div class="d-flex justify-center">
                        <v-btn class="my-10 px-10 py-5 body-1 black--text text-none" color="#19D3C5" rounded>{{$t('home.btnalliances') }}</v-btn>
                    </div>
                </v-container>
            </div>
        </section>

        <section>
            <v-container>
                <h1 class="font-title-section text-center black--text font-weight-bold my-10">Blog</h1>
                <v-row class="my-10" justify="center">
                    <v-col lg="3" md="3" sm="12" xs="12">
                        <v-card class="mx-auto" max-width="344">
                            <img src="../../static/blog-productos.png" alt="blog productos" style="width: 100%"/>
                            <v-card-title>Nuevos horizontes</v-card-title>
                            <v-card-subtitle>El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...</v-card-subtitle>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="3" v-if="windowSize > 1129">
                        <v-card class="mx-auto" max-width="344">
                            <img src="../../static/blog-mercados.png" alt="blog mercados" style="width: 100%"/>
                            <v-card-title>Nuevos horizontes</v-card-title>
                            <v-card-subtitle>El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...</v-card-subtitle>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="3" v-if="windowSize > 1129">
                        <v-card class="mx-auto" max-width="344">
                            <img src="../../static/blog-tendencias.png" alt="blog tendencias" style="width: 100%"/>
                            <v-card-title>Nuevos horizontes</v-card-title>
                            <v-card-subtitle>El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...</v-card-subtitle>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="3" v-if="windowSize > 1129">
                        <v-card class="mx-auto" max-width="344">
                            <img src="../../static/blog-polnac.png" alt="blog polnac" style="width: 100%"/>
                            <v-card-title>Nuevos horizontes</v-card-title>
                            <v-card-subtitle>El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...</v-card-subtitle>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>

                <div class="d-flex justify-center mb-10">
                    <v-btn rounded class="white--text text-none body-1" color="black">{{$t('home.btnblog')}}</v-btn>
                </div>

                <!--<v-sheet class="mx-auto my-10">
                    <v-slide-group multiple show-arrows>
                        <v-slide-item v-for="b in 3" :key="b" v-slot="{ active, toggle }">
                            
                            <v-card class="mx-5 my-2" max-width="344">
                                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
                                <v-card-title>
                                    Nuevos horizontes
                                </v-card-title>

                                <v-card-subtitle>
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn
                                        class="mx-2"
                                        :input-value="active"
                                        active-class="purple white--text"
                                        depressed
                                        rounded
                                        @click="toggle"
                                        >
                                        Options {{ n }}
                                    </v-btn>
                                </v-card-actions>
                            </v-card>

                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>-->
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return {
            model: null,
        }
    },
    computed:{
        ...mapState(['windowHeight','windowSize'])
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300&display=swap');

.des-1{
    background-image: url('../../static/destacados-1.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 300px;
    width: 600px;
}
.des-2{
    background-image: url('../../static/destacados-2.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 300px;
    width: 600px;
}
.des-3{
    background-image: linear-gradient(rgba(119, 61, 189, 0.5), rgba(119, 61, 189, 0.7)), url('../../static/destacados-3.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 300px;
    width: 600px;
}
.des-4{
    background-image: url('../../static/destacados-4.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 300px;
    width: 600px;
}
.bg-testimonios{
    background-image: linear-gradient(95.7deg, #773DBD 16.97%, #0B8B82 100.64%), url('../../static/testimonios.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
}
.bg-color{
    background-image: linear-gradient(95.7deg, #773DBD 16.97%, #0B8B82 100.64%) !important;
}
.bg-alianzas{
    background-image: url('../../static/bg-alianzas.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
}
.font-title{
    font-family: 'Archivo' !important;
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: 0px;
}

.font-title-section{
    font-family: 'Archivo' !important;
    font-size: 40px;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 0px;
}
.letters{
    color: #E0E621
}
</style>
