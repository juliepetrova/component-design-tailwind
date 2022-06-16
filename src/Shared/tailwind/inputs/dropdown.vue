<template>
  <div>
    <!-- <input
      :placeholder="placeholder"
      class="w-full rounded-md appearance-none border border-blue-300 p-3 mb-2 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
      list="optionList"
      name="optionList"
      id="list"
      v-model="answer"
      @change="$emit('selected', answer, true)"
    />
    <datalist id="optionList">
      
    </datalist> -->

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
