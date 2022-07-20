<template>
    <div class="bg-polnacblue">
        <v-row justify="center">
            <v-col cols="12" align="center">
                <h1 class="mt-16 font-archivo font-size-40 white--text font-weight-bold">POLNAC Blue</h1>
            </v-col>
            <v-col cols="10" lg="6" md="6" sm="10" xs="10" align="center">
                <p class="title white--text mt-10 mb-16">
                    ¿Qué es <span class="yellow--text font-weight-bold">POLNAC</span> Blue? Armonía, un balance triple: Económico, Social y Ambiental. 
                    Armonía, entre nuestra industria y el medio ambiente. 
                </p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg-polnacblue{
    background-image: linear-gradient(to right,rgba(25, 211, 197, 0.9), rgba(61, 124, 201, 0.9)), url('../../static/polnacblue/bg-polnacblue.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
</style>