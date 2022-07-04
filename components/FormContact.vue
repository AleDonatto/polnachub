<template>
    <div :class="{'bg-poliresin': this.$route.path.includes('poliresin'), 'bg-transpolimer': this.$route.path.includes('transpolimer') }">
        <v-container>
            <v-row justify="center">
                <v-col cols="12">
                    <h2 class="white--text text-center my-10">¿Necesitas más información sobre POLIRESIN?</h2>
                </v-col>
            </v-row>
            <v-form>
                <v-row justify="center" class="mb-10">
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="Nombre" solo rounded></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="Apellidos" solo rounded></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="Cargo" solo rounded></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="Empresa" solo rounded></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="Corre electronico" solo rounded></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="Teléfono" solo rounded></v-text-field>
                    </v-col>

                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="País" solo rounded></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="Estado" solo rounded></v-text-field>
                    </v-col>

                    <v-col cols="12" lg="5" md="5" sm="12" xs="12" align="center">
                        <v-textarea solo rounded label="Cuéntanos brevemente qué deseas consultar con nosotros"></v-textarea>
                    </v-col>
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-checkbox v-model="terminos" label="Aceptar Aviso de Privacidad" dark rows="4"></v-checkbox>
                        <v-btn color="#19D3C5" rounded block>Enviar</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            terminos: false
        }
    }
}
</script>

<style scoped>
.bg-poliresin{
    background-image: url('../static/bg-formcontact-poliresin.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
.bg-transpolimer{
    background-image: url('../static/bg-formcontact-transpolimer.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
</style>