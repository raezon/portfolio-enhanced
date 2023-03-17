<template>
  <div>
    <div class="flex mt-16 justify-center sm:justify-start">
      <!--profile picture-->
      <div class="ml-16 hidden sm:block">
        <div class="flex justify-center rounded-full bg-white shadow-md ml-24">
          <img
            class="w-3/3 sm:w-2/3 h-2/3 image-profile"
            src="@/assets/images/personal.svg"
          />
          <div
            class="bg-blue-500 bg-opacity-70 absolute bottom-14 w-52 h-24 left-36 rounded-sm p-4"
          >
            <div class="grid justify-items-stretch w-40">
              <span
                class="text-white text-lg font-normal justify-self-end font-pop"
                >Ammar Djebabla</span
              >
              <span
                class="text-white text-lg font-normal justify-self-end font-pop"
                >Developer</span
              >
            </div>
          </div>
        </div>
      </div>
      <!--about us-->
      <div class="sm:ml-8 items-center py-16">
        <div class="grid grid-rows-1 gap-y-16">
          <div class="grid grid-rows-1 gap-y-4">
            <div class="grid grid-rows-1 gap-y-2">
              <div>
                <h2
                  class="font-pop text-slate-400 text-2xl font-medium text-base"
                >
                  //This IS ME
                </h2>
              </div>
              <div>
                <h2 class="font-pop font-bold text-xl">Full stack</h2>
              </div>
              <div>
                <h2 class="font-pop font-bold text-xl">web developer</h2>
              </div>
              <div>
                <h2 class="font-pop font-bold text-xl">& Freelancer</h2>
              </div>
            </div>
            <div class="">
              <div class="flex gap-x-2">
                <OpeningTag />
                <p class="text-base">a professional web developer</p>
              </div>

              <p class="text-base">3 years of experiance</p>
              <p class="text-base">- make best website</p>
              <div class="flex gap-x-2">
                <p class="text-base">for your work</p>
                <ClosingTag />
              </div>
            </div>
          </div>
          <div class="grid grid-rows-1 gap-y-8">
            <div
              class="grid grid-row-1 sm:grid-cols-3 gap-y-2 sm:gap-y-0 gap-x-12"
            >
              <div>
                <span class="text-lg text-blue-personalized font-medium">
                  +8 website
                </span>
              </div>
              <div>
                <span class="text-lg text-blue-personalized font-medium">
                  +4 customer
                </span>
              </div>
              <div>
                <span class="text-lg font-medium"> since 2018 </span>
              </div>
            </div>
            <div class="">
              <span class="text-blue-personalized font-medium"
                >Scroll to more</span
              >
              <span class="ml-2 text-blue-personalized font-medium">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClosingTag from "@/components/ClosingTag.vue";
import OpeningTag from "@/components/OpeningTag.vue";
export default {
  name: "Hero",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    ClosingTag,
    OpeningTag,
  },
};
</script>

<style lang="scss" scoped></style>
