<template>
  <div>
    <Hero />
    <Part1Content />
    <Part2Content />
    <Part3Content />
    <Part6Content />
    <Part7Content />
    <Part8Content />
    <Part9Content />
  </div>
</template>

<script>
import Hero from "./content/Hero.vue";
import Part2Content from "./content/Part2Content.vue";
import Part3Content from "./content/Part3Content.vue";
import Part6Content from "./content/Part6Content.vue";
import Part7Content from "./content/Part7Content.vue";
import Part8Content from "./content/Part8Content.vue";
import Part9Content from "./content/Part9Content.vue";
export default {
  name: "Acceuil",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    Hero,
    Part2Content,
    Part3Content,
    Part6Content,
    Part7Content,
    Part8Content,
    Part9Content,
  },
};
</script>

<style lang="scss" scoped></style>
