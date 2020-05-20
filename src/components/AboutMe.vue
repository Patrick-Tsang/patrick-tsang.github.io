<template>
    <v-row transition="slide-x-transition" no-gutters>
        <v-col class="background-image hidden-sm-and-down" data-aos="fade-up"></v-col>
        <v-col class="text-content">
            <v-row align="center" justify="center" style="height: 100vh">
                <v-col class="col-10 col-md-8 col-sm-9" data-aos="fade-down">
                    <div class="display-3 font-weight-thin">About Me</div>
                    <div class="headline font-weight-light">
                        <p>I'm a big fan of software development, particularly web development and open data.</p>
                        <p>I'm passionate about projects that help people achieve their goals, no matter what they may be.</p>
                    </div>
                    <div class="display-1 font-weight-thin">My Languages</div>
                    <br />Javascript
                    <v-progress-linear value="90" color="deep-purple accent-4"></v-progress-linear>
                    <br />Python
                    <v-progress-linear value="90" color="deep-purple accent-4"></v-progress-linear>
                    <br />HTML/CSS
                    <v-progress-linear value="75" color="deep-purple accent-4"></v-progress-linear>
                    <br />PHP
                    <v-progress-linear value="65" color="deep-purple accent-4"></v-progress-linear>
                    <br />
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
    background-color: #81afd0;
}
.display-3 {
    line-height: 6rem !important;
}
</style>
