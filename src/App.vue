<template>
    <v-app>
        <navigation></navigation>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
    name: 'App',
    components: {
        Navigation
    }
};
</script>

<style>
.headline {
    line-height: 1.5 !important;
}
.display-3 {
    padding-bottom: 1rem !important;
}
.v-application a {
    color: blueviolet;
}
</style>
