<template>
    <div :class="{'bg-poliresin': this.$route.path.includes('poliresin'), 'bg-transpolimer': this.$route.path.includes('transpolimer') }">
        <v-container>
            <v-row justify="center">
                <v-col cols="12">
                    <h1 class="font-archivo font-size-30 white--text text-center my-10">
                        ¿Necesitas más información sobre <span class="font-weight-bold">{{this.$route.path.includes('poliresin') ? 'POLIRESIN' : 'TRANSPOLIMER'}}</span>?
                    </h1>
                </v-col>
            </v-row>
            <v-form ref="formFilial" @submit.prevent="sendFormData">
                <v-row justify="center" class="mb-10">
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="Nombre" solo rounded v-model="form.name" :rules="[rules.required]"></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="Apellidos" solo rounded v-model="form.lastname" :rules="[rules.required]"></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="Cargo" solo rounded v-model="form.position" :rules="[rules.required]"></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="Empresa" solo rounded v-model="form.company" :rules="[rules.required]"></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="Corre electronico" solo rounded v-model="form.email" :rules="[rules.required, rules.emailRules]"></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="Teléfono" solo rounded v-model="form.phone" :rules="[rules.required]"></v-text-field>
                    </v-col>

                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="País" solo rounded v-model="form.country" :rules="[rules.required]"></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-text-field label="Estado" solo rounded v-model="form.state" :rules="[rules.required]"></v-text-field>
                    </v-col>

                    <v-col cols="12" lg="5" md="5" sm="12" xs="12" align="center">
                        <v-textarea solo rounded label="Cuéntanos brevemente qué deseas consultar con nosotros" v-model="form.message"></v-textarea>
                    </v-col>
                    <v-col cols="12" lg="5" md="5" sm="12" xs="12">
                        <v-checkbox v-model="terminos" label="Aceptar Aviso de Privacidad" dark rows="4" required :rules="[v => !!v || 'You must agree to continue!']"></v-checkbox>
                        <v-btn color="#19D3C5" rounded block class="text-none" type="submit">Enviar</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-container>

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
            terminos: false,
            form: {
                name: '',
                lastname: '',
                position: '',
                company: '',
                email: '',
                phone: '',
                country: '',
                state: '',
                message: '',
                targetCompany: '',
                sendDate: ''  
            },
            rules: {
                required: (value) => !!value || "Required.",
                min: (v) => v.length >= 8 || "Min 8 characters",
                emailRules: v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            },
            dialog: false,
        }
    },
    methods: {
        sendFormData(){
            if(this.$refs.formFilial.validate()){
                let date = new Date();
                this.form.sendDate = date.toISOString()

                if(this.$route.path.includes('poliresin')){
                    this.form.targetCompany = 'Poliresin'
                }else if(this.$route.path.includes('transpolimer')){
                    this.form.targetCompany = 'Transpolimer'
                }
                
                const formData = {
                    data: this.form
                }

                this.$axios.post(`${process.env.BASE_URI_STRAPI}/api/contacto-filiales`, formData)
                .then(res => {
                    this.dialog = !this.dialog
                    this.$refs.form.reset()
                })
                .catch(err => {
                    console.log(err.response)
                })
            }
        }
    }
}
</script>

<style scoped>
.bg-poliresin{
    background-image: url('../static/home/bg-formcontact-poliresin.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
.bg-transpolimer{
    background-image: url('../static/home/bg-formcontact-transpolimer.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}
</style>