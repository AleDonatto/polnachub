<template>
    <layout-dashboard>
        <v-row justify="center" class="mt-10 mb-16">
            <v-col cols="12">
                <v-data-table :headers="headersCuenta" :items="items" show-expand :expanded.sync="expanded" item-key="id">
                    <template v-slot:item.Name="{ item }">
                        <p class="text-purple text-body-2 font-weight-bold mt-5">
                            {{item.Name}} <br>
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
                                    <div class="pa-3 rounded-circle d-inline-block" :class="{'status-select': item.Etapa__c === 'Creado', 'status': item.Etapa__c !== 'Creado'}">
                                        <v-img :src="item.Etapa__c === 'Creado' ?  '/client/asignado-select.png' :'/client/asignado.png'" contain 
                                        :class="{'status-select': item.Etapa__c === 'Creado', 'status':  item.Etapa__c !== 'Creado' } "></v-img>
                                    </div>
                                    <p>Asignado a unidad</p>
                                </v-col>
                                <v-col align="center">
                                    <div class="pa-3 rounded-circle d-inline-block" :class="{'status-select': item.Etapa__c === 'Cargado', 'status': item.Etapa__c !== 'Cargado'}">
                                        <v-img :src="item.Etapa__c === 'Cargado' ?  '/client/cargado-select.png' :'/client/cargado.png'" contain
                                        :class="{'status-select': item.Etapa__c === 'Cargado', 'status':  item.Etapa__c !== 'Cargado' } "></v-img>
                                    </div>
                                    <p>Cargado</p>
                                </v-col>
                                <v-col align="center">
                                    <div class="pa-4 mt-2 rounded-circle d-inline-block" :class="{'status-select': item.Etapa__c === 'Proceso logístico', 'status':  item.Etapa__c !== 'Proceso logístico'}">
                                        <v-img :src="item.Etapa__c === 'Proceso logístico' ?  '/client/transito-select.png' :'/client/transito.png'" contain 
                                        :class="{'status-select': item.Etapa__c === 'En Transito', 'status':  item.Etapa__c !== 'Proceso logístico' } "></v-img>
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
                                    <div class="pa-3 rounded-circle d-inline-block" :class="{'status-select': item.Etapa__c === 'Recibido por cliente', 'status':  item.Etapa__c !== 'Recibido por cliente'}">
                                        <v-img :src="item.Etapa__c === 'Recibido por cliente' ? '/client/firmado-select.png' : '/client/firmado.png'" contain 
                                        :class="{'status-select': item.Etapa__c === 'Recibido por cliente', 'status':  item.Etapa__c !== 'Recibido por cliente'}"></v-img>
                                    </div>
                                    <p>Firmado por el cliente</p>
                                </v-col>
                                <v-col cols="12" align="center">
                                    <hr class="mb-16 line">
                                </v-col>
                            </v-row>
                            <v-row class="mb-4">
                                <v-col cols="12" lg="6" md="6">
                                    <h1 class="font-size-16 weight-bold">Fecha de entrega</h1>
                                    <p>14/08/2022</p>
                                    <v-divider></v-divider>
                                </v-col>
                                <v-col cols="12" lg="6" md="6">
                                    <h1 class="font-size-16 font-weight-bold">Presentacion</h1>
                                    <p>GRANEL</p>
                                    <v-divider></v-divider>
                                </v-col>

                                <v-col cols="12" lg="6" md="6">
                                    <h1 class="font-size-16 font-weight-bold">Origen</h1>
                                    <p>Mérida</p>
                                    <v-divider></v-divider>
                                </v-col>
                                <v-col cols="12" lg="6" md="6">
                                    <h1 class="font-size-16 font-weight-bold">Destino</h1>
                                    <p>Monterrey</p>
                                    <v-divider></v-divider>
                                </v-col>

                                <v-col cols="12" lg="6" md="6">
                                    <h1 class="font-size-16 font-weight-bold">Etapa del Pedido</h1>
                                    <p>En tránsito</p>
                                    <v-divider></v-divider>
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
                {text: 'Nombre Pedido', value: 'Name'},
                {text: 'Etapa', value: 'Etapa__c'},
                {text: 'Total', value: 'Total__c'},
            ],
            items: [
                {id:1, Name: 'Pedido', Etapa__c: 'En Transito', Total__c: '99 Ton' },
                {id:2, Name: 'Pedido', Etapa__c: 'En Transito', Total__c: '99 Ton' },
                {id:3, Name: 'Pedido', Etapa__c: 'En Transito', Total__c: '99 Ton' },
                {id:4, Name: 'Pedido', Etapa__c: 'En Transito', Total__c: '99 Ton' },
                {id:5, Name: 'Pedido', Etapa__c: 'En Transito', Total__c: '99 Ton' },
                {id:6, Name: 'Pedido', Etapa__c: 'En Transito', Total__c: '99 Ton' },
                {id:7, Name: 'Pedido', Etapa__c: 'En Transito', Total__c: '99 Ton' },
            ],
            expanded: [],
            singleExpand: false,
            pedidos: []
        }
    },
    mounted() {
        this.getPeidos()
    },
    methods: {
        async getPeidos(){
            this.pedidos = await this.$store.dispatch('getOrdersClient')
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