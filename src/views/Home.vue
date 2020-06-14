<template>
    <span>
        <welcome id="home"></welcome>
        <projects id="projects"></projects>
        <about-me id="about"></about-me>
        <contact id="contact"></contact>
    </span>
</template>

<script>
import Welcome from '@/components/Welcome';
import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';

export default {
    name: 'home',
    components: {
        Welcome,
        AboutMe,
        Contact,
        Projects
    }
};
</script>
