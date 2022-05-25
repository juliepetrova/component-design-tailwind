<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
      >
        <table class="min-w-full">
          <thead
            class="bg-gray-50 text-xs leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200"
          >
            <slot name="tablehead"></slot>
          </thead>

          <tbody
            class="text-sm leading-5 bg-white whitespace-no-wrap border-b border-gray-200"
          >
            <slot name="tablebody"></slot>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GssTable",
};
</script>
