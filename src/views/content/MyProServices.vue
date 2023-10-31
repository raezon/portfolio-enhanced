<template>
  <div
    class="container mx-auto w-3/3 sm:w-2/3 pt-14 pr-8 pl-8 justify-items-center sm:h-96"
  >
    <!-- Social medias links-->
    <div class="grid grid-rows-2 sm:grid-cols-2 sm:gap-x-4">
      <div class="grid grid-rows-4 gap-4">
        <div class="flex gap-x-4">
          <span class="hash-tag text-2xl">#</span>
          <h1 class="text-2xl font-semibold">Mes services Pro</h1>
        </div>
        <div class="flex gap-x-2">
          <span class="opening-tag"> &#60;</span>
          <p>J’aime résoudre les problèmes avec clean</p>
        </div>

        <p>solutions évolutives. J’ai une véritable</p>
        <div class="flex gap-x-2">
          <p>Passion pour un design inspirant</p>
          <span class="closing-tag">/></span>
        </div>

        <button
          class="rounded-md p-2 bg-sky-600 hover:bg-blue-700 w-3/3 sm:w-2/3 text-white pb-2"
        >
          Télecharger cv
        </button>
      </div>
      <div class="w-full mt-4 sm:mt-0">
        <div
          class="grid grid-rows-1 gap-4 bg-white rounded-lg justify-items-center sm:w-5/6 pt-4 shadow-md p-4"
        >
          <img src="@/assets/images/logos/backend.svg" alt="" />
          <h1>back-end dev</h1>
          <p>Réfléchir à une  solution scallable</p>
          <p>plutôt que de le faire fonctionner</p>
          <p>elle s'arrêtera un jour</p>
          <!-- think on making it reausable-->
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

<script setup>
import OpeningClosingTag from "@/components/OpeningClosingTag.vue";
</script>

<style lang="scss" scoped></style>
