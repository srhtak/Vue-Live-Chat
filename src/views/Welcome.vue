<script setup>
import Banner from "@/components/Banner.vue";
import AOS from "aos";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
import { watchEffect } from "vue";
onMounted(() => {
  AOS.init();
});

const router = useRouter();
const { user } = getUser();

watchEffect(() => {
  if (user.value) {
    router.push({ name: "ChatRoom" });
  }
});
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center">
    <Banner />
  </div>
</template>

<style lang="scss"></style>
