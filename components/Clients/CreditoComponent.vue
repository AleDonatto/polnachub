<template>
    <layout-dashboard>
        <v-row justify="center" class="mt-10">
            <v-col cols="6">
                <h1 class="font-size-24">Línea de crédito </h1>
            </v-col>
            <v-col cols="6" align="end">
                <!--<h1 class="font-size-24" v-if="this.creditData">{{this.creditData[0].Linea_de_credito__c }} USD</h1>-->
                <h1 class="font-size-24" >1000 USD</h1>
            </v-col>
            <v-col cols="12">
                <v-progress-linear :value="lineaCredito" color="#19D3C5" height="25"></v-progress-linear>
            </v-col>
        </v-row>
        <v-row justify="center" class="">
            <v-col cols="6">
                <h1 class="font-size-24">Crédito disponible</h1>
            </v-col>
            <v-col cols="6" align="end">
                <!--<h1 class="font-size-24" v-if="this.creditData">{{this.creditData[0].Credito_disponible__c}} USD</h1>-->
                <h1 class="font-size-24">1000 USD</h1>
            </v-col>
            <v-col cols="12">
                <v-progress-linear :value="creditoUser" color="#773DBD" height="25" ></v-progress-linear>
            </v-col>
        </v-row>
        <!--v-for="(credit, index) in this.creditData" :key="index"-->
        <v-row justify="center" class="mb-16" >
            <!--<v-col cols="6">
                <p class="font-size-18 font-weight-bold">Categoría de cliente</p>
                --<p>{{credit.Categoria_de_cliente__c || 0}}</p>--
                <v-divider></v-divider>
            </v-col>-->
            <!--FORMULAR QUE SI ES CONTADO NO SALEN OPCIONES DE CRÉDITO, CLIENTES DE CONTADO NO TIENEN CRÉDITO-->
            <v-col cols="6">
                <p class="font-size-18 font-weight-bold">Facturas pendientes/vencidas</p>
                <!--<p>{{ credit.Facturas_pendientes_vencidas__c}}</p>-->
                <p>0</p>
                <v-divider></v-divider>
            </v-col>

            <v-col cols="6">
                <p class="font-size-18 font-weight-bold">Crédito tolerancia</p>
                <!--<p>$ {{credit.Credito_tolerancia__c}}</p>-->
                <p>$ 0</p>
                <v-divider></v-divider>
            </v-col>
            <v-col cols="6">
                <p class="font-size-18 font-weight-bold">Monto facturas</p>
                <!--<p>$ {{credit.Monto_Facturas__c}}</p>-->
                <p>$ 0</p>
                <v-divider></v-divider>
            </v-col>

            <!--<v-col cols="6">
                <p class="font-size-18 font-weight-bold">Promedio días de pago</p>
                <p>$0.00</p>
                <v-divider></v-divider>
            </v-col>-->
            <v-col cols="6">
                <p class="font-size-18 font-weight-bold">Monto pedidos abiertos</p>
                <!--<p>$ {{credit.Monto_pedidos_abiertos__c}}</p>-->
                <p>$ 0</p>
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
            creditoUser: 0,
            creditData: null
        }
    },
    mounted() {
        //this.getCredito()
    },
    methods: {
        async getCredito(){
            const credito = await this.$store.dispatch('getCreditClient')
            this.creditData = credito.records

            if(this.creditData[0].Credito_disponible__c > 0){
                this.creditoUser = this.creditData[0].Linea_de_credito__c - this.creditData[0].Credito_disponible__c
            }else {
                this.creditoUser = this.creditData[0].Credito_disponible__c 
            }
            console.log(this.creditoUser)


        }
    }
}
</script>

<style>

</style>