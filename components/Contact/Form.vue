<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="10">
                        <h1 class="font-archivo font-size-34 font-weight-bold text-center mt-16">Contáctanos con solo dos pasos</h1>
                    </v-col>
                </v-row>
                <v-stepper v-model="e1" class="mt-10 mb-16 shadow-none">
                    <v-stepper-header>
                        <v-row>
                            <v-col cols="6">
                                <v-stepper-step :complete="e1 > 1" step="1" color="#19D3C5"></v-stepper-step>
                            </v-col>
                            <v-col cols="6">
                                <v-stepper-step :complete="e1 > 2" step="2" color="#19D3C5"></v-stepper-step>
                            </v-col>
                        </v-row>
                    </v-stepper-header>

                    <div>
                        <v-progress-linear :value="progress" color="#19D3C5"></v-progress-linear>
                    </div>

                    <v-stepper-items class="">
                        <v-stepper-content step="1" class="mb-2">
                            <v-row>
                                <v-col cols="12">
                                    <h1 class="font-archivo font-size-20 font-weight-bold">Selecciona un mercado</h1>
                                    <v-sheet class="mx-auto">
                                        <v-slide-group v-model="model" class="pa-4" show-arrows>
                                            <v-slide-item v-for="(item ,index) in mercado" :key="index" v-slot="{ active, toggle }">
                                                <v-card class="ma-4" @click="toggle" height="160" width="280"  :color="active ? 'primary' : 'white'">
                                                    <v-row class="fill-height" align="center" justify="center">
                                                       <v-img class="ma-4" :src="item.img" contain max-height="150" max-width="280" :class="{'z-index-lower': active }"></v-img>
                                                        <v-scale-transition class="z-index-1">
                                                            <v-icon v-if="active" class="z-index-1" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                                                        </v-scale-transition>
                                                    </v-row>
                                                </v-card>
                                            </v-slide-item>
                                        </v-slide-group>
                                    </v-sheet>        
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <h1 class="font-archivo font-size-20 font-weight-bold">Selecciona un producto</h1>
                                    <v-sheet class="mx-auto">
                                        <v-slide-group v-model="model2" class="pa-4" active-class="success" show-arrows>
                                            <v-slide-item v-for="(item, index) in productos" :key="index" v-slot="{ active, toggle }">
                                                <v-card class="ma-4" @click="toggle" height="160" width="280"  :color="active ? 'primary' : 'white'">
                                                    <v-row class="fill-height" align="center" justify="center">
                                                        <v-img class="ma-4" :src="item.img" contain max-height="150" max-width="280" :class="{'z-index-lower': active }"></v-img>
                                                        <v-scale-transition class="z-index-1">
                                                            <v-icon v-if="active" class="z-index-1" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                                                        </v-scale-transition>
                                                    </v-row>
                                                </v-card>
                                            </v-slide-item>
                                        </v-slide-group>
                                    </v-sheet>        
                                </v-col>
                            </v-row>

                            <v-row justify="center">
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <p class="font-archivo font-size-20 font-weight-bold">Resina de interés</p>
                                    <v-select class="rounded-xl" outlined label="Selecciona tipo de resina"></v-select>
                                </v-col>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <p class="font-archivo font-size-20 font-weight-bold">Promedio de toneladas mensuales</p>
                                    <v-select class="rounded-xl" outlined label="Selecciona rango promedio"></v-select>
                                </v-col>
                            </v-row>

                            <v-row justify="end">
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12" align="right">
                                    <v-btn block color="#19D3C5" class="py-6 px-4 rounded-xl text-none d-flex justify-space-between" @click="nextStep">
                                        <span class="text-left">Continuar</span>
                                        <v-icon right>mdi-chevron-right</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <v-form>
                                <p class="my-5 font-size-20 font-weight-bold">Llena el siguiente formulario</p>
                                <v-row>
                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-text-field label="Nombes" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-text-field label="Apellidos" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-text-field label="Empresa" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-select solo outlined class="rounded-xl" label="Área" :items="area" item-text="value" item-value="value"></v-select>
                                    </v-col>

                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-select label="Industria de la empresa" solo outlined class="rounded-xl" :items="industria" item-text="value" item-value="value"></v-select>
                                    </v-col>
                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-text-field label="Celular" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-text-field label="Teléfono fijo" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-text-field label="Extensión" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-text-field label="Código Postal" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-select label="País" solo outlined class="rounded-xl"></v-select>
                                    </v-col>

                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-select label="Estado" solo outlined class="rounded-xl"></v-select>
                                    </v-col>
                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-select label="Ciudad" solo outlined class="rounded-xl"></v-select>
                                    </v-col>

                                    <v-col cols="12">
                                        <v-select label="¿Cómo te enteraste de POLNAC?" solo outlined class="rounded-xl"></v-select>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea solo outlined class="rounded-xl" label="Cuéntanos brevemente qué deseas consultar con nosotros."></v-textarea>
                                    </v-col>

                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-checkbox label="Soy cliente" color="#19D3C5" class="color-checkbox"></v-checkbox>
                                    </v-col>
                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-checkbox label="Aceptar Aviso de Privacidad" color="#19D3C5"></v-checkbox>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-btn block color="#19D3C5" outlined class="py-6 px-4 rounded-xl text-none d-flex justify-space-between" @click="previousStep">
                                            <v-icon left color="black">mdi-chevron-left</v-icon>
                                            <span class="text-left black--text">Regresar</span>
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                        <v-btn block color="#19D3C5" class="py-6 px-4 rounded-xl text-none d-flex justify-space-between" @click="dialog = !dialog">
                                            <span class="text-left">Enviar</span>
                                            <v-icon right>mdi-chevron-right</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-container>
        </section>


        <v-dialog v-model="dialog" width="700">
            <v-card elevation="6">
                <v-card-title>
                    <v-row justify="end">
                        <v-col cols="2">
                            <v-btn outlined color="white"  @click="dialog = false">
                                <v-img src="/contact/line.png" contain max-width="25"></v-img>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-title>

                <v-card-text>
                    <v-row justify="center">
                        <v-col cols="6">
                            <v-img src="/contact/dialog.png" contain max-height="120"></v-img>
                        </v-col>
                        <v-col cols="12">
                            <h1 class="font-size-24 font-weight-bold text-center black--text">¡Tu mensaje ha sido enviado!</h1>
                        </v-col>
                        <v-col cols="8">
                            <p class="text-body-all text-center text-center black--text">Gracias por tu mensaje. Te responderemos lo antes posible en tu correo.</p>
                        </v-col>
                        <v-col cols="7" class="mt-5">
                            <v-btn block class="rounded-xl text-none py-6" color="#19D3C5" @click="dialog = false">Entendido</v-btn>
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
export default {
    data (){
        return{
            e1: 1,
            model: null,
            model2: null,
            progress: 55,
            dialog: false,
            mercado: [
                {img: require('../../static/contact/consumo.png') },
                {img: require('../../static/contact/flexible.png') },
                {img: require('../../static/contact/rigido.png') },
                {img: require('../../static/contact/agricola.png') },
                {img: require('../../static/contact/personal.png') },
                {img: require('../../static/contact/electrico.png') },
                {img: require('../../static/contact/industrial.png') },
                {img: require('../../static/contact/construccion.png') },
                {img: require('../../static/contact/calzado.png') },
                {img: require('../../static/contact/medico.png') },
            ],
            productos: [
                {img: require('../../static/contact/plasticos.png') },
                {img: require('../../static/contact/compuestos.png') },
                {img: require('../../static/contact/masterbatch.png') },
                {img: require('../../static/contact/aditivos.png') },
                {img: require('../../static/contact/calcio.png') },
                {img: require('../../static/contact/rotomoldeo.png') },
                {img: require('../../static/contact/pvc.png') },
                {img: require('../../static/contact/termoplasticos.png') },
                {img: require('../../static/contact/biodegradables.png') },
                {img: require('../../static/contact/hules.png') },
                {img: require('../../static/contact/polietileno.png') },
                {img: require('../../static/contact/polipropileno.png') },
                {img: require('../../static/contact/estirenicos.png') },
            ],
            area: [
                {value: 'Almacén'},
                {value: 'Calidad'},
                {value: 'Comercial'},
                {value: 'Compras'},
                {value: 'Dirección'},
                {value: 'Investigación'},
                {value: 'Logística'},
                {value: 'Mercadotecnia'},
                {value: 'Operaciones'},
                {value: 'Producción'},
                {value: 'Tesorería / Contabilidad'},
                {value: 'Otra'},
            ],
            industria: [
                {value: 'Consumo'},
                {value: 'Empaque Flexible'},
                {value: 'Empaque Rígico'},
                {value: 'Agrícola'},
                {value: 'Cuidado Personal'},
                {value: 'Eléctrico-Electrónico'},
                {value: 'Electrodomésticos'},
                {value: 'Industrial'},
                {value: 'Automotriz y Transportación'},
                {value: 'Construcción'},
                {value: 'Calzado y textil'},
                {value: 'Médico y farmacéutico'},
                {value: 'Otra'},
            ]
        } 
    },
    methods: {
        nextStep(){
            this.progress = 100
            this.e1 = 2
        },
        previousStep(){
            this.progress = 55
            this.e1 = 1
        }
    }
}
</script>

<style scoped>
.z-index-1{
    position:relative; 
    z-index:1;
}

.z-index-lower{
z-index: 0.2;
}
.content-left{
    justify-content: left !important;
}
.color-checkbox{
    color: #19D3C5 !important;
}
.shadow-none{
    box-shadow: none !important;
}
.click-image{
    background: linear-gradient(0deg, rgba(101, 93, 198, 0.4), rgba(101, 93, 198, 0.4));
}
</style>