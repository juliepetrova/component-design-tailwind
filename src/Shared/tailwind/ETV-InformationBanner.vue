<template>
    <div class="m-5 p-3 rounded-md bg-primary-light">
        <span class="text-sm"> {{ text }} </span>
    </div></template>

<script>
export default {
    props: {
        text: String
    }
}
</script>
