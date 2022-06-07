<template>
  <div class="flex w-full flex-col items-center justify-center">
    <div class="flex w-full flex-col items-center justify-center">
      <div class="px-4 py-16">
        <div class="flex space-x-3 ml-5">
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
      </div>
    </div>
  </div>
</template>

<script>
import "remixicon/fonts/remixicon.css";

import EtvButton from "../../Shared/tailwind/buttons/UI-PillButton.vue";
import EtvOutlinedButton from "../../Shared/tailwind/buttons/UI-PillOutlinedButton.vue";
export default {
  components: {
    EtvButton,
    EtvOutlinedButton,
  },
};
</script>

<style></style>
