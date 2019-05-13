<template>
       <div class="quiz-navigator">
           <div class="timer">
           <h1 >Time</h1>
                <Timer/>
           </div>
           <h1>Questions</h1>
           <div class="question-navigator">
               <b-button
                    v-for="question in quizController.questions"
                    v-bind:key="question.id"
                    v-bind:variant="getTaskVariant(question.id)"
                    v-on:click="quizController.currentQuestionId=question.id"
               >
                {{question.id}}
               </b-button>
        </div>
            <div class="question-pagination">
            <b-button variant="primary" size="sm" v-on:click="quizController.currentQuestionId=getPrevTask()">Prev</b-button>
            <p class="question-number">{{quizController.currentQuestionId}}</p>
            <b-button variant="primary" size="sm" v-on:click="quizController.currentQuestionId=getNextTask()">Next</b-button>
        </div>
       </div>
</template>

<script>
    import Timer from  "./Timer"
    export default {
        name: 'QuizNavigator',
        components: {Timer},
        props:['quizController', 'timer'],
        methods: {
            getTaskVariant: function (quizId) {
                return this.$props.quizController.saved.hasOwnProperty(quizId) ? "success" : "outline-secondary";
            },
            getNextTask: function () {
                return this.$props.quizController.questions.hasOwnProperty(this.$props.quizController.currentQuestionId + 1) ?
                    this.$props.quizController.currentQuestionId + 1 : this.$props.quizController.currentQuestionId
            },
            getPrevTask: function () {
                return this.$props.quizController.questions.hasOwnProperty(this.$props.quizController.currentQuestionId - 1)?
                    this.$props.quizController.currentQuestionId - 1 : this.$props.quizController.currentQuestionId
            }

    }
    }
</script>

<style scoped>
    .quiz-navigator {
        margin: auto;
        padding: auto;
    }
    .quiz-navigator button{
        margin: 0.2rem;
    }

    .question-navigator {
        max-width: 13rem;
    }
    .question-navigator button{
        width: 2.7rem;
    }
    .question-number {
        margin: auto 0;
        font-size: 1.5rem;
    }

    .timer{
        background: rgba(153, 141, 160, 0.1);
        position: relative;
        outline: rgba(153, 141, 160, 0.1) solid 0.15rem;
        border-right: .15rem solid white;
        animation:
                blink-caret 1s step-end infinite;
    }

</style>