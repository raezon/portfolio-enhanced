<template>
  <div
    class="container mx-auto w-3/3 sm:w-2/3 justify-items-center pr-8 pl-8 pt-16 sm:pt-40 h-full"
  >
    <!-- Social medias links-->
    <div class="grid grid-rows-1 sm:grid-cols-2 gap-x-4">
      <!-- first section-->
      <div class="grid grid-rows-1 mt-4 sm:mt-36">
        <div>
          <div class="flex gap-x-4">
            <span class="hash-tag text-2xl">#</span>
            <h1 class="text-2xl">My Recent Project</h1>
          </div>

          <div class="work5-position">
            <img class="" src="@/assets/images/logos/work5.png" alt="" />
          </div>

          <OpeningClosingTag
            title1="All"
            title2="Project"
            classTag="hidden sm:flex gap-x-2 mt-24 all-project"
            classTagSpan="opening-tag text-2xl"
            classH1="text-2xl flex justify-center"
            classDecoration="closing-tag text-2xl"
          />
        </div>
      </div>
      <!-- second section-->
      <div class="grid grid-rows-1 gap-y-4 sm:gap-y-16">
        <div class="work4-position">
          <img class="" src="@/assets/images/logos/work4.png" alt="" />
        </div>
        <div class="work6-position">
          <img class="" src="@/assets/images/logos/work6.png" alt="" />
        </div>

        <OpeningClosingTag
          title1="All"
          title2="Project"
          classTag="flex sm:hidden gap-x-2 mt-4 all-project"
          classTagSpan="opening-tag text-2xl"
          classH1="text-2xl flex justify-center"
          classDecoration="closing-tag text-2xl"
        />
      </div>
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
