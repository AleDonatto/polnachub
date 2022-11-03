<template>
    <div>
        <div class="my-16">
            <v-container>
                <v-row justify="center">
                    <v-col cols="10">
                        <v-row justify="center">
                            <v-col cols="6">
                                <v-img src="/contact/dialog.png" contain max-height="120"></v-img>
                            </v-col>
                            <v-col cols="12">
                                <h1 class="font-size-24 font-weight-bold text-center black--text">
                                    ¡Tu mensaje ha sido enviado!
                                </h1>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-body-all text-center text-center black--text">
                                    Gracias por tu mensaje. Te responderemos lo antes posible en tu correo.
                                </p>
                            </v-col>
                            <v-col cols="7" class="mt-5">
                                <v-btn block class="rounded-xl text-none py-6" color="#19D3C5">Entendido</v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {
        this.$store.dispatch('defaultLanguaje')
        this.$store.commit('StateAssign', {windowSize:window.innerWidth})
        this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        window.addEventListener('resize', this.Resize)
    },
    methods: {
        Resize(){
            this.$store.commit('StateAssign', {windowSize:window.innerWidth})
            this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
        }
    },
}
</script>

<style>

</style>