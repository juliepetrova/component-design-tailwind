<template>
  <div>
    <select
      id="select"
      class="w-full text-gray-700 rounded-md border border-gray-300 p-2 mb-2 leading-tight focus:outline-none focus:shadow-outline"
    >
      <option
        v-for="option in options"
        v-bind:key="option.ref"
        @change="$emit('selected', option.value)"
      >
        {{ option.name }}
      </option>
    </select>
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
