<template>
  <input
    @focus="$emit('focused')"
    @blur="$emit('blurred')"
    @input="this.$emit('selected', answer)"
    class="rounded-md appearance-none border border-blue-300 rounded p-2 mb-2 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    :placeholder="questionHint"
    v-model="answer"
  />
</template>

<script>
export default {
  props: {
    questionHint: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>
