export class TestController {
    constructor(time, question, currentTaskId) {
        this.time = time;
        this.questions = question;
        this.currentTaskId = currentTaskId;
        this.input = {};
        this.saved = {};
    }
    saveAnswer(answer){
        this.saved[this.currentTaskId] = {}
        this.saved[this.currentTaskId]['answer'] = answer.toString()

    }



}