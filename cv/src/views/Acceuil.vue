<template>
  <div>
    <Hero />
    <MyProServices />
    <MyOtherServices />
    <Projects />
    <TestimonialPart1 />
    <TestimonialPart2 />
    <LetConnect />
  </div>
</template>

<script>
import Hero from "./content/Hero.vue";
import MyProServices from "./content/MyProServices.vue";
import MyOtherServices from "./content/MyOtherServices.vue";
import Projects from "./content/Projects.vue";
import TestimonialPart1 from "./content/TestimonialPart1.vue";
import TestimonialPart2 from "./content/TestimonialPart2.vue";
import LetConnect from "./content/LetConnect.vue";
export default {
  name: "Acceuil",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    Hero,
    MyProServices,
    MyOtherServices,
    Projects,
    TestimonialPart1,
    TestimonialPart2,
    LetConnect,
  },
};
</script>

<style lang="scss" scoped></style>
