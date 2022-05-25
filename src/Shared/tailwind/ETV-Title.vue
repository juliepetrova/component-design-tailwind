<template>
    <h1 class="text-3xl text-primary font-bold whitespace-pre-wrap"> {{ text }} </h1>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>
