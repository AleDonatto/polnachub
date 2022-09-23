<template>
    <layout-dashboard>
        <v-row justify="center" class="mt-10">
            <v-col cols="6">
                <h1 class="font-size-24">Línea de crédito </h1>
            </v-col>
            <v-col cols="6" align="end">
                <h1 class="font-size-24">500,000,000.00 USD</h1>
            </v-col>
            <v-col cols="12">
                <v-slider v-model="lineaCredito" color="#19D3C5" track-color="#19D3C5" class=""></v-slider>
            </v-col>
        </v-row>
        <v-row justify="center" class="">
            <v-col cols="6">
                <h1 class="font-size-24">Crédito disponible</h1>
            </v-col>
            <v-col cols="6" align="end">
                <h1 class="font-size-24">500,000,000.00 USD</h1>
            </v-col>
            <v-col cols="12">
                <v-slider v-model="creditoUser" color="#773DBD" track-color="#773DBD" class=""></v-slider>
            </v-col>
        </v-row>
        <v-row justify="center" class="mb-16">
            <v-col cols="6">
                <p class="font-size-18 font-weight-bold">Categoría de cliente</p>
                <p>C</p>
                <v-divider></v-divider>
            </v-col>
            <v-col cols="6">
                <p class="font-size-18 font-weight-bold">Facturas pendientes/vencidas</p>
                <p>0</p>
                <v-divider></v-divider>
            </v-col>

            <v-col cols="6">
                <p class="font-size-18 font-weight-bold">Crédito tolerancia</p>
                <p>$0.00</p>
                <v-divider></v-divider>
            </v-col>
            <v-col cols="6">
                <p class="font-size-18 font-weight-bold">Monto facturas</p>
                <p>$0.00</p>
                <v-divider></v-divider>
            </v-col>

            <v-col cols="6">
                <p class="font-size-18 font-weight-bold">Promedio días de pago</p>
                <p>$0.00</p>
                <v-divider></v-divider>
            </v-col>
            <v-col cols="6">
                <p class="font-size-18 font-weight-bold">Monto pedidos abiertos</p>
                <p>$0.00</p>
                <v-divider></v-divider>
            </v-col>
        </v-row>
    </layout-dashboard>
</template>

<script>
import LayoutDashboard from './LayoutDashboard.vue'
export default {
    components: {
        LayoutDashboard
    },
    data() {
        return {
            lineaCredito: 70,
            creditoUser: 50
        }
    }
}
</script>

<style>

</style>