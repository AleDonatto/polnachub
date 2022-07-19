<template>
    <div class="bg-grupo">
        <v-row justify="center">
            <v-col cols="8" align="center" class="mt-16">
                <h1 class="mt-5 font-archivo text-h3 white--text font-weight-bold">Grupo POLNAC</h1>

                <p class="title white--text mt-8 mb-16">
                    Desde 1984, la familia <span class="yellow--text font-weight-bold">POLNAC</span> ha acrecentado sus miembros. <br>
                    Hoy en día son tres empresas y 8 marcas las cuales forman parte del grupo líder en soluciones de la industria plástica.
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

.bg-grupo{
    background-image: linear-gradient(to right, rgba(25, 211, 197, 0.7),rgba(61, 124, 201, 0.7)), url('../../static/group/bg-grupo-polnac.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
.max-heigh-desktop{
    height: 390px;
}
.max-height-mb{
    height: 540px;
}

</style>