<template>
  <div class="m-16 items-center text-left min-h-screen">
    <div class="flex flex-row space-x-10 w-full">
      <div class="hidden w-64 shrink-0 lg:block lg:pr-8">
        <div class="sticky -mt-20 top-32">
          <UISideMenu />
        </div>
      </div>
      <main class="flex flex-col min-w-0 flex-1 pt-12">
        <router-view />
        <!-- 
        <GssTitle title="Headings" />

        <div class="ml-5 space-y-3">
          <GssTitle title="Heading 1" />
          <div class="flex space-x-4">
            <h1 class="text-2xl font-semibold">Heading 2</h1>
            <h2 class="text-2xl font-normal">Heading 2</h2>
            <h2 class="text-2xl font-light">Heading 2</h2>
          </div>
          <div class="flex space-x-4">
            <h1 class="text-xl font-semibold">Heading 3</h1>
            <h2 class="text-xl font-normal">Heading 3</h2>
            <h2 class="text-xl font-light">Heading 3</h2>
          </div>
          <div class="flex space-x-4">
            <h1 class="text-lg font-semibold">Heading 4</h1>
            <h2 class="text-lg font-normal">Heading 4</h2>
            <h2 class="text-lg font-light">Heading 4</h2>
          </div>
          <div class="flex space-x-4">
            <h1 class="text-md font-semibold">Heading 5</h1>
            <h2 class="text-md font-normal">Heading 5</h2>
            <h2 class="text-md font-light">Heading 5</h2>
          </div>
          <div class="flex space-x-4">
            <h1 class="text-sm font-semibold">Heading 6</h1>
            <h2 class="text-sm font-normal">Heading 6</h2>
            <h2 class="text-sm font-light">Heading 6</h2>
          </div>
          <div class="flex space-x-4">
            <h1 class="text-xs font-semibold">Heading 7</h1>
            <h2 class="text-xs font-normal">Heading 7</h2>
            <h2 class="text-xs font-light">Heading 7</h2>
          </div>
        </div>
        <GssTitle title="Icons" />

        <div class="flex ml-5">
          <EditIcon />
          <ViewIcon />
          <DeleteIcon />
        </div>
        <GssTitle title="Tables" />

        <GssTable />
       <GssTitle title="Cards" />
        <div class="ml-5 w-2/3">
          <card-with-image>
            <template v-slot:image
              ><img
                class="rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                alt="card-image"
            /></template>
            <template v-slot:content>
              <div class="text-left mx-5">
                <h1 class="text-lg font-semibold text-yellow-700">Sunset</h1>
                <p>This is the scalable content of the card</p>
              </div>
            </template>
          </card-with-image>
        </div>
        <div class="ml-5 w-1/3">
          <card-with-image>
            <template v-slot:image
              ><img
                class="rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                alt="card-image"
            /></template>
            <template v-slot:content>
              <div class="text-left mx-5">
                <h1 class="text-lg font-semibold text-yellow-700">Sunset</h1>
                <p>This is the scalable content of the card</p>
              </div>
            </template>
          </card-with-image>
        </div>
        <GssTitle title="Inputs" />
        <div class="ml-5 flex flex-col w-1/2">
          <div class="flex space-x-3">
            <h1>Dropdown input</h1>
            <Dropdown :options="options" hint="Select an option" answer="" />
          </div>
          <div class="flex space-x-3">
            <h1>Email input</h1>
            <email-input />
          </div>
          <div class="flex space-x-3">
            <h1>Multipla choice input</h1>
            <multiple-choice :options="options" referenceNumber="1" answer="" />
          </div>
          <div class="flex space-x-3">
            <h1>Multiline input</h1>
            <open-answer questionHint="Type your answer" />
          </div>
          <div class="flex space-x-3">
            <h1>Radio input</h1>
            <radio-button :options="options" referenceNumber="2" answer="" />
          </div>
          <div class="flex space-x-3">
            <h1>Slider input</h1>
            <rating-slider :options="options" referenceNumber="3" answer="" />
          </div>
          <div class="flex space-x-3">
            <h1>Text input</h1>
            <short-input />
          </div>
        </div>
        <GssTitle title="Search" />

        <div class="relative mt-64">
          <search-input><i class="ri-search-line"></i></search-input>
        </div>
        -->
        -->
      </main>

      <div class="z-10 order-2 hidden w-64 min-w-0 shrink-0 xl:block xl:pl-8">
        <div class="sticky top-32 -mt-20 max-h-screen overflow-y-auto pb-10">
          <UIRightBanner />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import GssTitle from "../Shared/tailwind/gss-title.vue";
// import GssTable from "../Shared/tailwind/gss-table.vue";
// // import GssCreateModal from "../Shared/tailwind/gss-createModal.vue";
// import EditIcon from "../Shared/tailwind/editIcon.vue";
// import ViewIcon from "../Shared/tailwind/viewIcon.vue";
// import DeleteIcon from "../Shared/tailwind/deleteIcon.vue";
// import CardWithImage from "../Shared/css-only/card-with-image.vue";
// import SearchInput from "../Shared/css-only/search-input.vue";

// //  Using remix icons package
// import "remixicon/fonts/remixicon.css";
// import Dropdown from "../Shared/tailwind/AnswerTypes/dropdown.vue";
// import EmailInput from "../Shared/tailwind/AnswerTypes/email_input.vue";
// import MultipleChoice from "../Shared/tailwind/AnswerTypes/multiple_choice.vue";
// import OpenAnswer from "../Shared/tailwind/AnswerTypes/open_answer.vue";
// import RadioButton from "../Shared/tailwind/AnswerTypes/radio_button.vue";
// import RatingSlider from "../Shared/tailwind/AnswerTypes/rating_slider.vue";
// import ShortInput from "../Shared/tailwind/AnswerTypes/short_input.vue";
import UISideMenu from "../components/UI-SideMenu.vue";
import UIRightBanner from "../components/UI-RightBanner.vue";

export default {
  name: "Showcase",
  // components: {
  //   GssTitle,
  //   GssTable,
  //   // GssCreateModal,
  //   EditIcon,
  //   ViewIcon,
  //   DeleteIcon,
  //   CardWithImage,
  //   SearchInput,
  //   Dropdown,
  //   EmailInput,
  //   MultipleChoice,
  //   OpenAnswer,
  //   RadioButton,
  //   RatingSlider,
  //   ShortInput,
  UISideMenu,
  UIRightBanner,
  // },
  data() {
    return {
      options: [
        {
          name: "Item 1",
          value: "Item 1",
        },
        {
          name: "Item 2",
          value: "Item 2",
        },
        {
          name: "Item 3",
          value: "Item 3",
        },
      ],
    };
  },
  components: { UISideMenu, UIRightBanner },
};
</script>

<style scoped>
.bg-color {
  background-color: #cb611a;
}
</style>
