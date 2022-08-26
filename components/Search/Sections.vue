<template>
    <div>
        <section v-if="windowSize > 1129">
            <v-container v-if="tableCompuestosprecolor.length === 0">
                <v-row justify="center">
                    <v-col cols="12" align="center" class="mt-16">
                        <h1 class="font-archivo font-weight-bold">Busca en nuestro amplio catálogo por filtros o categorías.</h1>
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

            <v-container v-else class="mb-10">
                <v-card class="mt-10">
                    <v-card-title>
                        Nutricion
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
                        class="elevation-1 mt-16 mb-16"
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

        </section>

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            headers: [
                {text: '', value: 'htecnica', sortable: false },
                {text: 'Fabricante', value: 'Proveedor_Pweb__r.Name'},
                {text: 'Clave', value: 'Name'},
                {text: 'Indice de Fluidez', value: 'Indice_de_Fluidez_p__c'},
                {text: 'Impacto IZOD', value: 'Impacto_IZOD__c'},
                {text: 'Modulo de flexión', value: 'Modulo_de_flexi_n__c'},
                {text: 'Resina Base', value: ''},
                {text: 'Color', value: 'Color__c'},
                {text: 'Metodo de transformcion', value: 'Extrusion__r.Name'},
                {text: 'Descripcion', value: 'Description__c'},
            ],
            search: ''
        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize','tablePE','tablePP','tableEstirenicos', 'tablePVC', 'tableCompuestosprecolor'])
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