<template>
  <div class="w-full rounded-lg my-5" :class="classProps">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BackgroundComponents",
  props: {
    classProps: String,
  },
};
</script>
