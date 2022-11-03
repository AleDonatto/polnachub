<template>
    <div v-if="pagePolnacWiki === null">
        <v-sheet class="pa-3">
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
    </div>
    <div v-else>
        <div :class="{'bg-polnacwiki':windowSize > 1129, 'bg-polnacwiki-mb': windowSize < 1129 }" v-if="pagePolnacWiki !== null" :style="{ backgroundImage: `url(${basePathApiUrl + pagePolnacWiki.banner.image.data[0].attributes.url })` }">
            <v-row justify="center" class="py-10">
                <v-col cols="12" class="mt-12" align="center">
                    <!--<h1 class="font-archivo mt-16 font-size-40 white--text font-weight-bold">POLNAC Wiki</h1>-->
                    <h1 class="font-archivo font-size-40 white--text font-weight-bold" v-html="pagePolnacWiki.banner.title"></h1>
                </v-col>
                <v-col cols="8">
                    <v-autocomplete solo rounded class="mt-4" :placeholder="lang === 'es' ? 'Buscar' : 'Search'" prepend-inner-icon="mdi-magnify" :items="this.pruebasLab.data" item-text="attributes.name" return-object
                    @change="gotoPrueba"></v-autocomplete>
                </v-col>
                <v-col cols="3" align="center" class="mt-3" v-if="windowSize < 1129">
                    <v-btn class="mx-2" fab dark color="white">
                        <v-icon color="black">
                            mdi-filter-outline
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </div>

        <section v-if="windowSize > 1129">
            <v-container>
                <v-row justify="start" class="my-16">
                    <v-col cols="12" lg="4" mg="4">
                        <v-row>
                            <v-col>
                                <v-btn @click="showTransf" class="mt-2 text-none px-10 py-2 d-flex justify-start" block rounded color="rgba(25, 211, 197, 0.3)">
                                    <v-row class="mt-1">
                                        <v-col>
                                            <v-icon left>
                                                mdi-alert-circle-outline
                                            </v-icon>
                                        </v-col>
                                        <v-col>
                                            <p class="text-left">{{lang === 'es' ? 'Métodos de Transformación' : 'Transformation Method'}}</p>
                                        </v-col>
                                        <v-col>
                                            <v-icon right>
                                                {{ Transf ? 'mdi-chevron-right' : 'mdi-chevron-down' }}
                                            </v-icon>
                                        </v-col>
                                    </v-row>
                                </v-btn>
                            </v-col>
                            <v-col align="start">
                                <v-btn @click="showLab" class="mt-2 text-none px-10 py-2 d-flex justify-start" block rounded color="rgba(25, 211, 197, 0.3)">
                                    <v-row class="mt-1">
                                        <v-col>
                                            <v-icon left>
                                                mdi-alert-circle-outline
                                            </v-icon>
                                        </v-col>
                                        <v-col>
                                            <p class="text-left">{{ lang === 'es' ? 'Pruebas de Laboratorio' : 'Lab tests' }}</p>
                                        </v-col>
                                        <v-col>
                                            <v-icon right>
                                                {{ Lab ? 'mdi-chevron-right' : 'mdi-chevron-down'}}
                                            </v-icon>
                                        </v-col>
                                    </v-row>
                                </v-btn>
                            </v-col>
                        </v-row>

                    </v-col>
                    <v-col cols="8" v-if="pruebas !== null">

                        <v-expansion-panels v-model="tabs" multiple v-if="Transf && !Lab ">
                            <v-expansion-panel class="my-2 rounded-xl" v-for="(item, index) in dataMetodo" :key="index" >
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    {{ item.attributes.name }}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5 shadow-none">
                                    <div class="" v-html="item.attributes.description"></div>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <!--<v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color" >
                                    Extrusión
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5 shadow-none">
                                    Es el proceso de transformación más común de la industria. Es un proceso que consiste de tres 
                                    etapas: la plastificación del material, formado del producto, y finalmente enfriamiento. 
                                    En primer término, un husillo plastifica el material, posteriormente sale a través de un dado 
                                    que le da su forma final, por último, se enfría para consolidar la forma y otorgar solidez a la 
                                    figura terminada. 
                                    <br><br>
                                    Dependiendo de la fisonomía del dado y del articulo final la extrusión se clasifica en diversos 
                                    métodos: película tubular, dado plano, monorientado, doble husillo, perfilería, tubería y 
                                    recubrimiento. Algunas de las aplicaciones de la extrusión son: película tubular para la industria 
                                    alimenticia, tubería flexible y rígida, y monofilamentos para fibras sintéticas.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Inyección
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Es uno de los métodos de transformación más versátiles, se pueden producir piezas de unos cuantos 
                                    gramos hasta varios kilogramos de peso. Junto con el método de extrusión representan los principales 
                                    procesos de transformación para la producción de artículos plásticos. Mediante el uso de presión y 
                                    temperatura se plastifica la resina base. Es un método de transformación de cinco etapas: cierre de 
                                    molde, inyección del material, sostenimiento, alimentación, enfriamiento, apertura del molde y 
                                    expulsión de la pieza. La unidad de inyección se encarga de fundir, mezclar e inyectar el material 
                                    al molde. <br><br>
                                    Los productos derivados de este proceso de transformación representan una gran parte de 
                                    los artículos plásticos de uso diario; estos productos se encuentran en prácticamente todas las 
                                    industrias, desde el mercado automotriz, médico, al sector industrial y de consumo. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Soplado
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
                                    Termoformado
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
                                    Rotomoldeo
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
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Coextrusión
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    La coextrusión, como su nombre indica, es la extrusión paralela y simultanea de dos o más polímeros 
                                    para obtener una sola estructura multicapa. En este proceso se pueden integrar materiales que 
                                    normalmente no son compatibles. Este proceso logra obtener productos finales con mejores 
                                    características que la extrusión normal. Igualmente, puede ayudar a reducir costos. 
                                    <br><br>
                                    Aunado a esto, es un proceso clave para envases que requieran una mayor protección a gases, 
                                    aromas y químicos, un claro ejemplo es en la industria alimenticia. Sin embargo, es un proceso 
                                    que requiere una alta aptitud técnica para lograr buenos resultados en los productos finales, 
                                    ya que es necesario tomar en cuenta las diferencias en las características de flujo de los 
                                    distintos materiales. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>-->
                        </v-expansion-panels>

                        <v-expansion-panels v-model="tabsLab" multiple v-if="Lab && !Transf">    
                            <v-expansion-panel class="my-2 rounded-xl max-heigh" v-for="(item, index) in dataLaboratory" :key="index" @click="isSelected(item.id)">
                                <v-expansion-panel-header class="font-weight-bold panel-color" >
                                    {{ item.attributes.name }}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5 shadow-none">
                                    <div class="" v-html="item.attributes.description"></div>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section v-if="windowSize < 1129" class="mb-16">
            <v-card class="mx-auto shadow-out mb-10">
                <v-card-title class="text-h6 font-weight-regular justify-space-between">
                    <!--<span>{{ currentTitle }}</span>-->
                    <!--<v-avatar color="primary lighten-2" class="subheading white--text" size="24" v-text="step"></v-avatar>-->
                </v-card-title>

                <v-window v-model="step" class="mb-10">
                    <v-window-item :value="1">
                        <p class="mx-5 font-size-16">{{lang === 'es' ? 'Revisa el contenido por categoría' : 'Browse content by category'}}</p>
                        <v-row class="" justify="center">
                            <v-col cols="11">
                                <v-row>
                                    <v-col>
                                        <v-btn @click="mTransformacion" class="mt-2 text-none px-10 py-2 d-flex justify-start font-weight-bold" block rounded color="rgba(25, 211, 197, 0.3)">
                                            <v-row class="mt-1">
                                                <v-col>
                                                    <v-icon left>mdi-alert-circle-outline</v-icon>
                                                </v-col>
                                                <v-col>
                                                    <p class="">{{lang === 'es' ? 'Métodos de Transformación' : 'Transformation Method'}}</p>
                                                </v-col>
                                                <v-col>
                                                    <v-icon right class="">mdi-chevron-right</v-icon>
                                                </v-col>
                                            </v-row>
                                        </v-btn>
                                    </v-col>
                                    <v-col align="start">
                                        <v-btn @click="pLaboratorio" class="mt-2 mb-5 text-none px-10 py-2 d-flex justify-start font-weight-bold" block rounded color="rgba(25, 211, 197, 0.3)">
                                            <v-row class="mt-1">
                                                <v-col>
                                                    <v-icon left>mdi-alert-circle-outline</v-icon>
                                                </v-col>
                                                <v-col>
                                                    <p class="text-left">{{ lang === 'es' ? 'Pruebas de Laboratorio' : 'Lab tests' }}</p>
                                                </v-col>
                                                <v-col>
                                                    <v-icon right>mdi-chevron-right</v-icon>
                                                </v-col>
                                            </v-row>
                                        </v-btn>
                                    </v-col>
                                </v-row>

                            </v-col>
                        </v-row>
                    </v-window-item>

                    <v-window-item :value="2">
                        <v-container>
                            <v-btn @click="backQuestions" class="my-5 shadow-out text-none px-5 py-2 font-weight-bold text-purple" color="white" block >
                                <v-row class="mt-1">
                                    <v-col cols="1">
                                        <v-icon left color="#773DBD">mdi-chevron-left</v-icon>
                                    </v-col>
                                    <v-col>
                                        <p class="text-left text-purple font-size-16">{{lang === 'es' ? 'Preguntas' : 'Questions'}}</p>
                                    </v-col>
                                </v-row>
                            </v-btn>
                            <v-expansion-panels v-model="tabs" multiple>
                                <v-expansion-panel class="my-2 rounded-xl" v-for="(item, index) in dataMetodo" :key="item + index" >
                                    <v-expansion-panel-header class="font-weight-bold panel-color">
                                        {{ item.attributes.name }}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content class="mt-5 shadow-none">
                                        <div class="" v-html="item.attributes.description"></div>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-container>
                    </v-window-item>

                    <v-window-item :value="3">
                         <v-btn @click="backQuestions" class="my-5 shadow-out text-none px-5 py-2 font-weight-bold" color="white" block >
                            <v-row class="mt-1">
                                <v-col cols="1">
                                    <v-icon left color="#773DBD">mdi-chevron-left</v-icon>
                                </v-col>
                                <v-col>
                                    <p class="text-left text-purple font-size-16">{{lang === 'es' ? 'Preguntas' : 'Questions'}}</p>
                                </v-col>
                            </v-row>
                        </v-btn>
                        <v-container>
                            <v-expansion-panels v-model="tabsLab" multiple v-if="Lab && !Transf">    
                                <v-expansion-panel class="my-2 rounded-xl max-heigh" v-for="(item, index) in dataLaboratory" :key="index" @click="isSelected(item.id)">
                                    <v-expansion-panel-header class="font-weight-bold panel-color" >
                                        {{ item.attributes.name }}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content class="mt-5 shadow-none">
                                        <div class="" v-html="item.attributes.description"></div>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-container>
                    </v-window-item>
                </v-window>
            </v-card>
            <div class="mb-2"></div>
        </section>


        <section class="mt-16 bg-polnac-end" v-if="showbanners">
            <v-container>
                <v-row justify="center" class="mb-10">
                    <v-col cols="12" align="center" class="mt-16">
                        <!--<h1 class="white--text font-archivo font-size-40 my-10 font-weight-bold">¿Necesitas más información?</h1>-->
                        <h1 class="white--text font-archivo font-size-40 my-10 font-weight-bold" v-html="pagePolnacWiki.information.title"></h1>
                        <!--<p class="white--text text-h5">Revisa nuestro amplio catálogo de productos</p>-->
                        <p class="white--text text-h5" v-html="pagePolnacWiki.information.description"></p>
                    </v-col>                    
                    <v-col cols="6" lg="4" md="4" sm="6" xs="6" class="mb-16" align="center">
                        <!--<v-btn class="black--text mb-5 py-6 body-1 text-none rounded-lg mb-10" color="#19D3C5">Ver productos</v-btn>-->
                        <v-btn class="black--text mb-5 py-6 body-1 text-none rounded-lg mb-10" color="#19D3C5">{{pagePolnacWiki.information.txtBtn}}</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!--<Productos class="mb-2" v-if="showbanners"/>-->
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            item: [
                { name: "Métodos de Transformación" },
                { name: "Pruebas de Laboratorio" }
            ],
            tabs: [0],
            tabsLab: [0],
            Transf: true,
            Lab: false,
            dataLab: null,
            dataMet: null,
            step: 1,
            window: 0,
            pruebas: null
        }
    },
    mounted() {
        this.getPruebas()
        this.selectMethods()
    },
    methods: {
        showTransf() {
            this.Transf = !this.Transf
            this.Lab = false
        },
        showLab(){
            this.Lab = !this.Lab
            this.Transf = false
        },
        mTransformacion(){
            this.step = 2
            this.$store.commit('StateAssign', {showbanners:false})
        },
        pLaboratorio(){
            this.step = 3
            this.$store.commit('StateAssign', {showbanners:false})
        },
        backQuestions(){
            this.step = 1
            this.$store.commit('StateAssign', {showbanners:true})
        },
        async getPruebas(){
            this.pruebas = await this.$store.dispatch('getAllTipoPruebas')
            //console.log(this.pruebas)
            this.dataLab = this.pruebas.data.filter(item => item.attributes.tipos_prueba.data.attributes.name === 'Pruebas de Laboratorio' ||  item.attributes.tipos_prueba.data.attributes.name === 'Lab tests')
            this.dataMet = this.pruebas.data.filter(item => item.attributes.tipos_prueba.data.attributes.name === 'Método de Transformación' ||  item.attributes.tipos_prueba.data.attributes.name === 'Transformation Method')
            
            //console.log(this.dataLab)
        },
        isSelected(id){
            console.log(id)
            return true
        },
        gotoPrueba(item){

            if(item.attributes.tipos_prueba.data.attributes.name === 'Método de Transformación' ||  item.attributes.tipos_prueba.data.attributes.name === 'Transformation Method'){

                const metodos= this.pruebas.data.filter(item => item.attributes.tipos_prueba.data.attributes.name === 'Método de Transformación' ||  item.attributes.tipos_prueba.data.attributes.name === 'Transformation Method')
                const index = metodos.findIndex(itm => itm.id === item.id)

                this.Lab = false 
                this.Transf = true
                this.tabs = [index]

                this.$router.push(`/polnac-wiki?tag=methods&id=${index}`)

            }else if(item.attributes.tipos_prueba.data.attributes.name === 'Pruebas de Laboratorio' ||  item.attributes.tipos_prueba.data.attributes.name === 'Lab tests'){

                const pruebas = this.pruebas.data.filter(item => item.attributes.tipos_prueba.data.attributes.name === 'Pruebas de Laboratorio' ||  item.attributes.tipos_prueba.data.attributes.name === 'Lab tests')
                const index = pruebas.findIndex(itm => itm.id === item.id)

                this.Lab = true 
                this.Transf = false
                this.tabsLab = [index]

                this.$router.push(`/polnac-wiki?tag=laboratory&id=${index}`)
            }
            //this.selectMethods()
        },
        selectMethods(){
            if(this.$route.query.tag){
                if(this.$route.query.tag === 'laboratory'){
                    this.Lab = true 
                    this.Transf = false
                    const id = parseInt(this.$route.query.id)
                    this.tabsLab = [id]
                }else if(this.$route.query.tag === 'methods'){
                    this.Lab = false 
                    this.Transf = true
                    const id = parseInt(this.$route.query.id)
                    this.tabs = [id]
                }
            }
        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight', 'showbanners', 'pagePolnacWiki', 'basePathApiUrl', 'lang', 'pruebasLab']),
        dataMetodo() {
            if(this.pruebasLab !== null){
                let aux = this.pruebasLab
                let pruebas = aux.data.filter(item => item.attributes.tipos_prueba.data.attributes.name === 'Método de Transformación' ||  item.attributes.tipos_prueba.data.attributes.name === 'Transformation Method')
                this.dataMet = pruebas
                return pruebas
            }
            return []
            //this.dataLab = this.pruebas.data.filter(item => item.attributes.tipos_prueba.data.attributes.name === 'Pruebas de Laboratorio' ||  item.attributes.tipos_prueba.data.attributes.name === 'Lab tests')
        },
        dataLaboratory() {
            if(this.pruebasLab !== null){
                let aux = this.pruebasLab
                let pruebas = aux.data.filter(item => item.attributes.tipos_prueba.data.attributes.name === 'Pruebas de Laboratorio' ||  item.attributes.tipos_prueba.data.attributes.name === 'Lab tests')
                this.dataLab = pruebas
                return pruebas
            }
            return []
        }
    }
}
</script>

<style scoped>
.bg-polnacwiki{
    /*background-image: url('../../static/polnacwiki/bg-banner.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}

.bg-polnacwiki-mb{
    /*background-image: url('../../static/polnacwiki/bg-bannermb.png');*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
.shadow-none{
    z-index: unset !important;
}
.panel-color{
    background: white;
    border: 2px solid ;
    border-radius: 20px 20px 20px 20px;
    border-color: #19D3C5;
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
.max-heigh{
    height: 100% !important;
}
</style>