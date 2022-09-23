<template>
    <layout-dashboard>
        <v-form class="mt-10 mb-3">
            <v-row justify="center">
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" outlined rounded filled label="RFC"></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" outlined rounded filled label="Razón social"></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" outlined rounded filled label="Condiciones de pago"></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" outlined rounded filled label="Dirección Fiscal"></v-text-field>
                </v-col>

                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" outlined rounded filled label="Industria de la empresa"></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" outlined rounded filled label="Sucursal que atiende"></v-text-field>
                </v-col>

                <v-col cols="12" lg="6" md="6">
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-select outlined rounded filled label="Divisa"></v-select>
                </v-col>

                <v-col cols="12" lg="8" md="8">
                    <p class="font-size-16">*Si deseas realizar alguna actualización de estos datos, contacta tu agente comercial.</p>
                </v-col>
                <v-col cols="12" lg="4" md="4" align="end">
                    <v-btn class="primary-color black--text text-none rounded-xl px-10 py-4">Solicitud de cambios</v-btn>
                </v-col>
            </v-row>
        </v-form>
        <v-divider></v-divider>
        <v-row justify="center" class="mb-16">
            <v-col cols="12" class="">
                <p class="font-size-20 my-5">Selecciona y guarda el/los productos de tu interés:</p>

                <v-row justify="center" class="bg-interes rounded-lg">
                    <v-col>

                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" align="center" class="my-3">
                <v-btn class="text-none primary-color blac--text rounded-xl px-10 py-4">
                    Guardar productos de interés
                </v-btn>
            </v-col>
        </v-row>
    </layout-dashboard>
</template>

<script>
import LayoutDashboard from './LayoutDashboard.vue'
export default {
    components: { LayoutDashboard },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.bg-interes{
    background-color: #3D7CC9;
    opacity: 0.2;
}
</style>