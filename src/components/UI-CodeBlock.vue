<template>
  <div>
    <h2>vue-code-highlight example</h2>
    <code-highlight language="markup">
      <slot></slot>
    </code-highlight>
  </div>
</template>

<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/prism-okaidia.css";
import "vue-code-highlight/themes/window.css";
export default {
  name: "ComponentExample",
  components: {
    CodeHighlight,
  },
};
</script>
