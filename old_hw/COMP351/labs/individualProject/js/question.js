export class Question {

    constructor(id, question, options, answer) {
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
        this.options = options;

        /**
         * @type {number} answerIndex Index of the correct answer.
         */
        this.answer = answer;
    }
}
