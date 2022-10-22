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
                        <v-form>
                            <v-row>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-text-field v-model="form.name" outlined class="rounded-xl"
                                    :label="lang === 'es' ? 'Nombres' : 'Name'" ></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-text-field v-model="form.lastname" outlined class="rounded-xl"
                                    :label="lang === 'es' ? 'Apellidos' : 'Lastname'" ></v-text-field>
                                </v-col>

                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-text-field v-model="form.email" outlined class="rounded-xl"
                                    label="Email"></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-text-field v-model="form.celphone" outlined class="rounded-xl"
                                    :label="lang === 'es' ? 'Celular' : 'Celphone'"></v-text-field>
                                </v-col>

                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-select v-model="form.area" label="Área de interés" outlined class="rounded-xl" :items="areas" item-text="value" item-value="value"></v-select>
                                </v-col>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-select v-model="form.estado" outlined class="rounded-xl" :items="areas" item-text="value" item-value="value"
                                    :label="lang === 'es' ? 'Estado' : 'Country' "></v-select>
                                </v-col>

                                <v-col cols="12" align="center">
                                    <p class="font-size-20">Carga tu CV a continuación. Debe ser un archivo JPG o PDF</p>
                                    <div class="rounded-lg bg-files py-10">
                                        <v-img src="/work/upload.png" contain max-height="110"></v-img>
                                        <p class="mt-2">Sube tu archivo</p>
                                        <v-btn color="#19D3C5" class="rounded-xl px-6 text-none">
                                            <p class="mt-3">Selecciona un archivo</p>
                                            <v-file-input></v-file-input>
                                        </v-btn>

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
                                    <v-checkbox label="Aceptar Aviso de Privacidad" color="#19D3C5"></v-checkbox>
                                </v-col>
                                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                                    <v-btn block class="rounded-xl text-none py-6 d-flex justify-space-between" color="#19D3C5" @click="dialog = !dialog">
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
                            <h1 class="font-size-24 font-weight-bold text-center black--text">¡Tu solicitud ha sido enviada!</h1>
                        </v-col>
                        <v-col cols="8">
                            <p class="text-body-all text-center text-center black--text">Gracias por tu interés. Nuestro equipo de reclutamiento se pondrá en contacto contigo.</p>
                        </v-col>
                        <v-col cols="7" class="mt-5">
                            <v-btn block class="rounded-xl text-none py-6" color="#19D3C5" @click="dialog = false">Entendido</v-btn>
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
            dialog:false,
            images: [],
            imageUrls: [],
            rules: {
                required: (value) => !!value || "Required.",
                min: (v) => v.length >= 8 || "Min 8 characters",
                emailRules: v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            },
            form: {
                name: '',
                lastname: '',
                email: '',
                celphone: '',
                area: '',
                estado: ''
            }
        }
    },
    computed: {
        ...mapState(['windowSize', 'windowHeight', 'pageWork', 'basePathApiUrl', 'lang'])
    },
    methods: {
        RemoveImage(ind) {
            this.images = this.images.filter(i => i.index !== ind);
            this.imageUrls = this.imageUrls.splice(ind, 1);
            for (let i = 0; i < this.images.length; i++) {
                this.images[i].index = i;
            }
        },
        OpenFileSelector() {
            this.$refs.uploader.click();
        },
        async OnFileChanged(e) {
            this.UploadFile(e.target.files[0]);
        },
        UploadFile(file) {
            let reader = new FileReader();
            reader.onload = f => {
                let src = f.target.result;
                //let base64 = src.split(',')[1];
                //this.ShowImage(src, file);
            };
            reader.readAsDataURL(file);
        },
        ShowImage(base64, file) {
            this.RenderImage(base64, file);
        },
        async RenderImage(base64, file) {
            base64 = base64.split(",")[1];
            /*const s3 = new AWS.S3({
                accessKeyId: this.aws.access,
                secretAccessKey: this.aws.secretAccessKey,
                region:this.aws.region
            });
            const rawData = atob(base64);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const uploadedImage = await s3.upload({
                Bucket: this.aws.bucket,
                Key: "images/" + file.name.toLowerCase(),
                Body: Buffer(bytes),
                ContentEncoding: "byte",
            }).promise();
            this.imageUrls.push(uploadedImage.Location);
            this.images.push({ base64: uploadedImage.Location, file: file, index: this.images.length });*/
        },
    }
}
</script>

<style scoped>
.bg-files{
    background-color: rgba(61, 124, 201, 0.3);
}
</style>