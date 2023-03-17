<template>
  <div
    class="container mx-auto justify-items-center pt-4 pr-8 pl-8 w-3/3 sm:w-2/3 pt-16 sm:h-96"
  >
    <!-- Social medias links-->
    <div class="grid grid-rows-2 sm:grid-cols-2 gap-x-4">
      <!-- first section-->
      <div class="grid grid-cols-1">
        <div class="flex flex-col gap-y-8">
          <div class="flex">
            <span class="hash-tag text-6xl font-bold">#</span>
            <h1 class="text-6xl font-bold">Let's</h1>
          </div>
          <h1 class="text-6xl ml-8 font-bold">connect</h1>
        </div>

        <div class="flex justify-end w-3/3 sm:w-2/3 gap-x-4">
          <span class="text-4xl text-colored font-bold">Hire me</span>
          <span class="text-colored text-4xl font-bold">-></span>
        </div>
      </div>
      <!-- second section-->
      <div class="">
        <form action="">
          <div class="grid grid-cols-1 gap-y-4">
            <div class="mb-3">
              <input
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Your Name"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Project title"
              />
            </div>

            <div class="mb-3">
              <textarea
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="Project description"
              ></textarea>
            </div>

            <div class="mb-3">
              <Button
                class="bg-[#0b81d1] hover:bg-blue-700 text-white font-bold py-2 px-4"
                >Submit</Button
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Part9Content",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
