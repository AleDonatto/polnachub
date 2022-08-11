<template>
    <div>
        <section class="">
            <v-container>
                <v-row class="my-16">
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" align-self="end">
                        <p class="text-body-all">
                            Es gracias a su conocimiento, creatividad, habilidades y trabajo en equipo 
                            el cual han hecho a <span class="font-weight-bold">POLNAC</span> líder en el mercado nacional e internacional. 
                            <br><br>
                            <span class="font-weight-bold font">POLNAC</span> es líder en el mercado nacional e internacional, gracias a sus colaboradores, 
                            a su conocimiento, creatividad, habilidades y trabajo en equipo.
                        </p>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" align-self="end">
                        <v-carousel class="carousel-black" cycle height="330" hide-delimiter-background show-arrows-on-hover>
                            <v-carousel-item v-for="(slide, i) in 4" :key="i">
                            <v-sheet height="100%">
                                <v-row class="fill-height" align="center" justify="center">
                                    <v-img src="/work/carousel-work.png" contain max-height="280"></v-img>
                                </v-row>
                            </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section>
            <v-container class="mb-10">
                <v-row justify="center" class="mb-16">
                    <v-col cols="12" align="center">
                        <h1 class="font-archivo font-weight-bold font-size-34">Únete a la familia POLNAC</h1>
                    </v-col>
                    <v-col>
                        <v-form>
                            <v-row>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-text-field label="Nombres" outlined class="rounded-xl"></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-text-field label="Apeliidos" outlined class="rounded-xl"></v-text-field>
                                </v-col>

                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-text-field label="Correo electronico" outlined class="rounded-xl"></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-text-field label="Celular" outlined class="rounded-xl"></v-text-field>
                                </v-col>

                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-select label="Área de interés" outlined class="rounded-xl" :items="areas" item-text="value" item-value="value"></v-select>
                                </v-col>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-select label="Estado" outlined class="rounded-xl" :items="areas" item-text="value" item-value="value"></v-select>
                                </v-col>

                                <v-col cols="12" align="center">
                                    <p class="font-size-20">Carga tu CV a continuación. Debe ser un archivo JPG o PDF</p>
                                    <div class="rounded-lg bg-files py-10">
                                        <v-img src="/work/upload.png" contain max-height="110"></v-img>
                                        <p class="mt-2">Sube tu archivo</p>
                                        <v-btn color="#19D3C5" class="rounded-xl px-6 text-none">
                                            <p class="mt-3">Selecciona un archivo</p>
                                            <v-file-input truncate-length="15" class="rounded-xl" color="#19D3C5"></v-file-input>
                                        </v-btn>
                                    </div>
                                </v-col>

                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-checkbox label="Aceptar Aviso de Privacidad" color="#19D3C5"></v-checkbox>
                                </v-col>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-btn block class="rounded-xl text-none py-6 d-flex justify-space-between" color="#19D3C5">
                                        <span class="text-left">Enviar solicitud</span>
                                        <v-icon right>
                                            mdi-chevron-right
                                        </v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    components: {
    },
    data(){
        return {
            areas: [
                {value: 'Compras'},
                {value: 'Calidad'},
                {value: 'Comercial'},
                {value: 'Comercio Internacional'},
                {value: 'Contabilidad'},
                {value: 'Investigación'},
                {value: 'Logística'},
                {value: 'Operaciones'},
                {value: 'Recursos Humanos'},
                {value: 'Seguridad e Higiene'},
                {value: 'Servicio al Cliente'},
                {value: 'Servicios Generales'},
                {value: 'Otra'},
            ],
        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight'])
    }
}
</script>

<style scoped>
.bg-files{
    background-color: rgba(61, 124, 201, 0.3);
}
</style>