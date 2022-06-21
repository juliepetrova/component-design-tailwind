<template>
  <div
    class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
  >
    <div class="relative mx-auto w-1/3">
      <div class="bg-white w-full rounded shadow-md flex flex-col text-left">
        <div
          class="text-2xl mt-3 p-3 border-b border-gray-200 px-5 flex justify-between items-center"
        >
          <slot name="heading"></slot>
          <button
            type="button"
            class="absolute top-5 right-2.5 text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            @click="$emit('closeModal')"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div class="bg-white p-3 py-5 mb-4 px-5">
          <div class="font-light">
            <slot name="body"></slot>
          </div>
        </div>
        <div
          class="flex items-center justify-between p-5 border-t border-gray-200"
        >
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiModal",
};
</script>
