<template>
    <layout-dashboard>
        <v-row justify="center" class="mt-10 mb-16">
            <v-col cols="12">
                <v-data-table :headers="headersCuenta" :items="items" show-expand :expanded.sync="expanded" item-key="id">
                    <template v-slot:item.pedido="{ item }">
                        <p class="text-purple text-body-2 font-weight-bold mt-5">
                            {{item.pedido}} <br>
                            Ver detalles
                        </p>
                    </template>
                    <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length">
                            <v-row justify="center">
                                <v-col cols="12" class="text-center">
                                    <p class="font-size-18 font-weight-bold mt-2">Etapa actual de envío</p>
                                </v-col>
                                <v-col align="center">
                                    <div class="pa-3 rounded-circle d-inline-block status circle">
                                        <v-img src="/client/asignado.png" contain class="status circle"></v-img>
                                    </div>
                                    <p>Asignado a unidad</p>
                                </v-col>
                                <v-col align="center">
                                    <div class="pa-3 rounded-circle d-inline-block status">
                                        <v-img src="/client/cargado.png" contain class="status"></v-img>
                                    </div>
                                    <p>Cargado</p>
                                </v-col>
                                <v-col align="center">
                                    <div class="pa-4 mt-2 rounded-circle d-inline-block" :class="{'status-select': item.etapa === 'En Transito' }">
                                        <v-img :src="item.etapa === 'En Transito' ?  '/client/transito-select.png' :'/client/transito.png'" contain :class="{'status-select': item.etapa === 'En Transito' }"></v-img>
                                    </div>
                                    <p>En tránsito</p>
                                </v-col>
                                <v-col align="center">
                                    <div class="pa-3 rounded-circle d-inline-block status">
                                        <v-img src="/client/instalaciones.png" contain class="status"></v-img>
                                    </div>
                                    <p>En instalaciones del cliente</p>
                                </v-col>
                                <v-col align="center">
                                    <div class="pa-3 rounded-circle d-inline-block status">
                                        <v-img src="/client/entregado.png" contain class="status"></v-img>
                                    </div>
                                    <p>Entregado</p>
                                </v-col>
                                <v-col align="center">
                                    <div class="pa-3 rounded-circle d-inline-block status">
                                        <v-img src="/client/firmado.png" contain class="status"></v-img>
                                    </div>
                                    <p>Firmado por el cliente</p>
                                </v-col>
                                <v-col cols="12" align="center">
                                    <hr class="mb-16 line">
                                </v-col>
                            </v-row>
                        </td>
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
    data() {
        return {
            headersCuenta: [
                {text: '', value: 'data-table-expand'},
                {text: 'Nombre Pedido', value: 'pedido'},
                {text: 'Etapa', value: 'etapa'},
                {text: 'Total', value: 'total'},
            ],
            items: [
                {id:1, pedido: 'Pedido', etapa: 'En Transito', total: '99 Ton' },
                {id:2, pedido: 'Pedido', etapa: 'En Transito', total: '99 Ton' },
                {id:3, pedido: 'Pedido', etapa: 'En Transito', total: '99 Ton' },
                {id:4, pedido: 'Pedido', etapa: 'En Transito', total: '99 Ton' },
                {id:5, pedido: 'Pedido', etapa: 'En Transito', total: '99 Ton' },
                {id:6, pedido: 'Pedido', etapa: 'En Transito', total: '99 Ton' },
                {id:7, pedido: 'Pedido', etapa: 'En Transito', total: '99 Ton' },
            ],
            expanded: [],
            singleExpand: false,
        }
    }

}
</script>

<style scoped>
.status{
    background-color: #f2f59d !important;
    border-color:#f2f59d !important;
}

.status-select{
    background-color: #773DBD !important;
    border-color: #773DBD !important;
}
.line{
    margin-top: -13vh;
    height: 2px;
    width: 90%;
    background-color: #655DC6;
    border-color: #655DC6;
    z-index: 100;
}
.circle{
    z-index: 3 !important;
}
</style>