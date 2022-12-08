<template>
    <layout-dashboard>
        <v-row justify="center" class="mt-5 mb-16">
            <v-col cols="12" align="end">
                <v-btn class="primary-color text-none" rounded @click="createNewCaso">
                    Crear nuevo caso
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-data-table :headers="headersCuenta" :items="items">
                    <template v-slot:item.factura="{ item }">
                        <p class="text-purple text-body-2">{{item.factura}}</p>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" width="750" overlay-color="#2E2E65" persistent>
            <v-card elevation="6">
                <v-card-title>
                    <v-row justify="end">
                        <v-col cols="2">
                            <v-btn outlined color="white"  @click="dialog = !dialog">
                                <v-img src="/contact/line.png" contain max-width="25"></v-img>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-title>

                <v-card-text>
                    <v-row justify="center">
                        <v-col cols="12" align="center">
                            <h1 class="font-size-28 font-weight-bold black--text">Crear nuevo caso</h1>
                        </v-col>
                    </v-row>
                    <v-form class="mt-5">
                        <v-row>
                            <v-col cols="12" class="ma-0">
                                <v-select v-model="typeCase" outlined rounded solo placeholder="Seleccione Tipo de caso" :items="casos" item-text="tipo" item-value="tipo"></v-select>
                            </v-col>
                        </v-row>
                        <v-row v-if="typeCase === 'Diferencia de Peso'">
                            <v-col cols="12" class="ma-0 space-inputs" >
                                <v-select outlined rounded solo placeholder="Prioridad"></v-select>
                            </v-col>
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-text-field outlined rounded solo placeholder="Detalle del caso"></v-text-field>
                            </v-col>
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-text-field outlined rounded solo placeholder="Correo electrónico de respuesta"></v-text-field>
                            </v-col>
                            <v-col cols="6" class="ma-0 space-inputs">
                                <v-text-field outlined rounded solo placeholder="Pedido"></v-text-field>
                            </v-col>
                            <v-col cols="6" class="ma-0 space-inputs">
                                <v-text-field outlined rounded solo placeholder="Cantidad a reclamar (TON)"></v-text-field>
                            </v-col>

                            <v-col cols="6" class="ma-0 space-inputs">
                                <v-text-field outlined rounded solo placeholder="Descripcion"></v-text-field>
                            </v-col>
                            <v-col cols="6" class="ma-0 space-inputs">
                                <v-text-field outlined rounded solo placeholder="Resolucion"></v-text-field>
                            </v-col>
                            <v-col cols="12" align="center" class="ma-0 space-inputs">
                                <v-tabs v-model="tabs" centered>
                                    <v-tab>Báscula 1</v-tab>
                                    <v-tab>Báscula 2</v-tab>
                                    <v-tab>Báscula 3</v-tab>
                                </v-tabs>
                                <v-tabs-items v-model="tabs">
                                    <v-tab-item>
                                        <v-row justify="center">
                                            <v-col cols="12" class="ma-0">
                                                <v-text-field outlined rounded solo placeholder="Nombre Bascula 1"></v-text-field>
                                            </v-col>

                                            <v-col cols="6" class="ma-0 space-inputs">
                                                <v-text-field outlined rounded solo placeholder=" # Ticket"></v-text-field>
                                            </v-col>
                                            <v-col cols="6" class="ma-o space-inputs">
                                                <v-text-field outlined rounded solo placeholder="#Certificación de calibración"></v-text-field>
                                            </v-col>

                                            <v-col cols="6" class="ma-0 space-inputs">
                                                <v-text-field outlined rounded solo placeholder="Bruto B1 TON"></v-text-field>
                                            </v-col>
                                            <v-col cols="6" class="ma-o space-inputs">
                                                <v-text-field outlined rounded solo placeholder="Tara B1"></v-text-field>
                                            </v-col>

                                            <v-col cols="12" class="ma-0 space-inputs">
                                                <v-text-field outlined rounded solo placeholder="Nombre de báscula 1"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-tab-item>
                                    <v-tab-item>
                                        <v-row justify="center">
                                            <v-col cols="12" class="ma-0">
                                                <v-text-field outlined rounded solo placeholder="Nombre Bascula 1"></v-text-field>
                                            </v-col>

                                            <v-col cols="6" class="ma-0 space-inputs">
                                                <v-text-field outlined rounded solo placeholder=" # Ticket"></v-text-field>
                                            </v-col>
                                            <v-col cols="6" class="ma-o space-inputs">
                                                <v-text-field outlined rounded solo placeholder="#Certificación de calibración"></v-text-field>
                                            </v-col>

                                            <v-col cols="6" class="ma-0 space-inputs">
                                                <v-text-field outlined rounded solo placeholder="Bruto B1 TON"></v-text-field>
                                            </v-col>
                                            <v-col cols="6" class="ma-o space-inputs">
                                                <v-text-field outlined rounded solo placeholder="Tara B1"></v-text-field>
                                            </v-col>

                                            <v-col cols="12" class="ma-0 space-inputs">
                                                <v-text-field outlined rounded solo placeholder="Nombre de báscula 1"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-tab-item>
                                    <v-tab-item>
                                        <v-row justify="center">
                                            <v-col cols="12" class="ma-0">
                                                <v-text-field outlined rounded solo placeholder="Nombre Bascula 1"></v-text-field>
                                            </v-col>

                                            <v-col cols="6" class="ma-0 space-inputs">
                                                <v-text-field outlined rounded solo placeholder=" # Ticket"></v-text-field>
                                            </v-col>
                                            <v-col cols="6" class="ma-o space-inputs">
                                                <v-text-field outlined rounded solo placeholder="#Certificación de calibración"></v-text-field>
                                            </v-col>

                                            <v-col cols="6" class="ma-0 space-inputs">
                                                <v-text-field outlined rounded solo placeholder="Bruto B1 TON"></v-text-field>
                                            </v-col>
                                            <v-col cols="6" class="ma-o space-inputs">
                                                <v-text-field outlined rounded solo placeholder="Tara B1"></v-text-field>
                                            </v-col>

                                            <v-col cols="12" class="ma-0 space-inputs">
                                                <v-text-field outlined rounded solo placeholder="Nombre de báscula 1"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-tab-item>
                                </v-tabs-items>
                            </v-col>
                        </v-row>
                        <v-row v-if="typeCase === 'Reporte de performance'">
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-select outlined rounded solo placeholder="Producto"></v-select>
                            </v-col>
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-text-field outlined rounded solo placeholder="Lote"></v-text-field>
                            </v-col>
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-select outlined rounded solo placeholder="Proceso"></v-select>
                            </v-col>

                            <v-col cols="6" class="ma-0 space-inputs">
                                <v-text-field outlined rounded solo placeholder="Proceso"></v-text-field>
                            </v-col>
                            <v-col cols="6" class="ma-0 space-inputs">
                                <v-text-field outlined rounded solo placeholder="Cantidad a reclamar (TON)"></v-text-field>
                            </v-col>

                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-textarea outlined rounded solo placeholder="Motivo de la reclamación" rows="3"></v-textarea>
                            </v-col>
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-textarea outlined rounded solo placeholder="Descripción de la reclamación" rows="3"></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row v-if="typeCase === 'Solicitud de documentos especiales' || typeCase === 'Solicitud de Servicio Técnico'">
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-select outlined rounded solo placeholder="Prioridad"></v-select>
                            </v-col>
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-select outlined rounded solo placeholder="Tipo de asistencia"></v-select>
                            </v-col>
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-text-field outlined rounded solo placeholder="Asunto"></v-text-field>
                            </v-col>
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-text-field outlined rounded solo placeholder="Correo electrónico"></v-text-field>
                            </v-col>
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-textarea outlined rounded solo placeholder="Detalle"></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row v-if="typeCase === ''">
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-text-field outlined rounded solo placeholder="Pedido"></v-text-field>
                            </v-col>
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-text-field outlined rounded solo placeholder="Nombre de contacto"></v-text-field>
                            </v-col>
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-text-field outlined rounded solo placeholder="Teléfono de contacto"></v-text-field>
                            </v-col>
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-text-field outlined rounded solo placeholder="Correo electrónico"></v-text-field>
                            </v-col>
                            <v-col cols="12" class="ma-0 space-inputs">
                                <v-textarea outlined rounded solo placeholder="Comentarios" rows="3"></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" class="ma-0 space-inputs">
                                <dropzone v-model="files" id="foo" ref="dropzone" :options="dropzoneOptions" :destroyDropzone="true" :useCustomSlot="true" dz-max-files-r>
                                    <div class="dropzone-custom-content dz-max-files-r">
                                        <v-img src="/work/upload.png" contain max-height="90"></v-img>
                                        
                                        <p class="mt-2 text-center">Selecciona un Archivo</p>
                                    </div>
                                </dropzone>
                            </v-col>
                            <v-col cols="6" class="ma-0">
                                <v-btn class="text-none" rounded block outlined color="#19D3C5">
                                    <span class="black--text">Cancelar</span>
                                </v-btn>
                            </v-col>
                            <v-col cols="6" class="ma-0">
                                <v-btn class="primary-color text-none" rounded block>
                                    Aceptar
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <!--<v-btn color="primary" text @click="dialog = false">I accept</v-btn>-->
                </v-card-actions>
            </v-card>
        </v-dialog>
    </layout-dashboard>

</template>

<script>
import LayoutDashboard from './LayoutDashboard.vue'
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'

export default {
    components: { LayoutDashboard, Dropzone },
    data(){
        return {
            headersCuenta: [
                {text: 'Numero de Caso', value: 'factura'},
                {text: 'Asunto', value: 'etapa'},
                {text: 'Casos', value: 'montoRestante'},
                {text: 'Fecha de Apertura', value: 'fecha'},
            ],
            items: [
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
                {factura: 'factura', etapa: 'Pagada', montoRestante: '99.0', fecha: Date.now(), pedido: 'P-12312900', monto: '59.00', comentarios: 'comentarios'},
            ],
            dialog: false,
            casos: [
                {tipo: 'Diferencia de Peso'},
                {tipo: 'Reporte de performance'},
                {tipo: 'Solicitud de Servicio Técnico'},
                {tipo: 'Solicitud de documentos especiales'},
            ],
            typeCase: '',
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 180,
                thumbnailHeight: 120,
                maxFilesize: 0.8,
                maxFiles: 1,
                uploadMultiple: false,
                acceptedFiles: 'image/*,application/pdf',
                addRemoveLinks: true
            },
            files: [],
            tabs: 0
        }
    },
    methods: {
        createNewCaso(){
            this.dialog = true
        }
    }
}
</script>

<style scoped>
.space-inputs{
    margin-top: -30px !important;
}
.height-files {
    max-height: 140px !important;
    background-color: rgba(61, 124, 201, 0.3);
    border-radius: 20px;
}

.width-full{
    width: 100% !important;
}
</style>