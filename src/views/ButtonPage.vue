<template>
  <div>
    <ui-title title="Buttons" :classProps="'text-white'" />

    <ui-subtitle text="Default buttons" :classProps="'text-white mt-4'" />
    <ui-background-components
      classProps="bg-gradient-to-r from-cyan-400 to-sky-500"
    >
      <regular />
    </ui-background-components>

    <ui-code-block>
      <script type="prism-html-markup">

        <button
          class="flex align-middle rounded-md bg-primary p-2 px-3 font-light text-white
          hover:bg-transparent border-2 border-primary border-solid hover:text-primary"
          @click="$emit('clicked')"
        >
          <slot></slot>
          <h1 class="px-2">Solid/Icon Button</h1>
        </button>

        <button
          class="rounded-md border-2 border-primary border-solid hover:bg-primary
           text-primary p-2 px-3 hover:text-white focus:outline-none focus:shadow-outline"
          @click="$emit('clicked')"
        >Outlined Button</button>
      </script>
    </ui-code-block>

    <ui-subtitle text="Pill buttons" :classProps="'text-white mt-4'" />

    <ui-background-components
      classProps="bg-gradient-to-r from-teal-400 to-cyan-400"
    >
      <pill />
    </ui-background-components>

    <ui-code-block>
      <script type="prism-html-markup">
        <button class="rounded-md bg-primary p-2 px-3 text-white hover:bg-transparent border-2
          border-primary border-solid hover:text-primary"
          @click="$emit('clicked')" > Solid Button
        </button>
      </script>
    </ui-code-block>

    <ui-subtitle text="Neumorphic buttons" :classProps="'text-white mt-4'" />

    <ui-background-components
      classProps="bg-gradient-to-r from-orange-500 to-amber-700"
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
import UiCodeBlock from "../components/UI-CodeBlock.vue";
export default {
  components: {
    UiTitle,
    Regular,
    UiBackgroundComponents,
    Pill,
    Neumorphic,
    UiSubtitle,
    UiCodeBlock,
  },
};
</script>
