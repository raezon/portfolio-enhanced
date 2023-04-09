# my-portfolio

## Project overview

![screencapture-localhost-8080-2023-04-08-04_02_00](https://user-images.githubusercontent.com/47975444/230788803-078229c8-15c6-4a52-97b6-4370c385c4f4.png)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Hints 
i did use composition api setup on vue 3
why i did that i will show how clean it is to work with composition and setup
instead of doing this
```
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
```
you may just do this to import a component

```
<script>
import OpeningClosingTag from "@/components/OpeningClosingTag.vue";
</script>
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


map , reduce
