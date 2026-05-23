import { QuestionStorage } from './question-storage.js';
import { Question } from './question.js';

window.addEventListener('DOMContentLoaded', () => {
    const app = new Admin();
    app.init();
});

class Admin {
    constructor() {
        this.storage = new QuestionStorage();
    }

    init() {
        this.setupEventListeners();
        this.displayQuestions();
    }

    setupEventListeners() {
        document
            .getElementById('add-question')
            .addEventListener('click', this.onAddQuestion.bind(this));

        document
            .getElementById('reset-questions')
            .addEventListener('click', this.onResetQuestions.bind(this));
    }

    displayQuestions() {
        const questions = this.storage.getQuestions();
        questions.forEach((question) => this.displayQuestion(question));
    }

    /**
     *
     * @param {Question} question
     */
    displayQuestion(question) {
        const div = document.createElement('div');
        div.classList = ['py-2'];
        div.id = question.id;

        div.innerHTML = `
            <div class="row mb-3">
                <div class="col">
                    <h3>Question ${question.id}</h3>
                </div>
            </div>
            <div 
                id="alert-empty-fields-${question.id}"
                class="alert alert-danger"
                role="alert" hidden>
                All fields must be filled out!
            </div>
            <div class="row mb-3">
                <div class="col">
                    <textarea 
                    id="question-${question.id}" 
                    class="form-control">${question.question}</textarea>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <h3>Question ${question.id} Answers</h3>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-1">
                    <input
                        type="radio"
                        name="answers-${question.id}"
                        class="form-check-input"
                        ${question.answerIndex === 0 ? 'checked' : ''}
                    />
                </div>
                <div class="col">
                    <input type="text" 
                    id="option-${question.id}-1"
                    value="${question.answers[0]}" class="form-control" />
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-1">
                    <input
                        type="radio"
                        name="answers-${question.id}"
                        class="form-check-input"
                        ${question.answerIndex === 1 ? 'checked' : ''}
                    />
                </div>
                <div class="col">
                    <input type="text" 
                    id="option-${question.id}-2"
                    value="${question.answers[1]}" class="form-control" />
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-1">
                    <input
                        type="radio"
                        name="answers-${question.id}"
                        class="form-check-input"
                        ${question.answerIndex === 2 ? 'checked' : ''}
                    />
                </div>
                <div class="col">
                    <input type="text"
                    id="option-${question.id}-3"
                    value="${question.answers[2]}" class="form-control" />
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-1">
                    <input
                        type="radio"
                        name="answers-${question.id}"
                        class="form-check-input"
                        ${question.answerIndex === 3 ? 'checked' : ''}
                        
                    />
                </div>
                <div class="col">
                    <input type="text" 
                    id="option-${question.id}-4"
                    value="${question.answers[3]}" class="form-control" />
                </div>
            </div>
            <div class="row">
                <div class="col d-flex justify-content-between">
                    <button
                        type="button"
                        id="save-question-${question.id}"
                        class="btn btn-primary"
                    >
                        Save Question
                    </button>
                    <button
                        type="button"
                        id="delete-question-${question.id}"
                        class="btn btn-danger"
                    >
                        Delete Question
                    </button>
                </div>
            </div>`;
        document.getElementById('admin-questions').appendChild(div);

        document
            .getElementById(`delete-question-${question.id}`)
            .addEventListener(
                'click',
                this.onDeleteQuestion.bind(this, question.id)
            );
        document
            .getElementById(`save-question-${question.id}`)
            .addEventListener(
                'click',
                this.onSaveQuestion.bind(this, question.id)
            );
    }

    onAddQuestion() {
        const newQuestion = this.onSaveQuestion('new');
        if (newQuestion) {
            this.displayQuestion(newQuestion);

            // Clear the fields
            document.getElementById(`question-new`).value = '';
            document.getElementById(`option-new-1`).value = '';
            document.getElementById(`option-new-2`).value = '';
            document.getElementById(`option-new-3`).value = '';
            document.getElementById(`option-new-4`).value = '';
        }
    }

    /**
     *
     * @param {*} id
     */
    onSaveQuestion(id) {
        const question = document.getElementById(`question-${id}`).value;
        const option1 = document.getElementById(`option-${id}-1`).value;
        const option2 = document.getElementById(`option-${id}-2`).value;
        const option3 = document.getElementById(`option-${id}-3`).value;
        const option4 = document.getElementById(`option-${id}-4`).value;
        const radios = [...document.getElementsByName(`answers-${id}`)];
        const answerIndex = radios.findIndex((radio) => radio.checked);
        if (
            !question ||
            !option1 ||
            !option2 ||
            !option3 ||
            !option4 ||
            answerIndex === -1
        ) {
            document.getElementById(`alert-empty-fields-${id}`).hidden = false;
            return;
        }

        // Make sure alert is hidden
        document.getElementById(`alert-empty-fields-${id}`).hidden = true;

        if (id === 'new') {
            id = this.storage.getNextID();
        }

        const fullQuestion = new Question(
            id,
            question,
            [option1, option2, option3, option4],
            answerIndex
        );

        this.storage.saveQuestion(fullQuestion);

        return fullQuestion;
    }

    /**
     *
     * @param {number} id
     */
    onDeleteQuestion(id) {
        this.storage.deleteQuestion(id);
        document.getElementById(id).remove();
    }

    onResetQuestions() {
        this.storage
            .getQuestions()
            .forEach((question) =>
                document.getElementById(question.id).remove()
            );

        this.storage.resetQuestions();
    }
}
