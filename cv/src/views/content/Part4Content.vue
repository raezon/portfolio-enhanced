<template>
  <div
    class="container mx-auto w-3/3 justify-items-center pt-4 pr-8 pl-8 sm:w-2/3 sm:h-96 sm:pb-40"
  >
    <!-- Social medias links-->
    <div class="grid grid-rows-1 sm:gap-4">
      <div class="row-start-0 row-span-2 justify-self-start">
        <div
          class="grid grid-rows-1 gap-4 justify-items-center -top-4 pt-4 p-4"
        >
          <div class="flex gap-x-4">
            <span class="hash-tag text-2xl">#</span>
            <h1 class="text-2xl">Clients get always exceptional</h1>
          </div>

          <h1 class="text-2xl">Work for me ...</h1>
        </div>
      </div>
      <div class="row-end-0 row-span-2 mt-4">
        <div class="sm:relative sm:top-44 sm:-left-20">
          <img
            src="@/assets/images/logos/illustrations/blue.png"
            width="60"
            height="60"
            alt=""
          />
        </div>
        <div
          class="grid grid-rows-3 sm:grid-cols-3 gap-4 justify-items-center pt-4 p-4"
        >
          <div class="w-60">
            <img src="@/assets/images/logos/work1.png" alt="" />
          </div>
          <div class="w-60">
            <img src="@/assets/images/logos/work1.png" alt="" />
          </div>
          <div class="w-60">
            <img src="@/assets/images/logos/work2.png" alt="" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Part4Content",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
