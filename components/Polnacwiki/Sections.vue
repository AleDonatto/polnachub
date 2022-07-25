<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center" class="my-16">
                    <v-col cols="12" lg="4" mg="4">
                        <v-row>
                            <v-col>
                                <v-btn @click="showTransf = !showTransf" class="mt-2 text-none px-10 py-2" block rounded color="rgba(25, 211, 197, 0.3)">
                                    <v-icon left>
                                        mdi-alert-circle-outline
                                    </v-icon>
                                    Métodos de Transformación
                                    <v-icon right>
                                        {{ showTransf ? 'mdi-chevron-right' : 'mdi-chevron-down' }}
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-btn @click="showLab = !showLab" class="mt-2 text-none px-10 py-2" block rounded color="rgba(25, 211, 197, 0.3)">
                                    <v-icon left>
                                        mdi-alert-circle-outline
                                    </v-icon>
                                    Pruebas de Laboratorio
                                    <v-icon right>
                                        {{ showLab ? 'mdi-chevron-right' : 'mdi-chevron-down'}}
                                    </v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>

                    </v-col>
                    <v-col cols="8" v-if="windowSize < 1129">
                        <v-expansion-panels v-model="tabs" multiple v-if="showTransf && !showLab ">
                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color" >
                                    Extrusión
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5 shadow-none">
                                    Es el proceso de transformación más común de la industria. Es un proceso que consiste de tres etapas: 
                                    la plastificación del material, formado del producto, y finalmente enfriamiento. En primer término, 
                                    un husillo plastifica el material, posteriormente sale a través de un dado que le da su forma final, 
                                    por último, se enfría para consolidar la forma y otorgar solidez a la figura terminada.
                                    
                                    <br><br>

                                    Dependiendo de la fisonomía del dado y del articulo final la extrusión se clasifica en diversos métodos: 
                                    película tubular, dado plano, monorientado, doble husillo, perfilería, tubería y recubrimiento. 
                                    Algunas de las aplicaciones de la extrusión son: película tubular para la industria alimenticia, tubería 
                                    flexible y rígida, y monofilamentos para fibras sintéticas.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Inyección
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Es el proceso de transformación más común de la industria. Es un proceso que consiste de tres etapas: 
                                    la plastificación del material, formado del producto, y finalmente enfriamiento. En primer término, 
                                    un husillo plastifica el material, posteriormente sale a través de un dado que le da su forma final, 
                                    por último, se enfría para consolidar la forma y otorgar solidez a la figura terminada.
                                    
                                    <br><br>

                                    Dependiendo de la fisonomía del dado y del articulo final la extrusión se clasifica en diversos métodos: 
                                    película tubular, dado plano, monorientado, doble husillo, perfilería, tubería y recubrimiento. 
                                    Algunas de las aplicaciones de la extrusión son: película tubular para la industria alimenticia, tubería 
                                    flexible y rígida, y monofilamentos para fibras sintéticas.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Soplado
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Es el proceso de transformación más común de la industria. Es un proceso que consiste de tres etapas: 
                                    la plastificación del material, formado del producto, y finalmente enfriamiento. En primer término, 
                                    un husillo plastifica el material, posteriormente sale a través de un dado que le da su forma final, 
                                    por último, se enfría para consolidar la forma y otorgar solidez a la figura terminada.
                                    
                                    <br><br>

                                    Dependiendo de la fisonomía del dado y del articulo final la extrusión se clasifica en diversos métodos: 
                                    película tubular, dado plano, monorientado, doble husillo, perfilería, tubería y recubrimiento. 
                                    Algunas de las aplicaciones de la extrusión son: película tubular para la industria alimenticia, tubería 
                                    flexible y rígida, y monofilamentos para fibras sintéticas.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Termoformado
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Es el proceso de transformación más común de la industria. Es un proceso que consiste de tres etapas: 
                                    la plastificación del material, formado del producto, y finalmente enfriamiento. En primer término, 
                                    un husillo plastifica el material, posteriormente sale a través de un dado que le da su forma final, 
                                    por último, se enfría para consolidar la forma y otorgar solidez a la figura terminada.
                                    
                                    <br><br>

                                    Dependiendo de la fisonomía del dado y del articulo final la extrusión se clasifica en diversos métodos: 
                                    película tubular, dado plano, monorientado, doble husillo, perfilería, tubería y recubrimiento. 
                                    Algunas de las aplicaciones de la extrusión son: película tubular para la industria alimenticia, tubería 
                                    flexible y rígida, y monofilamentos para fibras sintéticas.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Rotomoldeo
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Es el proceso de transformación más común de la industria. Es un proceso que consiste de tres etapas: 
                                    la plastificación del material, formado del producto, y finalmente enfriamiento. En primer término, 
                                    un husillo plastifica el material, posteriormente sale a través de un dado que le da su forma final, 
                                    por último, se enfría para consolidar la forma y otorgar solidez a la figura terminada.
                                    
                                    <br><br>

                                    Dependiendo de la fisonomía del dado y del articulo final la extrusión se clasifica en diversos métodos: 
                                    película tubular, dado plano, monorientado, doble husillo, perfilería, tubería y recubrimiento. 
                                    Algunas de las aplicaciones de la extrusión son: película tubular para la industria alimenticia, tubería 
                                    flexible y rígida, y monofilamentos para fibras sintéticas.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <v-expansion-panels v-model="tabs" multiple v-if="showLab && !showTransf">
                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color" >
                                    Extrusión
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5 shadow-none">
                                    Es el proceso de transformación más común de la industria. Es un proceso que consiste de tres etapas: 
                                    la plastificación del material, formado del producto, y finalmente enfriamiento. En primer término, 
                                    un husillo plastifica el material, posteriormente sale a través de un dado que le da su forma final, 
                                    por último, se enfría para consolidar la forma y otorgar solidez a la figura terminada.
                                    
                                    <br><br>

                                    Dependiendo de la fisonomía del dado y del articulo final la extrusión se clasifica en diversos métodos: 
                                    película tubular, dado plano, monorientado, doble husillo, perfilería, tubería y recubrimiento. 
                                    Algunas de las aplicaciones de la extrusión son: película tubular para la industria alimenticia, tubería 
                                    flexible y rígida, y monofilamentos para fibras sintéticas.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Inyección
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Es el proceso de transformación más común de la industria. Es un proceso que consiste de tres etapas: 
                                    la plastificación del material, formado del producto, y finalmente enfriamiento. En primer término, 
                                    un husillo plastifica el material, posteriormente sale a través de un dado que le da su forma final, 
                                    por último, se enfría para consolidar la forma y otorgar solidez a la figura terminada.
                                    
                                    <br><br>

                                    Dependiendo de la fisonomía del dado y del articulo final la extrusión se clasifica en diversos métodos: 
                                    película tubular, dado plano, monorientado, doble husillo, perfilería, tubería y recubrimiento. 
                                    Algunas de las aplicaciones de la extrusión son: película tubular para la industria alimenticia, tubería 
                                    flexible y rígida, y monofilamentos para fibras sintéticas.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Soplado
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Es el proceso de transformación más común de la industria. Es un proceso que consiste de tres etapas: 
                                    la plastificación del material, formado del producto, y finalmente enfriamiento. En primer término, 
                                    un husillo plastifica el material, posteriormente sale a través de un dado que le da su forma final, 
                                    por último, se enfría para consolidar la forma y otorgar solidez a la figura terminada.
                                    
                                    <br><br>

                                    Dependiendo de la fisonomía del dado y del articulo final la extrusión se clasifica en diversos métodos: 
                                    película tubular, dado plano, monorientado, doble husillo, perfilería, tubería y recubrimiento. 
                                    Algunas de las aplicaciones de la extrusión son: película tubular para la industria alimenticia, tubería 
                                    flexible y rígida, y monofilamentos para fibras sintéticas.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Termoformado
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Es el proceso de transformación más común de la industria. Es un proceso que consiste de tres etapas: 
                                    la plastificación del material, formado del producto, y finalmente enfriamiento. En primer término, 
                                    un husillo plastifica el material, posteriormente sale a través de un dado que le da su forma final, 
                                    por último, se enfría para consolidar la forma y otorgar solidez a la figura terminada.
                                    
                                    <br><br>

                                    Dependiendo de la fisonomía del dado y del articulo final la extrusión se clasifica en diversos métodos: 
                                    película tubular, dado plano, monorientado, doble husillo, perfilería, tubería y recubrimiento. 
                                    Algunas de las aplicaciones de la extrusión son: película tubular para la industria alimenticia, tubería 
                                    flexible y rígida, y monofilamentos para fibras sintéticas.
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-2 rounded-xl">
                                <v-expansion-panel-header class="font-weight-bold panel-color">
                                    Rotomoldeo
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-5">
                                    Es el proceso de transformación más común de la industria. Es un proceso que consiste de tres etapas: 
                                    la plastificación del material, formado del producto, y finalmente enfriamiento. En primer término, 
                                    un husillo plastifica el material, posteriormente sale a través de un dado que le da su forma final, 
                                    por último, se enfría para consolidar la forma y otorgar solidez a la figura terminada.
                                    
                                    <br><br>

                                    Dependiendo de la fisonomía del dado y del articulo final la extrusión se clasifica en diversos métodos: 
                                    película tubular, dado plano, monorientado, doble husillo, perfilería, tubería y recubrimiento. 
                                    Algunas de las aplicaciones de la extrusión son: película tubular para la industria alimenticia, tubería 
                                    flexible y rígida, y monofilamentos para fibras sintéticas.
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
export default {
    data() {
        return {
            item: [
                { name: "Métodos de Transformación" },
                { name: "Pruebas de Laboratorio" }
            ],
            tabs: [0],
            showTransf: true,
            showLab: false,
        };
    },
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