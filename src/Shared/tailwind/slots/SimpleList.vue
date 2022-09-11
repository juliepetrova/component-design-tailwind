<template>
  <section>
    <slot name="title"> <p class="text-white">A list with foods</p></slot>
    <slot
      name="foodlist"
      :count="foodlist.length"
      :list="foodlist"
      :remove="remove"
    >
      <ul class="flex flex-wrap">
        <li
          v-for="item in foodlist"
          :key="item.name"
          class="bg-white my-5 mx-2 rounded-xl p-4 w-1/3"
        >
          <slot name="listitem" :food="item">
            <div class="flex flex-row">
              <img
                class="rounded-full"
                width="60"
                height="60"
                :src="item.picture"
                :alt="item.name"
              />
              <div class="pl-4 align-middle">
                <div class="text-lg">{{ item.name }}</div>
                <div class="">{{ item.calories }}</div>
                <slot name="secondrow" :item="item"></slot>
              </div>
            </div>
          </slot>
        </li>
      </ul>
    </slot>
  </section>
</template>

<script>
export default {
  name: "SimpleListSlots",
  props: {
    secondrow: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      foodlist: [
        {
          name: "Banana",
          calories: "80 kcal",
          picture:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1200px-Banana-Single.jpg",
          freshness: "3 days",
        },
        {
          name: "Orange",
          calories: "40 kcal",
          picture:
            "https://www.freshfruitturkey.com/wp-content/uploads/2022/02/valencia.jpg",
          freshness: "10 days",
        },
        {
          name: "Pineapple",
          calories: "400 kcal",
          picture:
            "https://organic-village.co.th/wp-content/uploads/2021/12/organic-pineapple-1200x1200.jpeg",
          freshness: "5 days",
        },
        {
          name: "Strawberry",
          calories: "10 kcal",
          picture:
            "https://media.istockphoto.com/photos/red-berry-strawberry-isolated-picture-id1157946861?k=20&m=1157946861&s=612x612&w=0&h=TkcgPU1fblZISunSxNasdYUqUHz_Mrmo0eGWaxLQHEI=",
          freshness: "2 days",
        },
      ],
    };
  },
  methods: {
    remove(item) {
      this.foodlist = this.foodlist.filter((entry) => entry.name !== item.name);
    },
  },
};
</script>

<style></style>
