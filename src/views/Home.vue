<template>
    <span>
        <welcome id="home"></welcome>
        <about-me id="about"></about-me>
    </span>
</template>

<script>
import Welcome from '@/components/Welcome';
import AboutMe from '@/components/AboutMe';

export default {
    name: 'home',
    components: {
        Welcome,
        AboutMe
    }
};
</script>
