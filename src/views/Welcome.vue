<script setup>
import Banner from "@/components/Banner.vue";
import AOS from "aos";
import { onMounted } from "vue";

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center">
    <Banner />
  </div>
</template>

<style lang="scss"></style>
