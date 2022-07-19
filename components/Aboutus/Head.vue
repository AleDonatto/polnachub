<template>
    <div class="bg-about">
        <v-row justify="center" class="py-10">
            <v-col cols="12" class="mt-12" align="center">
                <h1 class="font-archivo text-h3 white--text font-weight-bold">¿Quiénes somos?</h1>
            </v-col>
            <v-col cols="9" class="mt-5 mb-10" align="center">
                <p class="title white--text">
                    Desde 1984, <span class="letters font-weight-bold">POLNAC</span> ha construido unas historia basada en la innovación, <br>
                    el compromiso, y la excelencia. <span class="letters font-weight-bold">POLNAC</span>: siempre comprometido, siempre a la vanguardia.
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

.bg-about{
    /**url('../../static/aboutus/bg-about.png') */
    background-image: linear-gradient(to right, rgba(58, 136, 231, 0.9),rgba(119, 61, 189, 0.8)), url('../../static/aboutus/bg-about.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
.letters{
    color: #E0E621
}

</style>