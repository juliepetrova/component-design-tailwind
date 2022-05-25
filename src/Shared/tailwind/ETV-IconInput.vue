<template>
    <div class="flex items-center w-full my-2">
        <img v-if="option === 'positive'" class="max-h-7 w-auto mr-1" alt="positive"
             src="@/assets/img/emojis/positive.png">
        <img v-else class="max-h-7 w-auto mr-1 opacity-70" alt="negative" src="@/assets/img/emojis/negative.png">
        <div class="relative w-full">
            <input type="text" :name="id" @input="$emit('store', answer, id)"
                   @focus="$emit('focused')" @blur="$emit('blurred')"
                   class="rounded-md appearance-none border border-blue-300 rounded p-3 pr-5
              text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline w-full"
                   :placeholder="questionHint" v-model="answer"/>
            <button v-if="answer" v-on:click="clearInput"
                    class="pointer-events-auto absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none z-40">
                <font-awesome-icon class="text-sm text-gray-300" :icon="['fas', 'times']"/>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        questionHint: {
            type: String,
            required: true
        },
        option: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: false,
            default: null
        }
    },
    methods: {
        clearInput() {
            this.$emit('store', '', this.id);
            this.$emit('remove');
        }
    }
}
</script>
