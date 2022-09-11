<template>
  <div>
    <ui-title title="Slots" :classProps="'text-white'" />

    <ui-subtitle text="Default slots" :classProps="'text-white mt-4'" />
    <ui-subtitle
      text="Using named slots and defaults that can be overwritten"
      :classProps="'text-white'"
    />
    <ui-background-components
      classProps="bg-gradient-to-r from-cyan-400 to-sky-500"
    >
      <div class="p-10">
        <SimpleList>
          <template #title><p></p></template>
        </SimpleList>
      </div>
    </ui-background-components>
    <ui-subtitle text="Dynamic slots" :classProps="'text-white mt-4'" />
    <ui-subtitle
      text="Using the same slot component, with al its methods, while replacing the design with a card layout"
      :classProps="'text-white'"
    />

    <ui-background-components
      classProps="bg-gradient-to-r from-cyan-400 to-sky-500"
    >
      <div class="p-10">
        <select v-model="selected">
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
        <SimpleList>
          <template #title><p></p></template>

          <!-- Fetch data from child component (foodlist) -->
          <template #foodlist="{ list }">
            <CardsList :list="list">
              <!-- Fetch data from child component (text) -->
              <!-- Using dynamic slots that change the inner default slot dynamically -->
              <template #[selected]="{ text }">
                <p class="text-lg">{{ text }}</p>
              </template>
            </CardsList>
          </template>
        </SimpleList>
      </div>
    </ui-background-components>
  </div>
</template>

<script>
import UiTitle from "../Shared/tailwind/headings/UI-Title.vue";
import UiBackgroundComponents from "../components/UI-BackgroundComponents.vue";
import UiSubtitle from "../Shared/tailwind/headings/UI-Subtitle.vue";

import SimpleList from "../Shared/tailwind/slots/SimpleList.vue";
import CardsList from "../Shared/tailwind/slots/CardList.vue";
export default {
  name: "SlotsPage",

  components: {
    UiTitle,
    UiBackgroundComponents,
    UiSubtitle,
    SimpleList,
    CardsList,
  },
  data() {
    return {
      selected: "name",
      options: [
        { value: "name", label: "Name" },
        { value: "nameAndCalories", label: "Name and calories" },
        { value: "allData", label: "All data" },
      ],
    };
  },
};
</script>

<style></style>
