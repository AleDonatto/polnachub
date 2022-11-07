<template>
    <div v-if="pageWork === null">
        <v-sheet class="pa-3">
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-sheet>
    </div>
    <div v-else>
        <section class="">
            <v-container>
                <v-row class="my-16">
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" align-self="end">
                        <!--<p class="text-body-all">
                            Es gracias a su conocimiento, creatividad, habilidades y trabajo en equipo 
                            el cual han hecho a <span class="font-weight-bold">POLNAC</span> líder en el mercado nacional e internacional. 
                            <br><br>
                            <span class="font-weight-bold font">POLNAC</span> es líder en el mercado nacional e internacional, gracias a sus colaboradores, 
                            a su conocimiento, creatividad, habilidades y trabajo en equipo.
                        </p>-->
                        <p class="text-body-all" v-html="pageWork.lider.description"></p>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" sm="12" xs="12" align-self="end">
                        <!--<v-carousel class="carousel-black" cycle height="330" hide-delimiter-background show-arrows-on-hover>
                            <v-carousel-item v-for="(slide, i) in 4" :key="i">
                            <v-sheet height="100%">
                                <v-row class="fill-height" align="center" justify="center">
                                    <v-img src="/work/carousel-work.png" contain max-height="280"></v-img>
                                </v-row>
                            </v-sheet>
                            </v-carousel-item>
                        </v-carousel>-->
                        <v-carousel class="carousel-black" cycle height="330" hide-delimiter-background show-arrows-on-hover>
                            <v-carousel-item v-for="(slide, i) in pageWork.lider.images.data" :key="i">
                            <v-sheet height="100%">
                                <v-row class="fill-height" align="center" justify="center">
                                    <!--<v-img src="/work/carousel-work.png" contain max-height="280"></v-img>-->
                                    <v-img :src="basePathApiUrl + slide.attributes.url" contain max-height="280"></v-img>
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
                        <!--<h1 class="font-archivo font-weight-bold font-size-34">Únete a la familia POLNAC</h1>-->
                        <h1 class="font-archivo font-weight-bold font-size-34">{{pageWork.txtTitleForm}}</h1>
                    </v-col>
                    <v-col>
                        <v-form @submit.prevent="sendFormWork" ref="formWork" enctype="multipart/form-data">
                            <v-row>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-text-field v-model="form.Name" outlined class="rounded-xl" :rules="[rules.required]"
                                    :label="lang === 'es' ? 'Nombres' : 'Name'" ></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-text-field v-model="form.Lsatname" outlined class="rounded-xl" :rules="[rules.required]"
                                    :label="lang === 'es' ? 'Apellidos' : 'Lastname'" ></v-text-field>
                                </v-col>

                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-text-field v-model="form.email" outlined class="rounded-xl" :rules="[rules.required, rules.emailRules]"
                                    label="Email"></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-text-field v-model="form.celphone" outlined class="rounded-xl" :rules="[rules.required]" @keypress="filterKey"
                                    :label="lang === 'es' ? 'Celular' : 'Celphone'"></v-text-field>
                                </v-col>

                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-select v-model="form.area" label="Área de interés" outlined class="rounded-xl" :items="areas" item-text="value" item-value="value" :rules="[rules.required]"></v-select>
                                </v-col>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-select v-model="form.country" outlined class="rounded-xl" :items="states" item-text="state_name" item-value="state_name" :rules="[rules.required]"
                                    :label="lang === 'es' ? 'Estado' : 'Country' "></v-select>
                                </v-col>

                                <v-col cols="12" align="center">
                                    <p class="font-size-20">{{ this.lang === 'es' ? 'Carga tu CV a continuación. Debe ser un archivo JPG o PDF' : 'Upload your CV below. Must be a JPG or PDF file' }}</p>
                                    <div class="rounded-lg bg-files py-10">
                                        <dropzone v-model="images" id="foo" ref="dropzone" :options="dropzoneOptions" :destroyDropzone="true" :useCustomSlot="true" dz-max-files-r>
                                            <div class="dropzone-custom-content dz-max-files-r">
                                                <v-img src="/work/upload.png" contain max-height="110"></v-img>
                                                
                                                <p class="mt-2">{{ this.lang === 'es' ? 'Sube tu archivo': 'Upload your CV'}}</p>
                                                <small>{{ this.lang === 'es' ? 'Click para seleccionar un archivo, o arrastra a esta zona' : 'Click to select a file, or drag to this area'}}</small>
                                            </div>
                                        </dropzone>
                                        <!--<v-btn color="#19D3C5" class="rounded-xl px-6 text-none">
                                            <p class="mt-3">Selecciona un archivo</p>
                                            <v-file-input></v-file-input>
                                        </v-btn>-->

                                        <!--<input ref="uploader" class="d-none" type="file" accept="image/*" @change="OnFileChanged" >
                                        <input type="text" v-model="imageUrl" name="imageUrl" hidden>
                                        <v-col cols="12"  v-if="!imageUrl" class="brandingTextGrey--text" align="center" >Add images for his news user from the upload image button...</v-col>
                                        <v-col cols="12"  v-else class="brandingTextGrey--text" align="center" >
                                            <v-row>
                                                <v-col  cols="3">
                                                    <v-icon color="red" class="float-right pointer" @click="imageUrl = null">mdi-close</v-icon>
                                                    <img :src="imageUrl" alt="" height="200" width="200">
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="12" v-if="!this.imageUrl" class="mainPurple--text mt-5" align="center" ><h2>UPLOAD YOUR IMAGES</h2></v-col>
                                        <v-col cols="12" v-if="!this.imageUrl" align="center" class="white--text"><v-btn @click="OpenFileSelector()" class="pa-7 mx-5 white--text step-button"  color="mainPurple">UPLOAD IMAGE</v-btn></v-col>-->
                                    </div>
                                </v-col>

                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <div class="d-flex">
                                        <v-checkbox color="#19D3C5">
                                            <template v-slot:label>
                                            </template>
                                        </v-checkbox>
                                        <a href="/terms/Aviso_de_Privacidad_POLNAC_abril_2022.pdf" target="_blank" class="pl-1 mt-5">{{lang === 'es' ? "Aviso de Privacidad" : "Notice of Privacy"}}</a>
                                    </div>
                                </v-col>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-btn type="submit" block class="rounded-xl text-none py-6 d-flex justify-space-between" color="#19D3C5">
                                        <span class="text-left">{{ $t('form.send') }}</span>
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
                                {{lang === 'es' ? '¡Tu solicitud ha sido enviada!' : 'Your request has been sent!' }}
                            </h1>
                        </v-col>
                        <v-col cols="8">
                            <p class="text-body-all text-center text-center black--text">
                                {{ lang=== 'es' ? "Gracias por tu interés. Nuestro equipo de reclutamiento se pondrá en contacto contigo." : "Thanks for your interest. Our recruitment team will contact you." }}
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
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'

export default {
    components: {
        Dropzone
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
            dialog:false,
            images: [],
            rules: {
                required: (value) => !!value || "Required.",
                min: (v) => v.length >= 8 || "Min 8 characters",
                emailRules: v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            },
            form: {
                Name: '',
                Lsatname: '',
                email: '',
                celphone: '',
                area: '',
                country: '',
                cv: '',
                dateSend: ''
            },
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 180,
                thumbnailHeight: 280,
                maxFilesize: 0.8,
                maxFiles: 1,
                uploadMultiple: false,
                acceptedFiles: 'image/*,application/pdf',
                addRemoveLinks: true
            },
            states: [],
            token: ''
        }
    },
    mounted(){
        // Everything is mounted and you can access the dropzone instance
        const instance = this.$refs.dropzone

        setTimeout(() => {
            this.getStates()
        }, 4000);
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight', 'pageWork', 'basePathApiUrl', 'lang'])
    },
    methods: {
        async sendFormWork(){
            if(this.$refs.formWork.validate()){
                let date = new Date();
                this.form.dateSend = date.toISOString()

                this.form.cv = this.images

                const dataForm = new FormData()
                dataForm.append('Name', this.form.Name)
                dataForm.append('Lsatname', this.form.Lsatname)
                dataForm.append('email', this.form.email)
                dataForm.append('celphone', this.form.celphone)
                dataForm.append('area', this.form.area)
                dataForm.append('cv', this.form.cv)
                dataForm.append('dateSend', this.form.dateSend)

                const json_data = {
                    data: this.form
                }

                this.$axios.setToken(false)
                //this.$axios.setHeader(false)
                this.$axios.setHeader('Accept',false)
                this.$axios.setHeader('api-token',false)
                this.$axios.setHeader("user-email", false)

                await this.$axios.post(`${process.env.BASE_URI_STRAPI}/api/contacto-works`, json_data)
                .then(res => {
                    //this.dialog = !this.dialog
                    this.$refs.formWork.reset()

                    /*setTimeout(() => {
                        this.getStates()
                    }, 4000);*/
                    this.$router.push(this.localePath('thanksContact'))
                })
                .catch(err => {
                    console.log(err.response)
                })
            }
        },
        async getToken(){
            this.$axios.setHeader('Accept','application/json')
            this.$axios.setHeader('api-token',process.env.COUNTRY_API_TOKEN)
            this.$axios.setHeader("user-email", "alej.donatto@gmail.com")
            
            const response  = await this.$axios.get('https://www.universal-tutorial.com/api/getaccesstoken')
            return response.data.auth_token
        },
        async getStates(){
            this.token = await this.getToken()
            this.$axios.setHeader('Authorization', `Bearer ${this.token}`)
            this.$axios.setHeader("Accept", "application/json")

            const response = await this.$axios.get(`https://www.universal-tutorial.com/api/states/Mexico`)
            this.states = response.data
        },
        filterKey(e) {
            // Si el código es menor que 48 (0) o mayor que 57 (9)
            if(e.keyCode < 48 || e.keyCode > 57) {
                // No se agrega
                e.preventDefault();
            }
        },
    }
}
</script>

<style scoped>
.bg-files{
    background-color: rgba(61, 124, 201, 0.3);
}
</style>