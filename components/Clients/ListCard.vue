<template>
    <div class="">
        <v-container>
            <v-row justify="center" class="mt-10">
                <v-col align="start">
                    <h1 class="font-weight-bold font-size-24">Pedidos</h1>
                </v-col>
                <v-col align="end" cols="4">
                    <v-text-field solo rounded outlined prepend-inner-icon="mdi-magnify" label="Buscar"></v-text-field>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row justify="center" class="mb-0">
                <v-col cols="12">
                    <v-data-table :headers="headersCard" :items="card" :items-per-page="10" class="elevation-1 mt-5"> 
                        <template v-slot:item.actions="{item}">
                            <v-btn class="" icon>
                                <v-icon class="" color="#773DBD">mdi-delete</v-icon>
                            </v-btn>
                        </template>

                        <template v-slot:item.tonelada="{item}" >
                            <div class="d-flex max-width">
                                <v-text-field v-model="canTon" outlined solo class="mx-2 mt-5" dense></v-text-field>
                                <v-select v-model="tipo" outlined solo class="mt-5 py-0" rounded :items="itemsTon" item-text="value" item-value="id" dense></v-select>
                            </div>
                        </template>

                        
                        <template v-slot:item.clave="{item}" >
                            <h1 class="font-weight-bold text-body-2">{{item.clave}}</h1>
                        </template>

                        <template v-slot:item.precioUnidad="{item}" >
                            <h1 class="text-body-2">${{item.precioUnidad}} USD</h1>
                        </template>

                        <template v-slot:item.total="{item}" >
                            <h1 class="text-body-2">${{ parseFloat(item.precioUnidad)*canTon}} USD</h1>
                        </template>

                    </v-data-table>
                </v-col>
                <v-col align="end" class="mb-16">
                    <div class="">
                        <nuxt-link to="/client/dashboard" class="decoration-none">
                            <v-btn rounded outlined class="white-color text-none">
                                Añadir más productos
                            </v-btn>
                        </nuxt-link>
                        <v-btn rounded outlined class="white-color text-none">
                            Actualizar pedido
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
            <v-form >
                <v-row justify="center">
                    <v-col cols="10"></v-col>
                    <v-col cols="5" class="my-0 py-0">
                        <p>Escribe el código de cupón si cuentas con uno:</p>
                    </v-col>
                    <v-col cols="5" class="my-0 py-0">
                        <v-text-field outlined rounded label="Cupon"></v-text-field>
                    </v-col>
                    <v-col cols="2"></v-col>

                    <v-col cols="5" class="my-0 py-0">
                        <v-row>
                            <v-col cols="4">
                                <p class="mt-4 font-weight-bold">Tipo de entrega:</p>
                            </v-col>
                            <v-col cols="8">
                                <v-radio-group v-model="radioGroup">
                                    <v-radio label="Entrega a domicilio" value="domicilio" color="#19D3C5"></v-radio>
                                    <v-radio label="Recoge en sucursal POLNAC" value="sucursal" color="#19D3C5" ></v-radio>
                                </v-radio-group>
                                <v-select label="Selecccione Sucursal" outlined rounded :disabled="radioGroup === 'domicilio'"></v-select>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="5" class="my-0 py-0">
                        <v-text-field outlined rounded label="Origin" class="my-0"></v-text-field>
                        <v-text-field outlined rounded label="Destino" class="my-0"></v-text-field>
                        <v-text-field outlined rounded label="Localidad/Zona" class="my-0"></v-text-field>
                    </v-col>
                    <v-col cols="2" align-self="end">
                        <p class="mb-16">$15,000 USD</p>
                        <p>$15,000 USD</p>
                    </v-col>
                </v-row>
                <v-row justify="end">
                    <v-col cols="5"></v-col>
                    <v-col cols="5" align="end" class="my-0 py-0">
                        <p class="font-weight-bold">Subtotal</p>
                    </v-col>
                    <v-col cols="2" class="my-0 py-0">
                        <p class="font-weight-bold">$15,000 USD</p>
                    </v-col>

                    <v-col cols="5"></v-col>
                    <v-col cols="5" align="end" class="my-0 py-0">
                        <p class="font-weight-bold">IVA (16%):</p>
                    </v-col>
                    <v-col cols="2" class="my-0 py-0">
                        <p class="font-weight-bold">$15,000 USD</p>
                    </v-col>

                    <v-col cols="4" align="end" class="my-0 py-0">
                        <p class="font-weight-bold">Forma de pago:</p>
                    </v-col>
                    <v-col cols="3" align="end" class="my-0 py-0">
                        <p class="font-weight-bold">TOTAL:</p>
                    </v-col>
                    <v-col cols="2" class="my-0 py-0">
                        <p class="font-weight-bold">$15,000 USD</p>
                    </v-col>
                </v-row>
                <v-row justify="end" class="my-0 mb-16">
                    <v-col cols="4" align="end" class="my-0 py-0">
                        <v-radio-group v-model="radioPago">
                            <v-radio label="Contado" value="contodo" color="#19D3C5"></v-radio>
                            <v-radio label="Credito POLNAC" value="credito" color="#19D3C5" ></v-radio>
                        </v-radio-group>
                    </v-col>
                    <v-col cols="3" align="end" align-self="center" class="my-0 py-0">
                        <v-btn type="button" class="black--text primary-color text-none rounded-xl px-10" @click="solicitarPedido">FInalizar Pedido</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-container>

        <v-dialog v-model="showCredito" width="700" overlay-color="#2E2E65">
            <v-card elevation="6">
                <v-card-title>
                    <v-row justify="end">
                        <v-col cols="2">
                            <v-btn outlined color="white"  @click="showCredito = !showCredito">
                                <v-img src="/contact/line.png" contain max-width="25"></v-img>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-title>

                <v-card-text>
                    <v-row justify="center">
                        <v-col cols="12">
                            <h1 class="font-size-24 font-weight-bold text-center black--text">Validación de crédito</h1>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="px-6 mb-10">
                        <!--<v-col cols="6">
                            <v-img src="/contact/dialog.png" contain max-height="120"></v-img>
                        </v-col>-->
                        
                        <v-col cols="6">
                            <h1 class="font-size-14">Línea de crédito</h1>
                        </v-col>
                        <v-col cols="6" align="end">
                            <h1 class="font-size-14">500,000,000.00 USD</h1>
                        </v-col>
                        <v-col cols="12">
                            <v-progress-linear color="#19D3C5" height="15" value="70"></v-progress-linear>
                        </v-col>
                        <v-col cols="6">
                            <h1 class="font-size-14">Crédito disponible</h1>
                        </v-col>
                        <v-col cols="6" align="end">
                            <h1 class="font-size-14">500,000,000.00 USD</h1>
                        </v-col>
                        <v-col cols="12">
                            <v-progress-linear color="#773DBD" height="15" value="70"></v-progress-linear>
                        </v-col>
                        <v-col cols="12">
                            <h1 class="font-size-14">Pedido en proceso</h1>
                        </v-col>
                        <v-col cols="12">
                            <v-progress-linear value="40" color="#655DC6" height="15"></v-progress-linear>
                        </v-col>
                        <v-col cols="12" class="mt-5" align="end">
                            <v-btn class="rounded-xl text-none py-6 px-10" color="#19D3C5" @click="showCredito = !showCredito">Aceptar pedido a credito</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <!--<v-btn color="primary" text @click="dialog = false">I accept</v-btn>-->
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data(){
        return {
            headersCard: [
                {text: '', value: 'actions', sortable: false},
                {text: 'Toneladas', value: 'tonelada', sortable: false},
                {text: 'Clave', value: 'clave', sortable: false},
                {text: 'Producto', value: 'producto', sortable: false},
                {text: 'Descripcion', value: 'descripcion'},
                {text: 'Precio Unitario', value: 'precioUnidad', sortable: false},
                {text: 'Total', value: 'total', sortable: false},
            ],
            radioGroup: 'domicilio',
            radioPago: 'credito',
            itemsTon: [
                {id: 1, value: 'Ton'}
            ],
            tipo: 1,
            canTon: 1,
            showCredito: false,
            creditoUser: 70,
            lineaCredito: 70,
            lineaPedido: 40
        }
    },
    computed: {
        ...mapState(['card'])
    },
    methods: {
        solicitarPedido(){
            this.showCredito = true
        }
    }
}
</script>

<style scoped>
.max-width{
    width: 190px !important;   
}
</style>