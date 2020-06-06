<template>
    <span>
        <welcome id="home"></welcome>
        <about-me id="about"></about-me>
        <contact id="contact"></contact>
    </span>
</template>

<script>
import Welcome from '@/components/Welcome';
import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';

export default {
    name: 'home',
    components: {
        Welcome,
        AboutMe,
        Contact
    }
};
</script>
