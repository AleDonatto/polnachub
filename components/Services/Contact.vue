<template>
    <div>
        <section>
            <v-container>
                <v-row justify="center" class="mt-16 mb-6">
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                        <h1 class="font-archivo font-size-30 font-weight-bold text-center">{{ lang==='es' ? '¿Necesitas más información sobre nuestros servicios?': 'Do you need more information about our services?'}}</h1>
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
                            v-model="form.phone" :rules="[rules.required]" @keypress="filterKey"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-text-field outlined solo class="rounded-xl" :label="lang=== 'es' ? 'Ubicación' : 'Ubication'" v-model="form.ubication" :rules="[rules.required]"></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="margin-botton-0">
                            <v-select outlined solo class="rounded-xl" :items="servicios" item-text="name" item-value="name" 
                            :label="lang === 'es' ? 'Servicio que te interesa' : 'Service are you interested' " v-model="form.serviceInterest" :rules="[rules.required]"></v-select>
                        </v-col>
                        <v-col cols="12" class="margin-botton-0">
                            <v-textarea outlined solo class="rounded-xl text-area" v-model="form.message"
                            :label="lang=== 'es' ? 'Cuéntanos qué información necesitas consultar con nosotros.' : 'Tell us what information you need to consult with us.'"></v-textarea>
                        </v-col>
                        <v-col cols="12" class="">
                            <div class="d-flex">
                                <v-checkbox
                                    :rules="[v => !!v || 'You must agree to continue!']"
                                    required
                                    color="#19D3C5"
                                ></v-checkbox>
                                <a href="/terms/Aviso_de_Privacidad_POLNAC_abril_2022.pdf" target="_blank" class="pl-1 mt-5">{{lang === 'es' ? "Aviso de Privacidad" : "Notice of Privacy"}}</a>
                            </div>
                        </v-col>
                        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="mb-16">
                            <v-btn color="#19D3C5" type="submit" class="rounded-lg text-none py-6" block>{{$t('form.send')}}</v-btn>
                        </v-col>

                    </v-row>
                </v-form>
            </v-container>
        </section>

        <!--<v-dialog v-model="dialog" width="500" overlay-color="#19D3C5">
            <v-card elevation="6">
                <v-card-title>
                    <v-row justify="center">
                        <v-col cols="7">
                            <h1 class="font-size-16 font-weight-bold">
                                {{ lang === 'es' ? "¡Tu mensaje ha sido enviado!" : "Your message has been sent!" }}
                            </h1>
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
                            <p class="font-size-16 text-center mt-5 black--text">
                                {{ lang === 'es' ? "Gracias por escribirnos, uno de nuestros representantes se pondrá en contacto contigo." : "Thank you for writing to us, one of our representatives will contact you." }}
                            </p>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-actions>
                    --<v-btn color="primary" text @click="dialog = false">I accept</v-btn>--
                </v-card-actions>
            </v-card>
        </v-dialog>-->

        <v-dialog v-model="dialog" width="700" overlay-color="#2E2E65">
            <v-card elevation="6">
                <v-card-title>
                    <v-row justify="end">
                        <v-col cols="2">
                            <v-btn outlined color="white"  @click="dialog = false">
                                <v-img src="/contact/line.png" contain max-width="25"></v-img>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-title>

                <v-card-text>
                    <v-row justify="center">
                        <v-col cols="6">
                            <v-img src="/contact/dialog.png" contain max-height="120"></v-img>
                        </v-col>
                        <v-col cols="12">
                            <h1 class="font-size-24 font-weight-bold text-center black--text">
                                {{ lang === 'es' ? "¡Tu mensaje ha sido enviado!" : "Your message has been sent!" }}
                            </h1>
                        </v-col>
                        <v-col cols="8">
                            <p class="text-body-all text-center text-center black--text">
                                {{ lang === 'es' ? "Gracias por escribirnos, uno de nuestros representantes se pondrá en contacto contigo." : "Thank you for writing to us, one of our representatives will contact you." }}
                            </p>
                        </v-col>
                        <v-col cols="7" class="mt-5">
                            <v-btn block class="rounded-xl text-none py-6" color="#19D3C5" @click="dialog = false">{{ $t('form.ok') }}</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

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

                this.$axios.post(`${process.env.BASE_URI_STRAPI}/api/contacto-servicios`, formData)
                .then(res => {
                    this.dialog = !this.dialog
                    this.$refs.formContact.reset()
                })
                .catch(err => {
                    console.log(err.response)
                })
            }
        },
        filterKey(e) {
            // Si el código es menor que 48 (0) o mayor que 57 (9)
            if(e.keyCode < 48 || e.keyCode > 57) {
                // No se agrega
                e.preventDefault();
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