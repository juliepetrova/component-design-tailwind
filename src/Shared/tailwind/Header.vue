<template>
  <nav class="bg-primary p-4 flex text-white justify-between">
    <h1 class="text-lg text-left">GSS Employee Panel</h1>
    <div class="flex font-light space-x-5 text-right mx-5">
      <router-link to="/activities">Activities</router-link>
      <router-link to="/accounts">Accounts</router-link>
      <router-link to="/schedule">Schedule</router-link>
      <router-link to="/calendar">Calendar</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>
