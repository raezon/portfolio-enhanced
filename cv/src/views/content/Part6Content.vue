<template>
  <div
    class="container mx-auto w-3/3 sm:w-10/12 justify-items-center pr-8 pl-8 h-full"
  >
    <!-- Prject section-->
    <div class="grid grid-rows-1 sm:grid-cols-1 gap-x-4 gap-y-16">
      <!-- title-->
      <div class="grid grid-rows-1">
        <div>
          <div class="flex gap-x-4">
            <span class="hash-tag text-2xl">#</span>
            <h1 class="text-2xl">My Recent Project</h1>
          </div>
        </div>
      </div>
      <!-- my project section-->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white rounded-lg shadow-md p-6">
          <img
            src="https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
            alt="Image 1"
            class="w-full mb-4 rounded-lg"
          />
          <h2 class="text-lg font-bold mb-2">Project Title</h2>
          <p class="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            lorem quis tellus ornare imperdiet.
          </p>
          <div class="flex flex-wrap">
            <span
              class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >HTML</span
            >
            <span
              class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >CSS</span
            >
            <span
              class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >JavaScript</span
            >
            <span
              class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >UI/UX</span
            >
          </div>
          <a href="#" class="text-bleuDesign font-medium mt-4 inline-block"
            >View More</a
          >
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <img
            src="https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
            alt="Image 2"
            class="w-full mb-4 rounded-lg"
          />
          <h2 class="text-lg font-bold mb-2">Project Title</h2>
          <p class="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            lorem quis tellus ornare imperdiet.
          </p>
          <div class="flex flex-wrap">
            <span
              class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >React</span
            >
            <span
              class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >Node.js</span
            >
            <span
              class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >MongoDB</span
            >
            <span
              class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >APIs</span
            >
          </div>
          <a href="#" class="text-bleuDesign font-medium mt-4 inline-block"
            >View More</a
          >
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <img
            src="https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
            alt="Image 2"
            class="w-full mb-4 rounded-lg"
          />
          <h2 class="text-lg font-bold mb-2">Project Title</h2>
          <p class="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            lorem quis tellus ornare imperdiet.
          </p>
          <div class="flex flex-wrap">
            <span
              class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >React</span
            >
            <span
              class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >Node.js</span
            >
            <span
              class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >MongoDB</span
            >
            <span
              class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >APIs</span
            >
          </div>
          <a href="#" class="text-bleuDesign font-medium mt-4 inline-block"
            >View More</a
          >
        </div>
      </div>
      <!-- end my project section-->
      <OpeningClosingTag
        title1="All"
        title2="Project"
        classTag="hidden sm:flex gap-x-2  all-project"
        classTagSpan="opening-tag text-2xl"
        classH1="text-2xl flex justify-center"
        classDecoration="closing-tag text-2xl"
      />
    </div>
  </div>
</template>

<script>
import OpeningClosingTag from "@/components/OpeningClosingTag.vue";
export default {
  name: "Part6Content",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { OpeningClosingTag },
};
</script>

<style lang="scss" scoped></style>
