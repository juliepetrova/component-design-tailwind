<template>
  <div class="flex flex-col items-start mr-4 mb-3">
    <div
      v-for="option in options"
      v-bind:key="option.ref"
      class="my-1 flex items-center"
    >
      <input
        :id="option.ref"
        type="radio"
        name="options"
        class="w-5 h-5 focus:outline-none focus:ring-2  mr-2"
        v-bind:value="option.value"
        @change="$emit('selected', option.value, true)"
        checked
      />
      <label :for="option.ref" class="flex items-center cursor-pointer">
        <span class=""></span>
        <h3 class="text-sm lg:text-base flex-initial">
          {{ option.name }}
        </h3></label
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
};
</script>
