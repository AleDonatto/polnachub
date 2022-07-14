<template>
    <div class="bg-search">
        <v-row justify="center" class="">
            <v-col cols="12" class="mt-16 mb-10" align="center">
                <h1 class="mt-10 white--text font-title text-h3 font-weight-bold">Buscador de productos</h1>
            </v-col>
        </v-row>
        <v-container>
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
</template>

<script>
export default {

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
}
.font-title{
    font-family: 'Archivo' !important;
}
</style>