<template>
  <div :class="classTag">
    <span :class="classTagSpan">&#60;</span>
    <h1 :class="classH1">
      <span class="bg-blue-500 pr-1 text-white">{{ title1 }}</span>
      {{ title2 }}
    </h1>
    <span :class="classDecoration"> /></span>
  </div>
</template>

<script setup>
/* eslint-disable */
import { defineProps } from "vue";

const props = defineProps({
  title1: String,
  title2: String,
  classTag: String,
  classTagSpan: String,
  classH1: String,
  classDecoration: String,
});
</script>

<style lang="scss" scoped></style>
