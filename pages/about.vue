<template>
  <div>
    <h1>About page</h1>
    <NuxtLink to="/">Home page</NuxtLink>
    <AppAlert />
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'default',
  });

  /* METATAGS */
  useHead({
    title: 'About Page',
  });
</script>