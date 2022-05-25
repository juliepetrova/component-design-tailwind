<template>
        <div class="flex-1 align-center items-center align-middle content-center flex pr-1">
            <div class="w-full rounded items-center align-middle align-center flex-1"
                 :class="active ? 'bg-primary': 'bg-gray-200'">
                <div class="bg-green-light text-xs leading-none pt-1 text-center text-grey-darkest rounded"></div>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        active: {
            type: Boolean,
            required: true
        }
    }
}
</script>

