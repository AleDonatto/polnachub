<template>
    <layout-dashboard>
        <v-form class="mt-10 mb-16">
            <v-row justify="center">
                <v-col cols="12">
                    <h1 class="font-size-18">Director o Representante Legal</h1>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" filled outlined rounded label="Nombre"></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" filled outlined rounded label="Correo electrónico"></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" filled outlined rounded label="Área de la empresa"></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" filled outlined rounded label="Cargo"></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" filled outlined rounded label="Celular"></v-text-field>
                </v-col>
                <v-col cols="12" lg="4" md="4">
                    <v-text-field class="" filled outlined rounded label="Teléfono"></v-text-field>
                </v-col>
                <v-col cols="12" lg="2" md="2">
                    <v-text-field class="" filled outlined rounded label="Ext."></v-text-field>
                </v-col>

                <v-col cols="12">
                    <h1 class="font-size-18">Compras</h1>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" filled outlined rounded label="Nombre de la empresa"></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" filled outlined rounded label="Cargo"></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" filled outlined rounded label="Correo electrónico"></v-text-field>
                </v-col>
                <v-col cols="12" lg="4" md="4">
                    <v-text-field class="" filled outlined rounded label="Teléfono"></v-text-field>
                </v-col>
                <v-col cols="12" lg="2" md="2">
                    <v-text-field class="" filled outlined rounded label="Ext."></v-text-field>
                </v-col>

                <v-col cols="12">
                    <h1 class="font-size-18">Almacén/Recepción de material</h1>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" filled outlined rounded label="Nombre"></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" filled outlined rounded label="Cargo"></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" filled outlined rounded label="Correo electrónico"></v-text-field>
                </v-col>
                <v-col cols="12" lg="4" md="4">
                    <v-text-field class="" filled outlined rounded label="Teléfono"></v-text-field>
                </v-col>
                <v-col cols="12" lg="2" md="2">
                    <v-text-field class="" filled outlined rounded label="Ext."></v-text-field>
                </v-col>

                <v-col cols="12">
                    <h1 class="font-size-18">Cuentas por pagar</h1>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" filled outlined rounded label="Nombre de la empresa"></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" filled outlined rounded label="Cargo"></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="6">
                    <v-text-field class="" filled outlined rounded label="Correo electrónico"></v-text-field>
                </v-col>
                <v-col cols="12" lg="4" md="4">
                    <v-text-field class="" filled outlined rounded label="Teléfono"></v-text-field>
                </v-col>
                <v-col cols="12" lg="2" md="2">
                    <v-text-field class="" filled outlined rounded label="Ext."></v-text-field>
                </v-col>

                <v-col cols="12" lg="8" md="8">
                    <p class="font-size-16">*Si deseas realizar alguna actualización de estos datos, contacta tu agente comercial.</p>
                </v-col>
                <v-col cols="12" lg="4" md="4" align="end">
                    <v-btn class="primary-color black--text text-none rounded-xl px-10 py-4">Solicitud de cambios</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </layout-dashboard>
</template>

<script>
import LayoutDashboard from './LayoutDashboard.vue'
export default {
    components: {
        LayoutDashboard,
    }

}
</script>

<style>

</style>
LayoutDashboard