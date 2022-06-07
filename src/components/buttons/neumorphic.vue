<template>
  <div class="flex w-full flex-col items-center justify-center">
    <div class="flex w-full flex-col items-center justify-center">
      <div class="px-4 py-16">
        <div class="flex space-x-3 ml-5">
          <neumorphic-button
            ><i class="ri-instagram-line"></i
          ></neumorphic-button>
          <neumorphic-button
            ><i class="ri-linkedin-line"></i
          ></neumorphic-button>
          <neumorphic-button><i class="ri-twitter-line"></i></neumorphic-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "remixicon/fonts/remixicon.css";
import NeumorphicButton from "../../Shared/css-only/neumorphic-button.vue";

export default {
  components: {
    NeumorphicButton,
  },
};
</script>

<style></style>
