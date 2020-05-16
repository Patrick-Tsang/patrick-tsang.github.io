<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-3 font-weight-black white--text text-xs-center">
                PATRICK
            </div>
            <div
                class="display-3 font-weight-black white--text text-xs-center mb-3"
            >
                TSANG
            </div>
            <div class="display-1 font-weight-bold white--text text-xs-center">
                McMaster University Software Engineering, Class of 2020
            </div>
            <v-btn fab class="mt-5 grey darken-4">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('https://i.redd.it/q73rqtpz0vy41.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
