<!--
SPDX-FileCopyrightText: 2024 The Nirvati Developers

SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
  <div class="p-4">
    <h1 class="mb-2 text-4xl font-bold font-seriv">
      {{ t("donate.title") }}
    </h1>
    <h3 class="text-lg mb-4">
      {{
        t("donate.subtitle")
      }}
    </h3>
    <div class="flex justify-center flex-col h-full w-full gap-2">
      <p class="whitespace-pre-line text-lg text-justify">
        {{ t("donate.text.part-1") }}
      </p>
      <p class="whitespace-pre-line text-lg text-justify">
        {{ t("donate.text.part-2") }}
      </p>
      <p class="whitespace-pre-line text-lg text-justify">
        {{ t("donate.text.part-3") }}
      </p>
      <p class="whitespace-pre-line text-lg text-justify mb-2">
        {{ t("donate.text.part-4") }}
      </p>
      <div v-for="goal in goals" :key="goal" class="flex gap-4">
        <UIcon class="h-8 w-8" :name="goalIcons[goal - 1]!"/>
        <p class="text-lg">{{ t(`donate.goals.goal-${goal}`) }}</p>
      </div>
      <a
          class="group m-2 flex items-center justify-center rounded bg-slate-300 p-2 py-4 dark:bg-neutral-800 w-full h-16"
          href="https://opencollective.com/nirvati"
      >
        <UIcon
            name="i-heroicons-heart"
            class="my-[0.125rem] ml-1 h-5 w-5 transition-all duration-200 group-hover:my-0 group-hover:ml-0 group-hover:h-6 group-hover:w-6"
        />
        <span class="ml-2 text-lg">{{ t("donate.button") }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">

const {t} = useI18n();

const goals = Array.from(
    {length: 6},
    (_, i) => i + 1,
);

const goalIcons = [
  "i-heroicons-wrench-screwdriver",
  "i-heroicons-shield-check",
  "i-heroicons-globe-alt",
  "i-heroicons-server-stack",
  "i-heroicons-archive-box",
  "i-heroicons-chat-bubble-left-right",
  "i-heroicons-bolt",
]
</script>
