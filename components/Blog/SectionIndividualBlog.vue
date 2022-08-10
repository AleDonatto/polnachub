<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center" class="my-10">
                    <v-col cols="3" v-if="windowSize>1129">
                        <h1 class="font-weight-bold font-size-24">Productos recomendados</h1>
                        <v-img src="/contact/plasticos.png" contain max-height="210" class="my-2"></v-img>
                        <v-img src="/contact/compuestos.png" contain max-height="210" class="my-2"></v-img>
                        <v-img src="/contact/masterbatch.png" contain max-height="210" class="my-2"></v-img>

                        <h1 class="font-weight-bold font-size-24 mt-16">Te podría interesar</h1>

                        <nuxt-link to="/blogs/1" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-productos.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>

                        <nuxt-link to="/blogs/1" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-mercados.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>

                        <nuxt-link to="/blogs/1" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-tendencias.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>

                        <nuxt-link to="/blogs/1" class="decoration-none">
                            <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                <img src="/blog-polnac.png" style="width: 100%" alt="pruebas"/>
                                <v-card-title>Nuevos horizontes</v-card-title>
                                <v-card-subtitle class="text-left">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="12" lg="9" md="9" sm="12" xs="12">
                        <v-row>
                            <v-img src="/blog/blog-individual.png" contain :max-height="windowSize<1129 ? '210': '450'"></v-img>

                            <v-fab-transition>
                                <v-btn color="#19D3C5" dark fab class="position-btn">
                                    <v-icon>mdi-share-variant</v-icon>
                                </v-btn>
                            </v-fab-transition>
                            
                        </v-row>

                        <v-row>
                            <v-col cols="12" class="mt-10">
                                <p class="font-weight-bold font-size-18">
                                    Autor: POLNAC <br>
                                    Fecha: 00/00/000 12:30 hrs
                                </p>
                            </v-col>
                            <v-col cols="12">
                                <p class="font-size-20">
                                    El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones 
                                    Unidas para el Medio Ambiente aprobó una resolución histórica para hacer 
                                    frente a la contaminación plástica. Se prevé que un acuerdo internacional 
                                    entre en vigor a finales de 2024.
                                    <br><br>
                                    “Se trata del acuerdo multilateral más importante en materia de medio ambiente 
                                    desde el Acuerdo de París”- Inger Andersen, directora ejecutiva del Programa 
                                    para el Medio Ambiente.
                                    <br><br>
                                    El acuerdo estará a cargo de un Comité Intergubernamental de Negociación, el 
                                    cual comenzará a trabajar este mismo año. Se buscarán distintas alternativas 
                                    para impulsar la economía circular dentro de la industria plástica, desde el 
                                    rediseño de productos hasta el desarrollo de materiales reciclables y 
                                    biodegradables.
                                    <br><br>
                                    El comunicado de la Naciones Unidas afirma que “El documento que redacte el 
                                    Comité se basará en un debate abierto, informado por la ciencia y ese órgano 
                                    informará sobre los progresos realizados a lo largo de los dos próximos años.”
                                    <br><br>
                                    Algunos de los graves problemas que esta resolución busca solventar son:

                                    <ul>
                                        <li>11 millones de toneladas de residuos plásticos llegan a los océanos cada año. Esta cifra podría triplicarse para el año 2040</li>
                                        <li>Más de 800 especies marinas y costeras se ven directamente afectadas por la contaminación plástica</li>
                                        <li>Se calcula que la producción, uso y eliminación de materiales plásticas representara el 15% de las emisiones permitidas de gases invernadero para 2050.</li>
                                    </ul>
                                    <br><br>
                                    
                                    Pero no todo son malas noticias. Evolucionar hacia una economía circular tendrá 
                                    grandes resultados para nuestros ecosistemas y comunidades:
                                    <ul>
                                        <li>Reducir hasta un 80% el volumen de contaminación plástica en los océanos</li>
                                        <li>Reducir las emisiones de gases invernadero en un 25%</li>
                                        <li>Creación de 700,000 empleos adicionales, sobre todo en los países del hemisferio sur</li>
                                    </ul>
                                    <br><br>
                                    En POLNAC nos orgullece estar siempre a la vanguardia de la industria. Creemos 
                                    firmemente en los beneficios y posibilidades que el plástico le otorga a la 
                                    humanidad. Por eso trabajamos infatigablemente en crear una industria en donde 
                                    los plásticos sean nuestro mejor aliado para mejorar la calidad de vida de 
                                    todos los seres vivos.
                                    <br><br>
                                    Por consiguiente, nos encontramos un paso adelante: ponemos a tu disposición 
                                    una nueva gama de materiales y compuestos biodegradables bajo nuestra marca 
                                    BioResin
                                </p>
                                <v-divider></v-divider>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <p class="font-weight-bold font-size-24">Conoce marcas relacionadas:</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                                <v-img src="/group/logo-bioresin.png" contain max-height="120"></v-img>
                                <p class="font-size-18 mt-2">Especialistas en la distribución y fabricación de resinas biodegradables.</p>
                            </v-col>
                            <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                                <v-img src="/group/logo-rototech.png" contain max-height="120"></v-img>
                                <p class="font-size-18 mt-2">La línea de negocio especializada en la producción y comercialización de resinas plásticas para el proceso de rotomoldeo.</p>
                            </v-col>
                            <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                                <v-img src="/group/logo-flexlene.png" contain max-height="120"></v-img>
                                <p class="font-size-18 mt-2">Expertos en el diseño, desarrollo y fabricación de Compuestos de Policloruro de Vinilo(PVC).</p>
                            </v-col>
                        </v-row>

                        <v-row v-if="windowSize>1129">
                            <v-col cols="8">
                                <p class="font-weight-bold font-size-24">Mercados</p>
                            </v-col>
                            <v-col cols="4" align="right">
                                <nuxt-link to="/blogs" class="color-decotarion">
                                    <h1 class="purple-polnac">Ver todas</h1>
                                </nuxt-link>
                            </v-col>
                        </v-row>
                        <v-row v-if="windowSize>1129">
                            <v-col cols="4">
                                <v-img src="/blog/mercados.png" contain max-height="220"></v-img>
                            </v-col>
                            <v-col cols="4">
                                <v-img src="/blog/tendencias.png" contain max-height="220"></v-img>
                            </v-col>
                            <v-col cols="4">
                                <v-img src="/blog/mercados.png" contain max-height="220"></v-img>
                            </v-col>
                        </v-row>

                        <v-row v-if="windowSize<1129">
                            <v-carousel class="carousel-black" cycle height="400" hide-delimiter-background show-arrows-on-hover>
                                <v-carousel-item v-for="(slide, i) in itemsBlogs" :key="i">
                                    <v-sheet color=""  height="100%">
                                        <v-row class="fill-height" align="center" justify="center">
                                            <nuxt-link :to="`/blogs/${i+1}`" class="decoration-none">
                                                <v-card class="card-blog shadow-out" :class="{'ma-1': windowSize > 1129, 'mx-1': windowSize < 1129}" :max-width="windowSize>1129 ? '325' : '300'" :max-height="windowSize >1129 ? '390': '360'">
                                                    <img :src="slide.img" style="width: 100%" alt="pruebas"/>
                                                    <v-card-title>Nuevos horizontes</v-card-title>
                                                    <v-card-subtitle class="text-left">
                                                        El pasado mes marzo en Nairobi, capital de Kenia, la Asamblea de las Naciones Unidas para el Medio Ambiente...
                                                    </v-card-subtitle>
                                                    <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                    </v-card-actions>
                                                </v-card>
                                            </nuxt-link>
                                        </v-row>
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                        </v-row>
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
            itemsBlogs: [
                {img: require('../../static/blog-tendencias.png') },
                {img: require('../../static/blog-productos.png') },
                {img: require('../../static/blog-mercados.png') },
                {img: require('../../static/blog-polnac.png') },
            ]
        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight'])
    }
}
</script>

<style scoped>
.position-btn{
    position: fixed !important;
    top: 90% !important;
    left: 80% !important;
    z-index: 1;
}
.color-decotarion{
    text-decoration-color: #773DBD !important;
}
.purple-polnac{
    color: #773DBD;
}
</style>