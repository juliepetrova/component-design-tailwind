<template>
  <div class="flex w-full flex-col items-center justify-center">
    <div class="flex w-full flex-col items-center justify-center">
      <div class="px-4 py-16">
        <div class="flex space-x-3 ml-5">
          <IconButton text="Solid Button" />
          <IconButton text="Icon Button"
            ><i class="ri-instagram-line"></i
          ></IconButton>
          <ButtonOutlined text="Outlined Button" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "remixicon/fonts/remixicon.css";

import ButtonOutlined from "../../Shared/tailwind/buttons/UI-OutlineBtn.vue";
import IconButton from "../../Shared/tailwind/buttons/UI-IconBtn.vue";
export default {
  components: {
    ButtonOutlined,
    IconButton,
  },
};
</script>

<style></style>
