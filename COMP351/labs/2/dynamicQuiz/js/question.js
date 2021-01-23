export class Question {
    constructor(id, question, answers, answerIndex) {
        /**
         * @type {number} id Unique id of the question.
         */
        this.id = id;

       /**
         * @type {string} question The question.
         */
        this.question = question;

        /**
         * @type {string[]} answers Array of answers to the questions.
         */
        this.answers = answers;

        /**
         * @type {number} answerIndex Index of the correct answer.
         */
        this.answerIndex = answerIndex;
    }
}
