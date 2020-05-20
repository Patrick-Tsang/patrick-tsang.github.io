<template>
    <v-row transition="slide-x-transition" no-gutters>
        <v-col>
            <v-row align="center" justify="center" class="text-content" style="height: 100vh">
                <v-col class="background-image hidden-sm-and-down" data-aos="fade-up"></v-col>
                <v-col class="col-10 col-md-6 col-sm-8" data-aos="fade-down">
                    <div class="display-2 font-weight-thin">About Me</div>
                    <div class="headline font-weight-light"></div>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'AboutMe'
};
</script>

<style scoped>
.background-image {
    background: url('~@/assets/aboutme.jpeg');
    background-size: cover;
    width: 100%;
    height: 100vh;
}
.text-content {
    background-color: #81AFD0;
}
</style>
