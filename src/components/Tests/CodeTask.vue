<template>
    <div class="question-container">
        <h3>
            Problem description
        </h3>
        <p>{{testController.questions[testController.currentTaskId].description}}</p>

        <div class="code-container">
            <div class="code-title-bar">
                <h4>Solution</h4>
                <div>
                    <b-dropdown :text=this.cmOptions.theme variant="primary" class="m-md-2" size="sm">
                        <b-dropdown-item v-on:click="cmOptions.theme='base16-dark'">base16-dark</b-dropdown-item>
                        <b-dropdown-item v-on:click="cmOptions.theme='base16-light'">base16-light</b-dropdown-item>
                        <b-dropdown-item v-on:click="cmOptions.theme='duotone-light'">duotone-light</b-dropdown-item>
                        <b-dropdown-item v-on:click="cmOptions.theme='duotone-dark'">duotone-dark</b-dropdown-item>
                    </b-dropdown>
                    <b-dropdown :text=this.cmOptions.mode variant="primary" class="m-2" size="sm">
                        <b-dropdown-item v-on:click="cmOptions.mode='text/x-python'">Python 3</b-dropdown-item>
                        <b-dropdown-item v-on:click="cmOptions.mode='text/x-python'">Python 2</b-dropdown-item>
                        <b-dropdown-item v-on:click="cmOptions.mode='text/javascript'">JavaScript</b-dropdown-item>
                    </b-dropdown>
                </div>

            </div>
            <codemirror ref="myCm"
                        :value="testController.input[testController.currentTaskId]"
                        :options="cmOptions"
                        @ready="onCmReady"
                        @focus="onCmFocus"
                        @input="onCmCodeChange">
            </codemirror>
        </div>
        <div class="container-settings">
            <b-button variant="success" size="lg" v-on:click="save">Save</b-button>
            <b-button size="lg">Skip</b-button>
        </div>
    </div>
</template>

<script>
    import { codemirror } from 'vue-codemirror'
    import 'codemirror/lib/codemirror.css'
    // language js
    import 'codemirror/mode/python/python.js'
    import 'codemirror/mode/javascript/javascript.js'

    // theme css
    import 'codemirror/theme/base16-dark.css'
    import 'codemirror/theme/base16-light.css'
    import 'codemirror/theme/duotone-light.css'
    import 'codemirror/theme/duotone-dark.css'
    import 'codemirror/theme/idea.css'
    import 'codemirror/theme/eclipse.css'
    import 'codemirror/theme/darcula.css'
    import 'codemirror/theme/dracula.css'
    import 'codemirror/theme/colorforth.css'
    export default {
        code: ' ',
        name: "CodeTask",
        components: {
            codemirror
        },
        props:[ 'testController'],
        data () {
            return {
                cmOptions: {
                    // codemirror options
                    tabSize: 4,
                    mode: 'text/x-python',
                    theme: 'duotone-light',
                    lineNumbers: true,
                    line: true,
                    // more codemirror options, 更多 codemirror 的高级配置...
                }
            }
        },
        methods: {
            onCmReady(cm) {
            },
            onCmFocus(cm) {

            },
            onCmCodeChange(newCode) {
                this.$props.testController.input[this.$props.testController.currentTaskId] = newCode;
                this.code =  this.$props.testController.input[this.$props.testController.currentTaskId]
            },
            save() {
                console.log('saved');
                this.$props.testController.saveAnswer(this.code);
                console.log('saved')
            },

        },
        computed: {
            codemirror() {
                return this.$refs.myCm.codemirror
            }
        },
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
    .question-container p {
        max-width: 48rem;
        text-align: left;
        color:  #998DA0;
        font-family: GTEestiPro;
        font-weight: 300;
    }
    .code-container{
        text-align: left;
    }
    .container-settings {
        display: flex;
        justify-content: space-around;
        margin-top: 1rem;
    }
    .code-title-bar{
        display: flex;
        align-items:center;
        justify-content: space-between;
    }

</style>