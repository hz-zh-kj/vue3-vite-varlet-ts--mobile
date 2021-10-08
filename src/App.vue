<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goToHome = () => router.push("Home");
</script>
