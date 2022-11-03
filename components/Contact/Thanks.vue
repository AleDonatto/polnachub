<template>
    <div>
        <div class="my-16">
            <v-container>
                <v-row justify="center">
                    <v-col cols="6">
                        <v-img src="/contact/dialog.png" contain max-height="120"></v-img>
                    </v-col>
                    <v-col cols="10">
                        <h1 class="font-size-24 font-weight-bold text-center black--text">
                            {{ lang === 'es' ? "¡Tu mensaje ha sido enviado!" : "Your message has been sent!" }}
                        </h1>
                    </v-col>
                    <v-col cols="8">
                        <p class="text-body-all text-center text-center black--text">
                            {{ lang === 'es' ? "Gracias por tu mensaje. Te responderemos lo antes posible en tu correo." : "Thank you for your message. We will reply to your email as soon as possible." }}
                        </p>
                    </v-col>
                    <v-col cols="7" class="mt-5">
                        <v-btn block class="rounded-xl text-none py-6" color="#19D3C5" @click="gotoContact">{{ $t('form.ok') }}</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {

        }
    },
    methods: {
        gotoContact(){
            this.$router.push(this.localePath('contact'))
        }
    },
    computed: {
        ...mapState(['lang'])
    }
}
</script>

<style>

</style>