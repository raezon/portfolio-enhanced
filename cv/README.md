# my-portfolio

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