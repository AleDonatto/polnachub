<template>
    <layout-dashboard>
        <v-row justify="center" class="mt-10 mb-16">
            <v-col cols="12">
                <v-data-table :headers="headersCuenta" :items="items">
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
                {text: 'Factura', value: 'factura'},
                {text: 'Etapa', value: 'etapa'},
                {text: 'Monto Restante', value: 'montoRestante'},
                {text: 'Fecha de Vencimiento', value: 'fecha'},
                {text: 'Pedido', value: 'pedido'},
                {text: 'Monto', value: 'monto'},
                {text: 'Comentarios', value: 'comentarios'},
            ],
            items: [
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
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