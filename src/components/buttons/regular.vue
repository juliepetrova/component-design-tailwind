<template>
  <div class="flex w-full flex-col items-center justify-center">
    <div class="flex w-full flex-col items-center justify-center">
      <div class="px-4 py-16">
        <div class="flex space-x-3 ml-5">
          <GssButton text="Solid Button" />
          <GssIconButton text="Icon Button"
            ><i class="ri-instagram-line"></i
          ></GssIconButton>
          <GssButtonOutlined text="Outlined Button" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "remixicon/fonts/remixicon.css";

import GssButton from "../../Shared/tailwind/buttons/UI-Btn.vue";
import GssButtonOutlined from "../../Shared/tailwind/buttons/UI-OutlineBtn.vue";
import GssIconButton from "../../Shared/tailwind/buttons/UI-IconBtn.vue";
export default {
  components: {
    GssButtonOutlined,
    GssButton,
    GssIconButton,
  },
};
</script>

<style></style>
