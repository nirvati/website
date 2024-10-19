<template>
  <div>
    <div
        class="h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-2 text-center px-4 bg-nirvati dark text-white">
      <div class="flex flex-col gap-2 items-center justify-center">
        <h1 class="font-bold font-serif text-5xl">Server management for the future</h1>
        <h2 class="text-2xl">With Nirvati, you can break free from depending on cloud services and own your data
          again.</h2>
        <p>100% open source, 100% free</p>
        <NuxtLink to="#more">
        <UButton size="lg">Learn more</UButton>
        </NuxtLink>
      </div>
    </div>
    <div
        class="bg-[#ca6236] flex flex-col lg:flex-row items-center justify-center gap-2 text-center dark text-white pb-8">
      <div class="flex flex-col">
        <a id="more"></a>
        <h1 class="font-bold font-serif text-5xl mb-2">Self-host your apps</h1>
        <h2 class="text-2xl max-w-xl">By running your own server, you can move away from cloud services where others can
          see your data and be sure <b>you</b> are the only one who has access to your data.</h2>
      </div>
      <img src="~/assets/dashboard-screenshot.png" alt="A screenshot showing the Nirvati dashboard"
           class="lg:max-w-[50vw] rounded"/>
    </div>
    <div class="bg-[#ca6236] flex flex-col items-center justify-center gap-2 text-center dark text-white pb-8">
      <h1 class="font-bold font-serif text-5xl">Easy to use</h1>
      <h2 class="text-2xl max-w-6xl">Nirvati is designed to be as simple as possible. It can be installed on any Linux system with
        just one command.  For Raspberry Pi devices, we offer images you just need to flash. </h2>
    </div>
    <div class="bg-[#ca6236] flex flex-col items-center justify-center gap-2 text-center dark text-white pb-8">
      <h1 class="font-bold font-serif text-5xl">Secure by default</h1>
      <h2 class="text-2xl">All apps on Nirvati are only accessible via HTTPS to ensure maximum security.</h2>
    </div>
    <div class="bg-[#ca6236] flex flex-col items-center justify-center gap-2 text-center dark text-white pb-8">
      <h1 class="font-bold font-serif text-5xl">Control your apps</h1>
      <h2 class="text-2xl">Nirvati has a strict permission system for apps that ensures apps do not interact with anything they shouldn't. In addition, you can set storage limits for apps.</h2>
    </div>
    <div class="bg-black flex flex-col items-center justify-center gap-2 text-center dark text-white py-4 text-sm">
      A project by Aaron Dewes.
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.bg-nirvati {
  background: url("~/assets/login-background-nirvati.svg") no-repeat bottom;
  background-size: cover;
}
</style>