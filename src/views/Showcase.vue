<template>
  <div class="body">
    <UIHeader />

    <div class="p-16 items-center text-left min-h-screen">
      <div class="flex flex-row space-x-10 w-full">
        <div class="hidden w-64 shrink-0 lg:block lg:pr-8">
          <div class="sticky top-32 -mt-20 max-h-screen overflow-y-auto">
            <UISideMenu />
          </div>
        </div>
        <main class="flex flex-col min-w-0 flex-1">
          <router-view />
          <!-- 
   
        <GssTitle title="Icons" />

        <div class="flex ml-5">
          <EditIcon />
          <ViewIcon />
          <DeleteIcon />
        </div>
        <GssTitle title="Tables" />

        <GssTable />
      
       
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

import UISideMenu from "../components/UI-SideMenu.vue";
import UIRightBanner from "../components/UI-RightBanner.vue";
import UIHeader from "../components/UI-Header.vue";

export default {
  name: "Showcase",
  components: {
    //   GssTitle,
    //   GssTable,
    //   // GssCreateModal,
    //   EditIcon,
    //   ViewIcon,
    //   DeleteIcon,
    //   CardWithImage,
    //   SearchInput,
    UISideMenu,
    UIRightBanner,
    UIHeader,
  },
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
};
</script>

<style scoped>
.body {
  color: #2c3e50;
  background-color: #2c3e50;
}
.bg-color {
  background-color: #cb611a;
}
</style>
