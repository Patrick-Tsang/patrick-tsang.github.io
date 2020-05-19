<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="blue lighten-2"
            dark
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item :key="index">
                        <v-list-item-content>
                            {{ item.title }}
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app dense inverted-scroll light>
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-app-bar-title>{{ title }}</v-app-bar-title>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat class="hidden-sm-and-down">About</v-btn>
            <v-btn color="blue lighten-3" class="hidden-sm-and-down"
                >Contact</v-btn
            >
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            title: 'Patrick Tsang ',
            drawer: false,
            items: [{ title: 'Menu' }, { title: 'About' }, { title: 'Contact' }]
        };
    }
};
</script>

<style scoped></style>
