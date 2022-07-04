<template>
    <div class="bg-about">
        <v-row justify="center" class="py-10">
            <v-col cols="12" class="mt-12" align="center">
                <h1 class="white--text">¿Quiénes somos?</h1>
            </v-col>
            <v-col cols="9" class="mt-5 mb-10" align="center">
                <p class="title white--text">
                    Desde 1984, <span class="yellow--text">POLNAC</span> ha construido unas historia basada en la innovación, <br>
                    el compromiso, y la excelencia. <span class="yellow--text">POLNAC</span>: siempre comprometido, siempre a la vanguardia.
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
    background-image: linear-gradient(rgba(46, 46, 101, 0.9),rgba(119, 61, 189, 0.9)),url('../../static/aboutus/bg-about.png');
    mix-blend-mode: normal;
    opacity: 0.9;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
</style>