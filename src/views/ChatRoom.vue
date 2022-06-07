<script setup>
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
import Navbar from "../components/Navbar.vue";
import { watch, watchEffect } from "vue";
const router = useRouter();
const { user } = getUser();

watchEffect(() => {
  if (!user.value) {
    router.push({ name: "Welcome" });
  }
});
</script>

<template>
  <Navbar />
</template>

<style lang="scss" scoped></style>
