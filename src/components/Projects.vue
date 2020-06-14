<template>
    <div class="projects">
        <v-container>
            <v-row align="center" justify="center">
                <v-col class="col-10" data-aos="fade-right">
                    <div class="display-3 font-weight-thin">
                        Projects
                    </div>
                    <div class="headline font-weight-light">
                        <p>
                            Here are some things that I've had the pleasure of
                            working on!
                        </p>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-row justify="center">
                        <v-col cols="10" md="6">
                            <v-card data-aos="fade-right">
                                <v-img
                                    aspect-ratio="1.7"
                                    src="~@/assets/bizpal-logo.png"
                                    contain
                                >
                                </v-img>
                                <v-card-title>
                                    <span class="headline font-weight-light">
                                        BizPaL
                                    </span>
                                </v-card-title>
                                <v-card-text class="body-1">
                                    <p>
                                        BizPaL is a government service for
                                        finding permits and licenses for
                                        businesses.
                                    </p>
                                    <p>
                                        I contributed to the development and
                                        migration of the service to a Vue.js
                                        frontend, as well as an overhaul of the
                                        backend.
                                    </p>
                                    <a
                                        target="_blank"
                                        href="https://services.bizpal-perle.ca"
                                        >Check it out here!</a
                                    >
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="10" md="6">
                            <v-card data-aos="fade-left">
                                <v-img
                                    aspect-ratio="1.7"
                                    src="~@/assets/bc.jpg"
                                    contain
                                >
                                </v-img>
                                <v-card-title>
                                    <span class="headline font-weight-light">
                                        Business Structures
                                    </span>
                                </v-card-title>
                                <v-card-text class="body-1">
                                    <p>
                                        While I worked on BizPal, I had the
                                        opportunity to a prototype a widget for
                                        our partners in the BC government.
                                    </p>
                                    <p>
                                        This repo works as a proof of concept
                                        for the project. It was meant to show
                                        the features requested by our partners,
                                        allowing them to plug and play data.
                                    </p>
                                    <a
                                        target="_blank"
                                        href="https://github.com/Patrick-Tsang/structures"
                                        >Here's a link to the repo!
                                    </a>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="10" md="6">
                            <v-card data-aos="fade-right">
                                <v-img
                                    aspect-ratio="1.7"
                                    src="~@/assets/dronedog.png"
                                    contain
                                >
                                </v-img>
                                <v-card-title>
                                    <span class="headline font-weight-light">
                                        Drone Dog
                                    </span>
                                </v-card-title>
                                <v-card-text class="body-1">
                                    <p>
                                        This was my Capstone project, a way to
                                        cap off my undergrad at McMaster
                                        University.
                                    </p>
                                    <p>
                                        We designed a rover that would retrieve
                                        an object, navigating around obstacles
                                        using path-finding algorithms. I'm proud
                                        of what my team was able to accomplish,
                                        given difficulties introduced by the
                                        novel coronavirus outbreak.
                                    </p>
                                    <a
                                        target="_blank"
                                        href="https://github.com/LesleyWheat/Capstone-DogDrone/"
                                        >Here's a link to the project!</a
                                    >
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="10" md="6">
                            <v-card data-aos="fade-left">
                                <v-img
                                    aspect-ratio="1.7"
                                    src="~@/assets/personal.jpg"
                                >
                                </v-img>
                                <v-card-title>
                                    <span class="headline font-weight-light">
                                        Personal Website
                                    </span>
                                </v-card-title>
                                <v-card-text class="body-1">
                                    <p>
                                        Oh look, you're already here!
                                    </p>
                                    <p>
                                        This is a way of showing people a little
                                        bit about myself. Who I am, what I do,
                                        and what I'm passionate about.
                                    </p>
                                    <a
                                        target="_blank"
                                        href="https://github.com/Patrick-Tsang/patrick-tsang.github.io/tree/dev"
                                        >Here's a link to the repo!</a
                                    >
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'projects'
};
</script>
<style scoped>
.projects {
    background-color: #dcd0d4;
}
</style>
