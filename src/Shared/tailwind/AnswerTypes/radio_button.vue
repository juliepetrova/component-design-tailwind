<template>
  <div class="flex flex-col items-start mr-4 mb-3">
    <div v-for="option in options" v-bind:key="option.value" class="my-1">
      <input
        :id="questionReferenceNumber + option.value"
        type="radio"
        :name="questionReferenceNumber"
        class="hidden text-sm py-1"
        v-model="answer"
        v-bind:value="option.value"
        @change="$emit('selected', answer, true)"
      />
      <label
        :for="referenceNumber + option.value"
        class="flex items-center cursor-pointer"
      >
        <span
          class="w-5 h-5 inline-block mr-2 rounded-full border border-primary-dark flex-none"
        ></span>
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
    referenceNumber: {
      type: Number,
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
