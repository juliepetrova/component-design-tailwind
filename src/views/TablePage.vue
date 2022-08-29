<template>
  <div class="text-white">
    <ui-title title="Tables" />
    <ui-subtitle text="Default table" class="my-3" />
    <ui-background-components
      classProps="bg-gradient-to-r from-cyan-500 to-blue-700 p-5 "
    >
      <ui-table class="text-gray-600 text-center p-5">
        <template v-slot:tablehead>
          <th class="p-2">Column 1</th>
          <th class="p-2">Column 3</th>
          <th class="p-2">Column 2</th>
        </template>
        <template v-slot:tablebody>
          <tr>
            <td class="p-2">Item 1</td>
            <td class="p-2">Item 2</td>
            <td class="p-2">Item 3</td>
          </tr>
          <tr>
            <td class="p-2">Item 1</td>
            <td class="p-2">Item 2</td>
            <td class="p-2">Item 3</td>
          </tr>
          <tr class="p-2">
            <td class="p-2">Item 1</td>
            <td class="p-2">Item 2</td>
            <td class="p-2">Item 3</td>
          </tr>
        </template>
      </ui-table>
    </ui-background-components>
  </div>
</template>

<script>
import UiTitle from "../Shared/tailwind/headings/UI-Title.vue";
import UiSubtitle from "../Shared/tailwind/headings/UI-Subtitle.vue";
import UiTable from "../Shared/tailwind/UI-Table.vue";
import UiBackgroundComponents from "../components/UI-BackgroundComponents.vue";

export default {
  components: {
    UiTable,
    UiTitle,
    UiSubtitle,
    UiBackgroundComponents,
  },
};
</script>

<style UITable></style>
