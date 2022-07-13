<template>
    <div class="bg-alliances">
        <v-row justify="center" align-content="center">
            <v-col class="mt-12" align="center">
                <p class="font-title text-h3 mt-16 white--text font-weight-bold">
                    Alianzas
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
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300&display=swap');

.bg-alliances{
    background-image: linear-gradient(to right, rgba(61, 124, 201, 1), rgba(119, 61, 189, 0.9)), url('../../static/alliances/bg-alliances.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 350px;
}

.font-title{
    font-family: 'Archivo' !important;
}
</style>