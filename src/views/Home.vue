<template>
    <span>
        <welcome></welcome>
        <home-details></home-details>
    </span>
</template>

<script>
import Welcome from '@/components/Welcome';
import HomeDetails from '@/components/HomeDetails';

export default {
    name: 'home',
    components: {
        Welcome,
        HomeDetails
    }
};
</script>
