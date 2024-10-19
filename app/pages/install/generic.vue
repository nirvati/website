<script setup lang="ts">

</script>

<template>
  <div
      class="h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-2 text-center px-4 bg-nirvati dark text-white">
    <div class="flex flex-col gap-2 items-center justify-center">
      <h1 class="font-bold font-serif text-5xl">Install on Linux</h1>
      <h2 class="text-2xl mb-4">Just one command to get started.</h2>
      <InputCopy value="curl -sSL https://get.nirvati.org | sudo bash" size="xl" class="font-mono min-w-64" :ui="{ base: ['w-[min(90vw,32rem)]'] }" />
      <NuxtLink to="https://gitlab.com/nirvati/install/-/blob/main/install.sh?ref_type=heads" class="underline">View source</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.bg-nirvati {
  background: url("~/assets/login-background-nirvati.svg") no-repeat bottom;
  background-size: cover;
}
</style>

<style>
</style>