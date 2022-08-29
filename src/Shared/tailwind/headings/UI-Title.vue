<template>
  <div>
    <h1
      class="text-3xl font-semibold whitespace-pre-wrap m-0 p-0"
      :class="classProps"
    >
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "UITitle",
  props: {
    title: String,
    classProps: String,
  },
};
</script>
