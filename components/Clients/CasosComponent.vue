<template>
    <layout-dashboard>
        <v-row justify="center" class="mt-5 mb-16">
            <v-col cols="12" align="end">
                <v-btn class="primary-color text-none" rounded>
                    Crear nuevo caso
                </v-btn>
            </v-col>
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
import LayoutDashboard from './LayoutDashboard.vue'
export default {
    components: { LayoutDashboard },
    data(){
        return {
            headersCuenta: [
                {text: 'Numero de Caso', value: 'factura'},
                {text: 'Asunto', value: 'etapa'},
                {text: 'Casos', value: 'montoRestante'},
                {text: 'Fecha de Apertura', value: 'fecha'},
            ],
            items: [
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
            ]
        }
    }
}
</script>

<style>

</style>