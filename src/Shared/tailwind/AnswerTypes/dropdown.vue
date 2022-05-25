<template>
  <div>
    <input
      :placeholder="questionHint"
      class="w-full rounded-md appearance-none border border-blue-300 p-3 mb-2 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
      list="optionList"
      name="optionList"
      id="list"
      v-model="answer"
      @change="$emit('selected', answer, true)"
    />
    <datalist id="optionList">
      <option
        v-for="option in options"
        v-bind:value="option.value"
        v-bind:key="option.value"
      />
    </datalist>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    hint: {
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
