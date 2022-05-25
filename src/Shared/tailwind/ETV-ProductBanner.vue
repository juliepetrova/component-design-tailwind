<template>
    <div class="rounded-md shadow-md p-3 mx-5 ">
        <div class="flex flex-col">
            <div>
                <h3 class="text-primary-dark font-semibold text-lg leading-5">{{ productTitle }}</h3>
                <h3 class="text-primary-darker text-md leading-5">{{ supplierName }}</h3>
            </div>
            <div class="my-3">
                <img alt="Supplier Logo" class="max-w-sm max-h-14"
                     :src="supplierLogo">
            </div>
        </div>
        <Link v-if="hasSearch" href="/" class="text-primary-darker text-sm underline leading-6"> {{ Lang.get('pages/productCode.search_again') }}</Link>
    </div>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue3'

export default {
    props: {
        productTitle: {
            type: String,
            required: true
        },
        supplierName: {
            type: String,
            required: true
        },
        supplierLogo: {
            type: String,
            required: true
        },
        hasSearch: {
            type: Boolean,
            required: true
        },
    },
    components: {
        Link
    }
}
</script>
