<template>
    <layout-dashboard>
        <!--Estados de cuentas son las facturas-->
        <!--DEBEN SALIR LAS ÚLTIMAS 6 FACTURAS-->
        <v-row justify="center" class="mt-10 mb-16">
            <v-col cols="12">
                <v-data-table :headers="headersCuenta" :items="estadoCuentas.records">
                    <template v-slot:item.factura="{ item }">
                        <p class="text-purple text-body-2">{{item.factura}}</p>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </layout-dashboard>
</template>

<script>
import LayoutDashboard from './LayoutDashboard.vue';
export default {
    components: { LayoutDashboard },
    data() {
        return {
            headersCuenta: [
                {text: 'Factura', value: 'Name'},
                {text: 'Etapa', value: 'Etapa__c'},
                {text: 'Monto Restante', value: 'Monto_Restante__c'},
                {text: 'Fecha de Vencimiento', value: 'Fecha_de_Vencimiento__c'},
                {text: 'Pedido', value: 'Pedido__r.Name'},
                {text: 'Monto', value: 'Monto__c'},
                {text: 'Monto Total', value: 'Monto__c'},
                {text: 'Monto Pagado', value: 'Monto__c'},
                {text: 'Comentarios', value: 'Cliente__r.Name'},
            ],
            estadoCuentas: []
        }
    },
    mounted() {
        this.getEstadoCuentas()
    },
    methods: {
        async getEstadoCuentas(){
            this.estadoCuentas = await this.$store.dispatch('getInvoiceClient')
        }
    }

}
</script>

<style>

</style>