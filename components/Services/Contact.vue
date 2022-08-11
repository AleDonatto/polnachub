<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center" class="mt-16 mb-6">
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                        <h1 class="font-archivo font-size-30 font-weight-bold text-center">¿Necesitas más información sobre nuestros servicios?</h1>
                    </v-col>
                </v-row>

                <v-form ref="formContact" class="mb-16">
                    <v-row justify="center">

                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-text-field outlined solo label="Nombres" class="rounded-xl"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-text-field outlined solo class="rounded-xl" label="Apellidos"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-text-field outlined solo class="rounded-xl" label="Cargo"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-text-field outlined solo class="rounded-xl" label="Empresa"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-text-field outlined solo class="rounded-xl" label="Correo Electronico"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-text-field outlined solo class="rounded-xl" label="Telefono"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-select outlined solo class="rounded-xl" label="Ubicación"></v-select>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-select outlined solo class="rounded-xl" label="Servicio que te interesa"></v-select>
                        </v-col>
                        <v-col cols="12" class="margin-botton-0">
                            <v-textarea outlined solo class="rounded-xl text-area" label="Cuéntanos qué información necesitas consultar con nosotros."></v-textarea>
                        </v-col>
                        <v-col cols="12" class="">
                            <v-checkbox
                                :rules="[v => !!v || 'You must agree to continue!']"
                                label="Aceptar Aviso de Privacidad"
                                required
                                color="#19D3C5"
                            ></v-checkbox>
                        </v-col>
                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="mb-16">
                            <v-btn color="#19D3C5" class="rounded-lg text-none py-6" block @click="dialog = !dialog">Enviar</v-btn>
                        </v-col>

                    </v-row>
                </v-form>
            </v-container>
        </section>

        <v-dialog v-model="dialog" width="500" overlay-color="#19D3C5">
            <v-card elevation="6">
                <v-card-title>
                    <v-row justify="center">
                        <v-col cols="7">
                            <h1 class="font-size-16 font-weight-bold">¡Tu mensaje ha sido enviado!</h1>
                        </v-col>
                        <v-col cols="2">
                            <v-btn outlined color="white"  @click="dialog = false">
                                <v-img src="/contact/line.png" contain max-width="15"></v-img>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-row justify="center">
                        <v-col cols="10">
                            <p class="font-size-16 text-center mt-5 black--text">Gracias por escribirnos, uno de nuestros representantes se pondrá en contacto contigo.</p>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-actions>
                    <!--<v-btn color="primary" text @click="dialog = false">I accept</v-btn>-->
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
        }
    }
}
</script>

<style scoped>
.margin-botton-0{
    margin-bottom: -35px !important;
}
.text-area .v-text-field .v-label {
    max-width: 90% !important;
    overflow: visible !important;
    text-overflow: ellipsis !important;
    top: 6px !important;
    white-space: normal !important;
    pointer-events: none !important;
}
</style>