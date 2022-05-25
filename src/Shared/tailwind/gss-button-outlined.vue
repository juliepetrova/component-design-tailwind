<template>
  <button
    class="rounded-md border-2 border-primary border-solid hover:bg-primary text-primary p-2 px-3 font-light hover:text-white focus:outline-none focus:shadow-outline"
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
