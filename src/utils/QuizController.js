export class QuizController {
    constructor(timer,questions,currentQuestionId) {
        this.timer=timer;
        this.questions=questions;
        this.currentQuestionId=currentQuestionId;
        this.saved = {};
    }


}