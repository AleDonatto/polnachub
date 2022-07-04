<template>
    <div class="bg-transpolimer">
        <v-row justify="center">
            <v-col cols="12" class="mt-12" align="center">
                <img src="../../static/transpolimer/logotranspolimer.png" alt="logo transpolimer">
            </v-col>
            <v-col cols="10" class="mt-5 mb-10">
                <p class="title text-center white--text">
                    {{ $t('transpolimer.head') }}
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
.bg-transpolimer{
    background-image: linear-gradient(rgba(253, 79, 23, 0.7),rgba(32, 26, 26, 0.7)), url('../../static/transpolimer/bg-transpolimer.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
</style>