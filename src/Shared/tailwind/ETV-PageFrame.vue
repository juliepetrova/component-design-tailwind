<template>
    <div class="md:bg-primary-light md:py-5 flex flex-col md:items-center" :class="styles" >
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        styles: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>
