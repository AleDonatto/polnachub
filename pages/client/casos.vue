<template>
    <div>
        <ClientsCasosComponent/>
    </div>
</template>

<script>
export default {
    name: 'CasosClient',
    data() {
        return {

        }
    },
    mounted() {
        this.$store.dispatch("defaultLanguaje");
        this.$store.commit("StateAssign", { windowSize: window.innerWidth });
        this.$store.commit("StateAssign", { windowHeight: window.innerHeight });
        window.addEventListener("resize", this.Resize);
    },
    methods: {
        Resize() {
            this.$store.commit("StateAssign", { windowSize: window.innerWidth });
            this.$store.commit("StateAssign", { windowHeight: window.innerHeight });
        }
    },
}
</script>

<style>

</style>