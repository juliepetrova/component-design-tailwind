<template>
  <textarea
    cols="40"
    rows="8"
    @focus="$emit('focused')"
    @blur="$emit('blurred')"
    @input="$emit('selected', this.answer)"
    class="resize-none rounded-md appearance-none border border-blue-300 p-3 mb-2 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
    :placeholder="questionHint"
    v-model="answer"
  ></textarea>
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
