<template>
  <button
    class="rounded-md bg-primary p-2 px-3 text-white hover:bg-transparent border-2 border-primary border-solid hover:text-primary"
    @click="$emit('clicked')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "GSSButton",
  props: {
    text: String,
  },
};
</script>
