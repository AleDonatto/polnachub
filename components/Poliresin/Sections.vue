<template>
    <div v-if="pagepoliresin === null">
        <v-sheet class="pa-3">
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
    </div>
    <div v-else>
        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="11" lg="5" md="5" sm="12" xs="12" class="my-10" align-self="center">
                        <!--<p class="text-body-all">
                            {{ $t('poliresin.modern-process') }}
                            <br><br>
                            {{ $t('poliresin.company') }}
                        </p>-->
                        <div v-html="pagepoliresin.subhead.description"></div>
                    </v-col>
                    <v-col class="my-10" cols="5" align="center" v-if="windowSize > 1120">
                        <!--<v-img src="/poliresin/vector-poliresin.png" alt="vector poliresin"></v-img>-->
                        <div>
                            <div v-for="(item, index) in pagepoliresin.subhead.images.data" :key="index">
                                <v-img :src="basePathApiUrl + item.attributes.url" alt="vector poliresin" contain></v-img>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" align="center">
                        <!--<h1 class="font-title-section font-weight-bold text-center my-10">{{ $t('poliresin.sec-infrastructure') }}</h1>-->
                        <h1 class="font-title-section font-weight-bold text-center my-10">{{ pagepoliresin.txtTitlenfrastructure }}</h1>
                    </v-col>
                </v-row>
                <!--<v-row justify="center">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/poliresin/contenedor-solido.png" contain max-height="90"></v-img>
                        <p class="text-center mt-2">Contenedores sólidos</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/poliresin/contenedor-cera.png" contain max-height="90"></v-img>
                        <p class="text-center mt-2">Contenedores de ceras calientes</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/poliresin/flota-transporte.png" contain max-height="90"></v-img>
                        <p class="text-center mt-2">Flota de transporte</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/poliresin/lavadora.png" contain max-height="90"></v-img>
                        <p class="text-center mt-2">Lavadora</p>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/poliresin/secadora.png" contain max-height="90"></v-img>
                        <p class="text-center mt-2">Secadora</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/poliresin/computadora.png" contain max-height="90"></v-img>
                        <p class="text-center mt-2">Compactadora</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/poliresin/clasificadora.png" contain max-height="90"></v-img>
                        <p class="text-center mt-2">Clasificadora</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/poliresin/seleccionadora.png" contain max-height="90"></v-img>
                        <p class="text-center mt-2">Seleccionadora por color</p>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/poliresin/extrusora.png" contain max-height="90"></v-img>
                        <p class="text-center mt-2">Extrusora</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/poliresin/trituradora.png" contain max-height="90"></v-img>
                        <p class="text-center mt-2">Trituradora</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/poliresin/pulverizadora.png" contain max-height="90"></v-img>
                        <p class="text-center mt-2">Pulverizadora</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-img src="/poliresin/laboratoriocalidad.png" contain max-height="90"></v-img>
                        <p class="text-center mt-2">Laboratorio de Calidad certificado bajo la ISO/IEC17025:2015</p>
                    </v-col>
                </v-row>-->

                <v-row justify="center">
                    <v-col align-self="center" cols="12" lg="3" md="3" sm="12" xs="12" align="center" v-for="(item, index) in pagepoliresin.infraestructura" :key="index">
                        <img :src="basePathApiUrl + item.image.data.attributes.url" alt="">
                        <div v-html="item.description"></div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12">
                        <v-img src="/poliresin/separator-left.png" contain></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12">
                        <!--<h1 class="font-title-section font-weight-bold text-center my-10 text-none">{{ $t('poliresin.sec-process')}}</h1>-->
                        <h1 class="font-title-section font-weight-bold text-center my-10 text-none">{{pagepoliresin.process.title}}</h1>
                    </v-col>
                </v-row>
                <v-row justify="center" v-if="windowSize > 1129">
                    <v-col cols="12">
                        <!--<v-img src="/poliresin/proceso-general.png" contain></v-img>-->
                        <v-img :src="basePathApiUrl + pagepoliresin.process.image.data.attributes.url" contain ></v-img>
                    </v-col>
                </v-row>
                <v-row v-else class="overflow-x-auto">
                    <div class="mx-5">
                        <!--<v-img src="/poliresin/proceso-general.png" max-height="250" max-width="1200"></v-img>-->
                        <v-img :src="basePathApiUrl + pagepoliresin.process.image.data.attributes.url" max-height="250" max-width="1200"></v-img>
                    </div>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12">
                        <v-img src="/poliresin/separator-right.png" contain></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12">
                        <h1 class="font-title-section font-weight-bold text-center my-10">Compra{{ pagepoliresin.Titlebuy }}</h1>
                        <!--<h1 class="font-title-section font-weight-bold text-center my-10">Compra</h1>-->
                    </v-col>
                </v-row>
                <!--<v-row justify="center">
                    <v-col lg="4" md="4" sm="12" xs="12" align="center">
                        <v-row justify="center">
                            <v-col cols="12">
                                <v-img src="/poliresin/poliolefinas.png" contain></v-img>
                            </v-col>
                            <v-col lg="12" md="12" sm="6" xs="6">
                                <ul class="lists text-left">
                                    <li class="my-3">Polietileno Lineal de Baja Densidad (LLDPE)</li>
                                    <li class="my-3">Polietileno de Baja Densidad (PEBD)</li>
                                    <li class="my-3">Polietileno de Alta Densidad (PEAD)</li>
                                    <li class="my-3">Polietileno de Alto Peso Molecular (HMWPE)</li>
                                </ul>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col lg="4" md="4" sm="12" xs="12" align="center">
                        <v-row justify="center">
                            <v-col cols="12">
                                <v-img src="/poliresin/plasticos.png" contain alt="plasticos de ingenieria"></v-img>
                            </v-col>
                            <v-col lg="12" md="12" sm="6" xs="6">
                                <ul class="lists text-left">
                                    <li class="my-3">Acetato de Vinilo (EVA)</li>
                                    <li class="my-3">Acetal (POM)</li>
                                    <li class="my-3">Policarbonato (PC)</li>
                                    <li class="my-3">Acrílico (PMMA)</li>
                                    <li class="my-3">Nylon 6 (PA 6)</li>
                                    <li class="my-3">Nylon 6.6 (PA 6.6)</li>
                                </ul>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col lg="4" md="4" sm="12" xs="12" align="center">
                        <v-row justify="center">
                            <v-col cols="12">
                                <v-img src="/poliresin/estirenos.png" contain alt="estirenos"></v-img>
                            </v-col>
                            <v-col lg="12" md="12" sm="6" xs="6">
                                <ul class="lists text-left">
                                    <li class="my-3">Poliestireno Cristal (6 PPS)</li>
                                    <li class="my-3">Poliestireno Medio Impacto (MIPS)</li>
                                    <li class="my-3">Poliestireno Alto Impacto (HIPS)</li>
                                    <li class="my-3">Acrilonitrilo Butadieno Estireno (ABS)</li>
                                    <li class="my-3">Acrilato de Acrilonitrilo Estireno (ASA)</li>
                                    <li class="my-3">Estireno Acrilonitrilo (SAN)</li>
                                    <li class="my-3">Copolímero Estireno Butadieno (SBC)</li>
                                    <li class="my-3">Poliestireno Expansible (EPS)</li>
                                </ul>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>-->

                <v-row>
                    <v-col lg="4" md="4" sm="12" xs="12" align="center" v-for="(item, index) in pagepoliresin.buy" :key="index">
                        <v-row justify="center">
                            <v-col cols="12">
                                <v-img :src="basePathApiUrl+item.image.data.attributes.url" contain :alt="item.image.data.attributes.name"></v-img>
                            </v-col>
                            <v-col lg="12" md="12" sm="6" xs="6">
                                <div class="text-left" v-html="$md.render(item.description)"></div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12">
                        <v-img src="/poliresin/separator-left.png" contain></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12">
                        <h1 class="font-title-section font-weight-bold text-center my-10">{{pagepoliresin.Titlesale}}</h1>
                        <!--<h1 class="font-title-section font-weight-bold text-center my-10">Venta</h1>-->
                    </v-col>
                </v-row>
                <!--<v-row justify="center">
                    <v-col cols="6" lg="3" md="3" sm="6" xs="6" align="center">
                        <img src="../../static/poliresin/estirenicos.png" alt="estirenicos" v-if="windowSize > 1129">
                        <v-img src="/poliresin/estirenicos-mb.png" contain max-width="250" v-if="windowSize < 1129"></v-img>
                        <p class="mt-2 text-left font-weight-bold" v-if="windowSize < 1129">Estirénicos</p>
                    </v-col>
                    <v-col cols="6" lg="3" md="3" sm="6" xs="6" align="center">
                        <img src="../../static/poliresin/compuestos.png" alt="compuestos" v-if="windowSize > 1129">
                        <v-img src="/poliresin/compuestos-mb.png" contain max-width="250" v-if="windowSize < 1129"></v-img>
                        <p class="mt-2 text-left font-weight-bold" v-if="windowSize < 1129">Compuestos</p>
                    </v-col>
                    <v-col cols="6" lg="3" md="3" sm="6" xs="6" align="center">
                        <img src="../../static/poliresin/elastomeros.png" alt="elastomeros termoplasticos" v-if="windowSize > 1129">
                        <v-img src="/poliresin/termoplasticos-mb.png" contain max-width="250" v-if="windowSize < 1129"></v-img>
                        <p class="mt-2 text-left font-weight-bold" v-if="windowSize < 1129">Elastómeros Termoplásticos</p>
                    </v-col>
                    <v-col cols="6" lg="3" md="3" sm="6" xs="6" align="center">
                        <img src="../../static/poliresin/polipropilenos.png" alt="polipropilenos" v-if="windowSize > 1129">
                        <v-img src="/poliresin/polipropilenos-mb.png" contain max-width="250" v-if="windowSize < 1129"></v-img>
                        <p class="mt-2 text-left font-weight-bold" v-if="windowSize < 1129">Polipropilenos</p>
                    </v-col>
                </v-row>-->
                <v-row justify="center">
                    <v-col lg="3" md="3" sm="6" xs="6" v-for="(item, index) in pagepoliresin.sales" :key="index">
                        <v-img :src="basePathApiUrl + item.image.data.attributes.url" contain></v-img>
                    </v-col>
                </v-row>
                <v-row justify="center" v-if="windowSize < 1129">
                    <v-col cols="12" align="center">
                        <v-btn rounded color="#304591" block class="body-1 px-16 py-5 white--text text-none">Ver todos</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" lg="12" md="12" sm="12" xs="12">
                        <v-img src="/poliresin/separator-right.png" contain></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12">
                        <h1 class="font-title-section font-weight-bold text-center my-10">{{pagepoliresin.Titleservices}}</h1>
                        <!--<h1 class="font-title-section font-weight-bold text-center my-10">Servicios</h1>-->
                    </v-col>
                </v-row>
                <!--<v-row class="mb-10" justify="center">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                        <p class="text-center text-lg-h5 text-sm-subtitle-1">Maquila de lavado</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                        <p class="text-center text-lg-h5 text-sm-subtitle-1">Maquila de triturado</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                        <p class="text-center text-lg-h5 text-sm-subtitle-1">Maquila de peletizado</p>
                    </v-col>
                </v-row>-->
                <v-row justify="center" class="mb-10">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-for="(item, index) in pagepoliresin.services" :key="index">
                        <div class="text-center text-lg-h6 text-sm-subtitle-1" v-html="$md.render(item.description)"></div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center " class="mb-16">
                    <v-col cols="12">
                        <v-img src="/poliresin/separator-left.png" contain></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <FormContact />
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
        }
    },
    computed:{
        ...mapState(['windowHeight','windowSize','pagepoliresin','basePathApiUrl'])

    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300&display=swap');

.lists{
    list-style-type: none;
}
.font-title-section{
    font-family: 'Archivo' !important;
    font-size: 30px;
    font-weight: 700;
    line-height: 26px;
}
</style>