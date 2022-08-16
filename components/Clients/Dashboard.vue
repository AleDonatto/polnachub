<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" align="center">
                        <h1 class=" mt-16 font-size-34">Mi cuenta</h1>
                    </v-col>
                </v-row>
                <v-row justify="center" class="mb-10">
                    <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                        <v-card class="border-option">
                            <div class="d-flex justify-start pa-2 mt-2">
                                <img src="../../static/dashboard/perfil.png" height="27" />
                                <p class=" ml-2 font-size-22 font-weight-bold">Perfil</p>
                            </div>
                            <v-divider class="mx-2"></v-divider>
                            <p class="font-size-18 pa-2">Información general de la empresa, datos fiscales.</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                        <v-card class="border-option">
                             <div class="d-flex justify-start pa-2 mt-2">
                                <img src="../../static/dashboard/contacto.png" height="27" />
                                <p class=" ml-2 font-size-22 font-weight-bold">Contactos</p>
                            </div>
                            <v-divider class="mx-2"></v-divider>
                            <p class="font-size-18 pa-2">Contactos de la empresa.</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                        <v-card class="border-option">
                             <div class="d-flex justify-start pa-2 mt-2">
                                <img src="../../static/dashboard/credito.png" height="27" />
                                <p class=" ml-2 font-size-22 font-weight-bold">Crédito</p>
                            </div>
                            <v-divider class="mx-2"></v-divider>
                            <p class="font-size-18 pa-2">Información de crédito y saldos.</p>
                        </v-card>
                    </v-col>

                    <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                        <v-card class="border-option">
                             <div class="d-flex justify-start pa-2 mt-2">
                                <img src="../../static/dashboard/destinos.png" height="27" />
                                <p class=" ml-2 font-size-22 font-weight-bold">Destinatarios</p>
                            </div>
                            <v-divider class="mx-2"></v-divider>
                            <p class="font-size-18 pa-2">Direcciones de entrega de material.</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                        <v-card class="border-option">
                             <div class="d-flex justify-start pa-2 mt-2">
                                <img src="../../static/dashboard/estados.png" height="27" />
                                <p class=" ml-2 font-size-22 font-weight-bold">Estados de cuenta</p>
                            </div>
                            <v-divider class="mx-2"></v-divider>
                            <p class="font-size-18 pa-2">Estados de cuenta, facturas y estatus.</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xs="12">
                        <v-card class="border-option">
                             <div class="d-flex justify-start pa-2 mt-2">
                                <img src="../../static/dashboard/pedidos.png" height="27" />
                                <p class=" ml-2 font-size-22 font-weight-bold">Pedidos</p>
                            </div>
                            <v-divider class="mx-2"></v-divider>
                            <p class="font-size-18 pa-2">Detalles de últimos pedidos y rastreo.</p>
                        </v-card>
                    </v-col>

                    <v-col cols="12" lg="4" md="4" sm="12" xs="12" :class="{'mb-16': windowSize> 1129 }">
                        <v-card class="border-option">
                             <div class="d-flex justify-start pa-2 mt-2">
                                <img src="../../static/dashboard/casos.png" height="27" />
                                <p class=" ml-2 font-size-22 font-weight-bold">Casos</p>
                            </div>
                            <v-divider class="mx-2"></v-divider>
                            <p class="font-size-18 pa-2">Consulta y creación de casos.  Incidencias.</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" sm="12" xs="12" class="mb-16">
                        <v-card class="border-option" disabled>
                             <div class="d-flex justify-start pa-2 mt-2">
                                <img src="../../static/dashboard/experiencia.png" height="27" />
                                <p class=" ml-2 font-size-22 font-weight-bold">Mi experiencia</p>
                            </div>
                            <v-divider class="mx-2"></v-divider>
                            <p class="font-size-18 pa-2">Encuestas de satisfacción, centro de ayuda y preguntas frecuentes.</p>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight'])
    }
}
</script>

<style scoped>
.border-option{
    border: 1px solid #130A1F;
    border-radius: 20px !important;
    border-color: #130A1F !important;
    border-width: 1px !important;
    text-decoration: dotted;
    height: 180px;
}
</style>