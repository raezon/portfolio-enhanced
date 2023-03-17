<template>
  <div
    class="container mx-auto w-3/3 sm:w-2/3 justify-items-center pr-8 pl-8 pt-16 sm:pt-40 h-full"
  >
    <!-- Testimonial-->
    <div class="grid grid-cols-1 gap-y-4">
      <!-- first section-->

      <div class="flex flex-col sm:flex-row gap-x-36">
        <div class="flex gap-x-4">
          <span class="hash-tag text-2xl">#</span>
          <h1 class="text-2xl">Testimonalias ...</h1>
        </div>
        <h1 class="text-gray-600">// WHAT CLIENT SAID ABOUT ME</h1>
      </div>
      <!-- second section-->
      <div
        class="bg-gray-200 h-auto pl-8 pr-8 pt-8 pb-4 rounded-lg grid grid-cols-1 gap-y-4"
      >
        <div class="flex flex-col sm:flex-row sm:gap-x-4">
          <span class="comment">//</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            typesetting typesetting
          </p>
        </div>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          typesetting
        </p>
        <p>Lorem Ipsum is simply dummy text of the printing</p>

        <div class="flex justify-end gap-x-2">
          <span class="opening-tag"> &lt;</span>
          <span>Rating</span>
          <span class="opening-tag">....</span>
          <span>4.3</span>
          <span class="closing-tag">/></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Part7Content",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
