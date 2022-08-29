<template>
  <div>
    <ui-title title="Forms" :classProps="'text-white'" />
    <ui-subtitle text="Login form" :classProps="'text-white mt-4'" />
    <div class="flex">
      <ui-background-components
        classProps="bg-gradient-to-r from-cyan-400 to-sky-500"
      >
        <div class="flex justify-center items-center m-5">
          <div class="bg-white p-5 px-10 w-1/2 shadow-md rounded-lg m-5">
            <div class="text-xl font-semibold text-primary mb-7">
              Sign in our website
            </div>
            <form action="">
              <div class="mt-4">
                <div class="mt-4">
                  <label class="block text-sm" for="email">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    v-model="email"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div class="mt-4">
                  <label class="block text-sm">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    v-model="password"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div class="flex items-start mt-5">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Remember me</label
                    >
                  </div>
                  <a
                    href="#"
                    class="ml-auto text-sm text-primary hover:underline"
                    >Lost Password?</a
                  >
                </div>
                <div class="flex">
                  <button
                    @click="login"
                    class="w-full px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-primaryDark"
                  >
                    Log In
                  </button>
                </div>
                <div class="mt-4 text-grey-dark text-sm float-right">
                  Do not have an account?
                  <router-link
                    class="text-primary hover:underline"
                    to="/register"
                    >Sign up
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ui-background-components>
    </div>
  </div>
</template>

<script>
import UiSubtitle from "../Shared/tailwind/headings/UI-Subtitle.vue";
import UiTitle from "../Shared/tailwind/headings/UI-Title.vue";
import UiBackgroundComponents from "../components/UI-BackgroundComponents.vue";

export default {
  components: { UiTitle, UiSubtitle, UiBackgroundComponents },
};
</script>

<style></style>
