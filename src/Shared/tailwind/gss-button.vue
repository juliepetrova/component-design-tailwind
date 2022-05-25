<template>
  <button
    class="rounded-md bg-primary p-2 px-3 font-light text-white hover:bg-white border-2 border-primary border-solid hover:text-primary"
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
