<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center" class="my-16">
                    <v-col cols="12" lg="4" mg="4">
                        <v-row>
                            <v-col>
                                <v-btn @click="showTransf" class="mt-2 text-none px-10 py-2" block rounded color="rgba(25, 211, 197, 0.3)">
                                    <v-icon left>
                                        mdi-alert-circle-outline
                                    </v-icon>
                                    Métodos de Transformación
                                    <v-icon right>
                                        {{ Transf ? 'mdi-chevron-right' : 'mdi-chevron-down' }}
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-btn @click="showLab" class="mt-2 text-none px-10 py-2" block rounded color="rgba(25, 211, 197, 0.3)">
                                    <v-icon left>
                                        mdi-alert-circle-outline
                                    </v-icon>
                                    Pruebas de Laboratorio
                                    <v-icon right>
                                        {{ Lab ? 'mdi-chevron-right' : 'mdi-chevron-down'}}
                                    </v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>

                    </v-col>
                    <v-col cols="8" v-if="windowSize > 1129">
                        <v-expansion-panels v-model="tabs" multiple v-if="Transf && !Lab ">
                            <v-expansion-panel class="my-2 rounded-xl">
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
                        </v-expansion-panels>

                        <v-expansion-panels v-model="tabs" multiple v-if="Lab && !Transf">
                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color" >
                                    Índice de Fluidez
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5 shadow-none">
                                    Cantidad de material plastificado en gramos que fluye a través del orificio de un dado de 
                                    dimensiones fijas, sujeto a presión y temperaturas predeterminadas. Es también una medida 
                                    indirecta del peso molecular. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Densidad
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Medida de cuánto material se encuentra en un espacio determinado. Ayuda a determinar la 
                                    pureza de los polímeros antes de su procesamiento. Es vital para determinar la homogeneidad 
                                    de las resinas. De igual manera sirve para precisar si existe algún material externo se ha 
                                    mezclado con la materia prima. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Determinación de Humedad
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    El porcentaje de humedad que contiene un polímero. Usando una termobalanza, equipo que irradia 
                                    calor, se evapora el agua y se calcula la pérdida de peso. Es una prueba muy importante para los 
                                    plásticos higroscópicos, aquellos que absorben la humedad del ambiente, como por ejemplo las 
                                    poliamidas, el policarbonato y el PET.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Contenido de Cenizas
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Utilizando un equipo denominado Mufla se calcina el material a través de la gasificación del 
                                    polímero convirtiéndose en monóxido de carbono y dióxido de carbono, finalmente se calcula el 
                                    contenido de cenizas de un polímero. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Impacto
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Medición de la resistencia al impacto por medio de la caída de un peso desde una altura 
                                    determinada y controlada. Un impactómetro mide la energía absorbida por la probeta de prueba. 
                                    Mientras más alta sean los valores de resistencia al impacto mayor será la resistencia del polímero.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Módulo de Flexión
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    La resistencia a la flexión es la propiedad que tienen los plásticos de soportar un esfuerzo 
                                    sobre ellos antes de doblarse. Ayuda a determinar si el material es demasiado o muy poco flexible 
                                    para la aplicación final.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Tensión y Elongación
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Mide el esfuerzo máximo para que el material se estire a su punto máximo y llegue a su punto de 
                                    cedencia. La tensión se define como la capacidad que presentan los plásticos a oponerse a un 
                                    esfuerzo de tensión aplicado en un área determinada. Se mide como la máxima carga de tensión 
                                    por unidad de área que resiste antes de la ruptura del material. La elongación es la máxima 
                                    extensión que alcanza una probeta hasta llegar al punto de ruptura después de someterla a un 
                                    estiramiento.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Dureza Shore A y D
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Es la resistencia que presentan los plásticos al ser mellados o rayados sobre su superficie. 
                                    El método consiste en colocar una muestra o probeta y dejar caer sobre ella un punzón. Con apoyo 
                                    de un durómetro se calcula la dureza del plástico. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Resistencia a la inflamabilidad
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    La tendencia de un termoplástico a extinguir o a propagar una llama cuando entra en combustión 
                                    en un periodo específico Esta prueba indica la rapidez con que se propaga el fuego. Es una prueba 
                                    vital para diversos sectores, tales como: automotriz, eléctrico-electrónico, construcción, consumo, 
                                    textil y electrodomésticos. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Temperatura de Deflexión Bajo Carga (HDT)
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Es la temperatura a la cual ocurre la deformación de un polímero bajo una carga normalizada. 
                                    En un baño de aceite a base de silicona el material es sometido a una carga constante y a 
                                    temperaturas variables. Una vez que el material ceda se registra la temperatura. Es una prueba 
                                    muy importante para materiales que estarán sometidos a altas temperaturas.  
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Análisis Termogravimétrico (TGA)
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Evaluación de las propiedades térmicas mediante la pérdida de peso de una muestra cuando se 
                                    incrementa la temperatura a una velocidad uniforme. Indica la composición de la muestra, incluidos 
                                    los volátiles y refuerzos inertes. Esta prueba ayuda a: identificar plásticos, contenido de humedad, 
                                    materia volátil, procesos de degradación y oxidación, estabilidad térmica, composición química, 
                                    entre otros. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Calorimetría Diferencial de Barrido (DSC)
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                   Mide los cambios de entalpía (el flujo de energía térmica en los procesos químicos efectuados 
                                   a presión constante cuando el único trabajo es de presión-volumen) debido a modificaciones en 
                                   las propiedades químicas y físicas de un material, en función del tiempo o temperatura. 
                                   Es una prueba que proporciona información valiosa sobre las condiciones de procesamiento, 
                                   aplicación, defectos de calidad, pureza, seguridad química, reactividad y estabilidad. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Determinación de Color con Espectrofotómetro
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                   Proporciona los valores y coordenadas de un color. El espectrofotómetro es un equipo diseñado 
                                   para medir el espectro de transmitancia o reflectancia de un objeto. El objetivo es comparar la 
                                   radiación para cada longitud de onda a la salida del objeto. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Espectrofotómetro de Infrarrojo
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                   Puede emplearse para la identificación cualitativa y cuantitativa de plásticos. La absorción 
                                   de luz por molécula es única, por lo que cada espectro que ésta aporta también es único. 
                                   Una de sus grandes ventajes es que solamente con la comparación con otros espectros previamente 
                                   identificados es posible identificar muestras con diversos problemas. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Determinación de Brillo
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                   Una medida de cuán brillante o reflejante es un material que se encuentra en un ángulo 
                                   especifico respecto al haz de luz incidente. El brillo depende considerablemente de la lisura y 
                                   planicidad de la muestra. Por lo que esta prueba se ocupa cuando se desea comparar o medir de 
                                   forma relativa estos atributos.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                   Intemperismo (Envejecimiento)
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                   En condiciones ambientales atmosféricas los plásticos de degradan debido a la acción 
                                   del oxígeno, la radiación de luz UV, y la humedad. Esta prueba mide la resistencia a la 
                                   intemperie de los plásticos. Ayuda a predecir el tiempo que resiste un material expuesto a 
                                   condiciones ambientales reales. 
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                   Reología Rotacional
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                   Permite conocer el índice de fluidez con mayor complejidad, el peso molecular, y ayuda a 
                                   determinar el método de transformación adecuado. De igual manera, permite conocer si la 
                                   resina cuenta con material reciclado o si es material prime. Suele ser utilizada para 
                                   aplicaciones de gran complejidad como por ejemplo en materiales para el mercado automotriz.   
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <Productos/>
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
            Transf: true,
            Lab: false,
        }
    },
    methods: {
        showTransf() {
            this.Transf = !this.Transf
            this.Lab = false
        },
        showLab(){
            this.Lab = !this.Lab
            this.Transf = false
        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight'])
    }
}
</script>

<style scoped>
.shadow-none{
    z-index: unset !important;
}
.panel-color{
    background: white;
    border: 2px solid ;
    border-radius: 20px 20px 20px 20px;
    border-color: #19D3C5;
}
</style>