<template>
    <div>
        <section>
            <v-container>
                <div class="bg-clientbanner rounded-lg mt-12">
                    <v-row justify="center">
                        <v-col cols="8" align="center">
                            <h1 class="white--text text-center mt-8 text-h4 font-weight-bold text-uppercase">PROMOCIÓN de productos</h1>
                            <p class="yellow--text text-center mt-2 font-size-22">Por tiempo limitado</p>
                        </v-col>
                    </v-row>  
                </div>
                <v-row justify="center" class="mt-5 mb-5">
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <!--<p>{{producto}}</p>-->
                        <v-select placeholder="Producto" rounded solo v-model="producto" outlined
                        :items="pProducto.records" item-text="Name" item-value="Name" name="tResina"></v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <!--<p>{{fabricante}}</p>-->
                        <v-select placeholder="Fabricante" rounded solo v-model="fabricante" outlined
                        :items="pFabricante.records" item-text="Name" item-value="Name"></v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <!--<p>{{mercado}}</p>-->
                        <v-select placeholder="Mercado" rounded solo v-model="mercado" outlined
                        :items="pMercado.records" item-text="Name" item-value="Name"></v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" class="">
                        <!--<p>{{mTransformacion}}</p>-->
                        <v-select placeholder="Método de Transformación" rounded solo v-model="mTransformacion" outlined
                        :items="pMetTransformacion.records" item-text="Name" item-value="Name"></v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-btn class="primary-color text-none px-10 py-6" rounded @click="consultarProducto()">Buscar</v-btn>
                        <v-btn class="secondary-color white--text text-none px-10 py-6" rounded @click="cleanFilters">Limpiar Busqueda</v-btn>
                    </v-col>
                    <v-divider class="mx-2"></v-divider>
                </v-row>
                <v-row justify="center" class="mb-5">
                    <v-col cols="9" align="start" align-self="center">
                        <h1 class="font-weight-bold text-h4">Productos</h1>
                    </v-col>
                    <v-col cols="3" align="home" align-self="center">
                        <v-select rounded outlined label="Ordenar por"></v-select>
                    </v-col>
                </v-row>
                <v-row justify="center" class="mb-16">
                    <v-col cols="3" v-for="(item, index) in tablePruebas.records" :key="index" align="center">
                        <v-card :loading="loading" class="mx-auto rounded-lg py-1" max-width="290" max-height="460" elevation="5" v-if="item.Activo_en_web__c === true">
                            <template slot="progress">
                                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                            </template>
                            
                            <v-img height="150" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" contain class="mt-5 rounded-xl"></v-img>
                            
                            <v-card-title class="text-center font-size-18">{{item.Grupos__r.Name +" "+ item.Name}}</v-card-title>
                            <v-divider></v-divider>

                            <v-card-text>
                                <v-row justify="center" class="mx-0">
                                    <v-col cols="4" align="start" class="py-0 my-0 mx-0 px-0">
                                        <p class="font-size-14 font-weight-bold">Saco 15 kg</p>
                                    </v-col>
                                    <v-col cols="8" align="end" class="py-0 my-0 mx-0 px-0">
                                        <p class="font-size-14 font-weight-bold">Inventario: 20 sacos</p>
                                    </v-col>
                                    <v-col cols="12" class="py-0 my-0">
                                        <p class="font-size-28 font-weight-bold">$1,400.00</p>
                                    </v-col>
                                    <v-col cols="8" align="start" class="py-0 my-0" align-self="center">
                                        <p class="text-purple font-size-14 font-weight-bold">$1,176 antes de IVA</p>
                                    </v-col>
                                    <v-col cols="4" align="end" class="py-0 my-0 mx-0 px-0">
                                        <v-btn small class="text-none secondary-color white--text" rounded @click="() => openProductCart(item)">Detalles</v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="white-color text-none" block @click="addProducto(item)">
                                    Agregar a pedido
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <v-dialog v-model="showMsgProd" width="700" overlay-color="#2E2E65">
            <v-card elevation="6">
                <v-card-title>
                    <v-row justify="end">
                        <v-col cols="2">
                            <v-btn outlined color="white"  @click="closeDialog">
                                <v-img src="/contact/line.png" contain max-width="25"></v-img>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-title>

                <v-card-text>
                    <v-row justify="center">
                        <!--<v-col cols="6">
                            <v-img src="/contact/dialog.png" contain max-height="120"></v-img>
                        </v-col>-->
                        <v-col cols="12">
                            <h1 class="font-size-24 font-weight-bold text-center black--text">Buscador de Productos</h1>
                        </v-col>
                        <v-col cols="8">
                            <p class="text-body-all text-center text-center black--text">No hay resultados en la búsqueda.</p>
                        </v-col>
                        <v-col cols="7" class="mt-5">
                            <v-btn block class="rounded-xl text-none py-6" color="#19D3C5" @click="closeDialog">Entendido</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <!--<v-btn color="primary" text @click="dialog = false">I accept</v-btn>-->
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="dProducto" width="750" overlay-color="#2E2E65" persistent>
            <v-card elevation="6">
                <v-card-title>
                    <v-row justify="end">
                        <v-col cols="2">
                            <v-btn outlined color="white"  @click="dProducto = !dProducto">
                                <v-img src="/contact/line.png" contain max-width="25"></v-img>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-title>

                <v-card-text>
                    <v-row justify="center">
                        <v-col cols="6">
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" contain max-height="220" class="rounded-lg"></v-img>
                            <div class="mx-5 mt-4">
                                <p class="font-size-14 font-weight-bold black--text">Clave: {{itemCard.Name}}</p>
                                <p class="font-size-14 font-weight-bold black--text">Inventario: 34 sacos</p>
                                <p class="font-size-14 black--text">
                                    <span class="font-weight-bold">Método de Transformación:</span>
                                    <!--<span v-if="(itemCard.Extrusion__r)">{{itemCard.Extrusion__r.Name}}</span>-->
                                </p>
                                <p class="font-size-14 font-weight-bold black--text">Mercados:</p>
                                <v-row justify="center">
                                    <v-col cols="3"></v-col>
                                </v-row>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div>
                                <p class="font-size-20 text-center font-weight-bold black--text">{{itemCard.Name}}</p>
                                <v-divider></v-divider>
                            </div>
                            <div class="mt-1">
                                <p class="font-size-16 text-left black--text font-weight-bold">Saco de 15 kg</p>
                                <p class="font-size-28 text-center font-weight-bold black--text">$1,400.00 </p>
                                <p class="font-size-14 text-left font-weight-bold text-purple">$1,176 antes de IVA</p>
                                <v-divider></v-divider>
                            </div>
                            <div class="mt-1">
                                <p class="font-size-14 black--text">
                                    <span class="font-weight-bold">Description:</span>  
                                    {{itemCard.Detalles_producto_web__c}}
                                </p>
                                <v-radio-group v-model="radioGroup">
                                    <v-radio label="Entrega a domicilio" value="domicilio" color="#19D3C5"></v-radio>
                                    <v-radio label="Recoge en sucursal POLNAC" value="sucursal" color="#19D3C5" ></v-radio>
                                </v-radio-group>
                                <v-btn class="rounded-xl primary-color text-none py-6" block @click="addProducto(itemCard)">
                                    Agregar a pedidos
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-actions>
                    <!--<v-btn color="primary" text @click="dialog = false">I accept</v-btn>-->
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-snackbar v-model="snackbar" timeout="3000">
            El producto fue agregado a su lista de compras
            <template v-slot:action="{ attrs }">
                <v-btn color="#19D3C5" text v-bind="attrs" @click="snackbar = false"> Cerrar</v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    data() {
        return {
            producto: '',
            fabricante: '',
            mercado: '',
            mTransformacion: '',
            loading: false,
            dProducto: false,
            radioGroup: 'domicilio',
            itemCard: {},
            snackbar: false,
        }
    },
    mounted(){
        setTimeout(() => {
            if(this.credentials !== null){
                this.$store.dispatch('getFabricante')
                this.$store.dispatch('getMercado')
                this.$store.dispatch('getMetodoTransformacion')
                this.$store.dispatch('getProducto')
            }
        }, 6000);
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight', 'pFabricante', 'pMercado', 'pMetTransformacion','pProducto', 'credentials', 
        'showMsgProd', 'tablePruebas'])
    },
    methods: {
        ...mapActions(['searchProducts']),
        async consultarProducto(){
            const datos = {
                producto: this.producto,
                fabricante: this.fabricante,
                mercado: this.mercado,
                mTransformacion: this.mTransformacion
            }
            
            this.$store.dispatch('searchProducts', datos)
        },
        cleanFilters(){
            this.producto = ''
            this.fabricante = ''
            this.mercado = ''
            this.mTransformacion = ''
        },
        closeDialog(){
            this.$store.commit('StateAssign', {showMsgProd: false})
        },
        openProductCart(producto){
            this.dProducto = true
            this.itemCard = producto
            console.log(producto.Extrusion_Blow_Molding__r)
        },
        addProducto(producto){
            const {Name,Detalles_producto_web__c, Grupos__r } = producto
            const item = {
                clave: Name,
                producto: Grupos__r.Name,
                descripcion: Detalles_producto_web__c,
                precioUnidad: 1200,
                tipoPedido: this.radioGroup
            }
            this.$store.dispatch('addListCard', item)
            this.snackbar = true
        }
    }
}
</script>

<style scoped>
.bg-clientbanner{
    background-image: url('../../static/group/bg-banner.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 190px;
}
</style>