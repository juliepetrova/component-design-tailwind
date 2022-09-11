<template>
  <div class="body min-h-screen">
    <UIHeader />
    <div class="p-16 items-center text-left">
      <div class="flex flex-row space-x-10 w-full">
        <div class="z-10 hidden w-64 min-w-0 shrink-0 xl:block xl:pr-8">
          <div class="sticky top-32 max-h-screen overflow-y-auto">
            <UISideMenu />
          </div>
        </div>
        <main class="flex flex-col min-w-0 flex-1 mt-16">
          <router-view />
        </main>

        <div class="z-10 order-2 hidden w-64 min-w-0 shrink-0 xl:block xl:pl-8">
          <div class="sticky top-32 max-h-screen overflow-y-auto">
            <UIRightBanner />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UISideMenu from "../components/UI-SideMenu.vue";
import UIRightBanner from "../components/UI-RightBanner.vue";
import UIHeader from "../components/UI-Header.vue";

export default {
  name: "Showcase",
  components: {
    UISideMenu,
    UIRightBanner,
    UIHeader,
  },
};
</script>

<style scoped>
.body {
  color: #2c3e50;
  background-color: #2c3e50;
}
</style>
