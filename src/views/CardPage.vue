<template>
  <div>
    <ui-title title="Cards" :classProps="'text-white'" />
    <ui-subtitle text="Basic card" :classProps="'text-white mt-4'" />
    <div class="flex">
      <div class="m-5 w-2/3">
        <card-with-image>
          <template v-slot:image
            ><img
              class="rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
              alt="card-image"
          /></template>
          <template v-slot:content>
            <div class="text-left mx-5 text-white">
              <h1 class="text-lg font-semibold text-yellow-700">Sunset</h1>
              <p>This is the scalable content of the card</p>
            </div>
          </template>
        </card-with-image>
      </div>
      <div class="m-5 w-1/3">
        <card-with-image>
          <template v-slot:image
            ><img
              class="rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
              alt="card-image"
          /></template>
          <template v-slot:content>
            <div class="text-left mx-5 text-white">
              <h1 class="text-lg font-semibold text-yellow-700">Sunset</h1>
              <p>This is the scalable content of the card</p>
            </div>
          </template>
        </card-with-image>
      </div>
    </div>
  </div>
</template>

<script>
import UiSubtitle from "../Shared/tailwind/headings/UI-Subtitle.vue";
import UiTitle from "../Shared/tailwind/headings/UI-Title.vue";
import CardWithImage from "../Shared/css-only/card-with-image.vue";
export default {
  components: { UiTitle, UiSubtitle, CardWithImage },
};
</script>

<style></style>
