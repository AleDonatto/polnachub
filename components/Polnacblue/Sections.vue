<template>
    <div>
        <section>
            <v-container>
                <v-row class="my-16">
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" align-self="end">
                        <p class="font-size-20">
                            Creemos en potencializar las virtudes del plástico, y a la misma vez, gestionarlo con sabiduría y responsabilidad. 
                            <br><br>
                            Nuestro negocio es contribuir a un mundo próspero, y nuestro propósito de vida es ser una empresa a la vanguardia de un mejor mañana.
                        </p>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                        <v-img src="/polnacblue/sea.png" contain max-height="350"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container>
                <v-row class="mt-2 mb-16" justify="center">
                    <v-col cols="12" align="center">
                        <h1 class="font-archivo text-h3 font-weight-bold">Sobre la Economía Circular</h1>
                    </v-col>
                    <v-col class="mt-5" :class="{'mb-10': windowSize < 1129}" cols="12">
                        <p class="font-size-20">
                            Es una nueva filosofía económica la cual busca imitar los ciclos naturales de la tierra. 
                            Se trata de una evolución hacia una economía regenerativa y justa con el medio ambiente, y 
                            dejar en el pasado el modelo linear de fabricar, usar y tirar. 
                            <br><br>
                            La Economía Circular se fundamenta en tres principios: eliminar los desperdicios y la contaminación, 
                            mantener los recursos en circulación, y regenerar el medio ambiente. La Economía Circular busca 
                            reconstruir y restaurar el capital, sea ya ambiental, económico, social o humano; todo con el afán de 
                            mejorar el flujo de bienes y servicios, y conservar el mundo natural del cual dependemos.
                        </p>
                    </v-col>
                    <v-col cols="12" align="center" v-if="windowSize > 1129">
                        <v-img src="/polnacblue/economia-circular.png" contain max-height="450"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return {

        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize'])
    }
}
</script>

<style>

</style>