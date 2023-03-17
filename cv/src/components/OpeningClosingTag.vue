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

<script>
export default {
  props: [
    "title1",
    "title2",
    "classTag",
    "classTagSpan",
    "classH1",
    "classDecoration",
  ],
};
</script>

<style lang="scss" scoped></style>
