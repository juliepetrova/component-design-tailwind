<template>
    <div>
        <img alt="1tot5 Logo" :class="size"
             src="../../assets/img/logo.png">
    </div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            required: false
        }
    }
}
</script>
