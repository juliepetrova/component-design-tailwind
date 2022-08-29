<template>
  <div>
    <div class="flex flex-row justify-between">
      <div class="flex flex-row">
        <img class="max-h-3" alt="" src="../../../assets/thumbs_down.png" />
        <h3 class="ml-1 font-light text-primary-dark text-xs">
          {{ options[0].name }}
        </h3>
      </div>
      <div class="flex flex-row">
        <h3 class="mr-1 font-light text-primary-dark text-xs">
          {{ options[1].name }}
        </h3>
        <img class="max-h-3" alt="" src="../../../assets/thumbs_up.png" />
      </div>
    </div>
    <div class="flex flex-col justify-center items-center">
      <div class="w-11/12 relative">
        <div
          class="range-wrap relative w-full justify-center items-centers z-20 select-none"
          :style="{ '--selection-background': selectionBackground }"
        >
          <input
            type="range"
            :name="referenceNumber"
            class="range cursor-pointer opacity-0 w-full"
            min="0"
            max="100"
            @change="setBubble()"
            @input="updateSliderStyle(sliderValue)"
            v-model="sliderValue"
          />
          <output
            :id="referenceNumber"
            class="bubble bg-primary absolute rounded-full grid select-none text-white w-8 h-8 top-1/2 pointer-events-none place-items-center z-30"
          ></output>
        </div>
        <div
          class="absolute top-1/2 w-full z-10 pt-1 flex flex-row justify-between text-sm text-primary font-semibold"
        >
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    referenceNumber: {
      type: Number,
      required: true,
    },
    answer: {
      type: String,
      required: false,
      default: "1",
    },
  },
  data() {
    return {
      sliderValue: 0,
      rating: 1,
      selectionBackground: "#EBF5FB",
      sliderMilestoneValues: [0, 25, 50, 75, 100],
    };
  },

  methods: {
    roundToClosestNumber(number) {
      const calculatedValues = this.sliderMilestoneValues.map((possibleValue) =>
        Math.abs(possibleValue - number)
      );
      return calculatedValues.indexOf(Math.min(...calculatedValues));
    },
    setBubble() {
      const inputtedRatingNumber = this.roundToClosestNumber(this.sliderValue);
      const offset = Number((inputtedRatingNumber * 100) / 4);

      const rating = inputtedRatingNumber + 1;
      this.updateSliderStyle(offset, rating);

      this.$emit("selected", rating.toString());
    },
    updateSliderStyle(sliderOffset, rating) {
      const bubble = document.getElementById(this.referenceNumber.toString());
      bubble.textContent = rating;
      bubble.style.left = `calc(${sliderOffset}% - 14px)`;
      this.selectionBackground = `linear-gradient(to right, #3A96D2 ${sliderOffset}%, #EBF5FB ${sliderOffset}% ${
        100 - sliderOffset
      }%)`;
    },
  },
  mounted() {
    this.rating = parseInt(this.answer);
    this.updateSliderStyle(
      this.sliderMilestoneValues[this.rating - 1],
      this.rating
    );
  },
};
</script>

<style scoped>
.range-wrap {
  padding: 1.5em 0;
}

.range-wrap::before {
  content: "";
  background: var(--selection-background);
  width: 100%;
  height: 6px;
  display: block;
  position: absolute;
  border-radius: 4px;
  top: 50%;
  transform: translateY(-50%);
  transition: height 100ms ease;
  color: black;
}

.range-wrap:hover .bubble,
.range-wrap:focus .bubble {
  padding: 0.1em;
}

.bubble {
  transition: color 100ms ease, transform 100ms ease;
  transform: translateY(-50%) scale(1.3);
}
</style>
