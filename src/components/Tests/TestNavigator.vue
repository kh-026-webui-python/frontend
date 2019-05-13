<template>
    <div class="test-navigator">
        <h1>Time</h1>
        <h1 class="timer">{{testController.time}}</h1>
        <h1>Questions</h1>
        <div class="question-navigator">
            <b-button
                    v-for="task in testController.questions"
                    v-bind:key="task.id"
                    v-bind:variant="getTaskVariant(task.id)"
                    v-on:click="testController.currentTaskId=task.id"
            >
                {{task.id}}
            </b-button>
        </div>
        <div class="question-pagination">
            <b-button variant="primary" size="sm" v-on:click="testController.currentTaskId=getPrevTask()">Prev</b-button>
            <p class="question-number">{{testController.currentTaskId}}</p>
            <b-button variant="primary" size="sm" v-on:click="testController.currentTaskId=getNextTask()">Next</b-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TestNavigator",
        props:[ 'testController'],
        methods:{
            getTaskVariant: function (taskId) {
                return this.$props.testController.saved.hasOwnProperty(taskId) ? "success" : "outline-secondary";
            },
            getNextTask: function () {
                return this.$props.testController.questions.hasOwnProperty(this.$props.testController.currentTaskId + 1) ?
                    this.$props.testController.currentTaskId + 1 : this.$props.testController.currentTaskId
            },
            getPrevTask: function () {
                return this.$props.testController.questions.hasOwnProperty(this.$props.testController.currentTaskId - 1)?
                    this.$props.testController.currentTaskId - 1 : this.$props.testController.currentTaskId
            }
        }
    }
</script>

<style scoped>

    .test-navigator {
        margin: auto;
        padding: auto;
    }

    .test-navigator button {
        margin: 0.2rem;
    }
    .question-pagination{
        margin: 2rem 0;
        justify-content: space-between;
        display: flex;
    }
    .question-number {
        margin: auto 0;
        font-size: 1.5rem;
    }


    .question-navigator {
        max-width: 13rem;
    }
    .question-navigator button{
        width: 2.7rem;
    }
    .timer{
        background: rgba(153, 141, 160, 0.1);
        position: relative;
        outline: rgba(153, 141, 160, 0.1) solid 0.15rem;
        border-right: .15rem solid white;
        animation:
                blink-caret 1s step-end infinite;
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: white; }
    }

</style>