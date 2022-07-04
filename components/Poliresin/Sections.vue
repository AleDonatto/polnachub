<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="11" lg="5" md="5" sm="12" xs="12" class="my-10" align-self="center">
                        <p class="">
                            {{ $t('poliresin.modern-process') }}
                            <br><br>
                            {{ $t('poliresin.company') }}
                        </p>
                    </v-col>
                    <v-col class="my-10" cols="5" align="center" v-if="windowSize > 1120">
                        <v-img src="/poliresin/vector-poliresin.png" alt="vector poliresin"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" align="center">
                        <h1 class="text-center my-10">{{ $t('poliresin.sec-infrastructure') }}</h1>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/poliresin/contenedor-solido.png" alt="contenedor solido">
                        <p class="text-center mt-2">Contenedores sólidos</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/poliresin/contenedor-cera.png" alt="contenedores de sera">
                        <p class="text-center mt-2">Contenedores de ceras calientes</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/poliresin/flota-transporte.png" alt="flota de transporte">
                        <p class="text-center mt-2">Flota de transporte</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/poliresin/lavadora.png" alt="lavadora">
                        <p class="text-center mt-2">Lavadora</p>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/poliresin/secadora.png" alt="secadora">
                        <p class="text-center mt-2">Secadora</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/poliresin/computadora.png" alt="computadora">
                        <p class="text-center mt-2">Compactadora</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/poliresin/clasificadora.png" alt="clasificadora">
                        <p class="text-center mt-2">Clasificadora</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/poliresin/seleccionadora.png" alt="seleccionadora por color">
                        <p class="text-center mt-2">Seleccionadora por color</p>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/poliresin/extrusora.png" alt="extrusora">
                        <p class="text-center mt-2">Extrusora</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/poliresin/trituradora.png" alt="Trituradora">
                        <p class="text-center mt-2">Trituradora</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/poliresin/pulverizadora.png" alt="Pulverizadora">
                        <p class="text-center mt-2">Pulverizadora</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <img src="../../static/poliresin/laboratoriocalidad.png" alt="laboratorio de calidad">
                        <p class="text-center mt-2">Laboratorio de Calidad certificado bajo la ISO/IEC17025:2015</p>
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
                        <h1 class="text-center my-10">{{ $t('poliresin.sec-process')}}</h1>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12">
                        <v-img src="/poliresin/proceso-general.png" contain></v-img>
                        <!--<img class="mb-10" src="../../static/poliresin/proceso-general.png" alt="proceso general">-->
                    </v-col>
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
                        <h1 class="text-center my-10">Compra</h1>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col lg="4" md="4" sm="12" xs="12" align="center">
                        <v-row justify="center">
                            <v-col cols="12">
                                <v-img src="/poliresin/poliolefinas.png" contain></v-img>
                            </v-col>
                            <v-col lg="12" md="12" sm="6" xs="6">
                                <ul class="lists text-left">
                                    <li class="my-1">Polietileno Lineal de Baja Densidad (LLDPE)</li>
                                    <li class="my-1">Polietileno de Baja Densidad (PEBD)</li>
                                    <li class="my-1">Polietileno de Alta Densidad (PEAD)</li>
                                    <li class="my-1">Polietileno de Alto Peso Molecular (HMWPE)</li>
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
                                    <li class="my-1">Acetato de Vinilo (EVA)</li>
                                    <li class="my-1">Acetal (POM)</li>
                                    <li class="my-1">Policarbonato (PC)</li>
                                    <li class="my-1">Acrílico (PMMA)</li>
                                    <li class="my-1">Nylon 6 (PA 6)</li>
                                    <li class="my-1">Nylon 6.6 (PA 6.6)</li>
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
                                    <li class="my-1">Poliestireno Cristal (6 PPS)</li>
                                    <li class="my-1">Poliestireno Medio Impacto (MIPS)</li>
                                    <li class="my-1">Poliestireno Alto Impacto (HIPS)</li>
                                    <li class="my-1">Acrilonitrilo Butadieno Estireno (ABS)</li>
                                    <li class="my-1">Acrilato de Acrilonitrilo Estireno (ASA)</li>
                                    <li class="my-1">Estireno Acrilonitrilo (SAN)</li>
                                    <li class="my-1">Copolímero Estireno Butadieno (SBC)</li>
                                    <li class="my-1">Poliestireno Expansible (EPS)</li>
                                </ul>
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
                        <h1 class="text-center my-10">Venta</h1>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col lg="3" md="3" sm="6" xs="6" align="center">
                        <img src="../../static/poliresin/estirenicos.png" alt="estirenicos">
                    </v-col>
                    <v-col lg="3" md="3" sm="6" xs="6" align="center">
                        <img src="../../static/poliresin/compuestos.png" alt="compuestos">
                    </v-col>
                    <v-col lg="3" md="3" sm="6" xs="6" align="center">
                        <img src="../../static/poliresin/elastomeros.png" alt="elastomeros termoplasticos">
                    </v-col>
                    <v-col lg="3" md="3" sm="6" xs="6" align="center">
                        <img src="../../static/poliresin/polipropilenos.png" alt="polipropilenos">
                    </v-col>
                </v-row>
                <v-row justify="center" v-if="windowSize < 1129">
                    <v-col cols="12" align="center">
                        <v-btn rounded color="#304591" block class="px-16 py-5 white--text">Ver todos</v-btn>
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
                        <h1 class="text-center my-10">Servicios</h1>
                    </v-col>
                </v-row>
                <v-row class="mb-10" justify="center">
                    <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                        <p class="text-center">Maquila de lavado</p>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                        <p class="text-center">Maquila de triturado</p>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                        <p class="text-center">Maquila de peletizado</p>
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
        ...mapState(['windowHeight','windowSize'])

    }
}
</script>

<style scoped>
.lists{
    list-style-type: none;
}
</style>