<template>
  <div class="text-white">
    <ui-title title="Inputs" />
    <ui-subtitle text="Text input" />

    <ui-background-components
      classProps="bg-gradient-to-r from-cyan-600 to-sky-700 p-3 px-5"
    >
      <h1 class="font-semibold pb-2">Username</h1>
      <short-input class="w-2/3 mx-3" />
      <h1 class="font-semibold pb-2">Password</h1>
      <short-input class="w-2/3 mx-3" />
    </ui-background-components>

    <ui-subtitle text="Multiline text input" />

    <ui-background-components
      classProps="bg-gradient-to-r from-cyan-600 to-sky-700 p-3 px-5"
    >
      <h1 class="font-semibold pb-1">Multiline input</h1>
      <open-answer class="w-2/3 m-3" placeholder="Type your answer" />
    </ui-background-components>

    <ui-subtitle text="Email validation input" />

    <ui-background-components
      classProps="bg-gradient-to-r from-cyan-600 to-sky-700 p-3 px-5"
    >
      <h1 class="font-semibold pb-1">Email</h1>
      <email-input class="w-2/3 m-3" placeholder="Enter your email" />
    </ui-background-components>

    <ui-subtitle text="Dropdown select" />

    <ui-background-components
      classProps="bg-gradient-to-r from-cyan-600 to-sky-700 p-3 px-5"
    >
      <h1 class="font-semibold pb-2">Choose an option</h1>
      <Dropdown :options="optionsDropdown" class="w-2/3 mx-3" />
    </ui-background-components>

    <ui-subtitle text="Multiple choice" />

    <ui-background-components
      classProps="bg-gradient-to-r from-cyan-600 to-sky-700 p-3 px-5"
    >
      <h1 class="font-semibold pb-1">Choose an option</h1>
      <multiple-choice class="m-3" :options="optionsMultiselect" />
    </ui-background-components>

    <ui-subtitle text="Radio button choice" />

    <ui-background-components
      classProps="bg-gradient-to-r from-cyan-600 to-sky-700 p-3 px-5"
    >
      <h1 class="font-semibold pb-1">Choose an option</h1>
      <radio-button class="m-3" :options="optionsRadioInput" />
    </ui-background-components>

    <ui-subtitle text="Slider" />

    <ui-background-components
      classProps="bg-gradient-to-r from-cyan-600 to-sky-700 p-3 px-5"
    >
      <h1 class="font-semibold pb-3">Slider input</h1>
      <div class="flex justify-center">
        <rating-slider
          class="w-2/3"
          :options="optionsSliderInput"
          referenceNumber="3"
          answer="1"
        />
      </div>
    </ui-background-components>
  </div>
</template>

<script>
import UiTitle from "../Shared/tailwind/headings/UI-Title.vue";
import UiBackgroundComponents from "../components/UI-BackgroundComponents.vue";
import UiSubtitle from "../Shared/tailwind/headings/UI-Subtitle.vue";

import Dropdown from "../Shared/tailwind/inputs/dropdown.vue";
import EmailInput from "../Shared/tailwind/inputs/email_input.vue";
import MultipleChoice from "../Shared/tailwind/inputs/multiple_choice.vue";
import OpenAnswer from "../Shared/tailwind/inputs/multiline_input.vue";
import RadioButton from "../Shared/tailwind/inputs/radio_button.vue";
import RatingSlider from "../Shared/tailwind/inputs/rating_slider.vue";
import ShortInput from "../Shared/tailwind/inputs/short_input.vue";
export default {
  components: {
    UiTitle,
    UiBackgroundComponents,
    UiSubtitle,
    Dropdown,
    EmailInput,
    MultipleChoice,
    OpenAnswer,
    RadioButton,
    RatingSlider,
    ShortInput,
  },
  data() {
    return {
      optionsMultiselect: [
        {
          name: "Item 1",
          value: "Item 1",
          ref: "check-1",
        },
        {
          name: "Item 2",
          value: "Item 2",
          ref: "check-2",
        },
        {
          name: "Item 3",
          value: "Item 3",
          ref: "check-3",
        },
      ],
      optionsDropdown: [
        {
          name: "Item 1",
          value: "Item 1",
          ref: "drop-1",
        },
        {
          name: "Item 2",
          value: "Item 2",
          ref: "drop-2",
        },
        {
          name: "Item 3",
          value: "Item 3",
          ref: "drop-3",
        },
      ],
      optionsRadioInput: [
        {
          name: "Radio item 1",
          value: "Radio item 1",
          ref: "radio-1",
        },
        {
          name: "Radio item 2",
          value: "Radio item 2",
          ref: "radio-2",
        },
        {
          name: "Radio item 3",
          value: "Radio item 3",
          ref: "radio-3",
        },
      ],
      optionsSliderInput: [
        {
          name: "Unsatisfactory",
          value: "0",
          ref: "u",
        },
        {
          name: "Outstanding",
          value: "100",
          ref: "o",
        },
      ],
    };
  },
};
</script>

<style></style>
