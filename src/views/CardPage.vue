<template>
  <div>
    <ui-title title="Cards" :classProps="'text-white'" />
    <ui-subtitle text="Basic card" :classProps="'text-white mt-4'" />
    <div class="flex">
      <ui-background-components
        classProps="bg-gradient-to-r from-cyan-400 to-sky-500"
      >
        <div class="m-5 flex justify-center items-center">
          <card-with-image class="bg-white m-2 md:max-w-xl rounded-xl">
            <template v-slot:image
              ><img
                class="md:rounded-l-xl"
                src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                alt="card-image"
            /></template>
            <template v-slot:content>
              <div class="text-left ml-5">
                <h1 class="text-lg font-semibold text-yellow-700">Sunset</h1>
                <p class="text-gray-900">
                  This is the scalable content of the card
                </p>
              </div>
            </template>
          </card-with-image>
        </div>
        <div class="m-5 w-1/3 flex justify-center items-center">
          <card-with-image class="bg-white m-2 rounded-xl">
            <template v-slot:image
              ><img
                class="rounded-t-xl"
                src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                alt="card-image"
            /></template>
            <template v-slot:content>
              <div class="text-left mx-5">
                <h1 class="text-lg font-semibold text-yellow-700">Sunset</h1>
                <p class="text-gray-900">
                  This is the scalable content of the card
                </p>
              </div>
            </template>
          </card-with-image>
        </div>
      </ui-background-components>
    </div>
  </div>
</template>

<script>
import UiSubtitle from "../Shared/tailwind/headings/UI-Subtitle.vue";
import UiTitle from "../Shared/tailwind/headings/UI-Title.vue";
import CardWithImage from "../Shared/css-only/card-with-image.vue";
import UiBackgroundComponents from "../components/UI-BackgroundComponents.vue";

export default {
  components: { UiTitle, UiSubtitle, CardWithImage, UiBackgroundComponents },
};
</script>

<style></style>
