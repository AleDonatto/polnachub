<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center" class="mt-16 mb-6">
                    <v-col cols="6">
                        <h1 class="font-archivo font-size-30 font-weight-bold text-center">¿Necesitas más información sobre nuestros servicios?</h1>
                    </v-col>
                </v-row>

                <v-form ref="formContact" class="mb-16">
                    <v-row justify="center">

                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
                            <v-text-field outlined solo label="Nombres" class="rounded-xl"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
                            <v-text-field outlined solo class="rounded-xl" label="Apellidos"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
                            <v-text-field outlined solo class="rounded-xl" label="Cargo"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
                            <v-text-field outlined solo class="rounded-xl" label="Empresa"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
                            <v-text-field outlined solo class="rounded-xl" label="Correo Electronico"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
                            <v-text-field outlined solo class="rounded-xl" label="Telefono"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
                            <v-select outlined solo class="rounded-xl" label="Ubicación"></v-select>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
                            <v-select outlined solo class="rounded-xl" label="Servicio que te interesa"></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea outlined solo class="rounded-xl" label="Cuéntanos qué información necesitas consultar con nosotros."></v-textarea>
                        </v-col>
                        <v-col cols="12">
                            <v-checkbox
                                v-model="checkbox"
                                :rules="[v => !!v || 'You must agree to continue!']"
                                label="Aceptar Aviso de Privacidad"
                                required
                            ></v-checkbox>
                        </v-col>
                        <v-col cols="6">
                            <v-btn color="#19D3C5" class="rounded-lg text-none py-6" block>Enviar</v-btn>
                        </v-col>

                    </v-row>
                </v-form>
            </v-container>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>