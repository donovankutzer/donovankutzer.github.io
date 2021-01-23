import { Question } from './question.js';

export class QuestionStorage {
    /**
     * @type {string} QUESTIONS_KEY Unique key for the questions.
     */
    static QUESTIONS_KEY = 'questions';

    /**
     * @type {string} COUNTER_KEY Unique key for counter variable.
     */
    static COUNTER_KEY = 'counter';

    constructor(key) {
        // TODO remove un-needed key
        this.key = key;

        /**
         * @type {number} counter to generate unique ID's for each question
         */
        this.counter = localStorage.getItem(QuestionStorage.COUNTER_KEY)
            ? localStorage.getItem(QuestionStorage.COUNTER_KEY)
            : 0;

        /**
         * @type {Question[]} questions Array of current questions.
         */
        this.questions = localStorage.getItem(QuestionStorage.QUESTIONS_KEY)
            ? JSON.parse(localStorage.getItem(QuestionStorage.QUESTIONS_KEY))
            : [];
    }

    /**
     *
     * @returns {Question[]}
     */
    getQuestions() {
        return this.questions.slice();
    }

    /**
     * Adds a question to the storage.
     *
     * @param {Question} newQuestion Question to add.
     */
    saveQuestion(newQuestion) {
        // Check if we already have the question in storage
        let questionIndex = this.questions.findIndex(
            (el) => newQuestion.id === el.id
        );
        if (questionIndex !== -1) {
            this.questions[questionIndex] = newQuestion;
        } else {
            this.questions.push(newQuestion);
        }
        this.setLocalStorage(this.questions);
    }

    /**
     * Deletes a question from storage.
     *
     * @param {number} id Unique ID of the question to delete.
     */
    deleteQuestion(id) {
        this.questions = this.questions.filter((q) => id !== q.id);
        this.setLocalStorage(this.questions);
    }

    resetQuestions() {
        this.questions = [];
        this.setLocalStorage(this.questions);
    }

    setLocalStorage(questions) {
        localStorage.setItem(QuestionStorage.KEY, JSON.stringify(questions));
    }

    getNextID() {
        this.counter++;
        localStorage.setItem(QuestionStorage.COUNTER_KEY, this.counter);
        return this.counter;
    }
}
