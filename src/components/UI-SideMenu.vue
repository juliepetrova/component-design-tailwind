<template>
  <nav class="mx-auto space-y-4 text-gray-400">
    <h1 class="uppercase text-white text-lg font-bold">All components</h1>

    <router-link
      to="buttons"
      class="flex items-center whitespace-nowrap rounded py-2 px-6 font-lg transition-colors duration-200 hover:text-white lg:py-0 lg:px-0 lg:text-sm text-gray-400"
      >Buttons</router-link
    >
    <router-link
      to="cards"
      class="flex items-center whitespace-nowrap rounded py-2 px-6 font-lg transition-colors duration-200 hover:text-white lg:py-0 lg:px-0 lg:text-sm text-gray-400"
      >Cards</router-link
    >
    <router-link
      to="inputs"
      class="flex items-center whitespace-nowrap rounded py-2 px-6 font-lg transition-colors duration-200 hover:text-white lg:py-0 lg:px-0 lg:text-sm text-gray-400"
      >Input types</router-link
    >
    <router-link
      to="forms"
      class="flex items-center whitespace-nowrap rounded py-2 px-6 font-lg transition-colors duration-200 hover:text-white lg:py-0 lg:px-0 lg:text-sm text-gray-400"
      >Forms</router-link
    >
    <router-link
      to="accordion"
      class="flex items-center whitespace-nowrap rounded py-2 px-6 font-lg transition-colors duration-200 hover:text-white lg:py-0 lg:px-0 lg:text-sm text-gray-400"
      >Accordion</router-link
    >
    <router-link
      to="modals"
      class="flex items-center whitespace-nowrap rounded py-2 px-6 font-lg transition-colors duration-200 hover:text-white lg:py-0 lg:px-0 lg:text-sm text-gray-400"
      >Modals</router-link
    >
    <router-link
      to="navigation"
      class="flex items-center whitespace-nowrap rounded py-2 px-6 font-lg transition-colors duration-200 hover:text-white lg:py-0 lg:px-0 lg:text-sm text-gray-400"
      >Navigation bars</router-link
    >
    <router-link
      to="tabs"
      class="flex items-center whitespace-nowrap rounded py-2 px-6 font-lg transition-colors duration-200 hover:text-white lg:py-0 lg:px-0 lg:text-sm text-gray-400"
      >Tabs</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "UI-SideMenu",
};
</script>

<style></style>
