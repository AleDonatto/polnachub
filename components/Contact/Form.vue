<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center">
                    <v-col cols="10">
                        <h1 class="font-archivo font-size-34 font-weight-bold text-center mt-16">Contáctanos con solo dos pasos</h1>
                    </v-col>
                </v-row>
                <v-stepper v-model="e1" class="my-16">
                    <v-stepper-header>
                        <v-row>
                            <v-col>
                                <v-stepper-step :complete="e1 > 1" step="1"></v-stepper-step>
                            </v-col>
                            <v-col>
                                <v-stepper-step :complete="e1 > 2" step="2"></v-stepper-step>
                            </v-col>
                            <v-col cols="12">
                                
                            </v-col>
                        </v-row>
                    </v-stepper-header>

                    <v-stepper-items>
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
                                <v-col cols="6">
                                    <p class="font-archivo font-size-20 font-weight-bold">Resina de interés</p>
                                    <v-select class="rounded-xl" outlined label="Selecciona tipo de resina"></v-select>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-archivo font-size-20 font-weight-bold">Promedio de toneladas mensuales</p>
                                    <v-select class="rounded-xl" outlined label="Selecciona rango promedio"></v-select>
                                </v-col>
                            </v-row>

                            <v-row justify="end">
                                <v-col cols="6" align="right">
                                    <v-btn block color="#19D3C5" class="py-6 px-4 rounded-xl text-none d-flex justify-space-between" @click="e1 = 2">
                                        <span class="text-left">Continuar</span>
                                        <v-icon right>mdi-chevron-right</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>

                            <!--<v-btn
                            color="primary"
                            @click="e1 = 2"
                            >
                            Continue
                            </v-btn>

                            <v-btn text>
                            Cancel
                            </v-btn>-->
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <v-form>
                                <v-row>
                                    <v-col cols="6">
                                        <v-text-field label="Nombes" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-text-field label="Apellidos" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field label="Empresa" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-text-field label="Área" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field label="Industria de la empresa" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-text-field label="Celular" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field label="Teléfono fijo" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-text-field label="Extensión" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field label="Código Postal" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-text-field label="País" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field label="Estado" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-text-field label="Ciudad" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <v-text-field label="¿Cómo te enteraste de POLNAC?" solo outlined class="rounded-xl"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea solo outlined class="rounded-xl" label="Cuéntanos brevemente qué deseas consultar con nosotros."></v-textarea>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="6">
                                        <v-checkbox label="Soy cliente"></v-checkbox>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-checkbox label="Aceptar Aviso de Privacidad"></v-checkbox>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="6">
                                        <v-btn block color="#19D3C5" outlined class="py-6 px-4 rounded-xl text-none d-flex justify-space-between" @click="e1 = 1">
                                            <v-icon left color="black">mdi-chevron-left</v-icon>
                                            <span class="text-left black--text">Regresar</span>
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-btn block color="#19D3C5" class="py-6 px-4 rounded-xl text-none d-flex justify-space-between">
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
    </div>
</template>

<script>
export default {
    data (){
        return{
            e1: 1,
            model: null,
            model2: null,
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
            ]
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
</style>