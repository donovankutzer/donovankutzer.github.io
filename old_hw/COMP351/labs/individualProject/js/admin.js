import { QuestionRetriever } from './retriever.js';
import { Question } from './question.js';

window.addEventListener('DOMContentLoaded', () => {
    const app = new Admin();
    app.init();
});

class Admin {
    constructor() {
        this.retriever = new QuestionRetriever('questions');
    }

    init() {
        this.setupEventListeners();
        this.displayQuestions();
    }

    setupEventListeners() {
        document
            .getElementById('add-question')
            .addEventListener('click', this.onAddQuestion.bind(this));
    }

    displayQuestions() {
        let questions = this.retriever.getAllRows();
        console.log(questions);
        for (let [key, value] of Object.entries(questions)) {
            this.displayQuestion(value);
        }
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
                        ${question.answer === 1 ? 'checked' : ''}
                    />
                </div>
                <div class="col">
                    <input type="text" 
                    id="option-${question.id}-1"
                    value="${question.options[0]? question.options[0] : ""}" class="form-control" />
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-1">
                    <input
                        type="radio"
                        name="answers-${question.id}"
                        class="form-check-input"
                        ${question.answer === 2 ? 'checked' : ''}
                    />
                </div>
                <div class="col">
                    <input type="text" 
                    id="option-${question.id}-2"
                    value="${question.options[1]? question.options[1] : ""}" class="form-control" />
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-1">
                    <input
                        type="radio"
                        name="answers-${question.id}"
                        class="form-check-input"
                        ${question.answer === 3 ? 'checked' : ''}
                    />
                </div>
                <div class="col">
                    <input type="text"
                    id="option-${question.id}-3"
                    value="${question.options[2]? question.options[2] : ""}" class="form-control" />
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-1">
                    <input
                        type="radio"
                        name="answers-${question.id}"
                        class="form-check-input"
                        ${question.answer === 4 ? 'checked' : ''}
                        
                    />
                </div>
                <div class="col">
                    <input type="text" 
                    id="option-${question.id}-4"
                    value="${question.options[3]? question.options[3] : ""}" class="form-control" />
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
                    <!--
                    <button
                        type="button"
                        id="delete-question-${question.id}"
                        class="btn btn-danger"
                    >
                        Delete Question
                    </button>
                    -->
                </div>
            </div>`;
        document.getElementById('admin-questions').appendChild(div);

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
        const answerIndex = radios.findIndex((radio) => radio.checked) + 1;

        const options = [];
        if (option1 != '') options.push(option1);
        if (option2 != '') options.push(option2);
        if (option3 != '') options.push(option3);
        if (option4 != '') options.push(option4);

        if (
            !question ||
            !option1 ||
            !option2 ||
            answerIndex === -1
        ) {
            document.getElementById(`alert-empty-fields-${id}`).hidden = false;
            return;
        }

        // Make sure alert is hidden
        document.getElementById(`alert-empty-fields-${id}`).hidden = true;

        const fullQuestion = new Question(
            id,
            question,
            options,
            answerIndex
        );

        if (id == 'new') {
            this.retriever.insertNewQuestion(fullQuestion);
        }

        else {
            this.retriever.updateQuestion(fullQuestion);
        }

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
