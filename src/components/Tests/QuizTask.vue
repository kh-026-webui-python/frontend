<template>
    <div class="question-container" v-model="question = quizController.questions[quizController.currentQuestionId]">
        <h4>Question{{question.currentQuestionId}}</h4>
        <p>Choose only one correct answer</p>
        <div class="answers-container" :id="quizController.currentQuestionId">
            <p>{{question.description}}</p>
        <div  align="left"  v-for="answer in quizController.questions[quizController.currentQuestionId].answers">
            <b-form-radio name="answer" :value="answer" v-model="question.chosenAnswer">{{answer}}</b-form-radio>

        </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "QuizTask",
        props: ['quizController'],

    }
</script>

<style scoped>
    .question-container {
        padding: 2rem;
        min-width: 50rem;
        margin: 2rem;
        background-color: white;
        -webkit-box-shadow: 0 0 3rem rgba(142, 81, 199, 0.09);
        box-shadow: 0 0 3rem rgba(142, 81, 199, 0.09);

    }
    .answers-container {
        margin: auto;
        width: 50%;
        color: brown;
        font-size:x-large;
    }

</style>