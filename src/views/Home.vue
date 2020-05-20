<template>
    <span>
        <welcome></welcome>
        <about-me></about-me>
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
