<template>
    <v-row transition="slide-x-transition" no-gutters>
        <v-col>
            <v-row align="center" justify="center" style="height: 100vh">
                <v-col class="col-10 col-md-6 col-sm-8">
                    <div
                        class="display-4 font-weight-thin"
                        data-aos="fade-right"
                    >
                        Hi!
                    </div>
                    <div
                        class="headline font-weight-light"
                        data-aos="fade-right"
                    >
                        My name is Patrick Tsang. I'm a Software Engineer, currently located in
                        Toronto, Ontario. Welcome to my personal website! 
                    </div>
                </v-col>
            </v-row>
        </v-col>
        <v-col
            class="background-image hidden-sm-and-down"
            data-aos="fade-left"
        ></v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Welcome'
};
</script>

<style scoped>
.background-image {
    background: url('~@/assets/welcome1.jpg');
    background-size: cover;
    width: 100%;
    height: 100vh;
}
</style>
