<template>
  <div>
    <h1 class="text-3xl font-semibold">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "GSSTitle",
  props: {
    title: String,
  },
};
</script>
