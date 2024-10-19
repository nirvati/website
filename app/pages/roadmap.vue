<template>
  <div class="flex flex-col items-center justify-center pt-8 gap-2">
    <h1 class="font-bold font-serif text-5xl mb-2">Our roadmap</h1>

    <p class="mb-4 max-w-xl text-center">This list features upcoming changes that are planned to happen in Nirvati. Apart from what's mentioned below,
      we're also constantly working on adding new apps. Nirvati is being built by volunteers, so we can't guarantee delivery of everything on time, this is just a rough estimate.</p>

    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      <li class="mb-10 ms-4">
        <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">19. October 2024</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Nirvati 0.1.0</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">The initial stable release of
          Nirvati.</p>
        <a href="/blog/nirvati-0-1-0-launch"
           class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
          View release blog post
          <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </li>
      <li class="mb-10 ms-4">
        <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22. October 2024</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Release of Raspberry Pi images</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">A variant of Nirvati ready for use on the
          Raspberry Pi 4, 400 and 500 will be published.</p>
      </li>
      <li class="mb-10 ms-4">
        <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">26. October 2024</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Nirvati Lite</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Nirvati Lite will be an optimized version of
          Nirvati designed to use less RAM, but will have less storage management features and support at most 1
          server.</p>
      </li>
      <li class="mb-10 ms-4">
        <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2024</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Nirvati Desktop</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Run Nirvati on Windows, Mac or Linux desktop
          systems with one simple tool.</p>
      </li>
      <li class="mb-10 ms-4">
        <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2024</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Nirvati Enterprise</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">A variant of Nirvati optimized for larger
          deployments.</p>
      </li>
      <li class="mb-10 ms-4">
        <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2024</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Nirvati Media Suite</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Various media apps will be available on Nirvati, like Plex and Jellyfin.</p>
      </li>
      <li class="mb-10 ms-4">
        <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2024</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Nirvati for SaaS</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">A variant of Nirvati optimized for SaaS
          providers that want to offer a cloud-hosted version of Nirvati.</p>
      </li>
      <li class="mb-10 ms-4">
        <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2025</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Citadel 0.5.0</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          A modern Bitcoin & Lightning experience fully integrated into Nirvati.
        </p>
      </li>
      <li class="mb-10 ms-4">
        <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2025</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Upgrades from Citadel 0.3.0</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Users from the previous Citadel versions can move to Nirvati.
        </p>
      </li>
      <li class="mb-10 ms-4">
        <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2025</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Nirvati app registry</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          A self-hosted app registry for Nirvati, allowing developers to more easily build their own app store and sell apps.
        </p>
      </li>
      <li class="ms-4">
        <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2025</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Nirvati 0.2.0</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Advanced server management, app snapshots, multi-disk support, backups, and more.
        </p>
      </li>
    </ol>
    <div class="mb-20" />

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>