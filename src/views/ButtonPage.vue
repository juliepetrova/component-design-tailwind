<template>
  <div>
    <ui-title title="Buttons" :classProps="'text-white'" />

    <ui-subtitle text="Default buttons" :classProps="'text-white mt-4'" />
    <ui-background-components
      :classProps="'bg-gradient-to-r from-cyan-400 to-sky-500'"
    >
      <regular />
    </ui-background-components>

    <ui-subtitle text="Pill buttons" :classProps="'text-white mt-4'" />

    <ui-background-components
      :classProps="'bg-gradient-to-r from-teal-400 to-cyan-400'"
    >
      <pill />
    </ui-background-components>
    <ui-subtitle text="Neumorphic buttons" :classProps="'text-white mt-4'" />

    <ui-background-components
      :classProps="'bg-gradient-to-r from-orange-500 to-amber-700'"
    >
      <neumorphic />
    </ui-background-components>
  </div>
</template>

<script>
import "remixicon/fonts/remixicon.css";

import UiTitle from "../Shared/tailwind/headings/UI-Title.vue";
import Regular from "../components/buttons/regular.vue";
import UiBackgroundComponents from "../components/UI-BackgroundComponents.vue";
import Pill from "../components/buttons/pill.vue";
import Neumorphic from "../components/buttons/neumorphic.vue";
import UiSubtitle from "../Shared/tailwind/headings/UI-Subtitle.vue";
export default {
  components: {
    UiTitle,
    Regular,
    UiBackgroundComponents,
    Pill,
    Neumorphic,
    UiSubtitle,
  },
};
</script>
