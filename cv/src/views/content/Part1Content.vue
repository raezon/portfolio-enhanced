<template>
  <div class="container mx-auto w-3/3 sm:w-2/3 pt-14 pb-14">
    <!-- Social medias links think on making it dynamic-->
    <div
      class="grid grid-rows-4 justify-center md:justify-start sm:grid-cols-4 gap-x-4 gap-0 sm:gap-4"
    >
      <div class="w-32">
        <a href=""><img src="@/assets/images/logos/Facebook.svg" alt="" /></a>
      </div>
      <div class="w-32">
        <a href=""><img src="@/assets/images/logos/Linkedin.svg" alt="" /></a>
      </div>
      <div class="w-32">
        <a href=""><img src="@/assets/images/logos/Github.svg" alt="" /></a>
      </div>
      <div class="w-32">
        <a href=""><img src="@/assets/images/logos/Twiter.svg" alt="" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Part1Content",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
