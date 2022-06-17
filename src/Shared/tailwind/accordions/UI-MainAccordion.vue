<template>
  <div class="accordion">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
      },
    };
  },
  provide() {
    return { Accordion: this.Accordion };
  },
};
</script>
