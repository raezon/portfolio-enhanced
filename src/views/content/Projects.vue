<template>
  <div class="container mx-auto w-3/3 sm:w-11/12 justify-items-center pr-8 pl-8 h-full">
    <!-- Prject section-->
    <div class="grid grid-rows-1 sm:grid-cols-1 gap-x-4 gap-y-16">
      <!-- title-->
      <div class="grid grid-rows-1">
        <div>
          <div class="flex gap-x-4">
            <span class="hash-tag text-2xl">#</span>
            <h1 class="text-2xl">My Projects</h1>
          </div>
        </div>
      </div>
      <!-- my project section-->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white rounded-lg shadow-md p-6" v-for="(project, index) in projects" :key="index">
          <img :src="project.image" 
            alt="project"
            class="w-full h-1/3  mb-4 rounded-lg" />
          <h2 class="text-lg font-bold mb-2">{{ project.title }}</h2>
          <p class="text-gray-700 mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap">
            <span v-for="tech in project.technologies" :key="tech"
              class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2">{{ tech }}</span>
          </div>
          <a :href="project.link">Link Project</a>
        </div>
      </div>
      <!-- end my project section-->
      <OpeningClosingTag title1="All" title2="Project" classTag="hidden sm:flex gap-x-2  all-project"
        classTagSpan="opening-tag text-2xl" classH1="text-2xl flex justify-center"
        classDecoration="closing-tag text-2xl" />
    </div>
  </div>
</template>

<script setup>
import OpeningClosingTag from "@/components/OpeningClosingTag.vue";
</script>

<style lang="scss" scoped></style>
<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Aws cloud devops",
          description: "J'ai une experiance sur le déploiment sur aws pour divers application tell que les application monilth notament microservices.",
          technologies: ["Aws", "Kubernetes", "Jenkins", "Terraform"],
          link: "https://github.com/raezon/-aws_lab_2",
          image: "https://th.bing.com/th/id/OIP.OyO3FEzDghfcAvMFBjGpmAHaEK?pid=ImgDet&rs=1"
        },
        {
          title: "Backend",
          description: "Je travail sur des solution scalable je suis un cycle de travail agile, aspect de dévelopment comme clean code,clean architecture.",
          technologies: ["Php", "Laravel","Yii", "Node js", "Nest js"],
          link: "https://soolvit.com",
          image: "https://th.bing.com/th/id/OIP.sF618sPOtC0R6E5z_abGLAHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        },
        {
          title: "Front end",
          description: "J'ai une experiance en tan que déveloper frontend je m'assure toujours de livré le bon code dédier a l'aspect visuel",
          technologies: ["Html", "Css","Js", "Twlind css", "Vue"],
          link: "https://www.assuranceiso.com/",
          image: "https://mfrachet.github.io/create-frontend-framework/logo.png"
        }
      ]
    };
  }
};
</script>