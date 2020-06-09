<template>
    <v-row transition="slide-x-transition" no-gutters class="full-background">
        <v-col
            class="background-image hidden-sm-and-down"
            data-aos="fade-right"
        ></v-col>
        <v-col class="text-content">
            <v-row
                align="center"
                justify="center"
                v-bind:class="{ height_styling: $vuetify.breakpoint.mdAndUp }"
            >
                <v-col class="col-10 col-md-8 col-sm-9" data-aos="fade-left">
                    <div class="display-3 font-weight-thin">About Me</div>
                    <div class="headline font-weight-light">
                        <p>
                            I'm a big fan of software development, particularly
                            web development and open data.
                        </p>
                        <p>
                            I'm passionate about projects that help people
                            achieve their goals, no matter what they may be.
                        </p>
                    </div>
                    <v-card shaped>
                        <v-card-title class="headline"
                            >My Languages</v-card-title
                        >

                        <v-card-subtitle>
                            <div
                                v-for="lang in languages"
                                v-bind:key="lang.name"
                            >
                                <br />
                                {{ lang.name }}
                                <v-progress-linear
                                    :value="lang.val"
                                    color="deep-purple accent-4"
                                ></v-progress-linear>
                            </div>
                        </v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'AboutMe',
    data: function() {
        return {
            languages: [
                {
                    name: 'Javascript',
                    val: 90
                },
                {
                    name: 'Python',
                    val: 80
                },
                {
                    name: 'SQL',
                    val: 75
                },
                {
                    name: 'HTML/CSS',
                    val: 65
                }
            ]
        };
    }
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
    display: block;
    min-height: 100vh;
    padding: 0px;
}
.height_styling {
    height: 100vh;
}
.full-background {
    background-color: #b1cee2;
}
</style>
