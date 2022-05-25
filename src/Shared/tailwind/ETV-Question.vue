<template>
    <div class="w-full rounded-md p-4 flex flex-col my-4"
         :class="isActive === index ? 'opacity-100': 'opacity-30', question.hasError ? 'red-border' : 'blue-shadow'">
        <div class="flex flex-row align-middle items-center">
            <div class="relative flex flex-row align-middle items-center z-0">
                <img alt="" src="@/assets/img/circle-gradient.png">
                <div class="absolute inset-0 flex justify-center items-center z-10">
                    <span class="text-white font-semibold">{{ question.sequence }}</span>
                </div>
            </div>
            <span class="mx-2 text-primary-dark text-xs font-light">{{ question.questionSubtext }}</span>
        </div>
        <div class="lg:px-4 lg:mx-4">
            <h1 class="text-primary-dark font-bold mb-3 mt-2">{{ question.questionText }}</h1>
            <section class="answerSection text-black flex flex-col" :class="isActive === index ? '' : 'hidden'">
                <component class="flex-grow"
                           :is="questionComponent"
                           :questionHint="question.questionHint"
                           :options="question.options"
                           :answer="question.answer"
                           :question-reference-number="question.questionReferenceNumber"
                           @selected="getAnswer"
                           @focused="$emit('focused')"
                           @blurred="$emit('focused')">
                </component>
                <span v-if="question.questionAdditionalInformation" class="text-primary-dark text-xs font-semibold">
                {{ question.questionAdditionalInformation }}
            </span>
                <div v-if="question.questionDesignType !== 'radio_button' && question.answer"
                     class="flex flex-row items-center mt-4">
                    <font-awesome-icon class="text-primary font-light mr-2" :icon="['fas', 'arrow-down']"/>
                    <button type="button" v-on:click.stop="$emit('scrollToNext')"
                            class="text-primary underline text-sm font-light">
                        <span v-if="question.hasNext">{{ Lang.get('pages/evaluation.next_question') }}</span>
                        <span v-else>{{ Lang.get('pages/evaluation.last_question') }}</span>
                    </button>
                </div>
                <span v-if="question.hasError" class="text-error text-xs font-semibold"> {{
                        Lang.get('pages/evaluation.warning_missing_answer')
                    }}</span>
            </section>
        </div>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    props: {
        question: {
            type: Object,
            required: true
        },
        isActive: {
            type: Number,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        getAnswer(selectedAnswer, scroll = false) {
            this.question.answer = selectedAnswer;
            this.question.hasError = false;
            this.$emit('getRemainingQuestions');
            if (scroll) {
                this.$emit('scrollToNext');
            }
        },
    },
    computed: {
        questionComponent() {
            return defineAsyncComponent(() => import(`./AnswerTypes/${this.question.questionDesignType}.vue`))
        }
    }
}
</script>

<style>
.blue-shadow {
    box-shadow: 1px 1px 6px;
    transition: 0.3s color;
    color: lightblue;
}

.red-border {
    border-width: 1px;
    border-style: solid;
    border-color: indianred;
}
</style>
