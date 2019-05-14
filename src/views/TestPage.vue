<template>
    <div class="test-page">
        <TestNavigator :test-controller="this.controller"/>
        <CodeTask :test-controller="this.controller"/>
    </div>
</template>

<script>
    import TestNavigator from '../components/Tests/TestNavigator'
    import CodeTask from '../components/Tests/CodeTask'
    import {TestController} from '../utils/TestController.js'


    export default {
        name: "TestPage",
        components: { TestNavigator, CodeTask},
        data: function () {
            return {
                controller: new TestController(
                    '00:20:00',
                    {
                        1: {
                            id: 1,
                            name: 'Task 1',
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                "Donec ac arcu vel eros rhoncus scelerisque. Nulla ullamcorper fermentum turpis rhoncus interdum. ",
                            type: "code",
                            language: "python"
                        },
                        2: {
                            id: 2,
                            name: 'Task 2',
                            description: "Pellentesque lobortis gravida tellus, sed tempus neque suscipit quis. " +
                                "Nullam interdum enim sed massa commodo dapibus. Donec eu mi semper, fermentum orci at," +
                                " dapibus orci. Praesent maximus vulputate tortor, vel molestie tortor sollicitudin nec." +
                                " Nullam convallis nisl eget augue finibus varius. In pretium diam eget massa euismod, eu vulputate orci ullamcorper. ",
                            type: "code",
                            language: "python"
                        }
                    },
                    1)
            }
        },
        created: function () {


        }

    }

</script>

<style scoped>
    .test-page {
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