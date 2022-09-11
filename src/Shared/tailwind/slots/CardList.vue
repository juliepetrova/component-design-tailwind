<template>
  <ul class="flex">
    <li
      v-for="item in list"
      :key="item.name"
      class="bg-white m-2 md:max-w-xl rounded-xl w-1/3"
    >
      <slot name="listitem" :food="item">
        <card-with-image class="shadow-none">
          <template v-slot:image>
            <img :src="item.picture" :alt="item.name"
          /></template>

          <template v-slot:content>
            <div class="text-left ml-5">
              <slot name="name" :text="item.name"></slot>
              <slot
                name="nameAndCalories"
                :text="`${item.name} - ${item.calories}`"
              ></slot>

              <slot
                name="allData"
                :text="`${item.name} is ${item.calories} and goes bad in ${item.freshness}`"
              ></slot>

              <slot name="secondrow" :item="item"></slot>
            </div>
          </template>
        </card-with-image>
      </slot>
    </li>
  </ul>
</template>

<script>
import CardWithImage from "../../css-only/card-with-image.vue";

export default {
  name: "CardListSlots",
  components: {
    CardWithImage,
  },
  props: {
    list: Array,
    default: () => {},
  },
  mounted() {
    console.log(this.list);
  },
};
</script>

<style></style>
