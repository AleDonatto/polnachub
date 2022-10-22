<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center" class="mt-16 mb-6">
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                        <h1 class="font-archivo font-size-30 font-weight-bold text-center">¿Necesitas más información sobre nuestros servicios?</h1>
                    </v-col>
                </v-row>

                <v-form ref="formContact" class="mb-16" @submit.prevent="sendForm">
                    <v-row justify="center">

                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-text-field outlined solo class="rounded-xl"  :label="lang === 'es' ? 'Nombres': 'Name'" 
                            v-model="form.name" :rules="[rules.required]"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-text-field outlined solo class="rounded-xl" :label="lang=== 'es'? 'Apellidos' : 'Lastname' " 
                            v-model="form.lastname" :rules="[rules.required]"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-text-field outlined solo class="rounded-xl" :label="lang === 'es' ? 'Cargo' : 'Employment' " 
                            v-model="form.position" :rules="[rules.required]"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-text-field outlined solo class="rounded-xl" :label="lang === 'es' ? 'Empresa' : 'Company'" 
                            v-model="form.company" :rules="[rules.required]"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-text-field outlined solo class="rounded-xl" label="Email" 
                            v-model="form.email" :rules="[rules.required, rules.emailRules]"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-text-field outlined solo class="rounded-xl" :label="lang=== 'es' ? 'Teléfono' : 'Phone'" 
                            v-model="form.phone" :rules="[rules.required]"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-text-field outlined solo class="rounded-xl" :label="lang=== 'es' ? 'Ubicación' : 'Ubication'" v-model="form.ubication" :rules="[rules.required]"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-select outlined solo class="rounded-xl" :items="servicios" item-text="name" item-value="name" 
                            :label="lang === 'es' ? 'Servicio que te interesa' : 'Service are you interested' " v-model="form.serviceInterest" :rules="[rules.required]"></v-select>
                        </v-col>
                        <v-col cols="12" class="margin-botton-0">
                            <v-textarea outlined solo class="rounded-xl text-area" label="Cuéntanos qué información necesitas consultar con nosotros." v-model="form.message"></v-textarea>
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
                            <v-btn color="#19D3C5" type="submit" class="rounded-lg text-none py-6" block>Enviar</v-btn>
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
import { mapState } from 'vuex';

export default {
    data() {
        return {
            dialog: false,
            form: {
                name: '',
                lastname: '',
                position: '',
                company: '',
                email: '',
                phone: '',
                ubication: '',
                serviceInterest: '',
                message: '',
                sendDate: '' 
            },
            servicios: [
                {name: 'Terminal Ferroviaria'},
                {name: 'Almacenaje'},
                {name: 'Transvase'},
                {name: 'Ensacado'},
                {name: 'Distribución'},
                {name: 'Contenedores'},
            ],
            rules: {
                required: (value) => !!value || "Required.",
                min: (v) => v.length >= 8 || "Min 8 characters",
                emailRules: v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            },
        }
    },
    methods: {
        async sendForm(){
            if(this.$refs.formContact.validate()){
                let date = new Date();
                this.form.sendDate = date.toISOString()
                const formData = {
                    data: this.form
                }

                this.$axios.post('http://localhost:1337/api/contacto-servicios', formData)
                .then(res => {
                    this.dialog = !this.dialog
                    this.$refs.form.reset()
                })
                .catch(err => {
                    console.log(err.response)
                })
            }
        }
    },
    computed: {
        ...mapState(['lang'])
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