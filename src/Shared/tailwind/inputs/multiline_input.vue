<template>
  <textarea
    cols="40"
    rows="5"
    @input="$emit('selected', this.answer)"
    class="resize-none rounded-md appearance-none border border-gray-300 p-3 mb-2 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
    :placeholder="placeholder"
    v-model="answer"
  ></textarea>
</template>

<script>
export default {
  props: {
    placeholder: {
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
