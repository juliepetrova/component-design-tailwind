<template>
  <div
    class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
  >
    <div class="relative mx-auto w-1/3">
      <div
        class="bg-white w-full rounded shadow-md flex flex-col px-5 text-left"
      >
        <div class="text-2xl font-bold mt-8">{{ title }}</div>
        <div class="bg-white p-3 py-8 mb-4">
          <div class="mb-4">
            <slot></slot>
          </div>
          <div class="flex items-center justify-between mt-5">
            <gss-button-outlined text="Close" @clicked="$emit('closeModal')"/>
            <gss-button text="Save" @clicked="save"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GssButtonOutlined from "./gss-button-outlined.vue";
import gssButton from "./gss-button.vue";
export default {
  components: { gssButton, GssButtonOutlined },
  name: "GssCreateModal",
  props: {
    title: String,
    form: Object
  },
  methods: {
      save() {
          console.log(this.form);
      }
  }
  };
</script>
