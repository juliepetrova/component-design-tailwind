<template>
  <div class="flex flex-col items-start mr-4 mb-3">
    <div v-for="option in options" v-bind:key="option.value" class="my-1">
      <label class="inline-flex items-center">
        <input
          class="text-blue-500 w-4 h-4 mr-2 focus:ring-blue-400 focus:ring-opacity-25 border border-blue-300 rounded cursor-pointer"
          type="checkbox"
          :name="option.name"
          :id="referenceNumber + option.value"
          v-model="answer"
          v-bind:value="option.value"
          @change="$emit('selected', answer)"
        />
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
    referenceNumber: {
      type: Number,
      required: true,
    },
    answer: {
      type: Array,
      required: false,
      default: [],
    },
  },
};
</script>
