<template>
  <div
    class="container mx-auto w-3/3 justify-items-center pt-4 pr-8 pl-8 sm:w-2/3 pt-16 sm:pt-40 h-100"
  >
    <!-- Social medias links-->
    <div class="grid grid-rows-1 sm:grid-cols-2 gap-x-4">
      <div class="grid grid-rows-1 gap-4">
        <div class="flex gap-x-4">
          <span class="hash-tag text-2xl">#</span>
          <h1 class="text-2xl">My professional work</h1>
        </div>
        <h1>with this brands & company</h1>

        <div class="flex gap-x-2">
          <span class="opening-tag"> &#60; </span>
          <p>I enjoy solving problems with clean</p>
        </div>

        <div class="flex gap-x-2">
          <p>passion for inspiring design</p>
          <span class="closing-tag">/></span>
        </div>

        <button
          class="rounded-md p-2 bg-sky-600 hover:bg-blue-700 w-3/3 sm:w-2/3 text-white"
        >
          Reach me
        </button>
      </div>
      <div
        class="w-3/3 sm:w-1/3 mt-4 sm:w-full grid grid-cols-2 gap-x-8 gap-y-4 ml-8 mr-8 sm:gap-y-0 sm:ml-0 sm:mr-0"
      >
        <div
          class="bg-white rounded-lg justify-items-center shadow-md w-20 h-20 place-self-start sm:place-self-end"
        >
          <img
            class="mt-6 ml-6"
            src="@/assets/images/logos/illustrations/apple.png"
            width="30"
            height="30"
            alt=""
          />
        </div>
        <div
          class="bg-white rounded-lg justify-items-center shadow-md w-20 h-20"
        >
          <img
            class="mt-6 ml-6"
            src="@/assets/images/logos/illustrations/google.png"
            width="30"
            height="30"
            alt=""
          />
        </div>
        <div
          class="bg-white rounded-lg justify-items-center shadow-md w-20 h-20 place-self-start sm:place-self-end"
        >
          <img
            class="mt-6 ml-6"
            src="@/assets/images/logos/illustrations/microsoft.png"
            width="30"
            height="30"
            alt=""
          />
        </div>
        <div
          class="bg-white rounded-lg justify-items-center shadow-md w-20 h-20"
        >
          <img
            class="mt-6 ml-6"
            src="@/assets/images/logos/illustrations/nike.png"
            width="30"
            height="30"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Part5Content",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
