<template>
    <div v-if="pageMarkets === null">
        <v-sheet class="pa-3">
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
    </div>
    <div v-else>
        <section>
            <v-container>
                <v-row justify="center" class="my-16">
                    <v-col cols="12" xl="9">
                        <!--<v-row>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                                <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                                    <v-img src="/market/consumo.png" contain max-height="240"></v-img>
                                    <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                        <img src="../../static/market/lconsumo.png" height="27" />
                                        <p class="font-archivo font-size-18 font-weight-bold ml-2">Consumo</p>
                                    </div>
                                    <p class="body-1 text-truncate">
                                        Un mercado dinámico el cual ha enriquecido inmensurablemente el día a día de todos los seres humanos. 
                                        Abarca un sinfín de productos para uso cotidiano, por ejemplo: artículos para el hogar, oficina y escuela, mobiliario, decorativo, recreativo, comercial, entre otros.  
                                        POLNAC cuenta con una incomparable gama de productos. Cualquier que sea la aplicación y/o requerimientos POLNAC te respalda. 
                                    </p>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                                <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                                    <v-img src="/market/empaque.png" contain max-height="240"></v-img>
                                    <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                        <img src="../../static/market/lempaque.png" height="27" />
                                        <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Empaque Flexible</p>
                                    </div>
                                    <p class="body-1 text-truncate">Más de tres décadas de experiencia en uno de los mercados de mayor consumo a nivel mundial. 
                                    POLNAC dispone de un excepcional catalogo de productos para el mercado de empaque flexible: poliolefinas, poliamidas, concertados de color, concentrados de aditivos, concentrado de calcio y mucho más. 
                                    En POLNAC encontrarás los materiales y la asesoría necesaria para fabricar productos sobresalientes. 
                                    </p>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                                <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                                    <v-img src="/market/empaquerigido.png" contain max-height="240"></v-img>
                                    <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                        <img src="../../static/market/lrigido.png" height="27" />
                                        <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Empaque Rígido</p>
                                    </div>
                                    <p class="body-1 text-truncate">
                                        Garantizando resistencia y protección. 
                                        POLNAC te ofrece un vasto catálogo de productos para el mercado de empaque rígido: desde poliolefinas y estirénicos hasta compuestos y concentrados de color hechos a tu medida. 
                                        POLNAC: productos sobresalientes y los mejores expertos a tu disposición. 

                                    </p>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12">
                                <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                                    <v-img src="/market/agricola.png" contain max-height="240"></v-img>
                                    <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                        <img src="../../static/market/lagricola.png" height="27" />
                                        <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Agrícola</p>
                                    </div>
                                    <p class="body-1 text-truncate">
                                        Logrando más con menos. 
                                        Incesante innovación para una de las industrias más indispensables. Dentro de la familia de productos POLNAC encontrarás todo tipo de materiales especializados para el mercado agrícola: resinas y compuestos para acolchado, invernadero, maceteros, túneles, y diversos accesorios.
                                        Con la asesoría y productos POLNAC podrás cultivar vida. 
                                    </p>
                                </nuxt-link>
                            </v-col>

                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                                <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">    
                                    <v-img src="/market/cuidadopersonal.png" contain max-height="240"></v-img>
                                    <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                        <img src="../../static/market/lcuidado.png" height="27" />
                                        <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Cuidado Personal</p>
                                    </div>
                                    <p class="body-1 text-truncate">
                                        Cuidando de ti. 
                                        Un mercado dinámico y demandante que engloba todo tipo de aplicaciones: cosméticos, higiene personal, perfumería y artículos de belleza, entre otros. 
                                        POLNAC cuenta con un portafolio de productos diseñados para abarcar todas las necesidades estéticas y de desempeño de este mercado. 
                                        De igual manera, POLNAC ofrece igualaciones de color y desarrollo de compuestos hechos a tu medida. Materiales especiales para tu vida cotidiana. 

                                    </p>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                                <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                                    <v-img src="/market/electronico.png" contain max-height="240"></v-img>
                                    <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                        <img src="../../static/market/lelectrico.png" height="27" />
                                        <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Eléctrico-Electrónico</p>
                                    </div>
                                    <p class="body-1 text-truncate">
                                        Realizando el futuro.
                                        POLNAC siempre a la vanguardia, siempre fomentando la innovación. El extenso abanico de resinas y compuestos POLNAC cubre todas tus necesidades: cableado, telecomunicaciones, conductores, interruptores, circuitos, y mucho más. 
                                        El equipo de asesores POLNAC siempre a tu disposición para encontrar las mejores soluciones. 
                                    </p>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                                <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                                    <v-img src="/market/electrodomesticos.png" contain max-height="240"></v-img>
                                    <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                        <img src="../../static/market/lelectrodomesticos.png" height="27" />
                                        <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Electrodomésticos</p>
                                    </div>
                                    <p class="body-1 text-truncate">
                                        Optimizando tu vida. 
                                        POLNAC tiene a tu disposición un extenso abanico de productos listos para solventar cualquier reto; desde compuestos personalizados para línea blanca y refrigeración hasta materiales para enseres menores. 
                                        Pasión POLNAC es contribuir al éxito de tu empresa. Sin importar la índole del desafió: técnico, estético o de desempeño, aquí encontrarás todas las soluciones. 
                                    </p>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                                <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                                    <v-img src="/market/industria.png" contain max-height="240"></v-img>
                                    <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                        <img src="../../static/market/lindustrial.png" height="27" />
                                        <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Industrial</p>
                                    </div>
                                    <p class="body-1 text-truncate">
                                        Impulsando la innovación.  
                                        Resinas y compuestos para las aplicaciones más demandantes. POLNAC pone a tu alcance materiales con estupendas propiedades mecánicas, químicas, eléctricas y térmicas. 
                                        POLNAC se especializa en el diseño, fabricación y comercialización de resinas y compuestos, siempre con el enfoque en las necesidades únicas de cada cliente.
                                    </p>
                                </nuxt-link>
                            </v-col>

                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                                <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                                    <v-img src="/market/automotriz.png" contain max-height="240"></v-img>
                                    <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                        <img src="../../static/market/lautomotriz.png" height="27" />
                                        <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Automotriz y Transportación</p>
                                    </div>
                                    <p class="body-1 text-truncate">
                                        Moviendo al mundo. 
                                        La insuperable calidad de los materiales POLNAC permite abastecer las diversas aplicaciones dentro de uno de los mercados más demandantes e innovadores:  interiores, exteriores, iluminación, chasis, y powertrain (tren motriz). 
                                        Es nuestra misión proveer a nuestros socios de negocio con el material adecuado para cada uso. En POLNAC encontrarás la pericia y asesoría necesaria para impulsar al mundo
                                    </p>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                                <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                                    <v-img src="/market/construccion.png" contain max-height="240"></v-img>
                                    <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                        <img src="../../static/market/lconstruccion.png" height="27" />
                                        <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Construcción</p>
                                    </div>
                                    <p class="body-1 text-truncate">
                                        Los polímeros son los cimientos del mundo moderno. 
                                        Dentro de este mercado se encuentran aplicaciones esenciales como tuberías, tinacos y cisternas, perfiles, mangueras, láminas, casetones y plafones, entre otras. 
                                        En POLNAC encontraras un abundante suministro de productos para todo tipo de aplicaciones, incluyendo resinas con certificación FDA. 
                                        Productos POLNAC te ayudarán a mejorar la vida útil de tus productos y su desempeño, y de igual manera, a minimizar costos de instalación y mantenimiento. Como tu fiel aliado comercial POLNAC se complace en ayudarte a construir un nuevo mundo. 
                                    </p>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                                <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                                    <v-img src="/market/calzado.png" contain max-height="240"></v-img>
                                    <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                        <img src="../../static/market/lcalzado.png" height="27" />
                                        <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Calzado y Textil</p>
                                    </div>
                                    <p class="body-1 text-truncate">
                                        Dejando huella 
                                        Resinas y compuestos que incitan cada paso. En la cartera de productos POLNAC descubrirás materiales para: suelas, tacones, plataformas, casquillos/punteras de seguridad, artículos de tela no tejida, y muchas otras aplicaciones más.  
                                        Garantía POLNAC: asesoría en cada paso y productos sobresalientes. 

                                    </p>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-if="windowSize > 1129">
                                <nuxt-link to="/market/type/1" class="text-none decoration-none black--text">
                                    <v-img src="/market/medico.png" contain max-height="240"></v-img>
                                    <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                        <img src="../../static/market/lmedico.png" height="27" />
                                        <p class=" ml-2 font-archivo font-size-18 font-weight-bold">Médico y Farmacéutico</p>
                                    </div>
                                    <p class="body-1 text-truncate">
                                        Protegiendo lo más importante. 
                                        POLNAC cuenta con una amplia cartera de productos con biocompatibilidad con el cuerpo humano diseñados para diversas aplicaciones: jeringas, bolsas de suero, tubing para respiradores, protección personal, dispositivos médicos, entre otros. 
                                        Misión POLNAC: Ser la única empresa 360° dentro de la industria plástica. Soluciones para cualquier mercado, resultados para resguardar tu salud.
                                    </p>
                                </nuxt-link>
                            </v-col>
                        </v-row>-->

                        <v-row v-if="this.markets !== null ">
                            <v-col cols="12" lg="3" md="3" sm="12" xs="12" v-for="(item, index) in this.markets" :key="index">
                                <nuxt-link :to="`/market/type/${item.id}`" class="text-none decoration-none black--text">
                                    <!--<v-img src="/market/consumo.png" contain max-height="240"></v-img>-->
                                    <v-img :src="basePathApiUrl + item.attributes.imgMiniarure.data.attributes.url" contain max-height="240"></v-img>
                                    <div class="d-flex justify-start mt-2" style="max-width: 25vh;">
                                        <img src="../../static/market/lconsumo.png" height="27" />
                                        <!--<p class="font-archivo font-size-18 font-weight-bold ml-2">Consumo</p>-->
                                        <p class="font-archivo font-size-18 font-weight-bold ml-2">{{item.attributes.nameMarket}}</p>
                                    </div>
                                    <!--<p class="body-1 text-truncate">
                                        Un mercado dinámico el cual ha enriquecido inmensurablemente el día a día de todos los seres humanos. 
                                        Abarca un sinfín de productos para uso cotidiano, por ejemplo: artículos para el hogar, oficina y escuela, mobiliario, decorativo, recreativo, comercial, entre otros.  
                                        POLNAC cuenta con una incomparable gama de productos. Cualquier que sea la aplicación y/o requerimientos POLNAC te respalda. 
                                    </p>-->
                                    <p class="body-1 text-truncate">{{item.attributes.descriptionMin}}</p>
                                </nuxt-link>
                            </v-col>
                        </v-row>
                    </v-col>
                    
                </v-row>
                <v-row justify="center" v-if="windowSize < 1129">
                    <v-col cols="10">
                        <v-btn block rounded outlined color="#19D3C5" class="roinded-lg text-none">
                            <span class="black--text">Mostrar más artículos</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="bg-servicio mt-16">
            <v-container>
                <v-row justify="center" class="mb-10">
                    <v-col cols="12" align="center" class="mt-16">
                        <h1 class="white--text font-archivo font-size-40 my-10 font-weight-bold">¿Necesitas más información?</h1>
                        <!--<h1 class="white--text font-archivo font-size-40 my-10 font-weight-bold">{{ pageMarkets.information.title }}</h1>-->
                        <p class="white--text text-h5">Revisa nuestro amplio catálogo de productos</p>
                        <!--<p class="white--text text-h5">{{ pageMarkets.information.description }}</p>-->
                    </v-col>                    
                    <v-col cols="6" lg="4" md="4" sm="6" xs="6" class="mb-16" align="center">
                        <nuxt-link to="/search-products" class="decoration-none">
                            <v-btn class="black--text mb-5 py-6 body-1 text-none rounded-lg mb-10" color="#19D3C5">Ver productos</v-btn>
                            <!--<v-btn class="black--text mb-5 py-6 body-1 text-none rounded-lg mb-10" color="#19D3C5">{{ pageMarkets.information.txtBtn }}</v-btn>-->
                        </nuxt-link>
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
            markets: []
        }
    },
    mounted() {
        this.getMercados()
    },
    computed: {
        ...mapState(['windowSize','windowHeigth','pageMarkets', 'basePathApiUrl'])
    },
    methods: {
        async getMercados(){
            const response = await this.$store.dispatch('getAllMarkets')
            this.markets = response.data.slice(0,4)
            //console.log(this.markets)
        }
    }
}
</script>

<style scoped>
.decoration-none{
    text-decoration: none !important;
}

.bg-servicio{
    background-color: #3D7CC9;
    height: 480px;
}

/*.text-truncate {
    line-height: 1.5rem;
    height: 3rem;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    content: '...' !important;
}*/


</style>