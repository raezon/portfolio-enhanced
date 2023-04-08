<template>
  <div
    class="container mx-auto w-3/3 sm:w-2/3 sm:w-5/6 justify-items-center pt-4 pr-8 pl-8 h-100"
  >
    <!-- Social medias links-->
    <div class="grid grid-rows-2 sm:grid-rows-3 sm:grid-flow-col gap-x-8">
      <!--first card-->
      <div
        class="sm:row-start-0 sm:row-span-2 sm:justify-self-end w-6/6 sm:w-4/6"
      >
        <div
          class="grid grid-rows-1 gap-4 bg-white rounded-lg justify-items-center -top-4 pt-4 shadow-md p-4"
        >
          <img src="@/assets/images/logos/frontend.svg" alt="" />
          <h1>frontend-end dev</h1>
          <p>Thinking on a good solution</p>
          <p>rather than making it work</p>
          <p>it may work but it will crash</p>
          <OpeningClosingTag
            title1="Learn"
            title2="more"
            classTag="flex gap-x-2"
            classTagSpan="opening-tag"
            classH1=""
            classDecoration="closing-tag"
          />
        </div>
      </div>
      <!--second card-->
      <div class="mt-4 sm:row-end-0 sm:row-span-2 w-6/6 sm:w-4/6">
        <div
          class="grid grid-rows-1 gap-4 bg-white rounded-lg justify-items-center sm:w-3/3 pt-4 shadow-md p-4"
        >
          <img src="@/assets/images/logos/mangement.svg" alt="" />
          <h1>mangement</h1>
          <p>Thinking on a good solution</p>
          <p>rather than making it work</p>
          <p>it may work but it will crash</p>
          <OpeningClosingTag
            title1="Learn"
            title2="more"
            classTag="flex gap-x-2"
            classTagSpan="opening-tag"
            classH1=""
            classDecoration="closing-tag"
          />
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import OpeningClosingTag from "@/components/OpeningClosingTag.vue";
export default {
  name: "MyOtherServices",

  data() {
    return {};
  },
  components: { OpeningClosingTag },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
