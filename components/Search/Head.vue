<template>
    <div>
        <div class="bg-search">
            <v-row justify="center" class="">
                <v-col cols="12" class="mt-16 mb-10" align="center">
                    <h1 class="mt-10 white--text font-title text-h3 font-weight-bold">Buscador de productos</h1>
                </v-col>
            </v-row>
            <v-container v-if="windowSize > 1129">
                <v-row justify="center"> 
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-select placeholder="Tipo de resina" rounded solo></v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-select placeholder="Fabricante" rounded solo></v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-select placeholder="Mercado" rounded solo></v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" class="mb-16">
                        <v-select placeholder="Método de Transformación" rounded solo></v-select>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <div v-if="windowSize < 1229">
            <v-container class="form">
                <v-row justify="center"> 
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-select placeholder="Tipo de resina" rounded outlined solo></v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-select placeholder="Fabricante" rounded outlined solo></v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center">
                        <v-select placeholder="Mercado" rounded outlined solo></v-select>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" xs="12" align="center" class="">
                        <v-select placeholder="Método de Transformación" rounded outlined solo ></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-btn color='#19d3c5' rounded outlined class="text-none text-none" block>
                            <span class="black--text">Cancelar</span>
                        </v-btn>
                    </v-col>
                    <v-col cols="6" class="mb-16">
                        <v-btn rounded color="#19d3c5" class="black--text text-none" block>Aplicar</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </div>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300&display=swap');

.bg-search{
    background-image: linear-gradient(to right,rgba(25, 211, 197, 0.8),rgba(119, 61, 189, 0.8)), url('../../static/search/bg-search.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 420px;
}
.font-title{
    font-family: 'Archivo' !important;
}
.form{
    margin-top: -180px;
    margin-bottom: 60px;
}
</style>