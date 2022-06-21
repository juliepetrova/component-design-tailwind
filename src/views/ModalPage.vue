<template>
  <div class="text-white">
    <ui-title title="Modals" />
    <ui-subtitle text="Default modal" class="my-3" />
    <ui-background-components
      classProps="bg-gradient-to-r from-cyan-500 to-blue-700 p-5 "
    >
      <button
        class="block text-white bg-primary hover:bg-primaryDark focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center"
        type="button"
        @click="toggleModal"
      >
        Toggle modal
      </button>
    </ui-background-components>

    <ui-subtitle text="Notification modal" class="my-3" />

    <ui-modal
      v-if="modal"
      @closeModal="toggleModal"
      class="top-0 right-0 left-0"
    >
      <template v-slot:heading>
        <h1 class="text-gray-800">Modal Example</h1>
      </template>
      <template v-slot:body
        ><div class="space-y-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>
        </div></template
      >
      <template v-slot:footer>
        <button
          class="p-2 px-4 bg-red-500 rounded text-white font-semibold hover:bg-red-600"
          @click="toggleModal"
        >
          Close
        </button>
        <button
          class="p-2 px-4 bg-primary rounded text-white font-semibold hover:bg-primaryDark"
          @click="$emit('btnClick')"
        >
          Save
        </button>
      </template>
    </ui-modal>
  </div>
</template>

<script>
import UiTitle from "../Shared/tailwind/headings/UI-Title.vue";
import UiSubtitle from "../Shared/tailwind/headings/UI-Subtitle.vue";
import UiModal from "../Shared/tailwind/UI-Modal.vue";
import UiBackgroundComponents from "../components/UI-BackgroundComponents.vue";
export default {
  components: { UiModal, UiTitle, UiSubtitle, UiBackgroundComponents },
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    toggleModal() {
      this.modal = !this.modal;
    },
  },
};
</script>

<style></style>
