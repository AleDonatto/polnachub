<template>
    <div v-if="pageAlliances === null">
        <v-sheet class="pa-3">
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
    </div>
    <div v-else>
        <section class="mt-16">
            <v-container>
                <!--<v-row justify="center" class="my-10">
                    <v-col class="my-10" cols="12" xl="5" lg="6" md="6" sm="12" xs="12" align-self="center" align="center" v-if="windowSize > 1129">
                        <v-img src="/alliances/idesa.png" contain max-width="350"></v-img>
                    </v-col>
                    <v-col class="my-10" cols="12" xl="4" lg="6" md="6" sm="12" xs="12" align-self="center" align="center">
                        <v-img src="/alliances/idesa.png" contain max-width="350" class="mt-5 mb-5" v-if="windowSize < 1129"></v-img>
                        <p class="text-body-all text-left">
                            La petroquímica brasileña es la más grande de América Latina. Actualmente es el productor de biopolímeros más grande del mundo y opera 36 plantas industriales en Brasil, México, Estados Unidos y Alemania. Su amplia gama de materiales cuenta con diferentes grados de polietileno, polipropileno, Reciclado Post Consumo (PCR), polietileno verde, y copolímeros de etileno con acetato de vinilo.
                        </p>
                    </v-col>

                    <v-col class="my-10" cols="12" xl="4" lg="6" md="6" sm="12" xs="12" align-self="center" align="center">
                        <v-img src="/alliances/ineos.png" contain max-width="350" class="mt-5 mb-5" v-if="windowSize < 1129"></v-img>
                        <p class="text-body-all text-left">
                            Empresa fundada en 2011 como una empresa conjunta 50-50 entre BASF y INEOS. Hoy por hoy son el principal proveedor 
                            mundial de estireno con un enfoque en monómero de estireno, poliestireno, ABS estándar y especialidades estirénicas. 
                            Ineos Styrolution opera 20 plantas de fabricación en 10 países: Alemania, Bélgica, China, Francia, Corea del Sur, India, 
                            Tailandia, Estados Unidos, Canadá y México.
                        </p>
                    </v-col>
                    <v-col class="my-10" cols="12" xl="5" lg="6" md="6" sm="12" xs="12" align-self="center" align="center" v-if="windowSize > 1129">
                        <v-img src="/alliances/ineos.png" contain max-width="350"></v-img>
                    </v-col>

                    <v-col class="my-10" cols="12" xl="5" lg="6" md="6" sm="12" xs="12" align-self="center" align="center" v-if="windowSize > 1129">
                        <v-img src="/alliances/basf.png" contain max-width="350"></v-img>
                    </v-col>
                    <v-col class="my-10" cols="12" xl="4" lg="6" md="6" sm="12" xs="12" align-self="center" align="center">
                        <v-img src="/alliances/basf.png" contain max-width="350" class="mb-5 mt-5" v-if="windowSize < 1129"></v-img>
                        <p class="text-body-all text-left">
                            Es una empresa multinacional alemana y la mayor productora de productos químicos del mundo, con clientes en más 
                            de 190 países del mundo. El grupo BASF opera seis sitios de producción integrados y otros 390 sitios de producción en cinco continentes.
                        </p>
                    </v-col>

                    <v-col class="my-10" cols="12" xl="4" lg="6" md="6" sm="12" xs="12" align-self="center" align="center">
                        <v-img src="/alliances/pemex.png" contain max-width="350" class="mb-5 mt-5" v-if="windowSize < 1129"></v-img>
                        
                        <p class="text-body-all text-left">
                            Petróleos Mexicanos se formó en 1938 mediante la nacionalización y expropiación de todas las empresas petroleras privadas en México. 
                            Sus actividades abarcan toda la cadena productiva en materia de hidrocarburos, desde exploración hasta comercialización. Su repertorio 
                            de productos incluye polietilenos de diversos tipos de reacción y ramificación.
                        </p>
                    </v-col>
                    <v-col class="my-10" cols="12" xl="5" lg="6" md="6" sm="12" xs="12" align-self="center" align="center" v-if="windowSize > 1129">
                        <v-img src="/alliances/pemex.png" contain max-width="350"></v-img>
                    </v-col>

                    <v-col class="my-10" cols="12" xl="5" lg="6" md="6" sm="12" xs="12" align-self="center" align="center" v-if="windowSize > 1129">
                        <v-img src="/alliances/formosa.png" contain max-width="350"></v-img>
                    </v-col>
                    <v-col class="my-10" cols="12" xl="4" lg="6" md="6" sm="12" xs="12" align-self="center" align="center">
                        <v-img src="/alliances/formosa.png" contain max-width="350" class="mb-5 mt-5" v-if="windowSize < 1129"></v-img>

                        <p class="text-body-all text-left">
                            La empresa taiwanesa pertenece al conglomerado Formosa Plastics Group. Es un proveedor integrado verticalmente de resinas plásticas y petroquímicos. 
                            Operan más de 20 unidades de producción en cinco divisiones comerciales: olefinas, poliolefinas, vinilo, cloruro de polivinilo especial y cloro-álcali.
                        </p>
                    </v-col>

                    <v-col class="my-10" cols="12" xl="4" lg="6" md="6" sm="12" xs="12" align-self="center" align="center">
                        <v-img src="/alliances/flin.png" contain max-width="350" class="mt-5 mb-5" v-if="windowSize < 1129"></v-img>
                        <p class="text-body-all text-left">
                            Pertenece al conglomerado americano Koch Industries con sede en Wichita, Kansas. Sus principales materiales de producción son diferentes grados de polipropileno, 
                            y propileno de grado polimérico. Su principal planta de producción de polipropilenos se encuentra en Longview, Texas. 
                        </p>
                    </v-col>
                    <v-col class="my-10" cols="12" xl="5" lg="6" md="6" sm="12" xs="12" align-self="center" align="center" v-if="windowSize > 1129">
                        <v-img src="/alliances/flin.png" contain max-width="350"></v-img>
                    </v-col>

                    <v-col class="my-10" cols="12" xl="5" lg="6" md="6" sm="12" xs="12" align-self="center" align="center" v-if="windowSize > 1129">
                        <v-img src="/alliances/lg.png" contain max-width="350"></v-img>
                    </v-col>
                    <v-col class="my-10" cols="12" xl="4" lg="6" md="6" sm="12" xs="12" align-self="center" align="center">
                        <v-img src="/alliances/lg.png" contain max-width="350" class="mt-5 mb-5" v-if="windowSize < 1129"></v-img>
                        <p class="text-body-all text-left">
                            El líder indiscutible de la industria química en Corea del Sur. Su portafolio de productos incluye ABS, polarizadores y células de batería EV. LG CHEM cuenta 
                            con ocho fábricas en su natal Corea del Sur y una red de 29 unidades comerciales en 15 países. Su amplia gama de productos incluye desde destilados petroquímicos 
                            básicos hasta polímeros especiales. 
                        </p>
                    </v-col>

                    <v-col class="my-10" cols="12" xl="4" lg="6" md="6" sm="12" xs="12" align-self="center" align="center">
                        <v-img src="/alliances/kolon.png" contain max-width="350" class="mb-5 mt-5" v-if="windowSize < 1129"></v-img>

                        <p class="text-body-all text-left">
                            Fundada en 1957 como Corea Nylon, fueron tempranos innovadores de la industria del nylon en Corea del Sur. Se concentran principalmente en cuatro divisiones 
                            comerciales: materiales industriales, productos químicos, materiales electrónicos/películas, e indumentaria. 
                        </p>
                    </v-col>
                    <v-col class="my-10" cols="12" xl="5" lg="6" md="6" sm="12" xs="12" align-self="center" align="center" v-if="windowSize > 1129">
                        <v-img src="/alliances/kolon.png" contain max-width="350"></v-img>
                    </v-col>

                    <v-col class="my-10" cols="12" xl="5" lg="6" md="6" sm="12" xs="12" align-self="center" align="center" v-if="windowSize > 1129">
                        <v-img src="/alliances/chimei.png" contain max-width="350"></v-img>
                    </v-col>
                    <v-col class="my-10" cols="12" xl="4" lg="6" md="6" sm="12" xs="12" align-self="center" align="center">
                        <v-img src="/alliances/chimei.png" contain max-width="350" class="mt-5 mb-6" v-if="windowSize < 1229"></v-img>
                        <p class="text-body-all text-left">
                            Fundada en 1960 la empresa taiwanesa se ha convertido en la mayor productora de ABS del mundo. También producen vidrio acrílico, poliestireno, elastómeros 
                            termoplásticos y caucho sintético. Sus principales operaciones se encuentran en Tainan, Zhenjiang y Zhangzhou.
                        </p>
                    </v-col>
                </v-row>-->
                
                <v-row justify="center" class="my-10">
                    <div v-for="(item, index) in pageAlliances.companies" :key="index">
                        <v-col v-if=" (index + 1) % 2 === 0">
                            <v-row justify="center">
                                <v-col class="my-10" cols="12" xl="4" lg="6" md="6" sm="12" xs="12" align-self="center" align="center">
                                    <v-img :src="basePathApiUrl + item.image.data.attributes.url" contain max-width="350" class="mt-5 mb-5" v-if="windowSize < 1129"></v-img>
                                    <div class="text-body-all text-left" v-html="item.description"></div>
                                </v-col>
                                <v-col class="my-10" cols="12" xl="5" lg="6" md="6" sm="12" xs="12" align-self="center" align="center" v-if="windowSize > 1129">
                                    <v-img :src="basePathApiUrl + item.image.data.attributes.url" contain max-width="350"></v-img>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col v-else>
                            <v-row justify="center">
                                <v-col class="my-10" cols="12" xl="5" lg="6" md="6" sm="12" xs="12" align-self="center" align="center" v-if="windowSize > 1129">
                                    <v-img :src="basePathApiUrl + item.image.data.attributes.url" contain max-width="350"></v-img>
                                </v-col>
                                <v-col class="my-10" cols="12" xl="4" lg="6" md="6" sm="12" xs="12" align-self="center" align="center">
                                    <v-img :src="basePathApiUrl + item.image.data.attributes.url" contain max-width="350" class="mt-5 mb-5" v-if="windowSize < 1129"></v-img>
                                    <div class="text-body-all text-left" v-html="item.description"></div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </div>
                </v-row>
            </v-container>
        </section>

        <section class="mt-16 bg-alliance-end" >
            <v-container>
                <v-row justify="center" class="mb-10">
                    <v-col cols="12" align="center" class="mt-16">
                        <!--<h1 class="white--text font-archivo font-size-40 my-10 font-weight-bold">¿Necesitas más información?</h1>-->
                        <h1 class="white--text font-archivo font-size-40 my-10 font-weight-bold">{{pageAlliances.information.title}}</h1>
                        <!--<p class="white--text text-h5">Revisa nuestro amplio catálogo de productos</p>-->
                        <p class="white--text text-h5" v-html="pageAlliances.information.description"></p>
                    </v-col>                    
                    <v-col cols="6" lg="4" md="4" sm="6" xs="6" class="mb-16" align="center">
                        <!--<v-btn class="black--text mb-5 py-6 body-1 text-none rounded-lg mb-10" color="#19D3C5">Ver productos</v-btn>-->
                        <v-btn class="black--text mb-5 py-6 body-1 text-none rounded-lg mb-10" color="#19D3C5">{{pageAlliances.information.txtBtn}}</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!--<Productos />-->
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize','pageAlliances','basePathApiUrl'])
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300&display=swap');

.bg-end{
    background-color: #655DC6;
}

.font-title{
    font-family: 'Archivo' !important;
}
.bg-alliance-end{
    background-color: #655DC6;
    height: 480px;
}
.bg-polnac-end{
    background-color: #3D7CC9;
    height: 480px;
}
</style>