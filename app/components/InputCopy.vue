<!--
SPDX-FileCopyrightText: 2024 The Nirvati Developers

SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
  <UInput
    ref="copyInputField"
    :model-value="value"
    type="text"
    readonly
  >
    <template #trailing>
      <UIcon
        class="size-5 cursor-pointer"
        name="i-heroicons-document-duplicate"
        @click="copyText()"
      />
    </template>
  </UInput>
</template>

<script lang="ts" setup>
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});

const copyInputField = ref<{ $el: HTMLElement } | null>(null);

async function copyText() {
  const copyText = copyInputField.value!.$el.querySelector(
    "input",
  )!;
  // Selection is purely as visual feedback
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  await navigator.clipboard.writeText(props.value);
  window.setTimeout(() => {
    copyText.blur();
    window.getSelection()?.removeAllRanges();
  }, 1000);
}
</script>
