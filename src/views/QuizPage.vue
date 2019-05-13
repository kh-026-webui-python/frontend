<template>
    <div class="quiz-page">
        <QuizNavigator :quiz-controller="this.controller"/>
        <QuizTask :quiz-controller="this.controller"/>
        <QuizNavigator :timer="this.controller.timer"/>

    </div>
</template>

<script>

    import QuizTask from '../components/Tests/QuizTask'
    import QuizNavigator from '../components/Tests/QuizNavigator'
    import Timer from '../components/Tests/Timer'
    import {QuizController} from '../utils/QuizController.js'

    export default {
        name: "QuizPage",
        components: {QuizNavigator, QuizTask, Timer},
        data: function () {
            return {
                controller: new QuizController(
                  ' ', {
                        1: {
                            id: 1,
                            name: 'Question 1',
                            description: "Which frameworks aren't in JS?",
                            answers: ['Vue', 'React', 'Django', 'jQuery'],
                            chosenAnswer: null

                        },
                        2: {
                            id: 2,
                            name: 'Question 2',
                            description: "What data type aren't in JS?",
                            answers: ['Char', 'Boolean', 'Number', 'String'],
                            chosenAnswer: null
                        }
                    },
                    1),

            }

        },

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