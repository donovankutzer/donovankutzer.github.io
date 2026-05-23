import { QuestionRetriever } from './retriever.js';

window.addEventListener('DOMContentLoaded', () => {
    const app = new Student();
    app.init();
});

class Student {
    constructor() {
        this.retriever = new QuestionRetriever('questions');
        this.answerKey = [];
    }
    init() {
        this.setupEventListeners();
        this.displayQuestions();
    }

    setupEventListeners() {
        document
            .getElementById('submitAnswers')
            .addEventListener('click', () => this.checkAnswers());
    }

    displayQuestions() {
        let questions = this.retriever.getAllRows();
        let answers = [];
        console.log(questions);
        if (questions.length == 0) {
            this.displayEmptyQuiz();
        } else {
            for (let [key, value] of Object.entries(questions)) {
                this.displayQuestion(value);
                answers.push(value.answer);
            }
        }
        this.answerKey = answers;
        console.log(this.answerKey);
    }

    displayQuestion(question) {
        let questionsDiv = document.getElementById('questions');
        let div = document.createElement('div');
        div.classList = ['container py-2'];
        div.id = question.id;

        let html = `
        <div class="row mb-3">
            <div class="col">
                <h3>Question ${(question.id + 6) / 10}</h3>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <b>${question.question}</b>
            </div>
        </div>
        `;

        for (let i = 0; i < 4; i++) {
            if (!question.options[i]) {
                html += `
                <div class="row mb-3 d-none">
                <div class="row-1 option" id="options-${question.id}">
                <input
                type="radio"
                id="radio-${question.id}-${i}"
                name="answers-${question.id}"
                class="form-check-input"
                />
                </div>
                </div>
                `;
            } else {
                html += `
                <div class="row mb-3">
                    <div class="row-1 option" id="options-${question.id}">
                        <input
                        type="radio"
                        id="radio-${question.id}-${i}"
                        name="answers-${question.id}"
                        class="form-check-input"/>
                        <label>${question.options[i]}</label>
                    </div>
                </div>
                `;
            }
        }

        div.innerHTML = html;

        questionsDiv.appendChild(div);
    }

    checkAnswers() {
        let radios = document.getElementsByTagName('input');
        let answerKey = this.answerKey;
        let submitted = [];
        let correct = 0;

        // Gather user input data, checks if answer correct
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                console.log((i % 4) + 1);
                submitted.push((i % 4) + 1);
                if ((i % 4) + 1 == answerKey[Math.floor(i / 4)])
                    correct++;
            }
        }

        this.printResult(correct, answerKey.length);
        this.highlightResults(submitted, answerKey);
    }

    highlightResults(submitted, questions) {
        let answersText = document.getElementsByClassName('row-1 option');
        // Reset classes to remove previous highlighting
        for (let i = 0; i < answersText.length; i++) {
            answersText[i].className = 'row-1 option';
        }
        for (let i = 0; i < questions.length; i++) {
            if (submitted[i] == questions[i]) {
                answersText[4 * i + submitted[i] - 1].classList.add('bg-success');
            } else {
                if (i < submitted.length)
                    answersText[4 * i + submitted[i] - 1].classList.add(
                        'bg-danger'
                    );
                answersText[4 * i + questions[i] - 1].classList.add(
                    'bg-success'
                );
            }
        }
    }

    printResult(mark, total) {
        let res = document.getElementById('results');
        res.innerHTML = `
            <div class="col">
                Final Grade: ${mark} / ${total}
            </div>
        `;
    }

    displayEmptyQuiz() {
        let questionsDiv = document.getElementById('questions');
        let div = document.createElement('div');
        div.classList = ['container py-2'];
        div.id = 'empty-quiz';

        div.innerHTML = `
            <div class="col text-center">
                <h1> Error: No questions stored in DB</h1>
            </div>
        `;

        questionsDiv.appendChild(div);
    }
}
