<template>
  <h2 class="text-xl font-semibold whitespace-pre-wrap" :class="classProps">
    {{ text }}
  </h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    classProps: String,
  },
};
</script>
