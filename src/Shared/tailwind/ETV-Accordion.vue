<template>
    <div class="flex justify-between align-middle items-center text-lg text-primary tracking-wide my-5 cursor-pointer"
         @click="$emit('showSection')">
        <h1 class="font-bold">{{ title }}</h1>
        <font-awesome-icon class="font-light self-center icon" :icon="['fas', 'chevron-down']"
                           :class="{ rotate: isOpen }"/>
    </div>
    <hr class="border-solid border-t-1 border-primary">

    <transition name="slide"
                v-on:before-enter="beforeEnter" v-on:enter="enter"
                v-on:before-leave="beforeLeave" v-on:leave="leave">
        <slot></slot>
    </transition>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        isOpen: {
            type: Boolean,
            required: true
        }
    },
    emits: ['showSection'],
    methods: {
        beforeEnter(el) {
            el.style.height = '0';
        },
        enter(el) {
            el.style.height = el.scrollHeight + 'px';
        },
        beforeLeave(el) {
            el.style.height = el.scrollHeight + 'px';
        },
        leave(el) {
            el.style.height = '0';
        }
    }
}
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
    transition: 300ms ease-out;
    overflow: hidden;
}

.icon {
    transform: rotate(0deg);
    transition-duration: 0.3s;
}

.icon.rotate {
    transform: rotate(180deg);
    transition-duration: 0.3s;
}
</style>
