<template>
  <div class="flex flex-col items-start mr-4 mb-3">
    <div
      v-for="option in options"
      v-bind:key="option.value"
      class="my-1 flex items-center"
    >
      <input
        class="w-4 h-4 mr-2 focus:ring-blue-400 focus:ring-opacity-25 border border-blue-300 rounded cursor-pointer"
        type="checkbox"
        :id="option.ref"
        v-bind:value="option.value"
        @change="$emit('selected', option.value)"
      />
      <label :for="option.ref" class="inline-flex items-center">
        {{ option.name }}
      </label>
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
