<template>
    <div class="quiz-page">
        <QuizNavigator :quiz-controller="this.controller"/>
        <QuizTask :quiz-controller="this.controller"/>

    </div>
</template>

<script>

    import QuizTask from '../components/Tests/QuizTask'
    import QuizNavigator from '../components/Tests/QuizNavigator'
    import {QuizController} from '../utils/QuizController.js'
    import {BASE} from "../vue-axios/axios-conf"

    export default {
        name: "QuizPage",
        components: {QuizNavigator, QuizTask},
        data: function () {
            return {
                controller: new QuizController(
                    '', {},
                    1),

            }


        },
        mounted() {
            BASE.get('/api/quiz/JS')
                .then(response => {
                    this.controller.questions = response.data
                })
        }

    }
</script>

<style scoped>
    .quiz-page {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        color: #463853;
        background-color: #FBFBFD;
    }

    h1, h2, h3, h4 {
        font-family: GTEestiPro;
        font-weight: bold;
    }

    h2, h3, h4 {
        margin: 0 1rem;
        text-align: left;
    }

</style>