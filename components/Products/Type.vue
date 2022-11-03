<template>
    <div v-if="this.producto !== null">
        <section>
            <v-container>
                <v-row class="mt-10">
                    <v-col cols="12" align="center">
                        <!--<h1 class="font-archivo font-size-34 font-weight-bold">Polietileno</h1>-->
                        <h1 class="font-archivo font-size-34 font-weight-bold">{{this.producto.data.attributes.name}}</h1>
                    </v-col>
                </v-row>
                <v-row class="my-10" justify="center">
                    <v-col cols="12" xl="9">
                        <v-row>
                            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                <!--<v-carousel cycle :height="windowSize > 1129 ? '300' : '210'" hide-delimiter-background show-arrows-on-hover>
                                    <v-carousel-item v-for="(slide, i) in 3" :key="i">
                                        <v-sheet height="100%">
                                            <v-row class="fill-height" align="center" justify="center">
                                                <div>
                                                    <v-img src="/products/testproducts.png" contain width="520"></v-img>
                                                </div>
                                            </v-row>
                                        </v-sheet>
                                    </v-carousel-item>
                                </v-carousel>-->
                                <v-carousel cycle :height="windowSize > 1129 ? '300' : '210'" hide-delimiter-background show-arrows-on-hover>
                                    <v-carousel-item v-for="(slide, i) in this.producto.data.attributes.imagesHead.data" :key="i">
                                        <v-sheet height="100%">
                                            <v-row class="fill-height" align="center" justify="center">
                                                <div>
                                                    <!--<v-img src="/products/testproducts.png" contain width="520"></v-img>-->
                                                    <v-img :src="basePathApiUrl + slide.attributes.url" contain width="520"></v-img>
                                                </div>
                                            </v-row>
                                        </v-sheet>
                                    </v-carousel-item>
                                </v-carousel>
                            </v-col>
                            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                <!--<p class="text-body-all">
                                    Gracias a su amplia gama de propiedades, su bajo costo, y su facilidad de procesamiento se ha 
                                    convertido en uno de los plásticos más utilizados a nivel mundial. Miembro de la familia de las 
                                    poliolefinas y derivado de la polimerización del etileno.
                                    <br><br>
                                    POLNAC comercializa diferentes variedades de Polietileno para distintas aplicaciones: 
                                </p>-->
                                <p class="text-body-all" v-html="this.producto.data.attributes.description"></p>
                            </v-col>
                        </v-row>
                    </v-col>
                    
                </v-row>

                <v-row class="my-10" justify="center">
                    <v-col cols="12" xl="9">
                        <!--<v-carousel class="carousel-black" dark cycle :height="windowSize > 1129 ? '280' : '210'" hide-delimiter-background show-arrows-on-hover>
                            <v-carousel-item v-for="(slide, i) in 3" :key="i">
                                <v-sheet height="100%">
                                    --<v-row class="fill-height" align="center" justify="center">
                                        <div>
                                            <v-img src="/products/testproducts.png" contain width="520" v-if="windowSize>1129"></v-img>
                                            <v-img src="/transpolimer/carousel-mb.png" contain width="320" v-else></v-img>
                                        </div>
                                    </v-row>--
                                    <v-row class="fill-height" align="center" justify="center">
                                        <v-col cols="4">
                                            <v-img src="/group/baja.png" contain max-height="270"></v-img>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-img src="/group/cono.png" contain max-height="270"></v-img>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-img src="/group/sillon.png" contain max-height="270"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>-->

                        <v-carousel class="carousel-black" dark cycle :height="windowSize > 1129 ? '280' : '280'" hide-delimiter-background show-arrows-on-hover>
                            <v-carousel-item v-for="(slide, i) in this.producto.data.attributes.imagesBody.data" :key="i">
                                <v-sheet height="100%">
                                    <v-row class="fill-height" align="center" justify="center">
                                        <v-col cols="12">
                                            <!--<v-img src="/group/baja.png" contain max-height="270"></v-img>-->
                                            <v-img :src="basePathApiUrl + slide.attributes.url" contain max-height="270"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row class="mb-5" justify="center">
                    <v-col cols="12" xl="9">
                        <v-expansion-panels v-model="tabs" multiple>

                            <v-expansion-panel class="my-2 rounded-xl" v-for="(tipos , index) in this.producto.data.attributes.typeProduct" :key="index">
                                <v-expansion-panel-header class="font-weight-bold panel-color" >
                                    <!--Polietileno de Baja Densidad (LDPE):-->
                                    {{tipos.name }}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5 shadow-none">
                                    <v-row>
                                        <v-col cols="12" :lg="tipos.transformationMethods === '' && tipos.markets === '' ? 12 : 6" :md="tipos.transformationMethods === '' && tipos.markets === '' ? 12 : 6" sm="12" xs="12">
                                            <!--<p class="text-body-all">
                                                Es un material de fácil procesamiento y con una gran presencia en la industria 
                                                de empaque y envase. Algunas de sus características más importantes son: 
                                                su gran flexibilidad, brillo, buena transparencia y opacidad en comparación 
                                                de otros materiales semi-cristalinos, de igual manera es un óptimo aislante eléctrico.
                                            </p>-->
                                            <p class="text-body-all" v-html="tipos.description"></p>
                                        </v-col>
                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" v-if="tipos.transformationMethods !== ''">
                                            <v-row>
                                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                                    <p class="font-weight-bold font-size-20">{{lang==='es' ? 'Métodos de transformación' : 'Transformation Methods'}}:</p>
                                                    <!--<div class="d-flex inline-block">
                                                        <img src="../../static/group/check.png" height="17" alt="">
                                                        <p class=" ml-3 text-body-all">Extrusión</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/group/check.png" height="17" alt="">
                                                        <p class=" ml-3 text-body-all">Soplado</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/group/check.png" height="17" alt="">
                                                        <p class=" ml-3 text-body-all">Inyección</p>
                                                    </div>-->
                                                    <div class="text-body-all" v-html="tipos.transformationMethods"></div>
                                                </v-col>
                                                <v-col cols="12" lg="6" md="6" sm="12" xs="12" v-if="tipos.markets !== ''">
                                                    <p class="font-weight-bold font-size-20">{{lang === 'es' ? 'Mercados' : 'Markets'}}:</p>
                                                    <!--<div class="d-flex inline-block">
                                                        <img src="../../static/market/lempaque.png" height="20" alt="">
                                                        <img src="../../static/market/lrigido.png" height="20" alt="">
                                                        <p class=" ml-3 text-body-all">Envase y Empaque</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/market/lelectrico.png" height="20" alt="">
                                                        <p class=" ml-3 text-body-all">Eléctrico-Electrónico</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/market/lagricola.png" height="20" alt="">
                                                        <p class=" ml-3 text-body-all">Agrícola</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/market/lconsumo.png" height="20" alt="">
                                                        <p class=" ml-3 text-body-all">Consumo</p>
                                                    </div>-->
                                                    <div class="text-body-all" v-html="tipos.markets"></div>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            
                            <!--<v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color" >
                                    Polietileno de Baja Densidad (LDPE):
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5 shadow-none">
                                    <v-row>
                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                            <p class="text-body-all">
                                                Es un material de fácil procesamiento y con una gran presencia en la industria 
                                                de empaque y envase. Algunas de sus características más importantes son: 
                                                su gran flexibilidad, brillo, buena transparencia y opacidad en comparación 
                                                de otros materiales semi-cristalinos, de igual manera es un óptimo aislante eléctrico.
                                            </p>
                                        </v-col>
                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                            <v-row>
                                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                                    <p class="font-weight-bold font-size-20">Métodos de transformación:</p>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/group/check.png" height="17" alt="">
                                                        <p class=" ml-3 text-body-all">Extrusión</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/group/check.png" height="17" alt="">
                                                        <p class=" ml-3 text-body-all">Soplado</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/group/check.png" height="17" alt="">
                                                        <p class=" ml-3 text-body-all">Inyección</p>
                                                    </div>
                                                </v-col>
                                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                                    <p class="font-weight-bold font-size-20">Mercados:</p>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/market/lempaque.png" height="20" alt="">
                                                        <img src="../../static/market/lrigido.png" height="20" alt="">
                                                        <p class=" ml-3 text-body-all">Envase y Empaque</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/market/lelectrico.png" height="20" alt="">
                                                        <p class=" ml-3 text-body-all">Eléctrico-Electrónico</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/market/lagricola.png" height="20" alt="">
                                                        <p class=" ml-3 text-body-all">Agrícola</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/market/lconsumo.png" height="20" alt="">
                                                        <p class=" ml-3 text-body-all">Consumo</p>
                                                    </div>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Polietileno de Baja Densidad (LDPE):
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    <v-row>
                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                            <p class="text-body-all">
                                                El polietileno más versátil gracias a que es un excelente aislante 
                                                eléctrico que posee buena resistencia química y mecánica. Es un material 
                                                de costo atractivo y de una gran maleabilidad a la hora de transformación.
                                            </p>
                                        </v-col>
                                        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                            <v-row>
                                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                                    <p class="font-weight-bold font-size-20">Métodos de transformación:</p>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/group/check.png" height="17" alt="">
                                                        <p class=" ml-3 text-body-all">Extrusión</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/group/check.png" height="17" alt="">
                                                        <p class=" ml-3 text-body-all">Soplado</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/group/check.png" height="17" alt="">
                                                        <p class=" ml-3 text-body-all">Inyección</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/group/check.png" height="17" alt="">
                                                        <p class=" ml-3 text-body-all">Termoformado</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/group/check.png" height="17" alt="">
                                                        <p class=" ml-3 text-body-all">Rotomoldeo</p>
                                                    </div>
                                                </v-col>
                                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                                    <p class="font-weight-bold font-size-20">Mercados:</p>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/market/lempaque.png" height="20" alt="">
                                                        <img src="../../static/market/lrigido.png" height="20" alt="">
                                                        <p class=" ml-3 text-body-all">Envase y Empaque</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/market/lelectrico.png" height="20" alt="">
                                                        <p class=" ml-3 text-body-all">Eléctrico-Electrónico</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/market/lagricola.png" height="20" alt="">
                                                        <p class=" ml-3 text-body-all">Agrícola</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/market/lconsumo.png" height="20" alt="">
                                                        <p class=" ml-3 text-body-all">Consumo</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/market/lconstruccion.png" height="20" alt="">
                                                        <p class=" ml-3 text-body-all">Construcción</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/market/lautomotriz.png" height="20" alt="">
                                                        <p class=" ml-3 text-body-all">Automotriz y transportación</p>
                                                    </div>
                                                    <div class="d-flex inline-block">
                                                        <img src="../../static/market/lindustrial.png" height="20" alt="">
                                                        <p class=" ml-3 text-body-all">Industrial</p>
                                                    </div>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Polietileno Lineal de Baja Densidad (LLDPE): 
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    El soplado de productos plásticos se emplea para la producción de artículos vacuos. De este proceso 
                                    se obtienen una gran gama de productos de todo tipo de tamaños y formas, por ejemplo: envases, 
                                    recipientes, artículos para el hogar, juguetes y productos técnicos. Es un proceso que se clasifica 
                                    en tres rubros: extrusión soplo, inyección soplo e inyección soplo biorientado. La extrusión soplo 
                                    consiste en la plastificación de la materia prima para formar un tubo denominado párison. 
                                    <br><br>
                                    A continuación, un molde captura el párison y mediante un pin de soplado o un tubo hueco se introduce 
                                    aire en el interior del molde hasta que el párison toma la figura del molde. Posteriormente, la pieza 
                                    es enfriada y es expulsa del molde. De este proceso derivan productos tales como los tinacos, tanques 
                                    de gasolina, juguetes, pelotas, y todo tipo de recipientes con formas complejas. Por otra parte, 
                                    la inyección soplo consiste de tres fases: la inyección de un preforma, una etapa de soplada para 
                                    darle su forma, y finalmente de enfriado y expulsión del molde. De él se obtienen productos como 
                                    los garrafones de agua, y un sinfín de artículos para la industria alimenticia. Finalmente, la 
                                    inyección soplo biorientado se distingue por el uso de una varilla durante la etapa de soplado 
                                    para mejorar las propiedades mecánicas del preforma. El principal mercado de artículos derivados 
                                    se este proceso es el de bebidas carbonatadas, pero también se utiliza en la producción de artículos 
                                    médicos y alimenticios.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Polietileno de Alto Peso Molecular (HMWPE):
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Es un proceso de transformación que requiere una lámina previamente extruida. Por lo tanto, se le 
                                    considera un método de transformación secundario. Es un proceso de transformación con una gran 
                                    variedad de procesos, gracias a su versatilidad, sin embargo, hay cinco pasos básicos: calentamiento 
                                    de la lámina termoplástica en el área de formado, por medio de un sistema de vacío elimina el aire 
                                    atrapado y ayuda a la lámina a tomar la forma requerida, más adelante, se enfría la pieza, se separa 
                                    del molde y finalmente se recortan las partes superfluas de la pieza. <br><br>
                                    Es un proceso que permite la producción de una increíble graduación de productos, verbigracia: envases y embalaje, desechables, 
                                    cubre-llantas, quemacocos, macetas, lavabos, bañeras, invernaderos, y una infinidad de otros productos. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Etilén Vinil Acetato (EVA): 
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    El proceso de rotomoldeo se utiliza para la fabricación de productos huecos con una gran diversidad 
                                    de formas, tamaños y aplicaciones. Consiste básicamente en la rotación en dos ejes de un molde al 
                                    cual se le aplica calor. La variable clave en el proceso de rotomoldeo es el tipo de calentamiento 
                                    que se utiliza para plastificar la resina. Principalmente son dos los tipos de calentamientos 
                                    utilizados: flama abierta y horno. <br><br>  
                                    De igual manera, es un proceso que utiliza una multiplicidad de presentaciones en cuanto a la materia prima, 
                                    por ejemplo: polvo (sobre todo para poliolefinas), micro-pellets, y presentación liquida para PVC y Poliamida 6. 
                                    Su aparición más común en nuestro día a día es en la forma de tinacos, conos de tránsito, barreras viales, 
                                    no obstante, también se utiliza para un gran surtido de artículos como muebles, perreras, tarimas, tanques de combustibles, 
                                    kayaks, y un sin número más de productos. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>-->
                        </v-expansion-panels>
                    </v-col>
                </v-row>
                <!--<v-row justify="center" v-if="windowSize < 1129">
                    <v-col cols="12" align="center">
                        <v-btn block outlined color="#19D3C5" class="rounded-xl text-none">
                            <span class="black--text">Me interesa este producto</span>
                        </v-btn>
                    </v-col>
                    <v-col cols="12" align="center">
                        <v-btn block color="#19D3C5" class="rounded-xl text-none">
                            <span class="black--text">Ver más productos</span>
                        </v-btn>
                    </v-col>
                </v-row>-->
            </v-container>
        </section>

        <section>
            <v-container class="mb-16">
                <v-row justify="center">
                    <v-col cols="8" xl="5">
                        <h1 class="font-size-30 font-weight-bold">{{lang === 'es' ? 'Otros productos' : 'Others Products'}}</h1>
                    </v-col>
                    <v-col cols="4" align="right">
                        <!--<nuxt-link to="/search-products" class="color-decotarion">
                            <h1 class="purple-polnac">Ver todos</h1>
                        </nuxt-link>-->
                    </v-col>
                </v-row>
                <v-row justify="center" class="mb-16" v-if="windowSize > 1129">
                    <v-col cols="12" xl="9">
                        <v-row v-if="this.productos !== null">
                            <v-col cols="3" v-for="(prod, index) in this.productos.data.slice(0,4)" :key="index">
                                <nuxt-link :to="`/products/${prod.id}`">
                                    <v-img :src="basePathApiUrl + prod.attributes.imgMiniature.data.attributes.url" contain max-height="250" 
                                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                                        <v-row justify="center">
                                            <v-col cols="12" align-self="center" align="center">
                                                <div class="font-archivo text-body-all font-weight-bold white--text margin-top">{{prod.attributes.name}}</div>
                                            </v-col>
                                        </v-row>
                                    </v-img>
                                </nuxt-link>
                            </v-col>
                            <!--v-col cols="3">
                                <nuxt-link to="/products/3">
                                    <v-img src="/contact/masterbatch.png" contain max-height="270"></v-img>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="3">
                                <nuxt-link to="/products/4">
                                    <v-img src="/contact/calcio.png" contain max-height="270"></v-img>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="3">
                                <nuxt-link to="/products/5">
                                    <v-img src="/contact/pvc.png" contain max-height="270"></v-img>
                                </nuxt-link>
                            </v-col>-->
                        </v-row>
                    </v-col>
                </v-row>
                <v-row v-if="windowSize < 1129 && this.productos !== null" class="mb-16">
                    <v-carousel class="carousel-black"  hide-delimiters height="220">
                        <v-carousel-item v-for="(item,i) in productos.data" :key="i">
                            <v-row justify="center">
                                <v-col cols="11">
                                    <nuxt-link :to="`/products/${item.id}`">
                                        <v-img :src="basePathApiUrl + item.attributes.imgMiniature.data.attributes.url" contain max-height="270" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                                            <v-row justify="center">
                                                <v-col cols="12" align-self="center" align="center">
                                                    <div class="font-archivo text-body-all font-weight-bold white--text margin-top-mb">{{item.attributes.name}}</div>
                                                </v-col>
                                            </v-row>
                                        </v-img>
                                    </nuxt-link>
                                </v-col>
                            </v-row>
                        </v-carousel-item>
                    </v-carousel>
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
            itemsMercado: [
                {img : require('../../static/contact/plasticos.png')},
                {img : require('../../static/contact/masterbatch.png')},
                {img : require('../../static/contact/calcio.png')},
                {img : require('../../static/contact/pvc.png')},
            ],
            items: [
                {img : require('../../static/market/caja.png')},
                {img : require('../../static/market/tostador.png')},
                {img : require('../../static/market/refrigerador.png')},
            ],
            tabs: [0],
            producto: null, 
            productos: null
        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight', 'basePathApiUrl', 'lang'])
    },
    mounted() {
        this.getProductoId(this.$route.params.id)
        this.getProductos()
    },
    methods: {
        async getProductoId(id){
            this.producto =  await this.$store.dispatch('getProductsById', id)
            //console.log(this.producto)
        },
        async getProductos(){
            this.productos = await this.$store.dispatch('getAllProducts')
            console.log(this.productos)
        }
    }
}
</script>

<style scoped>
.purple-polnac{
    color: #773DBD;
}
.color-decotarion{
    text-decoration-color: #773DBD !important;
}
.panel-color{
    background: rgba(25, 211, 197, 0.3);
    border: 2px solid ;
    border-radius: 20px 20px 20px 20px;
    border-color: #19D3C5;
}

.margin-top{
    margin-top: 7vh ;
}

.margin-top-mb{
    margin-top: 10vh;
}
</style>