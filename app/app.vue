<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import "tailwindcss";
@import "@nuxt/ui";
@plugin '@tailwindcss/typography';

@theme {
  --color-nirvati-50: #f5e6fa;
  --color-nirvati-100: #ebccf5;
  --color-nirvati-200: #d699eb;
  --color-nirvati-300: #c166e0;
  --color-nirvati-400: #ac33d6;
  --color-nirvati-500: #800080;
  --color-nirvati-600: #660066;
  --color-nirvati-700: #4c004c;
  --color-nirvati-800: #330033;
  --color-nirvati-900: #310031;
  --color-nirvati-950: #190019;
}
</style>