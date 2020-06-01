<template>
    <v-card>
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant.sync="mini"
            permanent
            app
        >
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img src="~@/assets/mini.jpeg"></v-img>
                </v-list-item-avatar>

                <v-list-item-title>Patrick Tsang</v-list-item-title>

                <v-btn icon @click.stop="mini = !mini">
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    @click="$vuetify.goTo(item.tag)"
                    link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            drawer: true,
            title: 'Patrick Tsang ',
            items: [
                { title: 'Home', icon: 'mdi-home-city', tag: '#home' },
                {
                    title: 'Projects',
                    icon: 'mdi-folder-account',
                    tag: '#projects'
                },
                { title: 'About Me', icon: 'mdi-account', tag: '#about' },

                {
                    title: 'Interests',
                    icon: 'mdi-thumb-up',
                    tag: '#interests'
                },
                { title: 'Contact', icon: 'mdi-email', tag: '#contact' }
            ],
            mini: true
        };
    }
};
</script>

<style scoped></style>
