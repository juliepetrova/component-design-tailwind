<template>
  <div
    class="relative rounded-md appearance-none border border-blue-300 p-2 mb-2 bg-white"
  >
    <input
      @input="validateEmail"
      class="text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
      type="email"
      :placeholder="placeholder"
      v-model="answer"
    />
    <span class="absolute inset-y-0 right-0 flex items-center pr-2">
      <img
        v-if="errorIcon"
        src="../../../assets/cross.png"
        class="w-5 h-5"
        alt="cross"
      />
      <img v-else src="../../../assets/check.png" class="w-5 h-5" alt="check" />
    </span>
  </div>
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
  data() {
    return {
      errorIcon: true,
    };
  },
  methods: {
    validateEmail() {
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isValid = regex.test(String(this.answer).toLowerCase());
      if (isValid) {
        this.errorIcon = false;
        this.$emit("selected", this.answer);
      } else {
        this.errorIcon = true;
      }
    },
  },
};
</script>
