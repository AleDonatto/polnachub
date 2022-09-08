<template>
    <!--<div v-if="pageSearchProducts === null">
        <v-sheet class="pa-3">
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
    </div>-->
    <div>
        <section v-if="windowSize > 1129">
            <v-container v-if="tableCompuestosprecolor.length < 1 && tablePE.length < 1 && tablePP.length < 1 && tableEstirenicos.length < 1
            && tableRotomoldeo.length < 1 && tablePVC.length < 1 && tableIngenieria.length <1 && tableMasterbatch.length < 1" >
                <v-row justify="center">
                    <v-col cols="12" align="center" class="mt-16">
                        <h1 class="font-archivo font-weight-bold">Busca en nuestro amplio catálogo por filtros o categorías.</h1>
                        <!--<h1 class="font-archivo font-weight-bold">{{pageSearchProducts.titleSectionSearch}}</h1>-->
                    </v-col>
                </v-row>

                <v-row justify="center" class="mt-10">
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/1" class="text-decoration-none">
                            <v-img src="/menu-search/plasticos.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Plásticos de Ingeniería</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/2" class="text-decoration-none">
                            <v-img src="/menu-search/compuesto.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Compuestos</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/3" class="text-decoration-none">
                            <v-img src="/menu-search/masterbach.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Masterbatch</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/3" class="text-decoration-none">
                            <v-img src="/menu-search/aditivos.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Concentrados de Aditivos</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/4" class="text-decoration-none">
                            <v-img src="/menu-search/carbonato.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Carbonato de Calcio</p>
                        </nuxt-link>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/5" class="text-decoration-none">
                            <v-img src="/menu-search/rotomoldeo.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Rotomoldeo</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/6" class="text-decoration-none">
                            <v-img src="/menu-search/pvc.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">PVC</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/7" class="text-decoration-none">
                            <v-img src="/menu-search/elastomeros.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Elastómeros Termoplásticos</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/8" class="text-decoration-none">
                            <v-img src="/menu-search/biodegradables.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Biodegradables</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/8" class="text-decoration-none">
                            <v-img src="/menu-search/hules.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Hules</p>
                        </nuxt-link>
                    </v-col>
                </v-row>
                <v-row justify="center" class="mb-16">
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/8" class="text-decoration-none">
                            <v-img src="/menu-search/polietileno.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Polietileno</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/8" class="text-decoration-none">
                            <v-img src="/menu-search/polipropileno.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Polipropileno</p>
                        </nuxt-link>
                    </v-col>
                    <v-col cols="2" align="center">
                        <nuxt-link to="/products/8" class="text-decoration-none">
                            <v-img src="/menu-search/estirenicos.png" contain max-height="90"></v-img>
                            <p class="mt-2 black--text">Estirénicos</p>
                        </nuxt-link>
                    </v-col>
                </v-row>
            </v-container>

            <v-container fluid v-else class="mb-10 px-16">
                <div class="text-center">

                    <v-chip class="ma-2 pa-5 white--text" close color="#773DBD" @click:close="chip1 = false" v-if="valProducto!==''">
                        {{this.valProducto}}
                    </v-chip>
                    <v-chip class="ma-2 pa-5 white--text" close color="#773DBD" @click:close="chip1 = false" v-if="valFabricante!==''">
                        {{this.valFabricante}}
                    </v-chip>
                    <v-chip class="ma-2 pa-5 white--text" close color="#773DBD" @click:close="chip1 = false" v-if="valMercado!==''">
                        {{this.valMercado}}
                    </v-chip>
                    <v-chip class="ma-2 pa-5 white--text" close color="#773DBD" @click:close="chip1 = false" v-if="valMTransformacion!==''">
                        {{this.valMTransformacion}}
                    </v-chip>

                    <v-chip class="ma-2 pa-5" close color="red" text-color="white" @click:close="chip2 = false">
                        Remove
                    </v-chip>
                </div>

                <v-card class="mt-10 shadow-out" v-if="tableCompuestosprecolor.length > 0 ">
                    <v-card-title>
                        Precolor Specialties
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    
                    <v-data-table
                        :headers="headers"
                        :items="tableCompuestosprecolor"
                        :items-per-page="10"
                        :search="search"
                        class="elevation-1 mt-5 mb-16"
                    >
                        <template v-slot:item.htecnica="{ item }" class="">
                            <div class="text-center mt-1 pointer">
                                <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                    <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                    <p>Hoja técnica</p>
                                </a>
                            </div>
                        </template>

                    </v-data-table>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tablePE.length > 0">
                    <v-card-title>
                        Polyethylene
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    
                    <v-data-table
                        :headers="headersPE"
                        :items="tablePE"
                        :items-per-page="10"
                        :search="search"
                        class="elevation-1 mt-5 mb-16"
                    >
                        <template v-slot:item.htecnica="{ item }" class="">
                            <div class="text-center mt-1 pointer">
                                <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                    <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                    <p>Hoja técnica</p>
                                </a>
                            </div>
                        </template>

                    </v-data-table>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tablePP.length > 0">
                    <v-card-title>
                        Polypropylene
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    
                    <v-data-table
                        :headers="headersPP"
                        :items="tablePP"
                        :items-per-page="10"
                        :search="search"
                        class="elevation-1 mt-5 mb-16"
                    >
                        <template v-slot:item.htecnica="{ item }" class="">
                            <div class="text-center mt-1 pointer">
                                <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                    <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                    <p>Hoja técnica</p>
                                </a>
                            </div>
                        </template>

                    </v-data-table>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tableEstirenicos.length > 0">
                    <v-card-title>
                        Polypropylene
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    
                    <v-data-table
                        :headers="headersEstirenicos"
                        :items="tableEstirenicos"
                        :items-per-page="10"
                        :search="search"
                        class="elevation-1 mt-5 mb-16"
                    >
                        <template v-slot:item.htecnica="{ item }" class="">
                            <div class="text-center mt-1 pointer">
                                <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                    <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                    <p>Hoja técnica</p>
                                </a>
                            </div>
                        </template>

                    </v-data-table>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tableRotomoldeo.length > 0">
                    <v-card-title>
                        Rotomolding compounds colors
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    
                    <v-data-table
                        :headers="headersRotomoldeo"
                        :items="tableRotomoldeo"
                        :items-per-page="10"
                        :search="search"
                        class="elevation-1 mt-5 mb-16"
                    >
                        <template v-slot:item.htecnica="{ item }" class="">
                            <div class="text-center mt-1 pointer">
                                <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                    <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                    <p>Hoja técnica</p>
                                </a>
                            </div>
                        </template>

                    </v-data-table>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tablePVC.length > 0">
                    <v-card-title>
                        PVC
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    
                    <v-data-table
                        :headers="headersPVC"
                        :items="tablePVC"
                        :items-per-page="10"
                        :search="search"
                        class="elevation-1 mt-5 mb-16"
                    >
                        <template v-slot:item.htecnica="{ item }" class="">
                            <div class="text-center mt-1 pointer">
                                <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                    <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                    <p>Hoja técnica</p>
                                </a>
                            </div>
                        </template>

                    </v-data-table>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tableIngenieria.length > 0">
                    <v-card-title>
                        Ingeniería
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    
                    <v-data-table
                        :headers="headersIng"
                        :items="tableIngenieria"
                        :items-per-page="10"
                        :search="search"
                        class="elevation-1 mt-5 mb-16"
                    >
                        <template v-slot:item.htecnica="{ item }" class="">
                            <div class="text-center mt-1 pointer">
                                <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                    <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                    <p>Hoja técnica</p>
                                </a>
                            </div>
                        </template>

                    </v-data-table>
                </v-card>

                <v-card class="mt-10 shadow-out" v-if="tableMasterbatch.length > 0">
                    <v-card-title>
                        MasterBatch
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    
                    <v-data-table
                        :headers="headersMaster"
                        :items="tableMasterbatch"
                        :items-per-page="10"
                        :search="search"
                        class="elevation-1 mt-5 mb-16"
                    >
                        <template v-slot:item.htecnica="{ item }" class="">
                            <div class="text-center mt-1 pointer">
                                <a href="/CC80PPHD.pdf" download="" class="decoration-none">
                                    <v-icon class="text-center pointer " color="#773DBD">mdi-file-download-outline</v-icon>
                                    <p>Hoja técnica</p>
                                </a>
                            </div>
                        </template>

                    </v-data-table>
                </v-card>
            </v-container>

            <v-dialog v-model="showMsgProd" width="700" overlay-color="#2E2E65">
                <v-card elevation="6">
                    <v-card-title>
                        <v-row justify="end">
                            <v-col cols="2">
                                <v-btn outlined color="white"  @click="closeDialog">
                                    <v-img src="/contact/line.png" contain max-width="25"></v-img>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-title>

                    <v-card-text>
                        <v-row justify="center">
                            <!--<v-col cols="6">
                                <v-img src="/contact/dialog.png" contain max-height="120"></v-img>
                            </v-col>-->
                            <v-col cols="12">
                                <h1 class="font-size-24 font-weight-bold text-center black--text">Buscador de Productos</h1>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-body-all text-center text-center black--text">No hay resultados en la búsqueda.</p>
                            </v-col>
                            <v-col cols="7" class="mt-5">
                                <v-btn block class="rounded-xl text-none py-6" color="#19D3C5" @click="closeDialog">Entendido</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <!--<v-btn color="primary" text @click="dialog = false">I accept</v-btn>-->
                    </v-card-actions>
                </v-card>
            </v-dialog>

        </section>

    </div>
</template>

<script>
import { COMPLETIONSTATEMENT_TYPES } from '@babel/types'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            headers: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Maker', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Code', value: 'Name'},
                {text: 'Flow index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'IZOD Impact', value: 'Impacto_IZOD__c'},
                {text: 'Flexural modulus', value: 'Modulo_de_flexi_n__c'},
                {text: 'Flexural modulus', value: ''},
                {text: 'Color', value: 'Color__c'},
                {text: 'Transformation method', value: 'Extrusion__r.Name'},
                {text: 'Description', value: 'Description__c'},
            ],
            headersPE: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Maker', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Code', value: 'Name'},
                {text: 'Group', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Flow index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'Density', value: 'Densidad__c'},
                {text: 'Description', value: 'Detalles_producto_web__c'},
                {text: 'Transformation method', value: 'Extrusion__r.Name'},
                {text: 'Markets', value: 'Extrusion__r.Name'},
                {text: 'Description', value: 'Description__c'},
            ],
            headersPP: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Maker', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Code', value: 'Name'},
                {text: 'Flow index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'Impacto IZOD', value: 'Impacto_IZOD__c'},
                {text: 'Flexural modulus', value: 'Modulo_de_flexi_n__c'},
                {text: 'Description', value: 'Detalles_producto_web__c'},
                {text: 'Transformation method', value: 'Extrusion__r.Name'},
                {text: 'Markets', value: 'Extrusion__r.Name'},
                {text: 'Description', value: 'Description__c'},
            ],
            headersEstirenicos: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Maker', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Code', value: 'Name'},
                {text: 'Flow index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'IZOD Impact', value: 'Impacto_IZOD__c'},
                {text: 'Flexural modulus', value: 'Modulo_de_flexi_n__c'},
                {text: 'Transformation method', value: 'Extrusion__r.Name'},
                {text: 'Markets', value: 'Extrusion__r.Name'},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersRotomoldeo: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Maker', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Code', value: 'Name'},
                {text: 'Flow index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'Base Resin', value: ''},
                {text: 'Color', value: 'Color__c'},
                {text: 'Density', value: 'Densidad__c'},
                {text: 'Additive', value: 'Aditivo__c'},
                {text: 'Markets', value: ''},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersPVC: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Maker', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Code', value: 'Name'},
                {text: 'Group', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Flow Index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'Density', value: 'Densidad__c'},
                {text: 'Transformation Method', value: 'Aditivo__c'},
                {text: 'Markets', value: ''},
                {text: 'Hardness', value: 'Dureza_Shore__c'},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersIng: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Maker', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Code', value: 'Name'},
                {text: 'Group', value: 'Proveedor_Pweb__r.Name'},
                {text: 'IZOD Impact', value: 'Impacto_IZOD_P__c'},
                {text: 'Flexural modulus', value: 'Modulo_de_flexi_n__c'},
                {text: 'Density', value: 'Densidad__c'},
                {text: 'Transformation Method', value: 'Aditivo__c'},
                {text: 'Markets', value: ''},
                {text: 'Viscosidad', value: 'Dureza_Shore__c'},
                {text: 'Description', value: 'Detalles_producto_web__c'},
            ],
            headersMaster: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Maker', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Code', value: 'Name'},
                {text: 'Flow index', value: 'Indice_de_Fluidez_p__c'},
                {text: 'Base Resin', value: ''},
                {text: 'Color', value: 'Color__c'},
                {text: 'Concentration', value: 'Concentraci_n__c'},
                {text: 'Density', value: 'Densidad__c'},
            ],
            search: ''
        }
    },
    computed: {
        ...mapState([
            'windowHeight',
            'windowSize',
            'pageSearchProducts',
            'tablePE',
            'tablePP',
            'tableEstirenicos', 
            'tablePVC', 
            'tableCompuestosprecolor',
            'tableRotomoldeo',
            'tablePVC',
            'tableIngenieria',
            'tableMasterbatch',
            'valMercado',
            'valFabricante',
            'valProducto',
            'valMTransformacion',
            'showMsgProd'
        ])
    },
    methods: {
        closeDialog(){
            this.$store.commit('StateAssign', {showMsgProd: false})
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300&display=swap');

.font-title{
    font-family: 'Archivo' !important;
}
.text-decoration-none{
    text-decoration: none !important;
}

</style>