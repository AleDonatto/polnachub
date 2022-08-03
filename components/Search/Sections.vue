<template>
    <div>
        <section v-if="windowSize > 1129">
            <v-container v-if="tablePVC.length === 0">
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
                            <p class="mt-2 black--text">Masterbach</p>
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

            <v-container v-else>
                <v-data-table
                    :headers="headers"
                    :items="tablePVC"
                    :items-per-page="10"
                    class="elevation-1"
                ></v-data-table>
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
                {text: 'Fabricante', value: 'Fabricante_P__c'},
                {text: 'Clave', value: ''},
                {text: 'Grupo', value: 'Family'},
                {text: 'Dureza/Shore', value: ''},
                {text: 'Indice de Fluidez', value: ''},
                {text: 'Densidad', value: 'Densidad_P__c'},
                {text: 'Descripción (Aditivos y color) ', value: ''},
                {text: 'Método de Transformación', value: ''},
                {text: 'Mercado', value: ''},
            ]
        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize','tablePE','tablePP','tableEstirenicos', 'tablePVC'])
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