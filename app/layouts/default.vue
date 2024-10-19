<template>
  <div>
    <div class="flex py-2 px-4 items-center h-[64px]">
      <NuxtLink to="/">
        <img src="~/assets/nirvati-logo-text.svg" alt="Nirvati logo" class="h-12 w-auto" />
      </NuxtLink>
      <div class="hidden md:flex items-center w-full">
        <UNavigationMenu :items="nav" class="justify-center"/>
        <div class="flex items-center gap-3 h-auto">
          <NuxtLink to="https://gitlab.com/nirvati" class="h-6">
            <UIcon name="i-uil-gitlab" class="size-6 dark:text-white"/>
          </NuxtLink>
          <NuxtLink to="https://x.com/getnirvati" class="h-6">
            <UIcon name="i-uil-twitter" class="size-6 dark:text-white"/>
          </NuxtLink>
        </div>
        <NuxtLink
            to="/donate"
            class="group flex items-center justify-center py-2 pr-2 pl-1 rounded-md bg-nirvati-300 dark:bg-nirvati-500 ml-4"
        >
          <UIcon
              name="i-heroicons-heart"
              class="mr-1 ml-1 h-4 w-4 transition-all duration-200 group-hover:my-0 group-hover:mr-0 group-hover:h-5 group-hover:w-5"
          />
          <span class="ml-1">{{ t("donate.title") }}</span>
        </NuxtLink>
      </div>
    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
const {t} = useI18n();

const nav = [{
  label: 'Installation',
  icon: 'i-heroicons-rocket-launch',
  children: [
    {
      label: 'Generic Linux',
      description: 'Install Nirvati on any Linux system.',
      icon: 'i-carbon-linux',
      to: "/install/generic"
    },
    {
      label: 'Raspberry Pi',
      description: 'Get started with a Raspberry Pi.',
      icon: 'i-simple-icons-raspberrypi',
      to: "/install/rpi"
    },
    {
      label: 'Prebuilt hardware',
      icon: 'i-carbon-store',
      description: 'Purchase a plug-and-play server.',
      to: "/install/prebuilt"
    },
  ]
}, {
  label: 'For developers',
  icon: 'i-carbon-code',
  children: [
    {
      label: 'Publish your app',
      description: 'Make apps freely available to all of our users.',
      icon: 'i-carbon-cloud-upload',
      to: "/developers/publish"
    },
    {
      label: 'Run a 3rd party app store',
      description: 'Completely control the hosting of your app, and sell apps yourself.',
      icon: 'i-carbon-store',
      to: "/developers/store"
    },
  ]
}, {
  label: 'Explore Apps',
  icon: 'i-carbon-application',
  to: "/apps"
}, {
  label: 'Roadmap',
  icon: 'i-ph-path',
  to: "/roadmap"
}];
</script>

<style scoped>

</style>