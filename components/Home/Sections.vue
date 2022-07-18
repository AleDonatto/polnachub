<template>
    <div>

        <section>
            <v-container>
                <div class="my-10 mx-10">
                    <v-row justify="center">
                        <v-col md="6" sm="12" xs="12" align-self="center" align="center">
                            <h1 class="font-title text-none text-left" :class="{'headline': windowSize < 1129, 'display-1': windowSize > 1129}">
                                <span class="font-weigth-bold">{{ $t('home.secabout.polnac') }}</span> <br>
                                <span class="text-teal">{{ $t('home.secabout.year') }}</span> 
                            </h1>

                            <v-img src="./video.png" contain max-height="350" max-width="350" v-if="windowSize < 1129"></v-img>

                            <p class="text-body-all my-5 text-left">
                                Desde 1984 <span class="font-weight-bold">POLNAC</span> ha construido una historia basada en innovación, compromiso y mejora continua. <span class="font-weight-bold">POLNAC</span> siempre a la vanguardia. 
                            </p>

                            <div class="d-flex" :class="{'justify-center': windowSize < 1129, 'justify-start': windowSize > 1129}">
                                <v-btn color="#773DBD" class="rounded-lg px-10 body-1 py-5 white--text text-none">{{ $t('home.btnabout') }}</v-btn>
                            </div>

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
                <h1 class="font-title-section text-h3 font-weight-bold text-center my-10">{{ $t('home.titledestacados') }}</h1>
                <v-row>
                    <v-col xl="3" md="3" sm="12" xs="12" class="des-1" v-if="windowSize > 1129">
                    </v-col>
                    <v-col xl="3" md="3" sm="12" xs="12" class="des-2" v-if="windowSize > 1129">
                    </v-col>
                    <v-col xl="3" md="3" sm="12" xs="12" class="des-3">
                        <h4 class="white--text text-img">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</h4>
                        <p class="white--text mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel accumsan...</p>
                        <p class="white--text text-right">...Ver mas</p>
                    </v-col>
                    <v-col xl="3" md="3" sm="12" xs="12" class="des-4" v-if="windowSize > 1129">
                    </v-col>
                </v-row>
                <div class="d-flex justify-center my-10">
                    <v-btn class="rounded-lg text-body-all white--text body-1 px-10 py-4 text-none" color="black">{{ $t('home.btnproducts') }}</v-btn>
                </div>
            </div>
        </section>

        <section>
            <v-container>
                <h1 class="font-title-section text-h3 font-weight-bold black--text text-center my-10">{{ $t('home.catproducts') }}</h1>

                <v-row justify="center" v-if="windowSize < 1129">
                    <v-col cols="6" xl="3" md="3" sm="6" xs="6" align="center">
                        <v-img src="/plasticos.png" contain max-width="250"></v-img>
                    </v-col>
                    <v-col cols="6" xl="3" md="3" sm="6" xs="6" align="center">
                        <v-img src="/compuestos.png" contain max-width="250"></v-img>
                    </v-col>
                    <v-col cols="6" xl="3" md="3" sm="6" xs="6" align="center">
                        <v-img src="/masrterbach.png" contain max-width="250"></v-img>
                    </v-col>
                    <v-col cols="6" xl="3" md="3" sm="6" xs="6" align="center">
                        <v-img src="/aditivos.png" contain max-width="250"></v-img>
                    </v-col>
                    <v-col cols="6" xl="3" md="3" sm="6" xs="6" align="center" v-if="windowSize < 1129">
                        <v-img src="/carbonato.png" contain max-width="250"></v-img>
                    </v-col>
                    <v-col cols="6" xl="3" md="3" sm="6" xs="6" align="center" v-if="windowSize < 1129">
                        <v-img src="/rotomoldeo.png" contain max-width="250"></v-img>
                    </v-col>
                </v-row>
            </v-container>
            <v-container fluid v-if="windowSize > 1129">
                <v-sheet class="mx-auto" max-width="1150">
                    <v-slide-group v-model="model" class="pa-5" center-active show-arrows>
                        <v-slide-item v-for="(item, index) in catPoducts" :key="index" >
                            <v-card class="ma-5 card-blog shadow-out" max-width="325" max-height="390">
                                <img :src="item.img" style="width: 100%" alt="pruebas"/>
                                <v-card-title></v-card-title>
                                <v-card-subtitle></v-card-subtitle>
                                <v-card-actions>
                                </v-card-actions>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
            </v-container>
            <v-container>
                <div class="d-flex justify-center mb-10">
                    <v-btn class="rounded-lg white--text body-1 px-10 py-4 text-none" color="#773DBD" rounded>{{ $t('home.btncategories') }}</v-btn>
                </div>
            </v-container>
        </section>

        <section>
            <div class="bg-testimonios my-10">
                <v-container fluid>
                    <h1 class="font-title-section text-h3 font-weight-bold white--text text-center my-10">{{ $t('home.titletestimonials') }}</h1>

                    <v-sheet class="mx-auto my-10 bg-color" max-width="1420">
                        <v-slide-group show-arrows center-active>
                            <v-slide-item v-for="n in 10" :key="n" v-slot="{ active, toggle }">
                                <v-card class="mx-5 px-5 my-2" width="400" :color="n%2===0 ? 'rgba(9, 187, 174, 1)' : 'white'">
                                    <v-card-text @click="toggle">
                                        <p class="text-h5 text-uppercase text-center font-weight-bold mt-5" :class="{'black--text': n%2===0 , 'text-color-testimonios': active === false }">
                                            Criser
                                        </p>
                                        <p class="ma-0 text-h6 text-center" :class="{'black--text': n%2===0 , 'text-color-testimonios': n%2!==0 }">
                                            Juan Carlos Aguirre Palomo
                                        </p>
                                        <p class="ma-0 text-center" :class="{'black--text': n%2===0 , 'text-color-testimonios': n%2!==0 }">Jefe de Planeación y Compras</p>
                                        <div class="text--primary text-center">
                                            <v-icon :color=" n%2===0 ? 'white' : '#19D3C5'" >mdi-star</v-icon>
                                            <v-icon :color=" n%2===0 ? 'white' : '#19D3C5'">mdi-star</v-icon>
                                            <v-icon :color=" n%2===0 ? 'white' : '#19D3C5'">mdi-star</v-icon>
                                            <v-icon :color=" n%2===0 ? 'white' : '#19D3C5'">mdi-star</v-icon>
                                        </div>
                                        <p class="mt-2 text-center">
                                            “Agradecemos mucho su apertura para negociar cualquier tema comercial y de logística, 
                                            así como su apoyo en urgencias y búsqueda de nuevos materiales. Siempre buscando aportar 
                                            soluciones y atentos a las recomendaciones para mejorar su servicio”.
                                        </p>
                                    </v-card-text>
                                    <v-card-actions>
                                    </v-card-actions>
                                </v-card>
        
                            </v-slide-item>
                        </v-slide-group>
                    </v-sheet>

                </v-container>
            </div>
        </section>

        <section>
            <v-container>
                <v-row justify="center" class="mt-10 mx-2">
                    <v-col lg="6" md="6" sm="12" xs="12" align="center">
                        <h1 class="display-2 text-left">Empresa <span class="font-weight-bold text-map">100% mexicana </span> de <span class="text-teal font-weight-bold">alcance mundial</span></h1>
                        <p class="text-body-all mt-2 text-justify">
                            <span class="font-weight-bold">POLNAC</span> brinda un servicio integral, eficiente y confiable a través de una atención personalizada enfocada en las necesidades y especificaciones de cada cliente.
                        </p>
                    </v-col>
                    <v-col lg="6" md="6" sm="12" xs="12" align="center">
                        <v-img :src="windowSize > 1129 ? './map.png' : './map-mobile.png'" contain max-height="450" max-width="450" alt="sucursales"></v-img >
                    </v-col>
                    <v-col v-if="windowSize < 1129">
                        <p class="text-body-all text-justify">Sucursales nacionales <span class="font-weight-bold">estratégicamente</span> ubicadas en: Monterrey, Guadalajara, Estado de México, San Luis Potosí, León, Mérida, Puebla, Querétaro y Tijuana.</p>
                    </v-col>
                </v-row>
                <v-row class="mx-5">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                        <h1 class="text-map font-weight-bold text-center" :class="{'display-1': windowSize>1129, 'text-h3': windowSize < 1129}">+300,000 m<sup>2</sup></h1>
                        <p class="text-body-all text-center">de <span class="font-weight-bold">infraestructura</span> para la fabricación de productos</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                        <h1 class="text-map font-weight-bold text-center" :class="{'display-1': windowSize>1129, 'text-h3': windowSize < 1129}">+90,000 ton</h1>
                        <p class="text-body-all text-center">de <span class="font-weight-bold">capacidad de producción</span> anual</p>
                    </v-col>
                    <v-col lg="6" md="6" sm="12" xs="12" v-if="windowSize > 1129">
                        <p class="text-body-all text-left">Sucursales nacionales <span class="font-weight-bold">estratégicamente</span> ubicadas en: Monterrey, Guadalajara, Estado de México, San Luis Potosí, León, Mérida, Puebla, Querétaro y Tijuana.</p>
                    </v-col>
                </v-row>

                <v-row justify="center" class="mx-5">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/plantas.png" contain max-height="70"></v-img>
                        <!--<div class="d-flex justify-center">
                            <img src="../../static/plantas.png" alt="plantas de fabricacion" />
                        </div>-->
                        <p class="text-body-all text-center mt-2">Tres avanzadas <span class="font-weight-bold">plantas de fabricación</span> en México y Estados Unidos</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <!--<div class="d-flex justify-center">
                            <img src="../../static/sucursales.png" alt="sucursales" />
                        </div>-->
                        <v-img src="/sucursales.png" contain max-height="70"></v-img>
                        <p class="text-body-all text-center mt-2">Cinco <span class="font-weight-bold">sucursales internacionales</span>: USA, Europa, Colombia, Ecuador y Guatemala</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <!--<div class="d-flex justify-center">
                            <img src="../../static/almacen.png" alt="almacen" />
                        </div>-->
                        <v-img src="/almacen.png" contain max-height="70"></v-img>
                        <p class="text-body-all text-center mt-2">Equipos de <span class="font-weight-bold">almacenamiento</span> y <span class="font-weight-bold">transporte</span> de vanguardia</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <!--<div class="d-flex justify-center">
                            <img src="../../static/ferrocarril.png" alt="ferrocarril" />
                        </div>-->
                        <v-img src="/ferrocarril.png" contain max-height="70"></v-img>
                        <p class=" text-body-all text-center mt-2"><span class="font-weight-bold">Terminal ferroviaria</span> con más de 5 km de vías</p>
                    </v-col>
                </v-row>
                <v-row justify="center" class="mb-10">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <!--<div class="d-flex justify-center">
                            <img src="../../static/laboratorio.png" alt="laboratorios" />
                        </div>-->
                        <v-img src="/laboratorio.png" contain max-height="70"></v-img>
                        <p class="text-body-all text-center mt-2"><span class="font-weight-bold">Moderno laboratorio</span> de Innovación & Desarrollo</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <!--<div class="d-flex justify-center">
                            <img src="../../static/estandares.png" alt="estandares" />
                        </div>-->
                        <v-img src="/estandares.png" contain max-height="70"></v-img>
                        <p class="text-body-all text-center mt-2">Procesos alineados y certificados bajo <span class="font-weight-bold">estándares internacionales</span>.</p>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <div class="bg-alianzas">
                <v-container>
                    <h1 class="font-title-section text-h3 text-center white--text font-weight-bold my-10">{{ $t('home.titlealliances') }}</h1>
                    <p class="text-body-all white--text text-center px-15">
                        <span class="text-uppercase font-weight-bold letters">POLNAC</span>  ha forjado <span class="font-weight-bold letters">alianzas estratégicas</span> con los principales productores de
                        materia prima a <span class="font-weight-bold letters">nivel mundial</span>, siempre buscando poner a disposición de sus clientes
                        los mejores materiales a precios competitivos. 
                    </p>
                    <div class="d-flex justify-center">
                        <v-btn class="rounded-lg my-10 px-10 py-5 body-1 black--text text-none" color="#19D3C5" rounded>{{$t('home.btnalliances') }}</v-btn>
                    </div>
                </v-container>
            </div>
        </section>

        <section>
            <v-container fluid>
                <h1 class="font-title-section text-h3 text-center black--text font-weight-bold my-10">Blog</h1>
                <!--<v-row class="my-10" justify="center">
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
                    <v-btn rounded class="subtitle-1 white--text text-none" color="black">{{$t('home.btnblog')}}</v-btn>
                </div>-->


                <v-sheet class="mx-auto my-10" max-width="1600">
                    <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                        <v-slide-item v-for="(item, index) in blogs" :key="index" >
                            <v-card class="ma-5 card-blog shadow-out" max-width="325" max-height="390">
                                <img :src="item.img" style="width: 100%" alt="pruebas"/>
                                <v-card-title>{{item.title}}</v-card-title>
                                <v-card-subtitle>{{item.description}}</v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>

                <div class="d-flex justify-center mb-16">
                    <v-btn rounded class="rounded-lg subtitle-1 px-10 py-5 white--text text-none" color="black">{{$t('home.btnblog')}}</v-btn>
                </div>
            </v-container>
        </section>

        <section>
            <v-container fluid>
                <v-row justify="center" v-if="windowSize < 1129">
                    <v-col class="img-footer-mobile">
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" lg="6" md="6" class="img-footer-cita" >
                        <v-row justify="center">
                            <v-col cols="9">
                                <div class="py-10 my-10 mb-16">
                                    <h1 class="text-h4 font-weight-bold my-10 white--text">{{ $t('home.titleappointment') }}</h1>
                                    <p class="white--text text-body-all">
                                        {{ $t('home.subappointment') }}
                                    </p>
                                    <v-btn dark color="rgba(25, 211, 197, 1)" class="rounded-lg px-10 py-5 subtitle-1 black--text text-none">
                                        {{ $t('home.btnappointment') }}
                                    </v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
        
                    <v-col cols="6" class="img-footer" v-if="windowSize > 1129"></v-col>
                </v-row>
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
            blogs: [
                {img: require('../../static/blog-productos.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },
                {img: require('../../static/blog-mercados.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },
                {img: require('../../static/blog-tendencias.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },
                {img: require('../../static/blog-polnac.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },

                {img: require('../../static/blog-productos.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },
                {img: require('../../static/blog-mercados.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },
                {img: require('../../static/blog-tendencias.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },
                {img: require('../../static/blog-polnac.png'), title: 'Nuevos horizontes', description: 'El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...' },
            ],
            catPoducts: [
                { img: require('../../static/plasticos.png')},
                { img: require('../../static/compuestos.png')},
                { img: require('../../static/masrterbach.png')},
                { img: require('../../static/aditivos.png')},
                { img: require('../../static/carbonato.png')},
                { img: require('../../static/rotomoldeo.png')},

                { img: require('../../static/masrterbach.png')},
                { img: require('../../static/aditivos.png')},
                { img: require('../../static/carbonato.png')},
                { img: require('../../static/rotomoldeo.png')},
                
            ]
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
    background-image: linear-gradient(rgba(119, 61, 189, 0.9), rgba(119, 61, 189, 0.90)), url('../../static/destacados-3.png');
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
.text-img{
    margin-top: 130px;
}
.bg-testimonios{
    background-image: linear-gradient(rgba(61, 124, 201, 0.7), rgba(101, 93, 198,0.7)), url('../../static/testimonios.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
}
.bg-color{
    background-image: linear-gradient(rgba(61, 124, 201, 0.7), rgba(101, 93, 198,0.7)), url('../../static/testimonios.png') !important;
}
.bg-alianzas{
    background-image: linear-gradient(rgba(46, 46, 101, 0.7), rgba(46, 46, 101, 0.7)), url('../../static/bg-home-alliances.png');
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
}
.letters{
    color: #E0E621
}

.img-footer-cita{
  background-image: url('../../static/footer-cita.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
}

.img-footer {
  background-image: url('../../static/footer.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.img-footer-mobile {
  background-image: url('../../static/footer.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 350px;
}
.text-color-testimonios{
    color: #655DC6;
}

.text-map{
    color: #773DBD;
}

.text-teal{
    color: #19D3C5
}
.shadow-out{
    box-shadow: none !important;
}
</style>
