<template>
  <div>
    <GssTitle title="Buttons" />

    <div class="flex w-full space-x-3 ml-5">
      <GssButton text="Solid Button" />
      <GssIconButton text="Icon Button"
        ><i class="ri-instagram-line"></i
      ></GssIconButton>
      <GssButtonOutlined text="Outlined Button" />
    </div>
    <div class="flex w-full space-x-3 ml-5">
      <etv-button text="Icon Button"
        ><i class="ri-instagram-line"></i
      ></etv-button>
      <etv-button text="Disabled Button" :isDisabled="true"
        ><i class="ri-twitter-line"></i
      ></etv-button>
      <etv-outlined-button text="Outlined Button"
        ><i class="ri-twitter-line"></i
      ></etv-outlined-button>
    </div>
    <div class="flex h-24 bg-color p-4 space-x-5 mb-16 w-1/3 ml-5">
      <neumorphic-button><i class="ri-instagram-line"></i></neumorphic-button>
      <neumorphic-button><i class="ri-linkedin-line"></i></neumorphic-button>
      <neumorphic-button><i class="ri-twitter-line"></i></neumorphic-button>
    </div>
  </div>
</template>

<script>
import "remixicon/fonts/remixicon.css";

import NeumorphicButton from "../Shared/css-only/neumorphic-button.vue";
import GssButton from "../Shared/tailwind/gss-button.vue";
import GssButtonOutlined from "../Shared/tailwind/gss-button-outlined.vue";
import GssTitle from "../Shared/tailwind/gss-title.vue";
import EtvButton from "../Shared/tailwind/ETV-Button.vue";
import EtvOutlinedButton from "../Shared/tailwind/ETV-OutlinedButton.vue";
import GssIconButton from "../Shared/tailwind/gss-icon-button.vue";
export default {
  components: {
    GssTitle,
    GssButtonOutlined,
    GssButton,
    NeumorphicButton,
    EtvButton,
    GssIconButton,
    EtvOutlinedButton,
  },
};
</script>

<style></style>
